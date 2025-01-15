use futures_util::lock::Mutex;
use std::{mem::MaybeUninit, num::NonZero, sync::Arc};
use windows::{
  core::Interface,
  Win32::{
    Foundation::{E_ACCESSDENIED, POINT},
    Graphics::{
      Direct3D11::{
        ID3D11Device, ID3D11DeviceContext, ID3D11Texture2D, D3D11_BIND_FLAG,
        D3D11_BIND_RENDER_TARGET, D3D11_RESOURCE_MISC_FLAG, D3D11_RESOURCE_MISC_GDI_COMPATIBLE,
        D3D11_TEXTURE2D_DESC, D3D11_USAGE, D3D11_USAGE_DEFAULT,
      },
      Dxgi::{
        Common::{
          DXGI_FORMAT, DXGI_FORMAT_B8G8R8A8_UNORM, DXGI_FORMAT_R10G10B10A2_UNORM,
          DXGI_FORMAT_R8G8B8A8_UNORM, DXGI_SAMPLE_DESC,
        },
        IDXGIDevice, IDXGIDevice4, IDXGIOutput, IDXGIOutput1, IDXGIOutput5, IDXGIOutputDuplication,
        IDXGIResource, IDXGISurface1, DXGI_ERROR_ACCESS_DENIED, DXGI_ERROR_ACCESS_LOST,
        DXGI_ERROR_INVALID_CALL, DXGI_ERROR_MORE_DATA, DXGI_ERROR_WAIT_TIMEOUT, DXGI_OUTDUPL_DESC,
        DXGI_OUTDUPL_FRAME_INFO, DXGI_OUTDUPL_POINTER_SHAPE_INFO,
      },
      Gdi::DeleteObject,
    },
    UI::{
      Controls::HIMAGELIST_QueryInterface,
      HiDpi::{
        GetProcessDpiAwareness, SetProcessDpiAwareness, PROCESS_PER_MONITOR_DPI_AWARE,
        PROCESS_SYSTEM_DPI_AWARE,
      },
      WindowsAndMessaging::{
        DrawIconEx, GetCursorInfo, GetIconInfo, CURSORINFO, CURSOR_SHOWING, DI_NORMAL, HCURSOR,
      },
    },
  },
};

use crate::{
  device::create_d3d11_device_context,
  texture::{Texture, TextureDesc},
};

#[derive(Default)]
struct DuplicationState {
  frame_locked: bool,
  last_resource: Option<IDXGIResource>,

  frame: Option<Texture>,
  cursor_frame: Option<Texture>,

  cursor: Option<HCURSOR>,
  hotspot_x: i32,
  hotspot_y: i32,
}

impl DuplicationState {
  pub fn reset(&mut self) {
    self.frame = None;
    self.last_resource = None;
    self.cursor_frame = None;
    self.frame_locked = false;
  }
}

#[repr(C)]
pub struct ScreenDuplicator {
  /// Interface that does the duplication.
  output_dupl: IDXGIOutputDuplication,
  /// Represents the output of the GPU.
  dxgi_output: IDXGIOutput,
  /// GPU from which the output is being duplicated.
  dxgi_device: IDXGIDevice,
  pub d3d11_device: ID3D11Device,
  pub d3d_ctx: ID3D11DeviceContext,
  pub rx: ring_channel::RingReceiver<Texture>,
  /// Texture formats that the duplicator can output
  supported_formats: Box<[DXGI_FORMAT]>,
  /// Cached result for the usage of IDXGIOutput5.
  is_dpi_aware: bool,
  state: DuplicationState,
  last_frame_info: Option<DXGI_OUTDUPL_FRAME_INFO>,
  last_cursor_shape: Option<CursorShape>,
  tx: ring_channel::RingSender<Texture>,
}

impl Drop for ScreenDuplicator {
  fn drop(&mut self) {
    let _ = self.release_frame();
  }
}

unsafe impl Send for ScreenDuplicator {}
unsafe impl Sync for ScreenDuplicator {}

