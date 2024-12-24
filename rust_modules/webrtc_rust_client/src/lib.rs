#![deny(clippy::all)]

use std::{
  alloc::System,
  borrow::Borrow,
  cell::RefCell,
  fs::{self, File, OpenOptions},
  future::Future,
  io::{BufReader, ErrorKind, Read, Write},
  ops::Deref,
  rc::{Rc, Weak},
  string,
  sync::{
    mpsc::{Receiver, Sender},
    Arc, Mutex,
  },
  thread,
  time::{Duration, Instant, SystemTime},
};

use napi::{
  bindgen_prelude::{spawn, FromNapiValue, ToNapiValue},
  sys,
  threadsafe_function::{
    ErrorStrategy, ThreadSafeCallContext, ThreadsafeFunction, ThreadsafeFunctionCallMode,
  },
  CallContext, Env, JsFunction, JsNumber, JsObject, JsString, JsUndefined, NapiValue, Property,
};
use notify::Result;
use openh264::{
  encoder::{EncodedBitStream, Encoder},
  formats::{BgraSliceU8, RgbSliceU8, RgbaSliceU8, YUVBuffer, YUVSource},
};
use rav1e::{
  color::ColorDescription, config::SpeedSettings, prelude::v_frame::frame, Config, Context,
  EncoderConfig, EncoderStatus,
};
use serde::Serialize;
use webrtc::{
  api::{
    interceptor_registry::register_default_interceptors,
    media_engine::{MediaEngine, MIME_TYPE_AV1, MIME_TYPE_H264},
    APIBuilder,
  },
  dtls::Error,
  ice_transport::{
    ice_candidate::{RTCIceCandidate, RTCIceCandidateInit},
    ice_connection_state::RTCIceConnectionState,
    ice_server::RTCIceServer,
  },
  interceptor::registry::Registry,
  media::{
    io::{
      h264_reader::{self, H264Reader},
      ivf_reader::IVFReader,
    },
    video, Sample,
  },
  peer_connection::{
    self,
    configuration::RTCConfiguration,
    peer_connection_state::RTCPeerConnectionState,
    sdp::{sdp_type::RTCSdpType, session_description::RTCSessionDescription},
    signaling_state::{self, RTCSignalingState},
    RTCPeerConnection,
  },
  rtp::{
    codecs::{
      h264::{self, H264Payloader},
      h265::H265Packet,
    },
    packetizer::Payloader,
  },
  rtp_transceiver::{rtp_codec::RTCRtpCodecCapability, RTCRtpEncodingParameters},
  sdp::{description, util::Codec},
  track::track_local::{track_local_static_sample::TrackLocalStaticSample, TrackLocal},
};
use windows::{
  Foundation::{IMemoryBuffer, MemoryBuffer},
  Storage::Streams::{
    Buffer, DataReader, DataWriter, IBuffer, IInputStream, IRandomAccessStream,
    InMemoryRandomAccessStream, RandomAccessStream, RandomAccessStreamOverStream,
  },
  Win32::Devices::Display,
};
use windows_capture::{
  capture::GraphicsCaptureApiHandler,
  encoder::{AudioSettingsBuilder, ContainerSettingsBuilder, VideoEncoder, VideoSettingsBuilder},
  monitor::Monitor,
  settings::{ColorFormat, CursorCaptureSettings, DrawBorderSettings, Settings},
};
use yuvutils_rs::{
  bgra_to_yuv420, rgba_to_yuv420, YuvPlanarImage, YuvPlanarImageMut, YuvPlanarImageWithAlpha,
};
#[macro_use]
extern crate napi_derive;

struct CaptureSettings {
  //pub track: Arc<TrackLocalStaticSample>,
  pub height: u32,
  pub width: u32,
  pub sender: Sender<Vec<u8>>,
}
unsafe impl Send for CaptureSettings {}

