var pe=Object.defineProperty;var ye=(a,e,i)=>e in a?pe(a,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[e]=i;var ie=(a,e,i)=>ye(a,typeof e!="symbol"?e+"":e,i);import{e as X,a as D,t as B,s as xe,b as we}from"../chunks/disclose-version.D_axkUVd.js";import{a1 as Z,L as ue,a2 as _e,P as N,aB as Se,E as Ce,aC as Le,aD as Fe,B as se,aE as Ae,a3 as De,n as G,aF as Ue,ao as ae,a8 as re,ap as ze,p as ee,f as Q,a as te,aG as Ee,aH as Me,c as F,t as k,r as A,N as C,aI as Ne,X as P,ad as Re,K as oe,al as Te,am as H,s as j,Q as le}from"../chunks/index-client.XXwnQe8w.js";import{a as Oe,s as he}from"../chunks/render.DhwvbnaU.js";import{i as $}from"../chunks/if.DAExgGtJ.js";import{s as Be}from"../chunks/snippet.ZMNzER7E.js";import{e as Ie,k as Ve,d as qe}from"../chunks/utils.D3f7tEyi.js";import{s as ve,a as ke}from"../chunks/class.BlMvpWzL.js";import{p as x,l as ce,a as Ge,b as je}from"../chunks/props.BEqNIZBi.js";import{i as Pe,e as be,a as W,j as $e,S as He}from"../chunks/index.esm2017.N_lcA-vn.js";import{p as Ye}from"../chunks/stores.7VOECO_q.js";import{b as Ke,o as We,g as Xe}from"../chunks/entry.D18sHJ30.js";import{i as me}from"../chunks/legacy.C3i_f5E4.js";import{s as Y,a as Qe}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.DN16PGSr.js";function Je(a,e,i){Z(()=>{var u=ue(()=>e(a,i==null?void 0:i())||{});if(i&&(u!=null&&u.update)){var b=!1,o={};_e(()=>{var m=i();N(m),b&&Se(o,m)&&(o=m,u.update(m))}),b=!0}if(u!=null&&u.destroy)return()=>u.destroy()})}const Ze=()=>performance.now(),R={tick:a=>requestAnimationFrame(a),now:()=>Ze(),tasks:new Set};function fe(a){R.tasks.forEach(e=>{e.c(a)||(R.tasks.delete(e),e.f())}),R.tasks.size!==0&&R.tick(fe)}function et(a){let e;return R.tasks.size===0&&R.tick(fe),{promise:new Promise(i=>{R.tasks.add(e={c:a,f:i})}),abort(){R.tasks.delete(e)}}}function K(a,e){a.dispatchEvent(new CustomEvent(e))}function tt(a){if(a==="float")return"cssFloat";if(a==="offset")return"cssOffset";if(a.startsWith("--"))return a;const e=a.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(i=>i[0].toUpperCase()+i.slice(1)).join("")}function de(a){const e={},i=a.split(";");for(const u of i){const[b,o]=u.split(":");if(!b||o===void 0)break;const m=tt(b.trim());e[m]=o.trim()}return e}const nt=a=>a;function it(a,e,i,u){var b=(a&Ue)!==0,o="both",m,r=e.inert,f,s;function l(){var v=ze,p=se;ae(null),re(null);try{return m??(m=i()(e,(u==null?void 0:u())??{},{direction:o}))}finally{ae(v),re(p)}}var t={is_global:b,in(){e.inert=r,K(e,"introstart"),f=J(e,l(),s,1,()=>{K(e,"introend"),f==null||f.abort(),f=m=void 0})},out(v){e.inert=!0,K(e,"outrostart"),s=J(e,l(),f,0,()=>{K(e,"outroend"),v==null||v()})},stop:()=>{f==null||f.abort(),s==null||s.abort()}},n=se;if((n.transitions??(n.transitions=[])).push(t),Oe){var d=b;if(!d){for(var h=n.parent;h&&h.f&Ce;)for(;(h=h.parent)&&!(h.f&Le););d=!h||(h.f&Fe)!==0}d&&Z(()=>{ue(()=>t.in())})}}function J(a,e,i,u,b){var o=u===1;if(Ae(e)){var m,r=!1;return De(()=>{if(!r){var p=e({direction:o?"in":"out"});m=J(a,p,i,u,b)}}),{abort:()=>{r=!0,m==null||m.abort()},deactivate:()=>m.deactivate(),reset:()=>m.reset(),t:()=>m.t()}}if(i==null||i.deactivate(),!(e!=null&&e.duration))return b(),{abort:G,deactivate:G,reset:G,t:()=>u};const{delay:f=0,css:s,tick:l,easing:t=nt}=e;var n=[];if(o&&i===void 0&&(l&&l(0,1),s)){var d=de(s(0,1));n.push(d,d)}var h=()=>1-u,v=a.animate(n,{duration:f});return v.onfinish=()=>{var p=(i==null?void 0:i.t())??1-u;i==null||i.abort();var y=u-p,g=e.duration*Math.abs(y),S=[];if(g>0){if(s)for(var z=Math.ceil(g/16.666666666666668),w=0;w<=z;w+=1){var U=p+y*t(w/z),I=s(U,1-U);S.push(de(I))}h=()=>{var E=v.currentTime;return p+y*t(E/g)},l&&et(()=>{if(v.playState!=="running")return!1;var E=h();return l(E,1-E),!0})}v=a.animate(S,{duration:g,fill:"forwards"}),v.onfinish=()=>{h=()=>u,l==null||l(u,1-u),b()}},{abort:()=>{v&&(v.cancel(),v.effect=null,v.onfinish=G)},deactivate:()=>{b=G},reset:()=>{u===0&&(l==null||l(1,0))},t:()=>h()}}function st(a){return[(a>>16&255)/255,(a>>8&255)/255,(255&a)/255]}["SCREEN","LINEAR_LIGHT"].reduce((a,e,i)=>Object.assign(a,{[e]:i}),{});class at{constructor(e,i,u,b=!1){const o=this,m=document.location.search.toLowerCase().indexOf("debug=webgl")!==-1;o.canvas=e,o.gl=o.canvas.getContext("webgl",{antialias:!0}),o.meshes=[];const r=o.gl;i&&u&&this.setSize(i,u),o.lastDebugMsg,o.debug=b&&m?function(s){const l=new Date;l-o.lastDebugMsg>1e3&&console.log("---"),console.log(l.toLocaleTimeString()+Array(Math.max(0,32-s.length)).join(" ")+s+": ",...Array.from(arguments).slice(1)),o.lastDebugMsg=l}:()=>{},Object.defineProperties(o,{Material:{enumerable:!1,value:class{constructor(s,l,t={}){const n=this;function d(p,y){const g=r.createShader(p);return r.shaderSource(g,y),r.compileShader(g),r.getShaderParameter(g,r.COMPILE_STATUS)||console.error(r.getShaderInfoLog(g)),o.debug("Material.compileShaderSource",{source:y}),g}function h(p,y){return Object.entries(p).map(([g,S])=>S.getDeclaration(g,y)).join(`
`)}n.uniforms=t,n.uniformInstances=[];const v=`
              precision highp float;
            `;n.vertexSource=`
              ${v}
              attribute vec4 position;
              attribute vec2 uv;
              attribute vec2 uvNorm;
              ${h(o.commonUniforms,"vertex")}
              ${h(t,"vertex")}
              ${s}
            `,n.Source=`
              ${v}
              ${h(o.commonUniforms,"fragment")}
              ${h(t,"fragment")}
              ${l}
            `,n.vertexShader=d(r.VERTEX_SHADER,n.vertexSource),n.fragmentShader=d(r.FRAGMENT_SHADER,n.Source),n.program=r.createProgram(),r.attachShader(n.program,n.vertexShader),r.attachShader(n.program,n.fragmentShader),r.linkProgram(n.program),r.getProgramParameter(n.program,r.LINK_STATUS)||console.error(r.getProgramInfoLog(n.program)),r.useProgram(n.program),n.attachUniforms(void 0,o.commonUniforms),n.attachUniforms(void 0,n.uniforms)}attachUniforms(s,l){const t=this;s===void 0?Object.entries(l).forEach(([n,d])=>{t.attachUniforms(n,d)}):l.type=="array"?l.value.forEach((n,d)=>t.attachUniforms(`${s}[${d}]`,n)):l.type=="struct"?Object.entries(l.value).forEach(([n,d])=>t.attachUniforms(`${s}.${n}`,d)):(o.debug("Material.attachUniforms",{name:s,uniform:l}),t.uniformInstances.push({uniform:l,location:r.getUniformLocation(t.program,s)}))}}},Uniform:{enumerable:!1,value:class{constructor(s){this.type="float",Object.assign(this,s),this.typeFn={float:"1f",int:"1i",vec2:"2fv",vec3:"3fv",vec4:"4fv",mat4:"Matrix4fv"}[this.type]||"1f",this.update()}update(s){this.value!==void 0&&r[`uniform${this.typeFn}`](s,this.typeFn.indexOf("Matrix")===0?this.transpose:this.value,this.typeFn.indexOf("Matrix")===0?this.value:null)}getDeclaration(s,l,t){const n=this;if(n.excludeFrom!==l){if(n.type==="array")return n.value[0].getDeclaration(s,l,n.value.length)+`
const int ${s}_length = ${n.value.length};`;if(n.type==="struct"){let d=s.replace("u_","");return d=d.charAt(0).toUpperCase()+d.slice(1),`uniform struct ${d} 
                                  {
`+Object.entries(n.value).map(([h,v])=>v.getDeclaration(h,l).replace(/^uniform/,"")).join("")+`
} ${s}${t>0?`[${t}]`:""};`}return`uniform ${n.type} ${s}${t>0?`[${t}]`:""};`}}}},PlaneGeometry:{enumerable:!1,value:class{constructor(s,l,t,n,d){r.createBuffer(),this.attributes={position:new o.Attribute({target:r.ARRAY_BUFFER,size:3}),uv:new o.Attribute({target:r.ARRAY_BUFFER,size:2}),uvNorm:new o.Attribute({target:r.ARRAY_BUFFER,size:2}),index:new o.Attribute({target:r.ELEMENT_ARRAY_BUFFER,size:3,type:r.UNSIGNED_SHORT})},this.setTopology(t,n),this.setSize(s,l,d)}setTopology(s=1,l=1){const t=this;t.xSegCount=s,t.ySegCount=l,t.vertexCount=(t.xSegCount+1)*(t.ySegCount+1),t.quadCount=t.xSegCount*t.ySegCount*2,t.attributes.uv.values=new Float32Array(2*t.vertexCount),t.attributes.uvNorm.values=new Float32Array(2*t.vertexCount),t.attributes.index.values=new Uint16Array(3*t.quadCount);for(let n=0;n<=t.ySegCount;n++)for(let d=0;d<=t.xSegCount;d++){const h=n*(t.xSegCount+1)+d;if(t.attributes.uv.values[2*h]=d/t.xSegCount,t.attributes.uv.values[2*h+1]=1-n/t.ySegCount,t.attributes.uvNorm.values[2*h]=d/t.xSegCount*2-1,t.attributes.uvNorm.values[2*h+1]=1-n/t.ySegCount*2,d<t.xSegCount&&n<t.ySegCount){const v=n*t.xSegCount+d;t.attributes.index.values[6*v]=h,t.attributes.index.values[6*v+1]=h+1+t.xSegCount,t.attributes.index.values[6*v+2]=h+1,t.attributes.index.values[6*v+3]=h+1,t.attributes.index.values[6*v+4]=h+1+t.xSegCount,t.attributes.index.values[6*v+5]=h+2+t.xSegCount}}t.attributes.uv.update(),t.attributes.uvNorm.update(),t.attributes.index.update(),o.debug("Geometry.setTopology",{uv:t.attributes.uv,uvNorm:t.attributes.uvNorm,index:t.attributes.index})}setSize(s=1,l=1,t="xz"){const n=this;n.width=s,n.height=l,n.orientation=t,n.attributes.position.values&&n.attributes.position.values.length===3*n.vertexCount||(n.attributes.position.values=new Float32Array(3*n.vertexCount));const d=s/-2,h=l/-2,v=s/n.xSegCount,p=l/n.ySegCount;for(let y=0;y<=n.ySegCount;y++){const g=h+y*p;for(let S=0;S<=n.xSegCount;S++){const z=d+S*v,w=y*(n.xSegCount+1)+S;n.attributes.position.values[3*w+"xyz".indexOf(t[0])]=z,n.attributes.position.values[3*w+"xyz".indexOf(t[1])]=-g}}n.attributes.position.update(),o.debug("Geometry.setSize",{position:n.attributes.position})}}},Mesh:{enumerable:!1,value:class{constructor(s,l){const t=this;t.geometry=s,t.material=l,t.wireframe=!1,t.attributeInstances=[],Object.entries(t.geometry.attributes).forEach(([n,d])=>{t.attributeInstances.push({attribute:d,location:d.attach(n,t.material.program)})}),o.meshes.push(t),o.debug("Mesh.constructor",{mesh:t})}draw(){r.useProgram(this.material.program),this.material.uniformInstances.forEach(({uniform:s,location:l})=>s.update(l)),this.attributeInstances.forEach(({attribute:s,location:l})=>s.use(l)),r.drawElements(this.wireframe?r.LINES:r.TRIANGLES,this.geometry.attributes.index.values.length,r.UNSIGNED_SHORT,0)}remove(){o.meshes=o.meshes.filter(s=>s!=this)}}},Attribute:{enumerable:!1,value:class{constructor(s){this.type=r.FLOAT,this.normalized=!1,this.buffer=r.createBuffer(),Object.assign(this,s),this.update()}update(){this.values!==void 0&&(r.bindBuffer(this.target,this.buffer),r.bufferData(this.target,this.values,r.STATIC_DRAW))}attach(s,l){const t=r.getAttribLocation(l,s);return this.target===r.ARRAY_BUFFER&&(r.enableVertexAttribArray(t),r.vertexAttribPointer(t,this.size,this.type,this.normalized,0,0)),t}use(s){r.bindBuffer(this.target,this.buffer),this.target===r.ARRAY_BUFFER&&(r.enableVertexAttribArray(s),r.vertexAttribPointer(s,this.size,this.type,this.normalized,0,0))}}}});const f=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];o.commonUniforms={projectionMatrix:new o.Uniform({type:"mat4",value:f}),modelViewMatrix:new o.Uniform({type:"mat4",value:f}),resolution:new o.Uniform({type:"vec2",value:[1,1]}),aspectRatio:new o.Uniform({type:"float",value:1})}}setSize(e=640,i=480){this.width=e,this.height=i,this.canvas.width=e,this.canvas.height=i,this.gl.viewport(0,0,e,i),this.commonUniforms.resolution.value=[e,i],this.commonUniforms.aspectRatio.value=e/i,this.debug("MiniGL.setSize",{width:e,height:i})}setOrthographicCamera(e=0,i=0,u=0,b=-2e3,o=2e3){this.commonUniforms.projectionMatrix.value=[2/this.width,0,0,0,0,2/this.height,0,0,0,0,2/(b-o),0,e,i,u,1],this.debug("setOrthographicCamera",this.commonUniforms.projectionMatrix.value)}render(){this.gl.clearColor(0,0,0,0),this.gl.clearDepth(1),this.meshes.forEach(e=>e.draw())}}function c(a,e,i){return e in a?Object.defineProperty(a,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[e]=i,a}class rt{constructor(...e){ie(this,"colors",[]);c(this,"el",void 0),c(this,"cssVarRetries",0),c(this,"maxCssVarRetries",200),c(this,"angle",0),c(this,"isLoadedClass",!1),c(this,"isScrolling",!1),c(this,"scrollingTimeout",void 0),c(this,"scrollingRefreshDelay",200),c(this,"isIntersecting",!1),c(this,"shaderFiles",void 0),c(this,"vertexShader",void 0),c(this,"sectionColors",void 0),c(this,"computedCanvasStyle",void 0),c(this,"conf",void 0),c(this,"uniforms",void 0),c(this,"t",1253106),c(this,"last",0),c(this,"width",void 0),c(this,"minWidth",1111),c(this,"height",600),c(this,"xSegCount",void 0),c(this,"ySegCount",void 0),c(this,"mesh",void 0),c(this,"material",void 0),c(this,"geometry",void 0),c(this,"minigl",void 0),c(this,"scrollObserver",void 0),c(this,"amp",320),c(this,"seed",5),c(this,"freqX",14e-5),c(this,"freqY",29e-5),c(this,"freqDelta",1e-5),c(this,"activeColors",[1,1,1,1]),c(this,"isMetaKey",!1),c(this,"isGradientLegendVisible",!1),c(this,"isMouseDown",!1),c(this,"handleScroll",()=>{clearTimeout(this.scrollingTimeout),this.scrollingTimeout=setTimeout(this.handleScrollEnd,this.scrollingRefreshDelay),this.isGradientLegendVisible&&this.hideGradientLegend(),this.conf.playing&&(this.isScrolling=!0,this.pause())}),c(this,"handleScrollEnd",()=>{this.isScrolling=!1,this.isIntersecting&&this.play()}),c(this,"resize",()=>{this.width=window.innerWidth,this.minigl.setSize(this.width,this.height),this.minigl.setOrthographicCamera(),this.xSegCount=Math.ceil(this.width*this.conf.density[0]),this.ySegCount=Math.ceil(this.height*this.conf.density[1]),this.mesh.geometry.setTopology(this.xSegCount,this.ySegCount),this.mesh.geometry.setSize(this.width,this.height),this.mesh.material.uniforms.u_shadow_power.value=this.width<600?5:6}),c(this,"handleMouseDown",i=>{this.isGradientLegendVisible&&(this.isMetaKey=i.metaKey,this.isMouseDown=!0,this.conf.playing===!1&&requestAnimationFrame(this.animate))}),c(this,"handleMouseUp",()=>{this.isMouseDown=!1}),c(this,"animate",i=>{if(!this.shouldSkipFrame(i)||this.isMouseDown){if(this.t+=Math.min(i-this.last,1e3/15),this.last=i,this.isMouseDown){let u=160;this.isMetaKey&&(u=-160),this.t+=u}this.mesh.material.uniforms.u_time.value=this.t,this.minigl.render()}if(this.last!==0&&this.isStatic)return this.minigl.render(),void this.disconnect();(this.conf.playing||this.isMouseDown)&&requestAnimationFrame(this.animate)}),c(this,"addIsLoadedClass",()=>{!this.isLoadedClass&&(this.isLoadedClass=!0,this.el.classList.add("isLoaded"),setTimeout(()=>{this.el.parentElement.classList.add("isLoaded")},3e3))}),c(this,"pause",()=>{this.conf.playing=!1}),c(this,"play",()=>{requestAnimationFrame(this.animate),this.conf.playing=!0}),c(this,"initGradient",i=>(this.el=document.querySelector(i),this.connect(),this))}async connect(){this.shaderFiles={vertex:`varying vec3 v_color;

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
}`},this.conf={presetName:"",wireframe:!1,density:[.06,.16],zoom:1,rotation:0,playing:!0},document.querySelectorAll("canvas").length<1?console.log("DID NOT LOAD HERO STRIPE CANVAS"):(this.minigl=new at(this.el,null,null,!0),requestAnimationFrame(()=>{this.el&&(this.computedCanvasStyle=getComputedStyle(this.el),this.waitForCssVars())}))}disconnect(){this.scrollObserver&&(window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("keydown",this.handleKeyDown),this.scrollObserver.disconnect()),window.removeEventListener("resize",this.resize)}initMaterial(){this.uniforms={u_time:new this.minigl.Uniform({value:0}),u_shadow_power:new this.minigl.Uniform({value:5}),u_darken_top:new this.minigl.Uniform({value:this.el.dataset.jsDarkenTop===""?1:0}),u_active_colors:new this.minigl.Uniform({value:this.activeColors,type:"vec4"}),u_global:new this.minigl.Uniform({value:{noiseFreq:new this.minigl.Uniform({value:[this.freqX,this.freqY],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:5e-6})},type:"struct"}),u_vertDeform:new this.minigl.Uniform({value:{incline:new this.minigl.Uniform({value:Math.sin(this.angle)/Math.cos(this.angle)}),offsetTop:new this.minigl.Uniform({value:-.5}),offsetBottom:new this.minigl.Uniform({value:-.5}),noiseFreq:new this.minigl.Uniform({value:[3,4],type:"vec2"}),noiseAmp:new this.minigl.Uniform({value:this.amp}),noiseSpeed:new this.minigl.Uniform({value:10}),noiseFlow:new this.minigl.Uniform({value:3}),noiseSeed:new this.minigl.Uniform({value:this.seed})},type:"struct",excludeFrom:"fragment"}),u_baseColor:new this.minigl.Uniform({value:this.sectionColors[0],type:"vec3",excludeFrom:"fragment"}),u_waveLayers:new this.minigl.Uniform({value:[],excludeFrom:"fragment",type:"array"})};for(let e=1;e<this.sectionColors.length;e+=1)this.uniforms.u_waveLayers.value.push(new this.minigl.Uniform({value:{color:new this.minigl.Uniform({value:this.sectionColors[e],type:"vec3"}),noiseFreq:new this.minigl.Uniform({value:[2+e/this.sectionColors.length,3+e/this.sectionColors.length],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:11+.3*e}),noiseFlow:new this.minigl.Uniform({value:6.5+.3*e}),noiseSeed:new this.minigl.Uniform({value:this.seed+10*e}),noiseFloor:new this.minigl.Uniform({value:.1}),noiseCeil:new this.minigl.Uniform({value:.63+.07*e})},type:"struct"}));return this.vertexShader=[this.shaderFiles.noise,this.shaderFiles.blend,this.shaderFiles.vertex].join(`

