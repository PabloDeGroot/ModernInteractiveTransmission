use std::{future::Future, pin::Pin, sync::Arc, thread, time::Duration};

use capture::ScreenDuplicator;
use futures_util::lock::Mutex;
use h264::H264EncoderBuilder;
use napi::{
  bindgen_prelude::{External, FromNapiValue, Null},
  sys,
  threadsafe_function::{
    ErrorStrategy, ThreadSafeCallContext, ThreadsafeFunction, ThreadsafeFunctionCallMode,
  },
  JsFunction, JsObject,
};
use nvidia::NvidiaEncoderBuilder;
use texture::Texture;
//use h264::H264EncoderBuilder;

use webrtc::{
  data::data_channel::DataChannel, data_channel::RTCDataChannel,
  ice_transport::ice_server::RTCIceServer,
};
use webrtc_helper::{peer::Role, Message, WebRtcBuilder};
use windows::{
  core::HRESULT,
  Win32::{
    Foundation::ERROR_NOT_READY,
    Graphics::{
      Direct3D11::{ID3D11Device, ID3D11DeviceContext},
      Dxgi::{Common::{
        DXGI_FORMAT_B8G8R8A8_UNORM, DXGI_FORMAT_R10G10B10A2_UNORM, DXGI_FORMAT_R8G8B8A8_UNORM,
      }, DXGI_OUTDUPL_DESC},
    },
  },
};

mod capture;
mod device;
mod error;
mod h264;
mod nvidia;
mod signaler;
mod tex_reader;
mod texture;
#[macro_use]
extern crate napi_derive;
/*
#[napi]
pub fn sum(a: i32, b: i32) -> i32 {
  a + b
} */

pub fn data_handler(
  data_channel: Arc<RTCDataChannel>,
  callback: Option<ThreadsafeFunction<String>>,
) -> Pin<Box<dyn Future<Output = ()> + Send + 'static>> {
  Box::pin(async move {
    let data_channel = Arc::clone(&data_channel);
    let data_channel_2 = Arc::clone(&data_channel);
    data_channel_2.on_open(Box::new(move || {
      Box::pin(async move {
        let raw = match data_channel.detach().await {
          Ok(raw) => raw,
          Err(err) => {
            log::error!("data channel detach got err: {}", err);
            return;
          }
        };

        let raw = Arc::clone(&raw);
        tokio::spawn(async move {
          let _ = control_loop(raw, callback).await;
        });
      })
    }));
  })
}
async fn control_loop(
  data_channel: Arc<DataChannel>,
  callback: Option<ThreadsafeFunction<String>>,
) {
  //let device = PointerDevice::new().expect("Failed to create `PointerDevice`");
  let mut buffer = vec![0u8; 1500];

  while let Ok((n, is_string)) = data_channel.read_data_channel(&mut buffer).await {
    if !is_string {
      continue;
    }
    if let Ok(s) = std::str::from_utf8(&buffer[..n]) {
      log::info!("Received: {}", s);
      if let Some(callback) = callback.clone() {
        callback.call(Ok(s.to_string()), ThreadsafeFunctionCallMode::Blocking);
      }
    }
  }
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

pub struct CaptureLoop {
  device: ID3D11Device,
  context: ID3D11DeviceContext,
  dupl_desc: DXGI_OUTDUPL_DESC,
  rx: ring_channel::RingReceiver<Texture>,
}

#[napi(js_name = "WebRTC")]
pub struct WebRtc {
  send_callback: Option<ThreadsafeFunction<String>>,
  data_callback: Option<ThreadsafeFunction<String>>,
  close_callback: Option<ThreadsafeFunction<Null>>,
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
      data_callback: None,
      send_callback: None,
      close_callback: None,
      //capturer: Arc::new(scrap::Capturer::new(scrap::Display::primary().unwrap()).unwrap()),
    };

    Ok(web)
  }

  #[napi]
  pub async fn send_message(&self, message: String) -> napi::Result<()> {
    //println!("send_message: {:?}", message);
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
  #[napi(ts_args_type = "callback: (err:null|Error, result: string) => void")]
  pub fn on_data(&mut self, callback: JsFunction) {
    let tsfn: ThreadsafeFunction<String, ErrorStrategy::CalleeHandled> = callback
      .create_threadsafe_function(0, |ctx: ThreadSafeCallContext<String>| {
        ctx
          .env
          .create_string(&ctx.value)
          .map(|js_value| vec![js_value])
      })
      .unwrap();
    self.data_callback = Some(tsfn);
  }

  #[napi(ts_args_type = "callback: (err:null|Error) => void")]
  pub fn on_close(&mut self, _callback: JsFunction) {
    let tsfn: ThreadsafeFunction<Null, ErrorStrategy::CalleeHandled> = _callback
      .create_threadsafe_function(0, |ctx: ThreadSafeCallContext<Null>| {
        ctx.env.get_undefined().map(|js_value| vec![js_value])
      })
      .unwrap();
    self.close_callback = Some(tsfn);
  }
  #[napi]
  pub async fn start_capture() -> External<Arc<CaptureLoop>> {
    let dupl = ScreenDuplicator::create().unwrap();
    let desc = dupl.desc();
    let capture_loop = Arc::new(CaptureLoop {
      device: dupl.d3d11_device.clone(),
      context: dupl.d3d_ctx.clone(),
      rx: dupl.rx.clone(),
      dupl_desc: desc,
    });
    let capture = Arc::new(Mutex::new(dupl));

    ScreenDuplicator::start_capture_loop(capture);
    External::new(capture_loop)
  }

  #[napi]
  pub fn init(&self, capture_loop: External<Arc<CaptureLoop>>) {
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
    println!("desc: {:?}", capture_loop.dupl_desc);
    let signaler = signaler::NapiSignaler::new(rx, send_callback.unwrap());
    let data_callback = self.data_callback.clone();
    let close_callback = self.close_callback.clone();
    tokio::spawn(async move {
      let data: Option<ThreadsafeFunction<String>> = data_callback.clone();
      let mut encoder_builder = WebRtcBuilder::new(signaler, Role::Answerer);
      encoder_builder
        .with_encoder(Box::new(H264EncoderBuilder::new(
          "display-mirror".to_owned(),
          "0".to_owned(),
          capture_loop.device.clone(),
          capture_loop.context.clone(),
          capture_loop.rx.clone(),
          capture_loop.dupl_desc.clone(),
        )))
        .with_data_channel_handler(Box::new(move |data_channel| {
          let data_clone = data.clone();
          data_handler(data_channel, data_clone)
        }));
      //thread::sleep(Duration::from_secs(3));
      //.with_data_channel_handler(Box::new(controls_handler));
      let encoder = encoder_builder.build().await.unwrap();

      encoder.is_closed().await;
      close_callback
        .unwrap()
        .call(Ok(Null), ThreadsafeFunctionCallMode::Blocking);
      //DUPLICATOR_RUNNING.store(false, Ordering::Release);
      log::info!("Exited");
    });
  }
}
