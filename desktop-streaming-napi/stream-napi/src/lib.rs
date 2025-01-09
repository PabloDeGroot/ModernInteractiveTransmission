use std::sync::Arc;

use napi::{
  bindgen_prelude::FromNapiValue,
  sys,
  threadsafe_function::{ErrorStrategy, ThreadSafeCallContext, ThreadsafeFunction},
  JsFunction, JsObject,
};
use nvidia::NvidiaEncoderBuilder;
use tokio::sync::Mutex;
use webrtc::ice_transport::ice_server::RTCIceServer;
use webrtc_helper::{peer::Role, Message, WebRtcBuilder};

mod capture;
mod device;
mod nvidia;
mod signaler;


#[macro_use]
extern crate napi_derive;
/*
#[napi]
pub fn sum(a: i32, b: i32) -> i32 {
  a + b
} */

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

#[napi(js_name = "WebRTC")]
pub struct WebRtc {
  send_callback: Option<ThreadsafeFunction<String>>,
  config: Configuration,

  tx: Mutex<tokio::sync::mpsc::Sender<Message>>,
  rx: Arc<Mutex<tokio::sync::mpsc::Receiver<Message>>>,
}
#[napi]
impl WebRtc {
  #[napi(factory)]
  pub async fn create(conf: Configuration) -> napi::Result<Self> {
    let (tx, rx) = tokio::sync::mpsc::channel(100);
    let web = WebRtc {
      tx: Mutex::new(tx),
      rx: Arc::new(Mutex::new(rx)),
      config: conf,

      send_callback: None,
      //capturer: Arc::new(scrap::Capturer::new(scrap::Display::primary().unwrap()).unwrap()),
    };

    Ok(web)
  }

  #[napi]
  pub async fn send_message(&self, message: String) -> napi::Result<()> {
    println!("send_message: {:?}", message);
    let tx = self.tx.lock().await;
    let msg: Message = serde_json::from_str(&message).unwrap();
    tx.send(msg)
      .await
      .map_err(|e| napi::Error::from_reason(e.to_string()))
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
  pub fn init(&self) {
    let send_callback = self.send_callback.clone();
    let rx = self.rx.clone();
    let ice_servers = self.config.ice_servers.clone();
    let ice: Vec<RTCIceServer> = ice_servers
      .iter()
      .map(|x| RTCIceServer {
        urls: x.urls.clone(),
        username: x.username.clone(),
        credential: x.credential.clone(),
        credential_type: webrtc::ice_transport::ice_credential_type::RTCIceCredentialType::Password,
      })
      .collect();
    /*
       tokio::spawn(async move {
         let signaler = signaler::NapiSignaler::new(rx, send_callback.unwrap());

         let mut encoder_builder = WebRtcBuilder::new(signaler, Role::Answerer);
         encoder_builder
             .with_encoder(Box::new(NvidiaEncoderBuilder::new(
                 "display-mirror".to_owned(),
                 "0".to_owned()
             )))
             .with_ice_servers(&ice)

             ;//.with_data_channel_handler(Box::new(controls_handler));
         let encoder = encoder_builder.build().await.unwrap();

         encoder.is_closed().await;
         //DUPLICATOR_RUNNING.store(false, Ordering::Release);
         log::info!("Exited");
     });
    */
    let signaler = signaler::NapiSignaler::new(rx, send_callback.unwrap());

    tokio::spawn(async move {
      let mut encoder_builder = WebRtcBuilder::new(signaler, Role::Answerer);
      encoder_builder
        .with_encoder(Box::new(NvidiaEncoderBuilder::new(
          "display-mirror".to_owned(),
          "0".to_owned(),
        )));
        //.with_data_channel_handler(Box::new(controls_handler));
      let encoder = encoder_builder.build().await.unwrap();
      encoder.is_closed().await;
      //DUPLICATOR_RUNNING.store(false, Ordering::Release);
      log::info!("Exited");
    });
  }
}