`),new this.minigl.Material(this.vertexShader,this.shaderFiles.fragment,this.uniforms)}initMesh(){this.material=this.initMaterial(),this.geometry=new this.minigl.PlaneGeometry,this.mesh=new this.minigl.Mesh(this.geometry,this.material)}shouldSkipFrame(e){return!!window.document.hidden||!this.conf.playing||parseInt(e,10)%2==0||void 0}updateFrequency(e){this.freqX+=e,this.freqY+=e}toggleColor(e){this.activeColors[e]=this.activeColors[e]===0?1:0}showGradientLegend(){this.width>this.minWidth&&(this.isGradientLegendVisible=!0,document.body.classList.add("isGradientLegendVisible"))}hideGradientLegend(){this.isGradientLegendVisible=!1,document.body.classList.remove("isGradientLegendVisible")}init(){this.initGradientColors(),this.initMesh(),this.resize(),requestAnimationFrame(this.animate),window.addEventListener("resize",this.resize)}waitForCssVars(){if(this.colors.length>0){console.log("Colors already set"),this.sectionColors=this.colors,this.init(),this.addIsLoadedClass();return}if(this.computedCanvasStyle&&this.computedCanvasStyle.getPropertyValue("--gradient-color-1").indexOf("#")!==-1)this.init(),this.addIsLoadedClass();else{if(this.cssVarRetries+=1,this.cssVarRetries>this.maxCssVarRetries)return this.sectionColors=[16711680,16711680,16711935,65280,255],void this.init();requestAnimationFrame(()=>this.waitForCssVars())}}initGradientColors(){(this.sectionColors==null||this.sectionColors.length==0)&&(this.sectionColors=["--gradient-color-1","--gradient-color-2","--gradient-color-3","--gradient-color-4"].map(e=>{let i=this.computedCanvasStyle.getPropertyValue(e).trim();return i.length===4&&(i=`#${i.substr(1).split("").map(b=>b+b).join("")}`),i&&`0x${i.substr(1)}`})),this.sectionColors=this.sectionColors.filter(Boolean).map(st)}}const ot=a=>a;function lt(a,{delay:e=0,duration:i=400,easing:u=ot}={}){const b=+getComputedStyle(a).opacity;return{delay:e,duration:i,easing:u,css:o=>`opacity: ${o*b}`}}function ct(a,e){ee(e,!1);let i=x(e,"firestore",24,()=>{}),u=x(e,"rtdb",24,()=>{}),b=x(e,"auth",24,()=>{}),o=x(e,"storage",24,()=>{}),m=x(e,"analytics",24,()=>{});Pe({firestore:i(),rtdb:u(),auth:b(),storage:o(),analytics:m()}),me();var r=X(),f=Q(r);be(f,e,"default",{}),D(a,r),te()}var dt=B("<img>"),ut=B('<svg class="avatar-initials w-full h-full" viewBox="0 0 512 512"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-weight="bold"> </text></svg>'),ht=B("<figure><!></figure>");function vt(a,e){const i=ce(e,["children","$$slots","$$events","$$legacy"]),u=ce(i,["initials","fill","fontSize","src","fallback","action","actionParams","background","width","border","rounded","shadow","cursor"]);ee(e,!1);const b=Ne();let o=x(e,"initials",8,""),m=x(e,"fill",8,"fill-token"),r=x(e,"fontSize",8,150),f=x(e,"src",12,""),s=x(e,"fallback",8,""),l=x(e,"action",8,()=>{}),t=x(e,"actionParams",8,""),n=x(e,"background",8,"bg-surface-400-500-token"),d=x(e,"width",8,"w-16"),h=x(e,"border",8,""),v=x(e,"rounded",8,"rounded-full"),p=x(e,"shadow",8,""),y=x(e,"cursor",8,""),g="flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate",S="w-full object-cover";function z(){return delete u.class,u}Ee(()=>(N(n()),N(d()),N(h()),N(v()),N(p()),N(y()),N(i)),()=>{P(b,`${g} ${n()} ${d()} ${h()} ${v()} ${p()} ${y()} ${i.class??""}`)}),Me(),me();var w=ht();const U=Re(z);let I;var E=F(w);$(E,()=>f()||s(),T=>{var _=dt();ve(_,`avatar-image ${S}`),Je(_,(V,O)=>l()(V,O),t),Z(()=>Ie("error",_,()=>f(s()))),k(()=>{Y(_,"style",i.style??""),Y(_,"src",f()),Y(_,"alt",i.alt||"")}),Ve(_),D(T,_)},T=>{var _=X(),V=Q(_);$(V,o,O=>{var M=ut(),L=F(M),q=F(L,!0);k(()=>he(q,String(o()).substring(0,2).toUpperCase())),A(L),A(M),k(()=>{Y(L,"font-size",r()),ke(L,`avatar-text ${m()??""}`)}),D(O,M)},O=>{var M=X(),L=Q(M);be(L,e,"default",{}),D(O,M)},!0),D(T,_)}),A(w),k(()=>I=Qe(w,I,{class:`avatar ${C(b)??""}`,"data-testid":"avatar",...C(U)})),D(a,w),te()}var bt=B('<div><span class="text-lg">Welcome</span><span class="text-lg font-bold pl-1"> </span></div>'),mt=(a,e)=>C(e)(),ft=B('<div class="flex items-center justify-between flex-1"><div class="flex items-center"><!> <!></div> <button type="button" class="btn-icon variant-filled-primary"><span class="material-symbols-outlined">logout</span></button></div>'),gt=B("<header><!></header>"),pt=B('<div class="dream flex flex-col items-center w-full h-screen"><!> <div class="flex flex-col items-center justify-center overflow-auto h-full w-full"><!></div> <canvas class="fixed top-0 left-0 w-full h-full -z-10 mix-blend-plus-darker svelte-ciik6g" id="gradient-canvas" data-js-darken-top="" data-transition-in=""></canvas></div>');function Nt(a,e){var l;ee(e,!0);const i=xe(),u=()=>we(Ye,"$page",i),b=new rt;b.colors=["0x53DF83","0x47D2E9","0x5E7CE2","0xFF4F7D"].map(t=>t.toLowerCase());let o=H(!1);W.authStateReady().then(()=>{P(o,!0)});let m=H(!1);Ke(t=>{var n,d;console.log("navigated",t),P(m,((d=(n=t.to)==null?void 0:n.params)==null?void 0:d.slug)!=null)});let r=H(void 0);oe(()=>{b.initGradient("#gradient-canvas")});let f=H("p-4");oe(()=>{P(f,"p-2")}),We(t=>{if(document.startViewTransition)return new Promise(n=>{document.startViewTransition(async()=>{n(),await t.complete})})}),console.log("page",u());let s=Ge((l=u().params)==null?void 0:l.slug);console.log("from",s),s&&W.onAuthStateChanged(t=>{t!=null&&Xe(s,{replaceState:!0,state:{}})}),ct(a,{auth:W,firestore:$e,children:(t,n)=>{var d=pt(),h=F(d);He(h,{children:Te,$$slots:{default:(g,S)=>{const z=le(()=>S.signOut),w=le(()=>S.user);var U=gt(),I=F(U);$(I,()=>C(o),E=>{var T=ft(),_=F(T),V=F(_);$(V,()=>C(w).photoURL!=null,L=>{vt(L,{get src(){return C(w).photoURL},get alt(){return C(w).displayName},class:"mr-4 drop-shadow",width:"w-10"})});var O=j(V,2);$(O,()=>C(w).displayName!=null&&!C(m),L=>{var q=bt(),ne=j(F(q)),ge=F(ne,!0);A(ne),A(q),k(()=>he(ge,C(w).displayName)),it(3,q,()=>lt),D(L,q)}),A(_);var M=j(_,2);M.__click=[mt,z],A(T),D(E,T)}),A(U),k(()=>ve(U,`transition-all flex items-center ${C(f)??""} w-full bg-surface-700 bg-opacity-70 drop-shadow-lg backdrop-blur-md`)),D(g,U)}}});var v=j(h,2),p=F(v);Be(p,()=>e.children),A(v);var y=j(v,2);je(y,g=>P(r,g),()=>C(r)),A(d),D(t,d)},$$slots:{default:!0}}),te()}qe(["click"]);export{Nt as component};