struct Capture {
  // The video encoder that will be used to encode the frames.
  //encoder: Option<VideoEncoder>,
  start: Instant,
  //track: Arc<TrackLocalStaticSample>,
  h265capturer: H264Capturer,
  //frame: Arc<Vec<u8>>,
  //context: Arc<Context<u8>>,
  frame_count: u32,
  // To count the number of frames captured since last reset
  frame_count_since_reset: u64,
  // To store the time when frame count was last reset
  last_reset: Instant,
  last_frame_time: i64,
  update: Sender<Vec<u8>>,
  //stream: IRandomAccessStream,
}
struct Av1Encoder {
  pub context: Context<u8>,
  width: usize,
  height: usize,
  reciever: Receiver<Vec<u8>>,
  track: Arc<TrackLocalStaticSample>,
}
impl Av1Encoder {
  fn new(
    track: Arc<TrackLocalStaticSample>,
    reciever: Receiver<Vec<u8>>,
    width: usize,
    height: usize,
  ) -> Self {
    let encoder_config = EncoderConfig {
      low_latency: true,
      width: width,
      height: height,
      speed_settings: SpeedSettings::from_preset(10),

      ..Default::default()
    };
    let cfg = Config::new().with_encoder_config(encoder_config);
    let ctx: rav1e::Context<u8> = cfg.new_context().unwrap();
    Av1Encoder {
      context: ctx,
      width: width,
      height: height,
      track: track,
      reciever: reciever,
    }
  }
  async fn start_encoding(&mut self) {
    println!("Rust: start_encoding");

    //send header

    self
      .track
      .write_sample(&Sample {
        data: self.context.container_sequence_header().into(),
        ..Default::default()
      })
      .await
      .unwrap();

    loop {
      let packet = self.context.receive_packet();
      //println!("Rust: start_encoding {:?}", packet);
      match packet {
        Ok(packet) => {
          self
            .track
            .write_sample(&Sample {
              data: packet.data.into(),
              ..Default::default()
            })
            .await
            .unwrap();
        }
        Err(EncoderStatus::Encoded) => {
          // A frame was encoded without emitting a packet. This is
          // normal, just proceed as usual.
        }
        Err(EncoderStatus::LimitReached) => {
          // All frames have been encoded. Time to break out of the
          // loop.
          break;
        }
        Err(EncoderStatus::NeedMoreData) => {
          let data_res = self.reciever.try_recv();
          if data_res.is_err() {
            continue;
          }
          let data = data_res.unwrap();

          println!("Rust: start_encoding {:?}", data.len());
          if data.is_empty() {
            continue;
          }
          let width = self.width;
          let height = self.height;
          let mut a_plane = Vec::with_capacity(width * height);
          let mut y_plane = Vec::with_capacity(width * height);
          let mut u_plane = Vec::with_capacity(width * height);
          let mut v_plane = Vec::with_capacity(width * height);

          for i in 0..height {
            for j in 0..width {
              let index = i * width + j;
              let r = data[index * 4];
              let g = data[index * 4 + 1];
              let b = data[index * 4 + 2];
              let a = data[index * 4 + 3];
              y_plane.push((0.299 * r as f32 + 0.587 * g as f32 + 0.114 * b as f32) as u8);
              u_plane.push((-0.169 * r as f32 - 0.331 * g as f32 + 0.5 * b as f32 + 128.0) as u8);
              v_plane.push((0.5 * r as f32 - 0.419 * g as f32 - 0.081 * b as f32 + 128.0) as u8);
              a_plane.push(a);
            }
          }
          let planes = vec![y_plane, u_plane, v_plane, a_plane];

          let mut frame = self.context.new_frame();

          //let data2 = data[0..self.width * self.height * 3].to_vec();
          for (plane, data) in frame.planes.iter_mut().zip(planes) {
            plane.copy_from_raw_u8(&data, plane.cfg.width, 1);
          }
          self.context.send_frame(frame).unwrap();

          //ctx.send_frame(frames.next().map(Arc::new))?;
        }
        Err(EncoderStatus::EnoughData) => {
          // Since we aren't trying to push frames after flushing,
          // this should never happen in this example.
          unreachable!();
        }
        Err(EncoderStatus::NotReady) => {
          // We're not doing two-pass encoding, so this can never
          // occur.
          unreachable!();
        }
        Err(EncoderStatus::Failure) => {
          //println!("Rust: start_encoding {:?}", "Failure");
          //return Err(EncoderStatus::Failure);
        }
      }
    }
  }
}
impl GraphicsCaptureApiHandler for Capture {
  type Flags = CaptureSettings;