impl ScreenDuplicator {
  /// Creates a new ScreenDuplicator.
  pub fn create() -> Result<ScreenDuplicator, windows::core::Error> {
    let (device, context) = create_d3d11_device_context().unwrap();

    let display_formats = vec![
      DXGI_FORMAT_B8G8R8A8_UNORM,
      DXGI_FORMAT_R10G10B10A2_UNORM,
      DXGI_FORMAT_R8G8B8A8_UNORM,
    ];

    let mut screen_dup = ScreenDuplicator::new(device, context, 0, display_formats).unwrap();
    Ok(screen_dup)
  }
  pub fn new(
    d3d11_device: ID3D11Device,
    d3d_ctx: ID3D11DeviceContext,
    display_index: u32,
    supported_formats: Vec<DXGI_FORMAT>,
  ) -> Result<ScreenDuplicator, windows::core::Error> {
    let (tx, rx) = ring_channel::ring_channel::<Texture>(NonZero::new(10).unwrap());

    let supported_formats = supported_formats.into_boxed_slice();
    let is_dpi_aware = ScreenDuplicator::try_set_dpi_aware()?;
    println!("is_dpi_aware: {:?}", is_dpi_aware);
    let dxgi_device: IDXGIDevice = d3d11_device.cast()?;
    println!("dxgi_device");
    // SAFETY: Windows API call
    let dxgi_output = unsafe {
      let adapter = dxgi_device.GetAdapter()?;
      adapter.EnumOutputs(display_index)?
    };
    println!("dxgi_output");
    let output_dupl = ScreenDuplicator::new_output_duplicator(
      &dxgi_output,
      &dxgi_device,
      &supported_formats,
      is_dpi_aware,
    )?;
    println!("output_dupl");

    Ok(ScreenDuplicator {
      output_dupl,
      dxgi_output,
      dxgi_device,
      d3d11_device,
      d3d_ctx: d3d_ctx,
      supported_formats,
      is_dpi_aware,
      state: Default::default(),
      last_frame_info: None,
      last_cursor_shape: None,
      tx: tx,
      rx: rx,
    })
  }

  pub fn start_capture_loop(screen_dup: Arc<Mutex<Self>>) {
    //let duplicator = Arc::clone(&screenDup);

    tokio::spawn(async move {
      //let mut duplicator = screen_dup;
      loop {
        let mut duplicator = screen_dup.lock().await;
        let frame = duplicator.acquire_frame(1000);
        match frame {
          Ok(frame) => {
            //println!("frame acquired");
            duplicator.tx.send(frame).unwrap();
          }
          Err(e) => {
            println!("error: {:?}", e);
          }
        }
        //duplicator.tx.send(frame).unwrap();

        //tokio::time::sleep(tokio::time::Duration::from_millis(100)).await;
      }
    });
  }

  /// Returns a description of the display that is currently being duplicated.
  pub fn desc(&self) -> DXGI_OUTDUPL_DESC {
    let mut dupl_desc: MaybeUninit<DXGI_OUTDUPL_DESC> = MaybeUninit::uninit();
    unsafe {
      // NOTE: `GetDesc` always succeeds if the `IDXGIOutputDuplication` used is valid
      self.output_dupl.GetDesc(dupl_desc.as_mut_ptr());
      dupl_desc.assume_init()
    }
  }

  



