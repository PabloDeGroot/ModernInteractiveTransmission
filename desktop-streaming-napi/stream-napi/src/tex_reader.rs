//! Provides convenient tools for handling directx textures. [`TextureReader`][TextureReader] can be used to read
//! textures.

use std::ptr::copy;

use windows::Win32::Graphics::Direct3D11::{
  ID3D11Device, ID3D11Device4, ID3D11DeviceContext, ID3D11DeviceContext4, D3D11_CPU_ACCESS_READ, D3D11_MAPPED_SUBRESOURCE, D3D11_MAP_READ, D3D11_USAGE_STAGING
};

use crate::{
  error::DDApiError,
  texture::{self, ColorFormat, Texture},
};

/// Tool for reading GPU only directx textures.
///
/// # Example usage
///
/// ```
/// use win_desktop_duplication::tex_reader::TextureReader;
///
/// let mut reader = TextureReader::new(device, context);
///
/// // using same vector will be so much efficient.
/// let mut data:Vec<u8> = Vec::new();
///
/// loop {
///     let tex = // some way to acquire texture like DesktopDuplicationApi;
///
///     reader.get_data(&mut data,&tex).unwrap();
///
///     // use image data here. send it to client etc whatever
/// }
/// ```
pub struct TextureReader {
  device: ID3D11Device,
  ctx: ID3D11DeviceContext,
  tex: Option<Texture>,
}

unsafe impl Sync for TextureReader {}

unsafe impl Send for TextureReader {}

impl TextureReader {
  /// create new instance of TextureReader
  pub fn new(device: ID3D11Device, ctx: ID3D11DeviceContext) -> Self {
    Self {
      device,
      ctx,
      tex: None,
    }
  }

  /// retrieve data from texture and store it in vector
  pub fn get_data(&mut self, vec: &mut Vec<u8>, tex: &Texture) -> Result<(), DDApiError> {
    self.ensure_shape(tex)?;
    unsafe {
      self
        .ctx
        .CopyResource(self.tex.as_mut().unwrap().as_raw_ref(), tex.as_raw_ref());
    }
    unsafe { self.ctx.Flush() }
    let raw_tex = self.tex.as_mut().unwrap().as_raw_ref();
    unsafe {
      let sub_res_res = self.ctx.Map(raw_tex, 0, D3D11_MAP_READ, 0);
      if let Err(e) = sub_res_res {
        return Err(DDApiError::Unexpected(format!(
          "failed to map to cpu {:?}",
          e
        )));
      }
      let sub_res = sub_res_res.unwrap();
      let desc = tex.desc();

      match desc.format {
        ColorFormat::ABGR8UNorm | ColorFormat::ARGB8UNorm | ColorFormat::AYUV => {
          let total_size = desc.width * desc.height * 4;
          vec.resize(total_size as usize, 0);
          for i in 0..desc.height {
            copy(
              sub_res.pData.add((i * sub_res.RowPitch) as usize) as *const u8,
              vec.as_mut_ptr().add((i * desc.width * 4) as _),
              (desc.width * 4) as usize,
            );
          }
        }
        ColorFormat::YUV444 => {
          let total_size = desc.width * desc.height * 3;
          vec.resize(total_size as usize, 0);
          for i in 0..(desc.height * 3) {
            copy(
              sub_res.pData.add((i * sub_res.RowPitch) as usize) as *const u8,
              vec.as_mut_ptr().add((i * desc.width) as _),
              (desc.width) as usize,
            );
          }
        }
        ColorFormat::NV12 => {
          let total_size = desc.width * desc.height * 3 / 2;
          vec.resize(total_size as usize, 0);
          for i in 0..(3 * desc.height / 2) {
            unsafe {
              copy(
                sub_res.pData.add((i * sub_res.RowPitch) as usize) as *const u8,
                vec.as_mut_ptr().add((i * desc.width) as _),
                (desc.width) as usize,
              );
            }
          }
        }

        _ => unimplemented!(),
      }

      self.ctx.Unmap(raw_tex, 0);
    }
    Ok(())
  }

  fn ensure_shape(&mut self, tex: &Texture) -> Result<(), DDApiError> {
    if self.tex.is_none() || self.tex.as_mut().unwrap().desc() != tex.desc() {
      self.tex = None;
      let mut desc = Default::default();
      unsafe { tex.as_raw_ref().GetDesc(&mut desc) };
      desc.Usage = D3D11_USAGE_STAGING;
      desc.BindFlags = Default::default();
      desc.CPUAccessFlags = D3D11_CPU_ACCESS_READ;
      desc.MiscFlags = Default::default();
      unsafe {
        let new_tex = self.device.CreateTexture2D(&desc, None);

        if let Err(e) = new_tex {
          return Err(DDApiError::Unexpected(format!(
            "failed to create texture. {:?}",
            e
          )));
        }

        self.tex = Some(Texture::new(new_tex.unwrap(),0))
      }
    }

    Ok(())
  }
}
