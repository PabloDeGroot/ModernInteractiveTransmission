#![deny(clippy::all)]

use std::{
  borrow::Borrow,
  fs::{self, File, OpenOptions},
  future::Future,
  io::{BufReader, Read, Write,ErrorKind},
  ops::Deref,
  rc::{Rc, Weak},
  string,
  sync::{Arc, Mutex},
  time::{Duration, Instant},
};

use napi::{
  bindgen_prelude::{spawn, FromNapiValue, ToNapiValue},
  sys,
  threadsafe_function::{
    ErrorStrategy, ThreadSafeCallContext, ThreadsafeFunction, ThreadsafeFunctionCallMode,
  },
  CallContext, Env, JsFunction, JsNumber, JsObject, JsString, JsUndefined, NapiValue, Property,
};
use notify::{ Result};
use scrap::Frame;
use serde::Serialize;
use webrtc::{
  api::{
    interceptor_registry::register_default_interceptors,
    media_engine::{MediaEngine, MIME_TYPE_H264},
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
    Sample,
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
  rtp_transceiver::rtp_codec::RTCRtpCodecCapability,
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
use x264::{Colorspace, Image};
#[macro_use]
extern crate napi_derive;

struct CaptureSettings {
  pub stream: IRandomAccessStream,
}
unsafe impl Send for CaptureSettings {}

struct Capture {
  // The video encoder that will be used to encode the frames.
  encoder: Option<VideoEncoder>,
  start: Instant,
  //stream: IRandomAccessStream,
}
impl GraphicsCaptureApiHandler for Capture {
  type Flags = CaptureSettings;

  type Error = Box<dyn std::error::Error + Send + Sync>;

  fn new(
    ctx: windows_capture::capture::Context<Self::Flags>,
  ) -> std::result::Result<Self, Self::Error> {
    //let input_stream = InMemoryRandomAccessStream::new().unwrap();
    //let random = input_stream.CloneStream().unwrap();
    let monitor = Monitor::primary().unwrap();
    let mut video_settings: VideoSettingsBuilder =
      VideoSettingsBuilder::new(monitor.width().unwrap(), monitor.height().unwrap());
    //video_settings = video_settings.sub_type(windows_capture::encoder::VideoSettingsSubType::H264);
    let encoder = VideoEncoder::new_from_stream(
      video_settings,
      AudioSettingsBuilder::default().disabled(true),
      ContainerSettingsBuilder::default(),
      ctx.flags.stream,
    );

    Ok(Capture {
      encoder: Some(encoder.unwrap()),
      start: Instant::now(),
      //stream: random,
    })
  }

  fn on_frame_arrived(
    &mut self,
    frame: &mut windows_capture::frame::Frame,
    _capture_control: windows_capture::graphics_capture_api::InternalCaptureControl,
  ) -> std::result::Result<(), Self::Error> {
    self.start = Instant::now();
    let encoder = self.encoder.as_mut().unwrap();

    encoder.send_frame(frame).unwrap();
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

struct H264Capturer {
  capturer: scrap::Capturer,
  encoder : x264::Encoder,
  width: usize,
  height: usize,
  count: u32,
  //sent_header: bool,
}
impl H264Capturer {
  pub fn new() -> Self {
    let d = scrap::Display::primary().unwrap();
    let width = d.width();
    let height = d.height();
    let c = scrap::Capturer::new(d).unwrap();
    let enc = x264::Encoder::builder()
      .fps(60, 1)
      .build(Colorspace::BGRA, width as i32, height as i32)
      .unwrap();
    H264Capturer {
      capturer: c,
      count: 0,
      width: width,
      height: height,
      encoder: enc,
      //sent_header: false,
    }
  }
  fn encode_data(&self, frame: Vec<u8>, i: u32) -> Vec<u8> {
    let height = self.height as i32;
    let width = self.width as i32;
    let mut enc = x264::Encoder::builder()
      .fps(60, 1)
      .build(Colorspace::BGRA, width, height)
      .unwrap();
    let mut res: Vec<u8> = Vec::new();
    if i == 0 {
      res = enc.headers().unwrap().entirety().to_vec();
    }
    println!("Rust: encode_data frame {:?}", frame.len());
    let img = Image::bgra(width, height, frame.as_ref());
    let (data, _) = enc.encode((i * 60).into(), img).unwrap();
    res.extend(data.entirety().to_vec());
    println!("Rust: encode_data result {:?}", res.len());
    return res;
  }
  fn get_frame(&mut self) -> Option<Vec<u8>> {
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
  }
}

impl Read for H264Capturer {
  fn read(&mut self, buf: &mut [u8]) -> std::io::Result<usize> {
    let frame = self.get_frame();
    if frame.is_none() {
      std::thread::sleep(Duration::from_millis(16));
      return Ok(0);
    }
    let data = self.encode_data(frame.unwrap(), self.count);
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
}
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
    let mut cap = Arc::new(H264Capturer::new());
    println!("Rust: capture_screen");
    let mut file = OpenOptions::new()
      .write(true)
      .append(true)
      .create(true)
      .open("test.h264")
      .unwrap();
    println!("Rust: capture_screen file {:?}", file);
    loop {
      let buf = &mut [0u8; 4096];
      //println!("Rust: capture_screen 2");
      let modified = Arc::get_mut(&mut cap).unwrap().read(buf).unwrap();
      if modified == 0 {
        continue;
      }
      println!("Rust: capture_screen 2 {:?}", modified);

      let buf2 = &mut buf[..modified];
      //println!("Rust: capture_screen 3");
      //append to file
      file.write_all(buf2).unwrap();
    }
    /*let mut h264_reader = h264_reader::H264Reader::new(cap,4096);

    //let mut count = 0;

    //count -= 1;
    loop {
     let nal = h264_reader.next_nal().unwrap();

      track
        .write_sample(&Sample {
          data: nal.data.into(),
          duration: Duration::from_secs(1) / 60,
          ..Default::default()
        })
        .await
        .unwrap();

      //count += 1;
    }*/
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
        mime_type: MIME_TYPE_H264.to_owned(),
        ..Default::default()
      },
      "video".to_owned(),
      "webrtc-rs".to_owned(),
    ));
    let notify_tx = Arc::new(tokio::sync::Notify::new());
    let notify_video = notify_tx.clone();
    Self::capture_screen(self, video_track.clone(), notify_video).await;

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
