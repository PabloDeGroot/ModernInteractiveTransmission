use std::sync::Arc;

use futures_util::lock::Mutex;
use napi::threadsafe_function::{ThreadsafeFunction, ThreadsafeFunctionCallMode};
use tokio::sync::{
  mpsc::Receiver,
 
};
use webrtc_helper::signaling::{Message, Signaler};

#[derive(Debug)]
pub enum FireStoreSignalerError {

  Eof,
}
impl std::fmt::Display for FireStoreSignalerError {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    match self {
      FireStoreSignalerError::Eof => {
        write!(f, "WebSocket connection has been closed")
      }
    }
  }
}

impl std::error::Error for FireStoreSignalerError {}

pub struct NapiSignaler {
  callback: ThreadsafeFunction<String>,
  rx: Arc<Mutex<tokio::sync::mpsc::Receiver<Message>>>,
}

// add napi object to new
impl NapiSignaler {
  pub fn new(rx: Arc<Mutex<Receiver<Message>>>, callback: ThreadsafeFunction<String>) -> Self {
    Self {
      rx: rx,
      callback,
    }
  }
  /*
  pub async fn send(&self, msg: Message) -> Result<(), Box<dyn std::error::Error + Send>> {
    _ = self.tx.lock().await.send(msg).await;
    Ok(())
  }
  */
  async fn recv_impl(&self) -> Result<Message, FireStoreSignalerError> {
    match self.rx.lock().await.recv().await {
      Some(ws_msg) => Ok(ws_msg),
      _ => Err(FireStoreSignalerError::Eof), // closed
    }
  }
  async fn send_impl(&self, msg: Message) -> Result<(), FireStoreSignalerError> {
    // recieve napi object and call send
    let msg_str = serde_json::to_string(&msg).unwrap();
    self.callback.call(Ok(msg_str), ThreadsafeFunctionCallMode::Blocking);
    Ok(())
  }
}

#[async_trait::async_trait]
impl Signaler for NapiSignaler {
  async fn recv(&self) -> Result<Message, Box<dyn std::error::Error + Send>> {
    match self.recv_impl().await {
      Ok(msg) => {
        //print!("recv: {:?}", msg);
        Ok(msg)
      },
      Err(e) => Err(Box::new(e)),
    }
  }

  async fn send(&self, msg: Message) -> Result<(), Box<dyn std::error::Error + Send>> {
    //println!("send: {:?}", msg);
    match self.send_impl(msg).await {
      Ok(_) => Ok(()),
      Err(e) => Err(Box::new(e)),
    }
  }
}
