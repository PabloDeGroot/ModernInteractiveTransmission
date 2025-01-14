use crate::{
  capture::{AcquireFrameError, ScreenDuplicator},
  device,
  tex_reader::{self, TextureReader},
  texture::Texture,
};
use openh264::{
  formats::{BgraSliceU8, RGB8Source, YUVBuffer, YUVSource},
  Error,
};
use std::sync::Arc;
use tokio::sync::{
  mpsc::Receiver,
  mpsc::Sender,
  mpsc::{unbounded_channel, UnboundedReceiver, UnboundedSender},
};
use webrtc::{
  ice_transport::ice_connection_state::RTCIceConnectionState,
  interceptor::report::sender,
  rtcp::{
    self,
    payload_feedbacks::{
      full_intra_request::FullIntraRequest, picture_loss_indication::PictureLossIndication,
    },
  },
  rtp::header::Header,
  rtp_transceiver::RTCRtpTransceiver,
  track::track_local::track_local_static_rtp::TrackLocalStaticRTP,
};
use webrtc_helper::{
  codecs::H264SampleSender, interceptor::twcc::TwccBandwidthEstimate, peer::IceConnectionState,
};
use windows::Win32::{
  Graphics::Direct3D11::{
    ID3D11Device, ID3D11DeviceContext, ID3D11Texture2D, D3D11_MAPPED_SUBRESOURCE, D3D11_MAP_READ,
    D3D11_MAP_READ_WRITE, D3D11_TEXTURE2D_DESC,
  },
  System::Performance::QueryPerformanceFrequency,
};

const RTP_MTU: usize = 1200;
const RTCP_MAX_MTU: usize = 1500;
const MIN_BITRATE_BPS: u32 = 64_000;
const MAX_BITRATE_BPS: u32 = 100_000_000;

#[derive(Debug, PartialEq, Eq, Clone)]
enum RtcpEvent {
  Pli,
  Fir,
}
struct Encoder {
  sender: Sender<Vec<u8>>,
  device: ID3D11Device,
  context: ID3D11DeviceContext,
}

impl Encoder {
  pub fn new(
    sender: Sender<Vec<u8>>,
    device: ID3D11Device,
    context: ID3D11DeviceContext,
  ) -> Encoder {
    Encoder {
      sender,
      device,
      context,
    }
  }

  pub unsafe fn encode_frame(&self, texture: ID3D11Texture2D, timestamp: u64) -> Result<(), Error> {
    let desc = {
      let mut desc = D3D11_TEXTURE2D_DESC::default();
      texture.GetDesc(&mut desc);
      desc
    };

    let tex = Texture::new(texture, timestamp);
    let mut tex_reader = TextureReader::new(self.device.clone(), self.context.clone());
    let mut bytes: Vec<u8> = Vec::new();
    tex_reader.get_data(&mut bytes, &tex).unwrap();

    let mut encoder = openh264::encoder::Encoder::new().unwrap();
    let brga = BgraSliceU8::new(&bytes, (desc.Width as usize, desc.Height as usize));
    let buf = YUVBuffer::from_rgb_source(brga);
    let stream = encoder.encode(&buf);
    let stream = stream.unwrap();
    self.sender.try_send(stream.to_vec()).unwrap();
    //(*context).as_ref().unwrap().Unmap(&texture, 0);

    Ok(())
  }
}
struct H264EncoderInput {
  screen_duplicator: ScreenDuplicator,
  input: Encoder,
  bandwidth_estimate: TwccBandwidthEstimate,
  frame_rate_num: u32,
  frame_rate_den: u32,
  rtcp_rx: UnboundedReceiver<RtcpEvent>,
}

impl H264EncoderInput {
  fn new(
    screen_duplicator: ScreenDuplicator,
    sender: Sender<Vec<u8>>,
    bandwidth_estimate: TwccBandwidthEstimate,
    rtcp_rx: UnboundedReceiver<RtcpEvent>,
    device: ID3D11Device,
    context: ID3D11DeviceContext,
  ) -> H264EncoderInput {
    let (frame_rate_num, frame_rate_den) = {
      let display_desc = screen_duplicator.desc();
      (
        display_desc.ModeDesc.RefreshRate.Numerator,
        display_desc.ModeDesc.RefreshRate.Numerator,
      )
    };
    let input = Encoder::new(sender, device, context);
    H264EncoderInput {
      screen_duplicator,
      input,
      bandwidth_estimate,
      frame_rate_num,
      frame_rate_den,
      rtcp_rx,
    }
  }

