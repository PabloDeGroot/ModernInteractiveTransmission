var oe=Object.defineProperty;var re=(u,n,o)=>n in u?oe(u,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):u[n]=o;var W=(u,n,o)=>re(u,typeof n!="symbol"?n+"":n,o);import{c as le,s as de,a as A,l as ce,b as U,t as z,d as he}from"../chunks/disclose-version.CPmkv18M.js";import{m as ue,a as ve,p as be,d as R,B as X,$ as J,z as T,f as me,b as ge,F as _,s as w,c as S,i as fe,h as j,g as p,r as C,t as Q,e as O}from"../chunks/index-client.DD-Ij52M.js";import{d as pe,s as ye}from"../chunks/render.CFtxiOwO.js";import{v as xe,w as we,i as P,s as Se}from"../chunks/validate.B20TBq7P.js";import{i as Ce,a as _e,c as Le,l as k,M as Fe,T as De,A as Ae,t as Ue,f as ze,d as Me}from"../chunks/XPro.B-3KIDH7.js";import{b as Ee}from"../chunks/this.DmrdE6PX.js";import{v as Ne}from"../chunks/legacy.CRHqq7RI.js";import{a as H,F as Re,h as Te,b as Oe}from"../chunks/PageView.Cb00gBX4.js";import{p as Z}from"../chunks/stores.Ce3zl-kW.js";import{a as Ve,o as Ie,g as Be}from"../chunks/entry.BgSlpjBw.js";function qe(u){return[(u>>16&255)/255,(u>>8&255)/255,(255&u)/255]}["SCREEN","LINEAR_LIGHT"].reduce((u,n,o)=>Object.assign(u,{[n]:o}),{});class Ge{constructor(n,o,m,x=!1){const l=this,L=document.location.search.toLowerCase().indexOf("debug=webgl")!==-1;l.canvas=n,l.gl=l.canvas.getContext("webgl",{antialias:!0}),l.meshes=[];const a=l.gl;o&&m&&this.setSize(o,m),l.lastDebugMsg,l.debug=x&&L?function(i){const r=new Date;r-l.lastDebugMsg>1e3&&console.log("---"),console.log(r.toLocaleTimeString()+Array(Math.max(0,32-i.length)).join(" ")+i+": ",...Array.from(arguments).slice(1)),l.lastDebugMsg=r}:()=>{},Object.defineProperties(l,{Material:{enumerable:!1,value:class{constructor(i,r,e={}){const t=this;function d(g,v){const b=a.createShader(g);return a.shaderSource(b,v),a.compileShader(b),a.getShaderParameter(b,a.COMPILE_STATUS)||console.error(a.getShaderInfoLog(b)),l.debug("Material.compileShaderSource",{source:v}),b}function h(g,v){return Object.entries(g).map(([b,f])=>f.getDeclaration(b,v)).join(`
`)}t.uniforms=e,t.uniformInstances=[];const c=`
              precision highp float;
            `;t.vertexSource=`
              ${c}
              attribute vec4 position;
              attribute vec2 uv;
              attribute vec2 uvNorm;
              ${h(l.commonUniforms,"vertex")}
              ${h(e,"vertex")}
              ${i}
            `,t.Source=`
              ${c}
              ${h(l.commonUniforms,"fragment")}
              ${h(e,"fragment")}
              ${r}
            `,t.vertexShader=d(a.VERTEX_SHADER,t.vertexSource),t.fragmentShader=d(a.FRAGMENT_SHADER,t.Source),t.program=a.createProgram(),a.attachShader(t.program,t.vertexShader),a.attachShader(t.program,t.fragmentShader),a.linkProgram(t.program),a.getProgramParameter(t.program,a.LINK_STATUS)||console.error(a.getProgramInfoLog(t.program)),a.useProgram(t.program),t.attachUniforms(void 0,l.commonUniforms),t.attachUniforms(void 0,t.uniforms)}attachUniforms(i,r){const e=this;i===void 0?Object.entries(r).forEach(([t,d])=>{e.attachUniforms(t,d)}):r.type=="array"?r.value.forEach((t,d)=>e.attachUniforms(`${i}[${d}]`,t)):r.type=="struct"?Object.entries(r.value).forEach(([t,d])=>e.attachUniforms(`${i}.${t}`,d)):(l.debug("Material.attachUniforms",{name:i,uniform:r}),e.uniformInstances.push({uniform:r,location:a.getUniformLocation(e.program,i)}))}}},Uniform:{enumerable:!1,value:class{constructor(i){this.type="float",Object.assign(this,i),this.typeFn={float:"1f",int:"1i",vec2:"2fv",vec3:"3fv",vec4:"4fv",mat4:"Matrix4fv"}[this.type]||"1f",this.update()}update(i){this.value!==void 0&&a[`uniform${this.typeFn}`](i,this.typeFn.indexOf("Matrix")===0?this.transpose:this.value,this.typeFn.indexOf("Matrix")===0?this.value:null)}getDeclaration(i,r,e){const t=this;if(t.excludeFrom!==r){if(t.type==="array")return t.value[0].getDeclaration(i,r,t.value.length)+`
const int ${i}_length = ${t.value.length};`;if(t.type==="struct"){let d=i.replace("u_","");return d=d.charAt(0).toUpperCase()+d.slice(1),`uniform struct ${d} 
                                  {
`+Object.entries(t.value).map(([h,c])=>c.getDeclaration(h,r).replace(/^uniform/,"")).join("")+`
} ${i}${e>0?`[${e}]`:""};`}return`uniform ${t.type} ${i}${e>0?`[${e}]`:""};`}}}},PlaneGeometry:{enumerable:!1,value:class{constructor(i,r,e,t,d){a.createBuffer(),this.attributes={position:new l.Attribute({target:a.ARRAY_BUFFER,size:3}),uv:new l.Attribute({target:a.ARRAY_BUFFER,size:2}),uvNorm:new l.Attribute({target:a.ARRAY_BUFFER,size:2}),index:new l.Attribute({target:a.ELEMENT_ARRAY_BUFFER,size:3,type:a.UNSIGNED_SHORT})},this.setTopology(e,t),this.setSize(i,r,d)}setTopology(i=1,r=1){const e=this;e.xSegCount=i,e.ySegCount=r,e.vertexCount=(e.xSegCount+1)*(e.ySegCount+1),e.quadCount=e.xSegCount*e.ySegCount*2,e.attributes.uv.values=new Float32Array(2*e.vertexCount),e.attributes.uvNorm.values=new Float32Array(2*e.vertexCount),e.attributes.index.values=new Uint16Array(3*e.quadCount);for(let t=0;t<=e.ySegCount;t++)for(let d=0;d<=e.xSegCount;d++){const h=t*(e.xSegCount+1)+d;if(e.attributes.uv.values[2*h]=d/e.xSegCount,e.attributes.uv.values[2*h+1]=1-t/e.ySegCount,e.attributes.uvNorm.values[2*h]=d/e.xSegCount*2-1,e.attributes.uvNorm.values[2*h+1]=1-t/e.ySegCount*2,d<e.xSegCount&&t<e.ySegCount){const c=t*e.xSegCount+d;e.attributes.index.values[6*c]=h,e.attributes.index.values[6*c+1]=h+1+e.xSegCount,e.attributes.index.values[6*c+2]=h+1,e.attributes.index.values[6*c+3]=h+1,e.attributes.index.values[6*c+4]=h+1+e.xSegCount,e.attributes.index.values[6*c+5]=h+2+e.xSegCount}}e.attributes.uv.update(),e.attributes.uvNorm.update(),e.attributes.index.update(),l.debug("Geometry.setTopology",{uv:e.attributes.uv,uvNorm:e.attributes.uvNorm,index:e.attributes.index})}setSize(i=1,r=1,e="xz"){const t=this;t.width=i,t.height=r,t.orientation=e,t.attributes.position.values&&t.attributes.position.values.length===3*t.vertexCount||(t.attributes.position.values=new Float32Array(3*t.vertexCount));const d=i/-2,h=r/-2,c=i/t.xSegCount,g=r/t.ySegCount;for(let v=0;v<=t.ySegCount;v++){const b=h+v*g;for(let f=0;f<=t.xSegCount;f++){const V=d+f*c,M=v*(t.xSegCount+1)+f;t.attributes.position.values[3*M+"xyz".indexOf(e[0])]=V,t.attributes.position.values[3*M+"xyz".indexOf(e[1])]=-b}}t.attributes.position.update(),l.debug("Geometry.setSize",{position:t.attributes.position})}}},Mesh:{enumerable:!1,value:class{constructor(i,r){const e=this;e.geometry=i,e.material=r,e.wireframe=!1,e.attributeInstances=[],Object.entries(e.geometry.attributes).forEach(([t,d])=>{e.attributeInstances.push({attribute:d,location:d.attach(t,e.material.program)})}),l.meshes.push(e),l.debug("Mesh.constructor",{mesh:e})}draw(){a.useProgram(this.material.program),this.material.uniformInstances.forEach(({uniform:i,location:r})=>i.update(r)),this.attributeInstances.forEach(({attribute:i,location:r})=>i.use(r)),a.drawElements(this.wireframe?a.LINES:a.TRIANGLES,this.geometry.attributes.index.values.length,a.UNSIGNED_SHORT,0)}remove(){l.meshes=l.meshes.filter(i=>i!=this)}}},Attribute:{enumerable:!1,value:class{constructor(i){this.type=a.FLOAT,this.normalized=!1,this.buffer=a.createBuffer(),Object.assign(this,i),this.update()}update(){this.values!==void 0&&(a.bindBuffer(this.target,this.buffer),a.bufferData(this.target,this.values,a.STATIC_DRAW))}attach(i,r){const e=a.getAttribLocation(r,i);return this.target===a.ARRAY_BUFFER&&(a.enableVertexAttribArray(e),a.vertexAttribPointer(e,this.size,this.type,this.normalized,0,0)),e}use(i){a.bindBuffer(this.target,this.buffer),this.target===a.ARRAY_BUFFER&&(a.enableVertexAttribArray(i),a.vertexAttribPointer(i,this.size,this.type,this.normalized,0,0))}}}});const F=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];l.commonUniforms={projectionMatrix:new l.Uniform({type:"mat4",value:F}),modelViewMatrix:new l.Uniform({type:"mat4",value:F}),resolution:new l.Uniform({type:"vec2",value:[1,1]}),aspectRatio:new l.Uniform({type:"float",value:1})}}setSize(n=640,o=480){this.width=n,this.height=o,this.canvas.width=n,this.canvas.height=o,this.gl.viewport(0,0,n,o),this.commonUniforms.resolution.value=[n,o],this.commonUniforms.aspectRatio.value=n/o,this.debug("MiniGL.setSize",{width:n,height:o})}setOrthographicCamera(n=0,o=0,m=0,x=-2e3,l=2e3){this.commonUniforms.projectionMatrix.value=[2/this.width,0,0,0,0,2/this.height,0,0,0,0,2/(x-l),0,n,o,m,1],this.debug("setOrthographicCamera",this.commonUniforms.projectionMatrix.value)}render(){this.gl.clearColor(0,0,0,0),this.gl.clearDepth(1),this.meshes.forEach(n=>n.draw())}}function s(u,n,o){return n in u?Object.defineProperty(u,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):u[n]=o,u}class $e{constructor(...n){W(this,"colors",[]);s(this,"el",void 0),s(this,"cssVarRetries",0),s(this,"maxCssVarRetries",200),s(this,"angle",0),s(this,"isLoadedClass",!1),s(this,"isScrolling",!1),s(this,"scrollingTimeout",void 0),s(this,"scrollingRefreshDelay",200),s(this,"isIntersecting",!1),s(this,"shaderFiles",void 0),s(this,"vertexShader",void 0),s(this,"sectionColors",void 0),s(this,"computedCanvasStyle",void 0),s(this,"conf",void 0),s(this,"uniforms",void 0),s(this,"t",1253106),s(this,"last",0),s(this,"width",void 0),s(this,"minWidth",1111),s(this,"height",600),s(this,"xSegCount",void 0),s(this,"ySegCount",void 0),s(this,"mesh",void 0),s(this,"material",void 0),s(this,"geometry",void 0),s(this,"minigl",void 0),s(this,"scrollObserver",void 0),s(this,"amp",320),s(this,"seed",5),s(this,"freqX",14e-5),s(this,"freqY",29e-5),s(this,"freqDelta",1e-5),s(this,"activeColors",[1,1,1,1]),s(this,"isMetaKey",!1),s(this,"isGradientLegendVisible",!1),s(this,"isMouseDown",!1),s(this,"handleScroll",()=>{clearTimeout(this.scrollingTimeout),this.scrollingTimeout=setTimeout(this.handleScrollEnd,this.scrollingRefreshDelay),this.isGradientLegendVisible&&this.hideGradientLegend(),this.conf.playing&&(this.isScrolling=!0,this.pause())}),s(this,"handleScrollEnd",()=>{this.isScrolling=!1,this.isIntersecting&&this.play()}),s(this,"resize",()=>{this.width=window.innerWidth,this.minigl.setSize(this.width,this.height),this.minigl.setOrthographicCamera(),this.xSegCount=Math.ceil(this.width*this.conf.density[0]),this.ySegCount=Math.ceil(this.height*this.conf.density[1]),this.mesh.geometry.setTopology(this.xSegCount,this.ySegCount),this.mesh.geometry.setSize(this.width,this.height),this.mesh.material.uniforms.u_shadow_power.value=this.width<600?5:6}),s(this,"handleMouseDown",o=>{this.isGradientLegendVisible&&(this.isMetaKey=o.metaKey,this.isMouseDown=!0,this.conf.playing===!1&&requestAnimationFrame(this.animate))}),s(this,"handleMouseUp",()=>{this.isMouseDown=!1}),s(this,"animate",o=>{if(!this.shouldSkipFrame(o)||this.isMouseDown){if(this.t+=Math.min(o-this.last,1e3/15),this.last=o,this.isMouseDown){let m=160;this.isMetaKey&&(m=-160),this.t+=m}this.mesh.material.uniforms.u_time.value=this.t,this.minigl.render()}if(this.last!==0&&this.isStatic)return this.minigl.render(),void this.disconnect();(this.conf.playing||this.isMouseDown)&&requestAnimationFrame(this.animate)}),s(this,"addIsLoadedClass",()=>{!this.isLoadedClass&&(this.isLoadedClass=!0,this.el.classList.add("isLoaded"),setTimeout(()=>{this.el.parentElement.classList.add("isLoaded")},3e3))}),s(this,"pause",()=>{this.conf.playing=!1}),s(this,"play",()=>{requestAnimationFrame(this.animate),this.conf.playing=!0}),s(this,"initGradient",o=>(this.el=document.querySelector(o),this.connect(),this))}async connect(){this.shaderFiles={vertex:`varying vec3 v_color;

void main() {
  float time = u_time * u_global.noiseSpeed;

  vec2 noiseCoord = resolution * uvNorm * u_global.noiseFreq;

  vec2 st = 1. - uvNorm.xy;

  //
  // Tilting the plane
  //

  // Front-to-back tilt
  float tilt = resolution.y / 2.0 * uvNorm.y;

  // Left-to-right angle
  float incline = resolution.x * uvNorm.x / 2.0 * u_vertDeform.incline;

  // Up-down shift to offset incline
  float offset = resolution.x / 2.0 * u_vertDeform.incline * mix(u_vertDeform.offsetBottom, u_vertDeform.offsetTop, uv.y);

  //
  // Vertex noise
  //

  float noise = snoise(vec3(
    noiseCoord.x * u_vertDeform.noiseFreq.x + time * u_vertDeform.noiseFlow,
    noiseCoord.y * u_vertDeform.noiseFreq.y,
    time * u_vertDeform.noiseSpeed + u_vertDeform.noiseSeed
  )) * u_vertDeform.noiseAmp;

  // Fade noise to zero at edges
  noise *= 1.0 - pow(abs(uvNorm.y), 2.0);

  // Clamp to 0
  noise = max(0.0, noise);

  vec3 pos = vec3(
    position.x,
    position.y + tilt + incline + noise - offset,
    position.z
  );

  //
  // Vertex color, to be passed to fragment shader
  //

  if (u_active_colors[0] == 1.) {
    v_color = u_baseColor;
  }

  for (int i = 0; i < u_waveLayers_length; i++) {
    if (u_active_colors[i + 1] == 1.) {
      WaveLayers layer = u_waveLayers[i];

      float noise = smoothstep(
        layer.noiseFloor,
        layer.noiseCeil,
        snoise(vec3(
          noiseCoord.x * layer.noiseFreq.x + time * layer.noiseFlow,
          noiseCoord.y * layer.noiseFreq.y,
          time * layer.noiseSpeed + layer.noiseSeed
        )) / 2.0 + 0.5
      );

      v_color = blendNormal(v_color, layer.color, pow(noise, 4.));
    }
  }

  //
  // Finish
  //

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`,noise:`//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
    return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
{
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}`,blend:`//
// https://github.com/jamieowen/glsl-blend
//

// Normal

vec3 blendNormal(vec3 base, vec3 blend) {
	return blend;
}

vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
	return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));
}

// Screen

float blendScreen(float base, float blend) {
	return 1.0-((1.0-base)*(1.0-blend));
}

vec3 blendScreen(vec3 base, vec3 blend) {
	return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));
}

vec3 blendScreen(vec3 base, vec3 blend, float opacity) {
	return (blendScreen(base, blend) * opacity + base * (1.0 - opacity));
}

// Multiply

vec3 blendMultiply(vec3 base, vec3 blend) {
	return base*blend;
}

vec3 blendMultiply(vec3 base, vec3 blend, float opacity) {
	return (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));
}

// Overlay

float blendOverlay(float base, float blend) {
	return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));
}

vec3 blendOverlay(vec3 base, vec3 blend) {
	return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));
}

vec3 blendOverlay(vec3 base, vec3 blend, float opacity) {
	return (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));
}

// Hard light

vec3 blendHardLight(vec3 base, vec3 blend) {
	return blendOverlay(blend,base);
}

vec3 blendHardLight(vec3 base, vec3 blend, float opacity) {
	return (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Soft light

float blendSoftLight(float base, float blend) {
	return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));
}

vec3 blendSoftLight(vec3 base, vec3 blend) {
	return vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));
}

vec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {
	return (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Color dodge

float blendColorDodge(float base, float blend) {
	return (blend==1.0)?blend:min(base/(1.0-blend),1.0);
}

vec3 blendColorDodge(vec3 base, vec3 blend) {
	return vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));
}

vec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {
	return (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));
}

// Color burn

float blendColorBurn(float base, float blend) {
	return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);
}

vec3 blendColorBurn(vec3 base, vec3 blend) {
	return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));
}

vec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {
	return (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));
}

// Vivid Light

float blendVividLight(float base, float blend) {
	return (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));
}

vec3 blendVividLight(vec3 base, vec3 blend) {
	return vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));
}

vec3 blendVividLight(vec3 base, vec3 blend, float opacity) {
	return (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Lighten

float blendLighten(float base, float blend) {
	return max(blend,base);
}

vec3 blendLighten(vec3 base, vec3 blend) {
	return vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));
}

vec3 blendLighten(vec3 base, vec3 blend, float opacity) {
	return (blendLighten(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear burn

float blendLinearBurn(float base, float blend) {
	// Note : Same implementation as BlendSubtractf
	return max(base+blend-1.0,0.0);
}

vec3 blendLinearBurn(vec3 base, vec3 blend) {
	// Note : Same implementation as BlendSubtract
	return max(base+blend-vec3(1.0),vec3(0.0));
}

vec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {
	return (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear dodge

float blendLinearDodge(float base, float blend) {
	// Note : Same implementation as BlendAddf
	return min(base+blend,1.0);
}

vec3 blendLinearDodge(vec3 base, vec3 blend) {
	// Note : Same implementation as BlendAdd
	return min(base+blend,vec3(1.0));
}

vec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {
	return (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear light

float blendLinearLight(float base, float blend) {
	return blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));
}

vec3 blendLinearLight(vec3 base, vec3 blend) {
	return vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));
}

vec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {
	return (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));
}`,fragment:`varying vec3 v_color;

void main() {
  vec3 color = v_color;
  if (u_darken_top == 1.0) {
    vec2 st = gl_FragCoord.xy/resolution.xy;
    color.g -= pow(st.y + sin(-12.0) * st.x, u_shadow_power) * 0.4;
  }
  gl_FragColor = vec4(color, 1.0);
}`},this.conf={presetName:"",wireframe:!1,density:[.06,.16],zoom:1,rotation:0,playing:!0},document.querySelectorAll("canvas").length<1?console.log("DID NOT LOAD HERO STRIPE CANVAS"):(this.minigl=new Ge(this.el,null,null,!0),requestAnimationFrame(()=>{this.el&&(this.computedCanvasStyle=getComputedStyle(this.el),this.waitForCssVars())}))}disconnect(){this.scrollObserver&&(window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("keydown",this.handleKeyDown),this.scrollObserver.disconnect()),window.removeEventListener("resize",this.resize)}initMaterial(){this.uniforms={u_time:new this.minigl.Uniform({value:0}),u_shadow_power:new this.minigl.Uniform({value:5}),u_darken_top:new this.minigl.Uniform({value:this.el.dataset.jsDarkenTop===""?1:0}),u_active_colors:new this.minigl.Uniform({value:this.activeColors,type:"vec4"}),u_global:new this.minigl.Uniform({value:{noiseFreq:new this.minigl.Uniform({value:[this.freqX,this.freqY],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:5e-6})},type:"struct"}),u_vertDeform:new this.minigl.Uniform({value:{incline:new this.minigl.Uniform({value:Math.sin(this.angle)/Math.cos(this.angle)}),offsetTop:new this.minigl.Uniform({value:-.5}),offsetBottom:new this.minigl.Uniform({value:-.5}),noiseFreq:new this.minigl.Uniform({value:[3,4],type:"vec2"}),noiseAmp:new this.minigl.Uniform({value:this.amp}),noiseSpeed:new this.minigl.Uniform({value:10}),noiseFlow:new this.minigl.Uniform({value:3}),noiseSeed:new this.minigl.Uniform({value:this.seed})},type:"struct",excludeFrom:"fragment"}),u_baseColor:new this.minigl.Uniform({value:this.sectionColors[0],type:"vec3",excludeFrom:"fragment"}),u_waveLayers:new this.minigl.Uniform({value:[],excludeFrom:"fragment",type:"array"})};for(let n=1;n<this.sectionColors.length;n+=1)this.uniforms.u_waveLayers.value.push(new this.minigl.Uniform({value:{color:new this.minigl.Uniform({value:this.sectionColors[n],type:"vec3"}),noiseFreq:new this.minigl.Uniform({value:[2+n/this.sectionColors.length,3+n/this.sectionColors.length],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:11+.3*n}),noiseFlow:new this.minigl.Uniform({value:6.5+.3*n}),noiseSeed:new this.minigl.Uniform({value:this.seed+10*n}),noiseFloor:new this.minigl.Uniform({value:.1}),noiseCeil:new this.minigl.Uniform({value:.63+.07*n})},type:"struct"}));return this.vertexShader=[this.shaderFiles.noise,this.shaderFiles.blend,this.shaderFiles.vertex].join(`

`),new this.minigl.Material(this.vertexShader,this.shaderFiles.fragment,this.uniforms)}initMesh(){this.material=this.initMaterial(),this.geometry=new this.minigl.PlaneGeometry,this.mesh=new this.minigl.Mesh(this.geometry,this.material)}shouldSkipFrame(n){return!!window.document.hidden||!this.conf.playing||parseInt(n,10)%2==0||void 0}updateFrequency(n){this.freqX+=n,this.freqY+=n}toggleColor(n){this.activeColors[n]=this.activeColors[n]===0?1:0}showGradientLegend(){this.width>this.minWidth&&(this.isGradientLegendVisible=!0,document.body.classList.add("isGradientLegendVisible"))}hideGradientLegend(){this.isGradientLegendVisible=!1,document.body.classList.remove("isGradientLegendVisible")}init(){this.initGradientColors(),this.initMesh(),this.resize(),requestAnimationFrame(this.animate),window.addEventListener("resize",this.resize)}waitForCssVars(){if(this.colors.length>0){console.log("Colors already set"),this.sectionColors=this.colors,this.init(),this.addIsLoadedClass();return}if(this.computedCanvasStyle&&this.computedCanvasStyle.getPropertyValue("--gradient-color-1").indexOf("#")!==-1)this.init(),this.addIsLoadedClass();else{if(this.cssVarRetries+=1,this.cssVarRetries>this.maxCssVarRetries)return this.sectionColors=[16711680,16711680,16711935,65280,255],void this.init();requestAnimationFrame(()=>this.waitForCssVars())}}initGradientColors(){(this.sectionColors==null||this.sectionColors.length==0)&&(this.sectionColors=["--gradient-color-1","--gradient-color-2","--gradient-color-3","--gradient-color-4"].map(n=>{let o=this.computedCanvasStyle.getPropertyValue(n).trim();return o.length===4&&(o=`#${o.substr(1).split("").map(x=>x+x).join("")}`),o&&`0x${o.substr(1)}`})),this.sectionColors=this.sectionColors.filter(Boolean).map(qe)}}function je(){Ce(),_e(),Le()}ue();y[_]="src/routes/+layout.svelte";var Pe=U(z('<div><span class="text-lg">Welcome</span><span class="text-lg font-bold pl-1"> </span></div>'),y[_],[[89,32,[[90,36],[90,73]]]]),ke=(u,n)=>p(n)(),He=U(z('<div class="flex items-center justify-between flex-1"><div class="flex items-center"><!> <!></div> <button type="button" class="btn-icon variant-filled-primary"><span class="material-symbols-outlined">logout</span></button></div>'),y[_],[[78,20,[[79,24],[97,24,[[102,28]]]]]]),Ye=U(z("<header><!></header>"),y[_],[[74,12]]),Ke=U(z('<div class="dream flex flex-col items-center w-full h-screen"><!> <div class="flex flex-col items-center justify-center overflow-auto h-full w-full"><!></div> <canvas class="fixed top-0 left-0 w-full h-full -z-10 mix-blend-plus-darker svelte-ciik6g" id="gradient-canvas" data-js-darken-top="" data-transition-in=""></canvas></div>'),y[_],[[72,4,[[110,8],[116,8]]]]),We=U(z("<!> <!> <!>",1),y[_],[]);function y(u,n){var h;le(new.target),be(n,!0,y);const o=de(),m=()=>(Ne(Z,"page"),he(Z,"$page",o));xe(n,[],[],y);const x=new $e;x.colors=["0x53DF83","0x47D2E9","0x5E7CE2","0xFF4F7D"].map(c=>c.toLowerCase());let l=O(!1);H.authStateReady().then(()=>{R(l,!0)});let L=O(!1);Ve(c=>{var g,v;console.log(...k("log","navigated",c)),R(L,J(T((v=(g=c.to)==null?void 0:g.params)==null?void 0:v.slug,null,!1),null,L))});let a=O(void 0);X(()=>{x.initGradient("#gradient-canvas")});let F=O("p-4");X(()=>{R(F,"p-2")}),Ie(c=>{if(document.startViewTransition)return new Promise(g=>{document.startViewTransition(async()=>{g(),await c.complete})})}),console.log(...k("log","page",m()));let i=J((h=m().params)==null?void 0:h.slug);console.log(...k("log","from",i)),i&&H.onAuthStateChanged(c=>{T(c,null,!1)&&Be(i,{replaceState:!0,state:{}})}),je();var r=We(),e=me(r);Fe(e,{});var t=w(e,2);De(t,{});var d=w(t,2);return Re(d,{auth:H,firestore:Te,children:we(y,(c,g)=>{var v=Ke(),b=S(v);Oe(b,{children:fe,$$slots:{default:(I,B)=>{const Xe=j(()=>B.auth),ee=j(()=>B.signOut),D=j(()=>B.user);var E=Ye(),te=S(E);P(te,()=>p(l),ne=>{var q=He(),G=S(q),Y=S(G);P(Y,()=>T(p(D).photoURL,null,!1),$=>{Ae($,{get src(){return p(D).photoURL},get alt(){return p(D).displayName},class:"mr-4 drop-shadow",width:"w-10"})});var ie=w(Y,2);P(ie,()=>T(p(D).displayName,null,!1)&&!p(L),$=>{var N=Pe(),K=w(S(N)),ae=S(K,!0);C(K),C(N),Q(()=>ye(ae,p(D).displayName)),Ue(3,N,()=>ze),A($,N)}),C(G);var se=w(G,2);se.__click=[ke,ee],C(q),A(ne,q)}),C(E),Q(()=>Me(E,`transition-all flex items-center ${p(F)??""} w-full bg-surface-700 bg-opacity-70 drop-shadow-lg backdrop-blur-md`)),A(I,E)}}});var f=w(b,2),V=S(f);Se(V,()=>n.children),C(f);var M=w(f,2);Ee(M,I=>R(a,I),()=>p(a)),C(v),A(c,v)}),$$slots:{default:!0}}),A(u,r),ge({...ce()})}ve(y);pe(["click"]);export{y as component};