  type Error = Box<dyn std::error::Error + Send + Sync>;

  fn new(
    ctx: windows_capture::capture::Context<Self::Flags>,
  ) -> std::result::Result<Self, Self::Error> {
    let heigth = ctx.flags.height;
    let width = ctx.flags.width;
    let update = ctx.flags.sender;
    //let input_stream = InMemoryRandomAccessStream::new().unwrap();
    //let random = input_stream.CloneStream().unwrap();
    //let monitor = Monitor::primary().unwrap();
    //let track = ctx.flags.track;
    //let video_settings = VideoSettingsBuilder::new(width, heigth);
    //video_settings = video_settings.sub_type(windows_capture::encoder::VideoSettingsSubType::H264);
    /*let encoder = VideoEncoder::new_from_stream(
      video_settings,
      AudioSettingsBuilder::default().disabled(true),
      ContainerSettingsBuilder::default(),
      ctx.flags.stream,
    ); */
    let h265capturer = H264Capturer::new(heigth as usize, width as usize);

    Ok(Capture {
      //encoder: Some(encoder),
      start: Instant::now(),
      //track: track,
      h265capturer: h265capturer,
      //frame: frame,
      //track: track,
      update: update,
      frame_count: 0,
      frame_count_since_reset: 0,
      last_reset: Instant::now(),
      last_frame_time: 0,
      //stream: ctx.flags.stream,
    })
  }

  fn on_frame_arrived(
    &mut self,
    frame: &mut windows_capture::frame::Frame,
    _capture_control: windows_capture::graphics_capture_api::InternalCaptureControl,
  ) -> std::result::Result<(), Self::Error> {
    //self.start = Instant::now();
    self.frame_count += 1;
    /*
    if self.frame_count % 4 == 0 {
      return Ok(());
    }*/

    let frame_data = frame
      .buffer()
      .unwrap()
      .as_raw_buffer()
      //.unwrap()
      .to_vec();
    self.update.send(frame_data).unwrap();

    self.frame_count_since_reset += 1;

    if self.last_frame_time == 0 {
      self.last_frame_time = frame.timespan().Duration;
    } else {
      let elapsed = frame.timespan().Duration - self.last_frame_time;
      self.last_frame_time = frame.timespan().Duration;
      //println!("Rust: on_frame_arrived {:?}", elapsed as f64 / 10000000.0);
    }

    let elapsed_since_reset = self.last_reset.elapsed();
    let fps = self.frame_count_since_reset as f64 / elapsed_since_reset.as_secs_f64();
    /*  print!(
          "\rRecording for: {:.2} seconds | FPS: {:.2}",
          self.start.elapsed().as_secs_f64(),
          fps
        );
    */

    //thread::sleep(Duration::from_millis(16));

    if elapsed_since_reset >= Duration::from_secs(1) {
      // Reset frame count and last_reset time
      self.frame_count_since_reset = 0;
      self.last_reset = Instant::now();
    }

    //let encoder = self.encoder.as_mut().unwrap();

    //encoder.send_frame(frame).unwrap();
    Ok(())
  }
}

#[derive(Serialize, serde::Deserialize)]
pub struct DecsWrapper {
  pub description: RTCSessionDescription,
}
#[derive(Serialize, serde::Deserialize)]
pub struct IceWrapper {
  pub candidate: RTCIceCandidateInit,
}