  /// Get the next available frame.
  ///
  /// This method returns an `AcquiredFrame` on success. An error of value
  /// `AcquireFrameError::Retry` is non-fatal and the caller can try to call this method again.
  #[inline]
  pub fn acquire_frame<'a>(
    &'a mut self,
    timeout_millis: u32,
  ) -> Result<Texture, AcquireFrameError> {
    let mut frame_info = Default::default();

    //let mut resource = None;

    // SAFETY: Windows API call




    let result = unsafe {
      self.output_dupl.AcquireNextFrame(
        timeout_millis,
        &mut frame_info,
        &mut self.state.last_resource,
      )
    };
    if let Err(e) = result {
      match e.code() {
        DXGI_ERROR_ACCESS_LOST => {
          println!("display access lost. maybe desktop mode switch?, {:?}", e);
          //self.reacquire_dup()?;
          return Err(AcquireFrameError::AccessLost);
        }
        DXGI_ERROR_ACCESS_DENIED => {
          println!("display access is denied. Maybe running in a secure environment?");
          //self.reacquire_dup()?;
          return Err(AcquireFrameError::AccessDenied);
        }
        DXGI_ERROR_INVALID_CALL => {
          println!("dxgi_error_invalid_call. maybe forgot to ReleaseFrame()?");
          //self.reacquire_dup()?;
          return Err(AcquireFrameError::InvalidCall);
        }
        DXGI_ERROR_WAIT_TIMEOUT => {
          println!("no new frame is available");
          self.release_locked_frame();
          return Err(AcquireFrameError::NoFrameAbailable);
        }
        _ => {
          return Err(AcquireFrameError::Unknown);
        }
      }
    } else {
      self.last_frame_info = Some(frame_info);
      if frame_info.PointerShapeBufferSize != 0 {
        let mut shape = CursorShape::default();
        self._get_cursor_shape(&mut shape)?;
        self.last_cursor_shape = Some(shape);
      }
    }

    if let Some(resource) = self.state.last_resource.as_ref() {
      /*println!(
        "got fresh resource. accumulated {} frames",
        frame_info.AccumulatedFrames
      );*/
      self.state.frame_locked = true;
      let new_frame = Texture::new(
        resource.cast().unwrap(),
        self.last_frame_info.unwrap().LastPresentTime as u64,
      );
      self.ensure_cache_frame(&new_frame).inspect_err(|_| {
        self.release_locked_frame();
      })?;
      //println!("frame acquired new_frame, info: {:?}", new_frame.timestamp);

      unsafe {
        self.d3d_ctx.CopyResource(
          self.state.frame.as_ref().unwrap().as_raw_ref(),
          new_frame.as_raw_ref(),
        );
      }
    } else {
      /*println!(
        "no fresh resource. accumulated {} frames",
        frame_info.AccumulatedFrames
      );*/
    }
    if self.state.frame.is_none() {
      return Err(AcquireFrameError::Unknown);
    }
    self.release_locked_frame();

    let cache_frame = self.state.frame.clone().unwrap();

    self.ensure_cache_cursor_frame(&cache_frame)?;

    let mut cache_cursor_frame = self.state.cursor_frame.clone().unwrap();

    unsafe {
      self
        .d3d_ctx
        .CopyResource(cache_cursor_frame.as_raw_ref(), cache_frame.as_raw_ref())
    }

    self.draw_cursor(&cache_cursor_frame)?;
    cache_cursor_frame.timestamp = frame_info.LastPresentTime as u64;
    Ok(cache_cursor_frame)
  }

  /// Signals that the current frame is done being processed.
  #[inline]
  fn release_frame(&mut self) -> Result<(), windows::core::Error> {
    unsafe {
      self.output_dupl.ReleaseFrame()?;
      Ok(())
    }
  }

  fn release_locked_frame(&mut self) {
    if self.state.last_resource.is_some() {
      self.state.last_resource = None;
    }

    if self.state.frame_locked {
      let _ = unsafe { self.output_dupl.ReleaseFrame() };
      self.state.frame_locked = false;
    }
  }

  fn ensure_cache_frame(&mut self, frame: &Texture) -> Result<(), AcquireFrameError> {
    if self.state.frame.is_none() {
      let tex = self.create_texture(
        frame.desc(),
        D3D11_USAGE_DEFAULT,
        D3D11_BIND_RENDER_TARGET,
        Default::default(),
        frame.timestamp,
      )?;
      self.state.frame = Some(tex);
    }
    Ok(())
  }

  fn ensure_cache_cursor_frame(&mut self, frame: &Texture) -> Result<(), AcquireFrameError> {
    if self.state.cursor_frame.is_none() {
      let tex = self.create_texture(
        frame.desc(),
        D3D11_USAGE_DEFAULT,
        D3D11_BIND_RENDER_TARGET,
        D3D11_RESOURCE_MISC_GDI_COMPATIBLE,
        frame.timestamp,
      )?;
      self.state.cursor_frame = Some(tex);
    }
    Ok(())
  }
  fn _get_cursor_shape(&self, shape: &mut CursorShape) -> Result<(), AcquireFrameError> {
    let last_frame = self.last_frame_info.as_ref().unwrap();
    if shape.buffer.capacity() < last_frame.PointerShapeBufferSize as _ {
      shape.buffer = Vec::with_capacity(last_frame.PointerShapeBufferSize as _)
    }
    let dupl = &self.output_dupl;
    let mut shape_info: DXGI_OUTDUPL_POINTER_SHAPE_INFO = Default::default();
    let mut required_size: u32 = 0;
    let mut result = unsafe {
      dupl.GetFramePointerShape(
        last_frame.PointerShapeBufferSize,
        shape.buffer.as_mut_ptr() as _,
        &mut required_size,
        &mut shape_info,
      )
    };
    if matches!(
      result.clone().map_err(|err| { return err.code() }),
      Err(DXGI_ERROR_MORE_DATA)
    ) {
      shape.buffer = Vec::with_capacity(required_size as _);
      unsafe {
        result = dupl.GetFramePointerShape(
          last_frame.PointerShapeBufferSize,
          shape.buffer.as_mut_ptr() as _,
          &mut required_size,
          &mut shape_info,
        );
      }
    }
    if result.is_err() {
      return Err(AcquireFrameError::Unknown);
    } else {
      unsafe { shape.buffer.set_len(last_frame.PointerShapeBufferSize as _) };
      shape.height = shape_info.Height;
      shape.width = shape_info.Width;
      shape.pitch = shape_info.Pitch;
      shape.kind = shape_info.Type.into();
      shape.hotspot = CursorPos {
        cx: shape_info.HotSpot.x,
        cy: shape_info.HotSpot.y,
      }
    };

    return Ok(());
  }
  fn create_texture(
    &self,
    tex_desc: TextureDesc,
    usage: D3D11_USAGE,
    bind_flags: D3D11_BIND_FLAG,
    misc_flag: D3D11_RESOURCE_MISC_FLAG,
    timestamp: u64,
  ) -> Result<Texture, AcquireFrameError> {
    let desc = D3D11_TEXTURE2D_DESC {
      Width: tex_desc.width,
      Height: tex_desc.height,
      MipLevels: 1,
      ArraySize: 1,
      Format: tex_desc.format.into(),
      SampleDesc: DXGI_SAMPLE_DESC {
        Count: 1,
        Quality: 0,
      },
      Usage: usage,
      BindFlags: bind_flags,
      CPUAccessFlags: Default::default(),
      MiscFlags: misc_flag,
    };

    let result = unsafe { self.d3d11_device.CreateTexture2D(&desc, None) };
    if let Err(e) = result {
      Err(AcquireFrameError::Unknown)
    } else {
      Ok(Texture::new(result.unwrap(), timestamp))
    }
  }
  fn draw_cursor(&mut self, tex: &Texture) -> Result<(), AcquireFrameError> {
    //trace!("drawing cursor");
    let mut cursor_info = CURSORINFO {
      cbSize: size_of::<CURSORINFO>() as u32,
      ..Default::default()
    };
    let cursor_present = unsafe { GetCursorInfo(&mut cursor_info as *mut CURSORINFO) };

    // if cursor is not present, return raw frame.
    if (!cursor_present).into() || (cursor_info.flags.0 & CURSOR_SHOWING.0 != CURSOR_SHOWING.0) {
      //debug!("cursor is absent so not drawing anything");
      return Ok(());
    }

    if self.state.cursor.is_none() || cursor_info.hCursor != *self.state.cursor.as_ref().unwrap() {
      self.state.cursor = Some(cursor_info.hCursor);
      let point = Self::get_icon_hotspot(cursor_info.hCursor)?;
      self.state.hotspot_x = point.x as _;
      self.state.hotspot_y = point.y as _;
    }
    let surface: IDXGISurface1 = tex.as_raw_ref().cast().unwrap();
    let hdc = unsafe { surface.GetDC(false) };
    if let Err(err) = hdc {
      return Err(AcquireFrameError::Unknown);
    }
    let hdc = hdc.unwrap();

    let result = unsafe {
      DrawIconEx(
        hdc,
        cursor_info.ptScreenPos.x - self.state.hotspot_x,
        cursor_info.ptScreenPos.y - self.state.hotspot_y,
        self.state.cursor.unwrap(),
        0,
        0,
        0,
        None,
        DI_NORMAL,
      )
    };

    let _ = unsafe { surface.ReleaseDC(None) };
    Ok(())
  }

  fn get_icon_hotspot(cursor: HCURSOR) -> Result<POINT, AcquireFrameError> {
    // get icon information
    let mut icon_info = Default::default();
    unsafe { GetIconInfo(cursor, &mut icon_info) };

    if !icon_info.hbmMask.is_invalid() {
      unsafe {
        DeleteObject(icon_info.hbmMask);
      }
    }
    if !icon_info.hbmColor.is_invalid() {
      unsafe {
        DeleteObject(icon_info.hbmColor);
      }
    }

    Ok(POINT {
      x: icon_info.xHotspot as _,
      y: icon_info.yHotspot as _,
    })
  }

  #[inline]
  pub fn reset_output_duplicator(&mut self) -> Result<(), windows::core::Error> {
    let output_dupl = ScreenDuplicator::new_output_duplicator(
      &self.dxgi_output,
      &self.dxgi_device,
      &self.supported_formats,
      self.is_dpi_aware,
    )?;

    // This also frees the old output_dupl if it's not null
    self.output_dupl = output_dupl;

    Ok(())
  }

  /// Returns a new output duplicator.
  fn new_output_duplicator(
    dxgi_output: &IDXGIOutput,
    dxgi_device: &IDXGIDevice,
    supported_formats: &[DXGI_FORMAT],
    is_dpi_aware: bool,
  ) -> Result<IDXGIOutputDuplication, windows::core::Error> {
    // First test if output_dupl can be made with IDXGIOutput5
    if is_dpi_aware {
      unsafe {
        println!("IDXGIOutput5");
        let hdr_output: IDXGIOutput5 = dxgi_output.cast()?;
        println!("IDXGIOutput5 2 2, {:?}", dxgi_device);
        println!("IDXGIOutput5 2 3, {:?}", RESERVED_FLAG);
        println!("IDXGIOutput5 2 1, {:?}", supported_formats);
        const RESERVED_FLAG: u32 = 0;
        let output_dupl =
          hdr_output.DuplicateOutput1(dxgi_device, RESERVED_FLAG, supported_formats);
        println!("IDXGIOutput5 3");
        if output_dupl.is_ok() {
          println!("output_dupl ok");
          return output_dupl;
        }
      }
    }

    // If either not DPI aware or IDXGIOutput5 failed, fall back to IDXGIOutput1
    unsafe {
      println!("IDXGIOutput1");
      let sdr_output: IDXGIOutput1 = dxgi_output.cast()?;
      println!("IDXGIOutput1 2");
      sdr_output.DuplicateOutput(dxgi_device)
    }
  }

  /// Attempt to signal to the OS that the process is DPI aware.
  /// Returns the DPI awareness.
  fn try_set_dpi_aware() -> Result<bool, windows::core::Error> {
    unsafe {
      if let Err(e) = SetProcessDpiAwareness(PROCESS_PER_MONITOR_DPI_AWARE) {
        // `E_ACCESSDENIED` means the DPI awareness has already been set
        if e.code() != E_ACCESSDENIED {
          return Err(e);
        }
      }
      let awareness = GetProcessDpiAwareness(None)?;
      if awareness == PROCESS_SYSTEM_DPI_AWARE || awareness == PROCESS_PER_MONITOR_DPI_AWARE {
        Ok(true)
      } else {
        Ok(false)
      }
    }
  }
}

