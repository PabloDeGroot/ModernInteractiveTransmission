#![deny(clippy::all)]

use std::{
  fs::File,
  future::Future,
  io::BufReader,
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
use notify::Result;
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
  media::{io::h264_reader::H264Reader, Sample},
  peer_connection::{
    self,
    configuration::RTCConfiguration,
    peer_connection_state::RTCPeerConnectionState,
    sdp::{sdp_type::RTCSdpType, session_description::RTCSessionDescription},
    signaling_state::{self, RTCSignalingState},
    RTCPeerConnection,
  },
  rtp_transceiver::rtp_codec::RTCRtpCodecCapability,
  sdp::description,
  track::track_local::{track_local_static_sample::TrackLocalStaticSample, TrackLocal},
};
use windows::{
  Foundation::{IMemoryBuffer, MemoryBuffer},
  Storage::Streams::{
    Buffer, DataReader, DataWriter, IBuffer, IRandomAccessStream, InMemoryRandomAccessStream,
    RandomAccessStream, RandomAccessStreamOverStream,
  },
};
use windows_capture::{
  capture::GraphicsCaptureApiHandler,
  encoder::{AudioSettingsBuilder, ContainerSettingsBuilder, VideoEncoder, VideoSettingsBuilder},
  monitor::Monitor,
  settings::{ColorFormat, CursorCaptureSettings, DrawBorderSettings, Settings},
};
#[macro_use]
extern crate napi_derive;

struct CaptureSettings {
  pub stream: Arc<IRandomAccessStream>,
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

    let encoder = VideoEncoder::new_from_stream(
      VideoSettingsBuilder::new(1920, 1080),
      AudioSettingsBuilder::default().disabled(true),
      ContainerSettingsBuilder::default(),
      Arc::into_inner(ctx.flags.stream).unwrap(),
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

#[napi(js_name = "WebRTC")]
pub struct WebRtcClass {
  peer_connection: Option<Arc<RTCPeerConnection>>,
  send_callback: Option<ThreadsafeFunction<String>>,
  config: Configuration,
  //connection_callback: Option<ThreadsafeFunction<ConnectionClass>>,

  //signaling: Arc<Signaling>,
}

#[napi]
impl WebRtcClass {
  //#[napi(factory)]
  pub async fn create(conf: Configuration) -> napi::Result<Self> {
    let web = WebRtcClass {
      peer_connection: None,
      send_callback: None,
      config: conf,
    };

    Ok(web)
  }
  fn capture_screen(track: Arc<TrackLocalStaticSample>, notify: Arc<tokio::sync::Notify>) {
    let stream = Arc::new(
      InMemoryRandomAccessStream::new()
        .unwrap()
        .CloneStream()
        .unwrap(),
    );

    let capsettings = CaptureSettings { stream: stream };
    let weak = Arc::downgrade(&stream);
    let monitor = Monitor::primary().unwrap();

    let settings = Settings::new(
      monitor,
      CursorCaptureSettings::Default,
      DrawBorderSettings::Default,
      ColorFormat::Bgra8,
      capsettings,
    );

    Capture::start_free_threaded(settings).unwrap();
    
    let upgr = weak.upgrade().unwrap();

    let datareader  = DataReader::CreateDataReader(upgr.as_ref().GetInputStreamAt(0).unwrap()).unwrap();
    //let datareader = DataReader::CreateDataReader(stream.as_ref()).unwrap();
    
    //let notify_video2 = Arc::clone(&notify);

    tokio::spawn(async move {
      println!("Waiting for connection");
      notify.notified().await;
      println!("Connected");

      let mut ticker = tokio::time::interval(Duration::from_millis(33));
      loop {
        let bytes_size = datareader.UnconsumedBufferLength().unwrap();
        if bytes_size == 0 {
          continue;
        }
        println!("Bytes size: {:?}", bytes_size);
        let mut bytes_vec: Vec<u8> = vec![0; bytes_size as usize];
        let chunks: Vec<&mut [u8]> = bytes_vec.chunks_mut(1024).collect();
        for chunk in chunks {
          datareader.ReadBytes(chunk).unwrap();
          let chunk = chunk.to_vec();

          let sample = Sample {
            data: chunk.into(),
            duration: Duration::from_secs(1),
            ..Default::default()
          };
          track.write_sample(&sample).await.unwrap();
          let _ = ticker.tick().await;
        }
      }
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
              println!("Rust: on_negotiation_needed {:?}", offer);
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

    let notify_tx = Arc::new(tokio::sync::Notify::new());
    let notify_video = notify_tx.clone();
    //let notify_video2 = Arc::clone(&notify_video.clone());
    //tokio::spawn(async move {
    Self::capture_screen(video_track, notify_video);

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
      println!("Rust: on_ice_candidate {:?}", c);
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
          println!("Rust: on_ice_candidate {:?}", c);
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
    println!("{:?}", description);
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
    println!("Rust: send_message {:?}", message);
    let peer_connection = self.peer_connection.as_ref().unwrap().clone();
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