#[napi]
pub struct IceServer {
  pub urls: Vec<String>,
  pub username: String,
  pub credential: String,
}
impl FromNapiValue for IceServer {
  unsafe fn from_napi_value(env: sys::napi_env, napi_val: sys::napi_value) -> napi::Result<Self> {
    let obj = JsObject::from_napi_value(env, napi_val)?;
    let urls = obj.get_named_property("urls")?;
    let username = obj.get_named_property("username")?;
    let credential = obj.get_named_property("credential")?;
    Ok(IceServer {
      urls: urls,
      username: username,
      credential: credential,
    })
  }
}
impl Clone for IceServer {
  fn clone(&self) -> Self {
    IceServer {
      urls: self.urls.clone(),
      username: self.username.clone(),
      credential: self.credential.clone(),
    }
  }
}

#[napi]
pub struct Configuration {
  pub ice_servers: Vec<IceServer>,
}

impl FromNapiValue for Configuration {
  unsafe fn from_napi_value(env: sys::napi_env, napi_val: sys::napi_value) -> napi::Result<Self> {
    let obj = JsObject::from_napi_value(env, napi_val)?;
    let ice_servers = obj.get_named_property("iceServers")?;
    Ok(Configuration {
      ice_servers: ice_servers,
    })
  }
}
/*
#[js_function(1)]
fn send_message(ctx: CallContext) -> napi::Result<JsUndefined> {
  let callback: JsFunction = ctx.get(0)?;
  let tsfn =
    ctx
      .env
      .create_threadsafe_function(&callback, 0, |ctx: ThreadSafeCallContext<u32>| {
        ctx
          .env
          .create_uint32(ctx.value)
          .map(|js_value| vec![js_value])
      })?;

  std::thread::spawn(move || {
    tsfn.call(
      Ok(1),
      napi::threadsafe_function::ThreadsafeFunctionCallMode::NonBlocking,
    );
  });

  ctx.env.get_undefined()
}*/
struct YuvWrapper<'a> {
  yuv: YuvPlanarImage<'a, u8>,
}
impl YUVSource for YuvWrapper<'_> {
  fn dimensions(&self) -> (usize, usize) {
    (self.yuv.width as usize, self.yuv.height as usize)
  }

  fn strides(&self) -> (usize, usize, usize) {
    (
      self.yuv.y_stride as usize,
      self.yuv.u_stride as usize,
      self.yuv.v_stride as usize,
    )
  }

  fn y(&self) -> &[u8] {
    self.yuv.y_plane
  }

  fn u(&self) -> &[u8] {
    self.yuv.u_plane
  }

  fn v(&self) -> &[u8] {
    self.yuv.v_plane
  }

  fn dimensions_i32(&self) -> (i32, i32) {
    let (w, h) = self.dimensions();
    (w as i32, h as i32)
  }

  fn strides_i32(&self) -> (i32, i32, i32) {
    let (y, u, v) = self.strides();
    (y as i32, u as i32, v as i32)
  }

  fn estimate_rgb_u8_size(&self) -> usize {
    let (w, h) = self.dimensions();
    w * h * 3
  }

  fn estimate_rgba_u8_size(&self) -> usize {
    let (w, h) = self.dimensions();
    w * h * 4
  }
}
struct H264Capturer {
  width: usize,
  height: usize,
  count: u32,
  //sent_header: bool,
}
impl H264Capturer {
  pub fn new(height: usize, width: usize) -> Self {
    //let d = scrap::Display::primary().unwrap();

    //let c = scrap::Capturer::new(d).unwrap();

    H264Capturer {
      count: 0,
      width: width,
      height: height,
      //sent_header: false,
    }
  }

