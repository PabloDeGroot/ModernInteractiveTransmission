#![deny(clippy::all)]

use std::{
  fs::File,
  future::Future,
  io::BufReader,
  string,
  sync::{Arc, Mutex},
  time::Duration,
};

use napi::{
  bindgen_prelude::{spawn, FromNapiValue, ToNapiValue},
  sys,
  threadsafe_function::{ThreadSafeCallContext, ThreadsafeFunction, ThreadsafeFunctionCallMode},
  CallContext, Env, JsFunction, JsNumber, JsObject, JsString, JsUndefined, NapiValue, Property,
};
use notify::Result;
use webrtc::{
  api::{
    interceptor_registry::register_default_interceptors,
    media_engine::{MediaEngine, MIME_TYPE_H264},
    APIBuilder,
  },
  dtls::Error,
  ice_transport::{
    ice_candidate::{RTCIceCandidate, RTCIceCandidateInit},
    ice_server::RTCIceServer,
  },
  interceptor::registry::Registry,
  media::{io::h264_reader::H264Reader, Sample},
  peer_connection::{
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
#[macro_use]
extern crate napi_derive;

// webrtc class
// pass config in constructor
// pass signaling send callback
// pass signaling receive function

// signaling
// send_signal(callback)
// on_signal(message)

// has onConnection that returns a connection object

// connection class
// has onMessage that returns a Json
// has onTrack that returns a track object
// has onClose that returns void

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
  peer_connection: Arc<RTCPeerConnection>,
  send_callback: Option<ThreadsafeFunction<String>>,
  //connection_callback: Option<ThreadsafeFunction<ConnectionClass>>,

  //signaling: Arc<Signaling>,
}

#[napi]
impl WebRtcClass {
  pub async fn create(conf: Configuration) -> napi::Result<Self> {
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
    rtc_config.ice_servers = conf
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

    let web = WebRtcClass {
      peer_connection,
      send_callback: None,
    };

    Ok(web)
  }
  pub async fn init(&self) {
    // await offer from signaling server
    // let offer = await signaling.receive();

    let video_file = Some("testbin/test.mp4");
    let notify_video = Arc::new(tokio::sync::Notify::new());

    let (done_tx, mut done_rx) = tokio::sync::mpsc::channel::<()>(1);

    // add tracks
    if let Some(video_file) = video_file {
      // Create a video track
      let video_track = Arc::new(TrackLocalStaticSample::new(
        RTCRtpCodecCapability {
          mime_type: MIME_TYPE_H264.to_owned(),
          ..Default::default()
        },
        "video".to_owned(),
        "webrtc-rs".to_owned(),
      ));

      // Add this newly created track to the PeerConnection
      let rtp_sender = self
        .peer_connection
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

      let video_file_name = video_file.to_owned();
      tokio::spawn(async move {
        // Open a H264 file and start reading using our H264Reader
        let file = File::open(&video_file_name)?;
        let reader = BufReader::new(file);
        let buffersize = 2048;
        let mut h264 = H264Reader::new(reader, buffersize);

        // Wait for connection established
        let _ = notify_video.notified().await;

        println!("play video from disk file {}", video_file_name);

        // It is important to use a time.Ticker instead of time.Sleep because
        // * avoids accumulating skew, just calling time.Sleep didn't compensate for the time spent parsing the data
        // * works around latency issues with Sleep
        let mut ticker = tokio::time::interval(Duration::from_millis(33));
        loop {
          let nal = match h264.next_nal() {
            Ok(nal) => nal,
            Err(err) => {
              println!("All video frames parsed and sent: {}", err);
              break;
            }
          };

          /*println!(
              "PictureOrderCount={}, ForbiddenZeroBit={}, RefIdc={}, UnitType={}, data={}",
              nal.picture_order_count,
              nal.forbidden_zero_bit,
              nal.ref_idc,
              nal.unit_type,
              nal.data.len()
          );*/

          video_track
            .write_sample(&Sample {
              data: nal.data.freeze(),
              duration: Duration::from_secs(1),
              ..Default::default()
            })
            .await
            .unwrap();

          let _ = ticker.tick().await;
        }

        let _ = done_tx.try_send(());

        Result::<()>::Ok(())
      });
    }

    // set remote description
    // await peer_connection.set_remote_description(offer);
    // let answer = await peer_connection.create_answer(None);

    // set local description
    // await peer_connection.set_local_description(answer);

    // send answer to signaling server
    // await signaling.send(answer);

    self
      .peer_connection
      .on_peer_connection_state_change(Box::new(move |s: RTCPeerConnectionState| {
        println!("Peer Connection State has changed: {}", s);
        Box::pin(async {})
      }));

    let send_callback = self.send_callback.clone();
    let pc = Arc::downgrade(&self.peer_connection);
    self
      .peer_connection
      .on_negotiation_needed(Box::new(move || {
        let send_callback = send_callback.clone();
        let pc2 = pc.clone();
        Box::pin(async move {
          if let Some(pc) = pc2.upgrade() {
            let offer = pc.create_offer(None).await.unwrap();

            pc.set_local_description(offer.clone()).await.unwrap();
            let local_description = pc.local_description().await.unwrap();
            let offer = serde_json::to_string(&local_description).unwrap();
            let _ = send_callback
              .unwrap()
              .call(Ok(offer), ThreadsafeFunctionCallMode::Blocking);
          }
        })
      }));

    self.setup_ice_candidates().await;
  }

  async fn setup_ice_candidates(&self) {
    //let pc = Arc::downgrade(&peer_connection);
    let send_callback = self.send_callback.clone();
    self
      .peer_connection
      .on_ice_candidate(Box::new(move |c: Option<RTCIceCandidate>| {
        //println!("on_ice_candidate {:?}", c);

        //let pc2 = pc.clone();
        let send_callback2 = send_callback.clone();
        //let pending_candidates3 = Arc::clone(&pending_candidates2);
        //let addr3 = addr2.clone();
        Box::pin(async move {
          if let Some(c) = c {
            let c = serde_json::to_string(&c).unwrap();
            send_callback2
              .unwrap()
              .call(Ok(c), ThreadsafeFunctionCallMode::NonBlocking);

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
      let answer = serde_json::to_string(&local_description).unwrap();
      send_callback.call(Ok(answer), ThreadsafeFunctionCallMode::NonBlocking);
    }
  }
  async fn add_ice_candidate(peer_connection: Arc<RTCPeerConnection>, candidate: String) {
    let c: RTCIceCandidateInit = serde_json::from_str(&candidate).unwrap();
    peer_connection.add_ice_candidate(c).await.unwrap();
  }
  #[napi]
  pub fn send_message(&self, message: String) {
    let peer_connection = self.peer_connection.clone();
    let send_callback = self.send_callback.clone();
    tokio::spawn(async move {
      if let Ok(description) = serde_json::from_str::<RTCSessionDescription>(&message) {
        Self::on_description(peer_connection, send_callback.unwrap(), description).await;
      } else {
        Self::add_ice_candidate(peer_connection, message).await;
      }
    });
  }

  #[napi]
  pub  fn on_message(&mut self, callback: JsFunction) {

      let tsfn = callback
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
  pub async fn start(&self) {
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