  fn update_bitrate(&mut self) {
    let bitrate = self.bandwidth_estimate.borrow().bits_per_sec() as u32;
    let bitrate = bitrate.clamp(MIN_BITRATE_BPS, MAX_BITRATE_BPS);
    // Divide first to prevent overflow
    let vbv_buffer_size = bitrate / self.frame_rate_num * self.frame_rate_den;
    /*if let Err(e) = self
        .input
        .update_average_bitrate(bitrate, Some(vbv_buffer_size))
    {
        log::error!("Error trying to update bitrate: {e}");
    }*/
  }

  fn encode(&mut self) -> Result<(), Error> {
    match self.screen_duplicator.acquire_frame(4294967295u32) {
      Ok(acquired_image) => {
        //let timestamp = acquired_image.as_raw_ref.LastPresentTime as u64;
        // Check if image was updated
        unsafe {
          //if timestamp != 0 {
          self
            .input
            .encode_frame(
              acquired_image.as_raw_ref().clone(),
              acquired_image.timestamp,
            )
            .unwrap();
        }
        //}
        Ok(())
      }
      Err(e) => match e {
        AcquireFrameError::Retry => Ok(()),
        AcquireFrameError::Unknown => panic!("{:?}", e),
      },
    }
  }
}

struct H264EncoderOutput {
  output: Receiver<Vec<u8>>,
  rtp_track: Arc<TrackLocalStaticRTP>,
  payloader: H264SampleSender,
  header: Header,
  clock_rate: u32,
  timer_frequency: u64,
  timestamp: u32,
  prev_timestamp_source: Option<u64>,
}

impl H264EncoderOutput {
  fn new(
    output: Receiver<Vec<u8>>,
    rtp_track: Arc<TrackLocalStaticRTP>,
    payload_type: u8,
    ssrc: u32,
    clock_rate: u32,
  ) -> H264EncoderOutput {
    let payloader = H264SampleSender::default();
    let timer_frequency = timer_frequency();
    let header = Header {
      version: 2,
      padding: false,
      extension: false,
      marker: false,
      payload_type,
      sequence_number: 0,
      ssrc,
      ..Default::default()
    };

    H264EncoderOutput {
      output,
      rtp_track,
      payloader,
      header,
      clock_rate,
      timer_frequency,
      timestamp: rand::random::<u32>(),
      prev_timestamp_source: None,
    }
  }

  fn write_packets(&mut self, handle: &tokio::runtime::Handle) -> Result<(), webrtc::Error> {
    /*let encode_result = self.output.wait_for_output(|lock| {
        let slice = unsafe {
            std::slice::from_raw_parts(
                lock.bitstreamBufferPtr as *const u8,
                lock.bitstreamSizeInBytes as usize,
            )
        };

        // This conversion is chosen even though it causes the timestamp to be prone to drift
        // because only accurate frame intervals are important.
        if let Some(prev) = self.prev_timestamp_source {
            let delta_source = lock.outputTimeStamp.wrapping_sub(prev);
            let delta =
                delta_source.wrapping_mul(self.clock_rate as u64) / self.timer_frequency;
            // Accumulates small errors coming from `delta`. Can cause the timestamp to drift
            // from the source's timestamp.
            self.timestamp = self.timestamp.wrapping_add(delta as u32);
        }
        self.prev_timestamp_source = Some(lock.outputTimeStamp);

        self.header.timestamp = self.timestamp;

        // Send the encoded frames
        let write_result = handle.block_on(async {
            self.payloader
                .send_payload(RTP_MTU - 12, &mut self.header, slice, &*self.rtp_track)
                .await
        });

        if let Err(e) = write_result {
            log::error!("Error writing RTP: {e}");
        }
    });

    encode_result*/
    handle.block_on(async {
      let slice = self.output.recv().await.unwrap();
      self
        .payloader
        .send_payload(RTP_MTU - 12, &mut self.header, &slice, &*self.rtp_track)
        .await
    })
  }
}