  fn encode_bitstream<'a>(&self, frame: &[u8], enc: &'a mut Encoder) -> EncodedBitStream<'a> {
    let mut yuv = YuvPlanarImageMut::alloc(
      self.width as u32,
      self.height as u32,
      yuvutils_rs::YuvChromaSubsampling::Yuv420,
    );
    //let arr = frame.as_slice();
    let rgba_stride = self.width * 4;
    let range = yuvutils_rs::YuvRange::Limited;
    let matrix = yuvutils_rs::YuvStandardMatrix::Bt2020;
    bgra_to_yuv420(&mut yuv, frame, rgba_stride as u32, range, matrix).unwrap();

    let yuv_wrapper = YuvWrapper {
      yuv: yuv.to_fixed(),
    };

    //trunk alpha channel
    //let mut frame = frame.to_vec();
    //frame.truncate(self.width * self.height * 4);

    //let frame2 = RgbaSliceU8::new(frame, (self.width, self.height));

    //let rgbu8 = RgbSliceU8::new(frame2.as_slice(), (self.width, self.height));
    //let yuv = YUVBuffer::from_rgb8_source(rgbu8);

    enc.encode(&yuv_wrapper).unwrap()
  }
  /*fn get_frame(&mut self) -> Option<Vec<u8>> {
    //let d = scrap::Display::primary().unwrap();
    //let mut c = scrap::Capturer::new(d).unwrap();
    let c = &mut self.capturer;

    let frame = c.frame();
    if frame.is_ok() {
      //println!("Success");
      return Some(frame.unwrap().as_ref().to_vec());
    }
    if let Err(e) = frame {
      if e.kind() != ErrorKind::WouldBlock {
        println!("Error: {:?}", e);
      }
    }

    return None;
  } */
  fn get_nals<'a>(&mut self, frame: &[u8], nals: &mut Vec<Vec<u8>>, enc: &mut Encoder) {
    let bit = self.encode_bitstream(frame, enc);
    let layer_count = bit.num_layers();
    self.count += 1;

    //println!("Rust: get_nals, layers: {:?}", layer_count);
    for y in 0..layer_count {
      let layer = Arc::new(bit.layer(y).unwrap());
      let nal_count = layer.nal_count();

      println!("Rust: get_nals, nals: {:?}", nal_count);
      let mut nals_vec = Vec::new();
      for i in 0..nal_count {
        nals_vec.push(layer.nal_unit(i).unwrap());
      }
      for nal in nals_vec {
        nals.push(nal.to_vec());
      }
    }
  }
}
/*
impl Read for H264Capturer {
  fn read(&mut self, buf: &mut [u8]) -> std::io::Result<usize> {
    let frame = self.get_frame();
    if frame.is_none() {
      std::thread::sleep(Duration::from_millis(16));
      return Ok(0);
    }
    let data = self.encode_data(frame.unwrap());
    self.count += 1;
    //println!("Rust: read {:?}", self.count);
    let len = buf.len();
    let len2 = data.len();
    if len2 < len {
      buf[..len2].copy_from_slice(&data);
      //self.count += 1;
      return Ok(len2);
    } else {
      buf.copy_from_slice(&data[..len]);
      //self.count += 1;
      return Ok(len);
    }

    //return Ok(0);
    //todo!()
  }
}*/
unsafe impl Send for H264Capturer {}
unsafe impl Sync for H264Capturer {}

#[napi(js_name = "WebRTC")]
pub struct WebRtcClass {
  peer_connection: Option<Arc<RTCPeerConnection>>,
  send_callback: Option<ThreadsafeFunction<String>>,
  config: Configuration,
  //capturer: Arc<scrap::Capturer>,
  //connection_callback: Option<ThreadsafeFunction<ConnectionClass>>,

  //signaling: Arc<Signaling>,
}

struct StreamWrapper {
  stream: IInputStream,
}
unsafe impl Send for StreamWrapper {}
impl Read for StreamWrapper {
  fn read(&mut self, buf: &mut [u8]) -> std::io::Result<usize> {
    let datareader = DataReader::CreateDataReader(&self.stream).unwrap();
    let len = buf.len();
    let load = datareader.LoadAsync(len as u32).unwrap();
    loop {
      let status = load.Status().unwrap();
      if status == windows::Foundation::AsyncStatus::Completed {
        break;
      }
    }
    datareader.ReadBytes(buf).unwrap();
    //display in hex
    println!("{:x?}", buf);

    //res.unwrap();
    Ok(buf.len())
  }
}

