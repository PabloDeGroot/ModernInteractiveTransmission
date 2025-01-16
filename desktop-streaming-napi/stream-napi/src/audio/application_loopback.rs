use std::collections::VecDeque;

use wasapi::{AudioClient, Direction, SampleType, ShareMode, WaveFormat};
use webrtc::stun::client;
//https://learn.microsoft.com/en-us/windows/win32/coreaudio/capturing-a-stream
//https://github.com/microsoft/Windows-classic-samples/tree/main/Samples/ApplicationLoopback/cpp
struct AudioLoopBack {
  process_id: u32,
  exclude_process: bool,
  tx: ring_channel::RingSender<Vec<u8>>,
  chunk_size: usize,
}

impl AudioLoopBack {
  pub fn new(
    process_id: u32,
    exclude_process: bool,
    chunk_size: usize,
    tx: ring_channel::RingSender<Vec<u8>>,
  ) -> AudioLoopBack {
    AudioLoopBack {
      process_id: process_id,
      exclude_process: exclude_process,
      tx: tx,
        chunk_size: chunk_size,
    }
  }
  pub fn start_capture_loop(&self) {
    let tx = self.tx.clone();
    let process_id = self.process_id;
    let include_tree = self.exclude_process;
    let chunk_size = self.chunk_size;
    tokio::spawn(async move {
        
      let desired_format = WaveFormat::new(32, 32, &SampleType::Float, 48000, 2, None);
      let blockalign = desired_format.get_blockalign();

      let autoconvert = true;
      let mut client =
        AudioClient::new_application_loopback_client(process_id, include_tree).unwrap();
      client
        .initialize_client(
          &desired_format,
          0,
          &Direction::Capture,
          &ShareMode::Shared,
          autoconvert,
        )
        .unwrap();
      //debug!("initialized capture");
      let h_event = client.set_get_eventhandle().unwrap();
      let capture = client.get_audiocaptureclient().unwrap();
      let mut sample_queue: VecDeque<u8> = VecDeque::new(); // just eat the reallocation because querying the buffer size gives massive values.
      let chunksize = chunk_size;
      client.start_stream().unwrap();
      loop {
        while sample_queue.len() > (blockalign as usize * chunksize) {
            //debug!("pushing samples");
            let mut chunk = vec![0u8; blockalign as usize * chunksize];
            for element in chunk.iter_mut() {
                *element = sample_queue.pop_front().unwrap();
            }
           // tx_capt.send(chunk).unwrap();
        }
        //trace!("capturing");

        let new_frames = capture.get_next_nbr_frames().unwrap().unwrap_or(0);
        let additional = (new_frames as usize * blockalign as usize)
            .saturating_sub(sample_queue.capacity() - sample_queue.len());
        sample_queue.reserve(additional);
        if new_frames > 0 {
            capture
                .read_from_device_to_deque(&mut sample_queue)
                .unwrap();
        }
        if h_event.wait_for_event(3000).is_err() {
            //error!("timeout error, stopping capture");
            client.stop_stream().unwrap();
            break;
        }


      }

      //capture.read_from_device(data)
    });
  }
}
