#![deny(clippy::all)]

use std::{future::Future, sync::Arc};

use napi::{
  bindgen_prelude::{spawn, FromNapiValue, ToNapiValue},
  sys,
  threadsafe_function::{ThreadSafeCallContext, ThreadsafeFunction, ThreadsafeFunctionCallMode},
  CallContext, Env, JsFunction, JsNumber, JsObject, JsString, JsUndefined, NapiValue, Property,
};
use webrtc::{
  api::{
    interceptor_registry::register_default_interceptors, media_engine::MediaEngine, APIBuilder,
  },
  dtls::Error,
  ice_transport::ice_server::RTCIceServer,
  interceptor::registry::Registry,
  peer_connection::{configuration::RTCConfiguration, RTCPeerConnection},
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
struct IceServer {
  urls: Vec<String>,
  username: String,
  credential: String,
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

#[napi(constructor)]
struct Configuration {
  pub ice_servers: Vec<IceServer>,
}

impl FromNapiValue for Configuration {
  unsafe fn from_napi_value(env: sys::napi_env, napi_val: sys::napi_value) -> napi::Result<Self> {
    let obj = JsObject::from_napi_value(env, napi_val)?;
    let ice_servers = obj.get_named_property("ice_servers")?;
    Ok(Configuration {
      ice_servers: ice_servers,
    })
  }
}

//#[napi]
#[js_function(1)]
pub fn create(ctx: CallContext) -> napi::Result<JsObject> {
  let conf = ctx.get::<Configuration>(0)?;

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

  let mut rtcConfig = RTCConfiguration {
    ..Default::default()
  };
  rtcConfig.ice_servers = conf
    .ice_servers
    .iter()
    .map(|x| RTCIceServer {
      urls: x.urls.clone(),
      username: x.username.clone(),
      credential: x.credential.clone(),
      ..Default::default()
    })
    .collect();
  let mut this: JsObject = ctx.this_unchecked();
  ctx.env.execute_tokio_future(
    async move {
      let futurePeerConnection = api.new_peer_connection(rtcConfig);
      futurePeerConnection
        .await
        .map_err(|e| napi::Error::from_reason(e.to_string()))
    },
    |env, peer_connection| {
      env
        .wrap(
          &mut this,
          WebRtcClass {
            rtc_peer_connection: peer_connection,
            connection_callback: None,
            send_callback: None,
            making_offer: false,
            caller: false,
          },
        )
        .unwrap();
      Ok(this)
    },
  )
}
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
}
#[napi]
struct WebRtcClass {
  rtc_peer_connection: RTCPeerConnection,
  send_callback: Option<ThreadsafeFunction<String>>,
  connection_callback: Option<ThreadsafeFunction<ConnectionClass>>,
  making_offer: bool,
  caller: bool,
}

#[napi]
impl WebRtcClass {
  pub fn init(&self) {
    let send_callback = self.send_callback.clone();
    self
      .rtc_peer_connection
      .on_negotiation_needed(Box::new(move || {
        let send_callback = send_callback.clone();
        Box::pin(async move {
          let _ = send_callback.unwrap().call(
            Ok(String::from("negotiationneeded")),
            ThreadsafeFunctionCallMode::Blocking,
          );
        })
      }));
  }

  #[napi]
  pub fn on_signal(&self, message: String) {
    println!("{}", message);
  }

  #[napi]
  pub fn send_signal(&mut self, env: Env, callback: JsFunction) {
    let tsfn = env
      .create_threadsafe_function(&callback, 0, |ctx: ThreadSafeCallContext<String>| {
        ctx
          .env
          .create_string(&ctx.value)
          .map(|js_value| vec![js_value])
      })
      .unwrap();
    self.send_callback = Some(tsfn);
  }

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
}
//https://github.com/napi-rs/napi-rs/issues/933
struct ConnectionClass {
  target: String,
}

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