unsafe impl Send for WebRtcClass {}
unsafe impl Sync for WebRtcClass {}
#[napi]
impl WebRtcClass {
  #[napi(factory)]
  pub async fn create(conf: Configuration) -> napi::Result<Self> {
    let web = WebRtcClass {
      peer_connection: None,
      send_callback: None,
      config: conf,
      //capturer: Arc::new(scrap::Capturer::new(scrap::Display::primary().unwrap()).unwrap()),
    };

    Ok(web)
  }

  async fn capture_screen(
    &mut self,
    track: Arc<TrackLocalStaticSample>,
    notify: Arc<tokio::sync::Notify>,
  ) {
    //let mut c = scrap::Capturer::new(scrap::Display::primary().unwrap()).unwrap();
    //let mut ticker = tokio::time::interval(Duration::from_secs(1) / 60);
    //notify.notified().await;
    //let mut cap = H264Capturer::new();
    let primary_monitor = Monitor::primary().expect("There is no primary monitor");
    let height = primary_monitor.height().unwrap();
    let width = primary_monitor.width().unwrap();
    let (tx, rx) = std::sync::mpsc::channel::<Vec<u8>>();
    let mut av1 = Av1Encoder::new(track, rx, width as usize, height as usize);
    notify.notified().await;

    tokio::spawn(async move {
      //let frame = c.frame
      println!("Rust: capture_screen");
      let capture_settings = CaptureSettings {
        height: height,
        width: width,
        sender: tx,
      };
      let settings = Settings::new(
        // Item to capture
        primary_monitor,
        // Capture cursor settings
        CursorCaptureSettings::Default,
        // Draw border settings
        DrawBorderSettings::Default,
        // The desired color format for the captured frame.
        ColorFormat::Rgba8,
        capture_settings, // Additional flags for the capture settings that will be passed to user defined `new` function.
      );
      Capture::start(settings).unwrap();
    });
    tokio::spawn(async move {
      av1.start_encoding().await;
    });
  }