/// Result of a successful `ScreenDuplicator::acquire_frame`.
pub struct AcquiredFrame<'a> {
  pub frame: ID3D11Texture2D,
  duplicator: &'a mut ScreenDuplicator,
}

impl<'a> Drop for AcquiredFrame<'a> {
  #[inline]
  fn drop(&mut self) {
    let _ = self.duplicator.release_frame();
  }
}

impl<'a> AsRef<ID3D11Texture2D> for AcquiredFrame<'a> {
  fn as_ref(&self) -> &ID3D11Texture2D {
    &self.frame
  }
}

/// Errors that `ScreenDuplicator::acquire_frame` can return.
#[derive(Debug)]
pub enum AcquireFrameError {
  Retry,
  NoFrameAbailable,
  InvalidCall,
  AccessLost,
  AccessDenied,
  Unknown,
}

#[repr(C)]
#[derive(Clone, Debug, Default)]
pub struct CursorInfo {
  pub visible: bool,
  pub updated: bool,
  pub position: CursorPos,
}

#[repr(C)]
#[derive(Default, Clone, Debug)]
pub struct CursorPos {
  pub cx: i32,
  pub cy: i32,
}

#[derive(Default, Clone, Debug)]
pub struct CursorShape {
  pub buffer: Vec<u8>,
  pub width: u32,
  pub height: u32,
  pub pitch: u32,
  pub kind: CursorKind,
  pub hotspot: CursorPos,
}

#[derive(Default, Clone, Debug)]
pub enum CursorKind {
  #[default]
  SingleBit,
  ARGB,
  Masked,
}

impl From<u32> for CursorKind {
  fn from(value: u32) -> Self {
    match value {
      0x1 => Self::SingleBit,
      0x2 => Self::ARGB,
      0x4 => Self::Masked,
      _ => Self::ARGB,
    }
  }
}