async fn rtcp_handler(
  transceiver: Arc<RTCRtpTransceiver>,
  mut ice_connection_state: IceConnectionState,
  rtcp_tx: UnboundedSender<RtcpEvent>,
  ssrc: u32,
) {
  println!("Starting rtcp_handler");

  if let Some(sender) = transceiver.sender().await {
    let mut buf = vec![0u8; RTCP_MAX_MTU];

    loop {
      tokio::select! {
          _ = ice_connection_state.changed() => {
              if *ice_connection_state.borrow() != RTCIceConnectionState::Connected {
                  break;
              }
          }
          read_result = sender.read(&mut buf) => {
              if let Ok((n, _)) = read_result {
                  let mut raw_data = &buf[..n];
                  if let Ok(packets) = rtcp::packet::unmarshal(&mut raw_data) {
                      for packet in packets {
                          let packet = packet.as_any();
                          if let Some(pli) = packet.downcast_ref::<PictureLossIndication>() {
                              if pli.media_ssrc == ssrc {
                                  if let Err(e) = rtcp_tx.send(RtcpEvent::Pli) {
                                      println!("Error while sending RtcpEvent: {e}");
                                  }
                              }
                          } else if let Some(fir) = packet.downcast_ref::<FullIntraRequest>() {
                              if fir.media_ssrc == ssrc {
                                  if let Err(e) = rtcp_tx.send(RtcpEvent::Fir) {
                                      println!("Error while sending RtcpEvent: {e}");
                                  }
                              }
                          }
                      }
                  }
              } else {
                  break;
              }
          }
      }
    }
  }
  let _ = transceiver.stop().await;
  println!("RTCP handler exited");
}

pub async fn start_encoder(
  screen_duplicator: ScreenDuplicator,
  output: Receiver<Vec<u8>>,
  sender: Sender<Vec<u8>>,
  rtp_track: Arc<TrackLocalStaticRTP>,
  transceiver: Arc<RTCRtpTransceiver>,
  mut ice_connection_state: IceConnectionState,
  bandwidth_estimate: TwccBandwidthEstimate,
  payload_type: u8,
  ssrc: u32,
  clock_rate: u32,
  device: ID3D11Device,
  context: ID3D11DeviceContext,
) {
  println!("Starting encoder");
  while *ice_connection_state.borrow() != RTCIceConnectionState::Connected {
    if let Err(_) = ice_connection_state.changed().await {
      println!("Peer exited before ICE became connected");
      return;
    }
  }
  // tokio::time::sleep(std::time::Duration::from_secs(1)).await;

  let (rtcp_tx, rtcp_rx) = unbounded_channel();

  tokio::spawn(rtcp_handler(
    transceiver,
    ice_connection_state.clone(),
    rtcp_tx,
    ssrc,
  ));

  let mut input = H264EncoderInput::new(
    screen_duplicator,
    sender,
    bandwidth_estimate,
    rtcp_rx,
    device,
    context,
  );
  let mut output = H264EncoderOutput::new(output, rtp_track, payload_type, ssrc, clock_rate);

  let ice_1 = ice_connection_state;
  let ice_2 = ice_1.clone();

  tokio::spawn(tokio::task::unconstrained(async move {
    println!("Starting input thread");

    // TODO: Frame interval should be configurable and/or signaled in SDP
    let mut interval = tokio::time::interval(std::time::Duration::from_millis(1000 / 30));
    while *ice_1.borrow() == RTCIceConnectionState::Connected {
      // TODO: *Average* frame interval is correct but the min/max is off by a lot
      tokio::select! {
          _ = interval.tick() => {
              if let Err(e) = input.encode() {
                  println!("Error encoding: {e}");
              }
          }
          msg = input.rtcp_rx.recv() => {
              match msg {
                  Some(event) => match event {
                      RtcpEvent::Pli => {
                          // FIXME: Properly handle SSRC
                          //input.input.force_idr_on_next();
                          println!("PLI received");
                      }
                      RtcpEvent::Fir => {
                          // FIXME: Properly handle SSRC and seq nums
                          //input.input.force_idr_on_next();
                          println!("FIR received");
                      }
                  }
                  None => break,
              }
          }
          _ = input.bandwidth_estimate.changed() => {
              println!("Bandwidth estimate changed");
              input.update_bitrate();
          }
      }
    }
    println!("Input thread exited");
  }));

  let handle = tokio::runtime::Handle::current();
  std::thread::spawn(move || {
    while *ice_2.borrow() == RTCIceConnectionState::Connected {
      if let Err(e) = output.write_packets(&handle) {
        println!("Error while waiting for output: {e}");
        break;
      }
    }
    println!("Output thread exited");
  });
}

fn timer_frequency() -> u64 {
  let mut timer_frequency = 0;
  unsafe {
    QueryPerformanceFrequency(&mut timer_frequency);
  }
  timer_frequency as u64
}