  pub async fn init(&mut self) {
    //let conf = ctx.get::<Configuration>(0)?;

    let mut m = MediaEngine::default();

    m.register_default_codecs().unwrap();

    // Create a InterceptorRegistry. This is the user configurable RTP/RTCP Pipeline.
    // This provides NACKs, RTCP Reports and other features. If you use `webrtc.NewPeerConnection`
    // this is enabled by default. If you are manually managing You MUST create a InterceptorRegistry
    // for each PeerConnection.
    let mut registry = Registry::new();

    // Use the default set of Interceptors
    registry = register_default_interceptors(registry, &mut m).unwrap();
    let api = APIBuilder::new()
      .with_media_engine(m)
      .with_interceptor_registry(registry)
      .build();

    let mut rtc_config = RTCConfiguration {
      ..Default::default()
    };
    rtc_config.ice_servers = self
      .config
      .ice_servers
      .iter()
      .map(|x| RTCIceServer {
        urls: x.urls.clone(),
        username: x.username.clone(),
        credential: x.credential.clone(),
        ..Default::default()
      })
      .collect();

    // Create a new RTCPeerConnection
    let peer_connection = Arc::new(api.new_peer_connection(rtc_config).await.unwrap());
    self.peer_connection = Some(peer_connection);

    println!("Rust: init");
    // await offer from signaling server
    // let offer = await signaling.receive();

    let send_callback = self.send_callback.clone();
    let pc = Arc::downgrade(&self.peer_connection.as_ref().unwrap());
    self
      .peer_connection
      .as_ref()
      .unwrap()
      .on_negotiation_needed(Box::new(move || {
        println!("Rust: Negotiation needed");

        Box::pin({
          let send_callback = send_callback.clone();
          let pc = pc.clone();
          async move {
            if let Some(pc) = pc.upgrade() {
              let offer = pc.create_offer(None).await.unwrap();

              pc.set_local_description(offer.clone()).await.unwrap();
              let local_description = pc.local_description().await.unwrap();
              let wrapped = DecsWrapper {
                description: local_description,
              };
              let offer = serde_json::to_string(&wrapped).unwrap();
              //println!("Rust: on_negotiation_needed {:?}", offer);
              let _ = send_callback
                .unwrap()
                .call(Ok(offer), ThreadsafeFunctionCallMode::Blocking);
            }
          }
        })
      }));

    // add video track
    let video_track = Arc::new(TrackLocalStaticSample::new(
      RTCRtpCodecCapability {
        mime_type: MIME_TYPE_AV1.to_owned(),
        ..Default::default()
      },
      "video".to_owned(),
      "webrtc-rs".to_owned(),
    ));
    let notify_tx = Arc::new(tokio::sync::Notify::new());
    let notify_video = notify_tx.clone();

    let rtp_sender = self
      .peer_connection
      .as_ref()
      .unwrap()
      .add_track(Arc::clone(&video_track) as Arc<dyn TrackLocal + Send + Sync>)
      .await
      .unwrap();

    // Read incoming RTCP packets
    // Before these packets are returned they are processed by interceptors. For things
    // like NACK this needs to be called.
    tokio::spawn(async move {
      let mut rtcp_buf = vec![0u8; 1500];
      while let Ok((_, _)) = rtp_sender.read(&mut rtcp_buf).await {}
      Result::<()>::Ok(())
    });

    //let notify_video2 = Arc::clone(&notify_video.clone());
    //tokio::spawn(async move {

    println!("Rust: init 2");

    self
      .peer_connection
      .as_ref()
      .unwrap()
      .on_peer_connection_state_change(Box::new(move |s: RTCPeerConnectionState| {
        println!("Peer Connection State has changed: {}", s);
        Box::pin(async {})
      }));

    self
      .peer_connection
      .as_ref()
      .unwrap()
      .on_ice_connection_state_change(Box::new(move |connection_state: RTCIceConnectionState| {
        println!("Connection State has changed {}", connection_state);
        if connection_state == RTCIceConnectionState::Connected {
          notify_tx.notify_waiters();
        }
        Box::pin(async {})
      }));

    self.setup_ice_candidates().await;
    println!("Rust: init 3");
    Self::capture_screen(self, video_track.clone(), notify_video).await;

    //});
  }

  async fn setup_ice_candidates(&self) {
    let peer_connection = self.peer_connection.as_ref().unwrap().clone();
    //let pc = Arc::downgrade(&peer_connection);
    let send_callback = self.send_callback.clone();
    peer_connection.on_ice_candidate(Box::new(move |c: Option<RTCIceCandidate>| {
      //println!("Rust: on_ice_candidate {:?}", c);
      //println!("on_ice_candidate {:?}", c);

      //let pc2 = pc.clone();
      let send_callback2 = send_callback.clone();
      //let pending_candidates3 = Arc::clone(&pending_candidates2);
      //let addr3 = addr2.clone();
      Box::pin(async move {
        if let Some(c) = c {
          let wrapped = IceWrapper {
            candidate: c.to_json().unwrap(),
          };
          let c = serde_json::to_string(&wrapped).unwrap();
          //println!("Rust: on_ice_candidate {:?}", c);
          send_callback2
            .unwrap()
            .call(Ok(c), ThreadsafeFunctionCallMode::Blocking);

          //if let Some(pc) = pc2.upgrade() {

          //let desc = pc.remote_description().await;

          //}
        }
      })
    }))
  }
  pub async fn on_description(
    peer_connection: Arc<RTCPeerConnection>,
    send_callback: ThreadsafeFunction<String>,
    description: RTCSessionDescription,
  ) {
    //println!("{:?}", description);
    let desc_type = description.sdp_type;
    peer_connection
      .set_remote_description(description)
      .await
      .unwrap();
    if desc_type == RTCSdpType::Offer {
      let answer = peer_connection.create_answer(None).await.unwrap();
      peer_connection.set_local_description(answer).await.unwrap();
      let local_description = peer_connection.local_description().await.unwrap();
      let wrapped = DecsWrapper {
        description: local_description,
      };
      let answer = serde_json::to_string(&wrapped).unwrap();
      send_callback.call(Ok(answer), ThreadsafeFunctionCallMode::NonBlocking);
    }
  }
  async fn add_ice_candidate(
    peer_connection: Arc<RTCPeerConnection>,
    candidate: RTCIceCandidateInit,
  ) {
    //let c: RTCIceCandidateInit = serde_json::from_str(&candidate).unwrap();
    peer_connection.add_ice_candidate(candidate).await.unwrap();
  }
  #[napi]
  pub fn send_message(&self, message: String) {
    //println!("Rust: send_message {:?}", message);
    let peer_connection_wrap = self.peer_connection.as_ref();
    if peer_connection_wrap.is_none() {
      return;
    }
    let peer_connection = peer_connection_wrap.unwrap().clone();
    let send_callback = self.send_callback.clone();
    tokio::spawn(async move {
      if let Ok(description) = serde_json::from_str::<DecsWrapper>(&message) {
        Self::on_description(
          peer_connection,
          send_callback.unwrap(),
          description.description,
        )
        .await;
      } else if let Ok(message) = serde_json::from_str::<IceWrapper>(&message) {
        Self::add_ice_candidate(peer_connection, message.candidate).await;
      }
    });
  }

  #[napi(ts_args_type = "callback: (err:null|Error, result: string) => void")]
  pub fn on_message(&mut self, callback: JsFunction) {
    let tsfn: ThreadsafeFunction<String, ErrorStrategy::CalleeHandled> = callback
      .create_threadsafe_function(0, |ctx: ThreadSafeCallContext<String>| {
        ctx
          .env
          .create_string(&ctx.value)
          .map(|js_value| vec![js_value])
      })
      .unwrap();
    self.send_callback = Some(tsfn);
    //self.init().await;
  }
  #[napi]
  pub async unsafe fn start(&mut self) {
    self.init().await;
  }
} /*
    #[napi]
    pub fn on_connection(&mut self, env: Env, callback: JsFunction) {
      let tsfn = env
        .create_threadsafe_function(
          &callback,
          0,
          |ctx: ThreadSafeCallContext<ConnectionClass>| {
            ctx.env.create_object().map(|js_value| vec![js_value])
          },
        )
        .unwrap();
      self.connection_callback = Some(tsfn);
    }
  } */
//https://github.com/napi-rs/napi-rs/issues/933

/*
#[module_exports]
pub fn init(mut exports: JsObject, env: Env) -> napi::Result<()> {
  let test_class = env.define_class(
    "TestClass",
    webrtc_class_constructor,
    &[
      Property::new("onMessage")?.with_method(on_message),
      Property::new("sendSignal")?.with_method(send_signal),
      //Property::new( "addNativeCount")?.with_method(add_native_count),
    ],
  )?;
  exports.set_named_property("TestClass", test_class)?;

  Ok(())
} */

/*
async fn main() -> Result<(), webrtc::Error> {
  let mut m = MediaEngine::default();

  m.register_default_codecs()?;

  // Create a InterceptorRegistry. This is the user configurable RTP/RTCP Pipeline.
  // This provides NACKs, RTCP Reports and other features. If you use `webrtc.NewPeerConnection`
  // this is enabled by default. If you are manually managing You MUST create a InterceptorRegistry
  // for each PeerConnection.
  let mut registry = Registry::new();

  // Use the default set of Interceptors
  registry = register_default_interceptors(registry, &mut m)?;
  let api = APIBuilder::new()
    .with_media_engine(m)
    .with_interceptor_registry(registry)
    .build();

  let config = RTCConfiguration {
    ice_servers: vec![RTCIceServer {
      urls: vec!["stun:stun.l.google.com:19302".to_owned()],
      ..Default::default()
    }],
    ..Default::default()
  };

  // Create a new RTCPeerConnection
  let peer_connection = Arc::new(api.new_peer_connection(config).await?);

  Result::Ok(())
}
*/
