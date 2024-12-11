import{c as bt,s as Sn,f as pe,a as _e,l as St,d as Pn}from"./disclose-version.DV00E0Cu.js";import{i as Pt,v as kn}from"./legacy.CEgTQ2wZ.js";import{j as fv,k as pv,m as kt,a as Nt,F as Dt,p as Ot,f as me,b as xt,aO as _v,aP as mv,aN as Di,aQ as gv,aR as yv,g as vv,aS as Ev,d as Tv,am as wv}from"./index-client.BWQulaWm.js";import{i as Nn,p as Oe}from"./validate.DuR7ZZ00.js";import{w as $t,r as Ht}from"./entry.Fri9A38i.js";function tt(n,e,t,i,s){var l;fv&&pv();var r=(l=e.$$slots)==null?void 0:l[t],o=!1;r===!0&&(r=e[t==="default"?"children":t],o=!0),r===void 0?s!==null&&s(n):r(n,o?()=>i:i)}function LN(n){const e={};n.children&&(e.default=!0);for(const t in n.$$slots)e[t]=!0;return e}var td={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(n,e){if(!n)throw Qi(e)},Qi=function(n){return new Error("Firebase Database ("+_p.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Iv=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],l=n[t++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},sc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,l=o?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,f=r>>2,p=(r&3)<<4|l>>4;let m=(l&15)<<2|u>>6,E=u&63;c||(E=64,o||(m=64)),i.push(t[f],t[p],t[m],t[E])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(mp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Iv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||l==null||u==null||p==null)throw new Rv;const m=r<<2|l>>4;if(i.push(m),u!==64){const E=l<<4&240|u>>2;if(i.push(E),p!==64){const A=u<<6&192|p;i.push(A)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Rv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gp=function(n){const e=mp(n);return sc.encodeByteArray(e,!0)},lo=function(n){return gp(n).replace(/\./g,"")},co=function(n){try{return sc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(n){return yp(void 0,n)}function yp(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Av(t)||(n[t]=yp(n[t],e[t]));return n}function Av(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=()=>bv().__FIREBASE_DEFAULTS__,Pv=()=>{if(typeof process>"u"||typeof td>"u")return;const n=td.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},kv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&co(n[1]);return e&&JSON.parse(e)},$o=()=>{try{return Sv()||Pv()||kv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},vp=n=>{var e,t;return(t=(e=$o())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ep=n=>{const e=vp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Tp=()=>{var n;return(n=$o())===null||n===void 0?void 0:n.config},wp=n=>{var e;return(e=$o())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[lo(JSON.stringify(t)),lo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function Nv(){var n;const e=(n=$o())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dv(){return typeof window<"u"||Rp()}function Rp(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function Ov(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function oc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Cp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xv(){const n=ze();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ap(){return _p.NODE_ADMIN===!0}function Lv(){return!Nv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ac(){try{return typeof indexedDB=="object"}catch{return!1}}function lc(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}function bp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="FirebaseError";class ot extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Mv,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,si.prototype.create)}}class si{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Vv(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new ot(s,l,i)}}function Vv(n,e){return n.replace(Fv,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Fv=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(n){return JSON.parse(n)}function Pe(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=$s(co(r[0])||""),t=$s(co(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Uv=function(n){const e=Sp(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Bv=function(n){const e=Sp(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Oi(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function uo(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ho(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Hs(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(nd(r)&&nd(o)){if(!Hs(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function nd(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)i[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)i[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const m=i[p-3]^i[p-8]^i[p-14]^i[p-16];i[p]=(m<<1|m>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],u,f;for(let p=0;p<80;p++){p<40?p<20?(u=l^r&(o^l),f=1518500249):(u=r^o^l,f=1859775393):p<60?(u=r&o|l&(r|o),f=2400959708):(u=r^o^l,f=3395469782);const m=(s<<5|s>>>27)+u+c+f+i[p]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=s,s=m}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function jv(n,e){const t=new zv(n,e);return t.subscribe.bind(t)}class zv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Wv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Qa),s.error===void 0&&(s.error=Qa),s.complete===void 0&&(s.complete=Qa);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Qa(){}function xi(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,D(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ho=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=1e3,Gv=2,Kv=4*60*60*1e3,Qv=.5;function id(n,e=Hv,t=Gv){const i=e*Math.pow(t,n),s=Math.round(Qv*i*(Math.random()-.5)*2);return Math.min(Kv,i+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(n){return n&&n._delegate?n._delegate:n}class st{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Bt;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jv(e))try{this.getOrInitializeService({instanceIdentifier:Fn})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fn){return this.instances.has(e)}getOptions(e=Fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Xv(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Fn){return this.component?this.component.multipleInstances?e:Fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xv(n){return n===Fn?void 0:n}function Jv(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Yv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=[];var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const kp={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Zv=G.INFO,eE={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},tE=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=eE[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lr{constructor(e){this.name=e,this._logLevel=Zv,this._logHandler=tE,this._userLogHandler=null,cc.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}function nE(n){cc.forEach(e=>{e.setLogLevel(n)})}function iE(n,e){for(const t of cc){let i=null;e&&e.level&&(i=kp[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(s,r,...o)=>{const l=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");r>=(i??s.logLevel)&&n({level:G[r].toLowerCase(),message:l,args:o,type:s.name})}}}const sE=(n,e)=>e.some(t=>n instanceof t);let sd,rd;function rE(){return sd||(sd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oE(){return rd||(rd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Np=new WeakMap,vl=new WeakMap,Dp=new WeakMap,Ya=new WeakMap,uc=new WeakMap;function aE(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(pn(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Np.set(t,n)}).catch(()=>{}),uc.set(e,n),e}function lE(n){if(vl.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});vl.set(n,e)}let El={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return vl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Dp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return pn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function cE(n){El=n(El)}function uE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Xa(this),e,...t);return Dp.set(i,e.sort?e.sort():[e]),pn(i)}:oE().includes(n)?function(...e){return n.apply(Xa(this),e),pn(Np.get(this))}:function(...e){return pn(n.apply(Xa(this),e))}}function hE(n){return typeof n=="function"?uE(n):(n instanceof IDBTransaction&&lE(n),sE(n,rE())?new Proxy(n,El):n)}function pn(n){if(n instanceof IDBRequest)return aE(n);if(Ya.has(n))return Ya.get(n);const e=hE(n);return e!==n&&(Ya.set(n,e),uc.set(e,n)),e}const Xa=n=>uc.get(n);function Op(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),l=pn(o);return i&&o.addEventListener("upgradeneeded",c=>{i(pn(o.result),c.oldVersion,c.newVersion,pn(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const dE=["get","getKey","getAll","getAllKeys","count"],fE=["put","add","delete","clear"],Ja=new Map;function od(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ja.get(e))return Ja.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=fE.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||dE.includes(t)))return;const r=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return i&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),s&&c.done]))[0]};return Ja.set(e,r),r}cE(n=>({...n,get:(e,t,i)=>od(e,t)||n.get(e,t,i),has:(e,t)=>!!od(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(_E(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function _E(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fo="@firebase/app",Tl="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new lr("@firebase/app"),mE="@firebase/app-compat",gE="@firebase/analytics-compat",yE="@firebase/analytics",vE="@firebase/app-check-compat",EE="@firebase/app-check",TE="@firebase/auth",wE="@firebase/auth-compat",IE="@firebase/database",RE="@firebase/data-connect",CE="@firebase/database-compat",AE="@firebase/functions",bE="@firebase/functions-compat",SE="@firebase/installations",PE="@firebase/installations-compat",kE="@firebase/messaging",NE="@firebase/messaging-compat",DE="@firebase/performance",OE="@firebase/performance-compat",xE="@firebase/remote-config",LE="@firebase/remote-config-compat",ME="@firebase/storage",VE="@firebase/storage-compat",FE="@firebase/firestore",UE="@firebase/vertexai",BE="@firebase/firestore-compat",qE="firebase",jE="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs="[DEFAULT]",zE={[fo]:"fire-core",[mE]:"fire-core-compat",[yE]:"fire-analytics",[gE]:"fire-analytics-compat",[EE]:"fire-app-check",[vE]:"fire-app-check-compat",[TE]:"fire-auth",[wE]:"fire-auth-compat",[IE]:"fire-rtdb",[RE]:"fire-data-connect",[CE]:"fire-rtdb-compat",[AE]:"fire-fn",[bE]:"fire-fn-compat",[SE]:"fire-iid",[PE]:"fire-iid-compat",[kE]:"fire-fcm",[NE]:"fire-fcm-compat",[DE]:"fire-perf",[OE]:"fire-perf-compat",[xE]:"fire-rc",[LE]:"fire-rc-compat",[ME]:"fire-gcs",[VE]:"fire-gcs-compat",[FE]:"fire-fst",[BE]:"fire-fst-compat",[UE]:"fire-vertex","fire-js":"fire-js",[qE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new Map,Li=new Map,Mi=new Map;function wl(n,e){try{n.container.addComponent(e)}catch(t){Qt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function WE(n,e){n.container.addOrOverwriteComponent(e)}function rt(n){const e=n.name;if(Mi.has(e))return Qt.debug(`There were multiple attempts to register component ${e}.`),!1;Mi.set(e,n);for(const t of vn.values())wl(t,n);for(const t of Li.values())wl(t,n);return!0}function Dn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function $E(n,e,t=Gs){Dn(n,e).clearInstance(t)}function xp(n){return n.options!==void 0}function ft(n){return n.settings!==void 0}function HE(){Mi.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ct=new si("app","Firebase",GE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new st("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ct.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE extends Lp{constructor(e,t,i,s){const r=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,o={name:i,automaticDataCollectionEnabled:r};if(e.apiKey!==void 0)super(e,o,s);else{const l=e;super(l.options,o,s)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:r},t),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,ke(fo,Tl,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Mp(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw ct.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=jE;function hc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Gs,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw ct.create("bad-app-name",{appName:String(s)});if(t||(t=Tp()),!t)throw ct.create("no-options");const r=vn.get(s);if(r){if(Hs(t,r.options)&&Hs(i,r.config))return r;throw ct.create("duplicate-app",{appName:s})}const o=new Pp(s);for(const c of Mi.values())o.addComponent(c);const l=new Lp(t,i,o);return vn.set(s,l),l}function QE(n,e){if(Dv()&&!Rp())throw ct.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;xp(n)?t=n.options:t=n;const i=Object.assign(Object.assign({},e),t);i.releaseOnDeref!==void 0&&delete i.releaseOnDeref;const s=u=>[...u].reduce((f,p)=>Math.imul(31,f)+p.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw ct.create("finalization-registry-not-supported",{});const r=""+s(JSON.stringify(i)),o=Li.get(r);if(o)return o.incRefCount(e.releaseOnDeref),o;const l=new Pp(r);for(const u of Mi.values())l.addComponent(u);const c=new KE(t,e,r,l);return Li.set(r,c),c}function Go(n=Gs){const e=vn.get(n);if(!e&&n===Gs&&Tp())return hc();if(!e)throw ct.create("no-app",{appName:n});return e}function YE(){return Array.from(vn.values())}async function Mp(n){let e=!1;const t=n.name;vn.has(t)?(e=!0,vn.delete(t)):Li.has(t)&&n.decRefCount()<=0&&(Li.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(i=>i.delete())),n.isDeleted=!0)}function ke(n,e,t){var i;let s=(i=zE[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qt.warn(l.join(" "));return}rt(new st(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function XE(n,e){if(n!==null&&typeof n!="function")throw ct.create("invalid-log-argument");iE(n,e)}function JE(n){nE(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE="firebase-heartbeat-database",eT=1,Ks="firebase-heartbeat-store";let Za=null;function Vp(){return Za||(Za=Op(ZE,eT,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ks)}catch(t){console.warn(t)}}}}).catch(n=>{throw ct.create("idb-open",{originalErrorMessage:n.message})})),Za}async function tT(n){try{const t=(await Vp()).transaction(Ks),i=await t.objectStore(Ks).get(Fp(n));return await t.done,i}catch(e){if(e instanceof ot)Qt.warn(e.message);else{const t=ct.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qt.warn(t.message)}}}async function ad(n,e){try{const i=(await Vp()).transaction(Ks,"readwrite");await i.objectStore(Ks).put(e,Fp(n)),await i.done}catch(t){if(t instanceof ot)Qt.warn(t.message);else{const i=ct.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Qt.warn(i.message)}}}function Fp(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT=1024,iT=30*24*60*60*1e3;class sT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new oT(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ld();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=iT}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Qt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ld(),{heartbeatsToSend:i,unsentEntries:s}=rT(this._heartbeatsCache.heartbeats),r=lo(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Qt.warn(t),""}}}function ld(){return new Date().toISOString().substring(0,10)}function rT(n,e=nT){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),cd(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),cd(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class oT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ac()?lc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await tT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ad(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ad(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function cd(n){return lo(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(n){rt(new st("platform-logger",e=>new pE(e),"PRIVATE")),rt(new st("heartbeat",e=>new sT(e),"PRIVATE")),ke(fo,Tl,n),ke(fo,Tl,"esm2017"),ke("fire-js","")}aT("");const MN=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:ot,SDK_VERSION:tn,_DEFAULT_ENTRY_NAME:Gs,_addComponent:wl,_addOrOverwriteComponent:WE,_apps:vn,_clearComponents:HE,_components:Mi,_getProvider:Dn,_isFirebaseApp:xp,_isFirebaseServerApp:ft,_registerComponent:rt,_removeServiceInstance:$E,_serverApps:Li,deleteApp:Mp,getApp:Go,getApps:YE,initializeApp:hc,initializeServerApp:QE,onLog:XE,registerVersion:ke,setLogLevel:JE},Symbol.toStringTag,{value:"Module"}));var lT="firebase",cT="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ke(lT,cT,"app");function dc(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function Up(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uT=Up,Bp=new si("auth","Firebase",Up());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=new lr("@firebase/auth");function hT(n,...e){po.logLevel<=G.WARN&&po.warn(`Auth (${tn}): ${n}`,...e)}function Xr(n,...e){po.logLevel<=G.ERROR&&po.error(`Auth (${tn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(n,...e){throw pc(n,...e)}function mt(n,...e){return pc(n,...e)}function fc(n,e,t){const i=Object.assign(Object.assign({},uT()),{[e]:t});return new si("auth","Firebase",i).create(e,{appName:n.name})}function _n(n){return fc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dT(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&It(n,"argument-error"),fc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pc(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Bp.create(n,...e)}function j(n,e,...t){if(!n)throw pc(e,...t)}function qt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Xr(e),new Error(e)}function Yt(n,e){n||qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function fT(){return ud()==="http:"||ud()==="https:"}function ud(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fT()||oc()||"connection"in navigator)?navigator.onLine:!0}function _T(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Yt(t>e,"Short delay should be less than long delay!"),this.isMobile=rc()||Cp()}get(){return pT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(n,e){Yt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=new cr(3e4,6e4);function Ko(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Xi(n,e,t,i,s={}){return jp(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const l=Yi(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:c},r);return Ov()||(u.referrerPolicy="no-referrer"),qp.fetch()(Wp(n,n.config.apiHost,t,l),u)})}async function jp(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},mT),e);try{const s=new yT(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw qr(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw qr(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw qr(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw qr(n,"user-disabled",o);const f=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw fc(n,f,u);It(n,f)}}catch(s){if(s instanceof ot)throw s;It(n,"network-request-failed",{message:String(s)})}}async function zp(n,e,t,i,s={}){const r=await Xi(n,e,t,i,s);return"mfaPendingCredential"in r&&It(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Wp(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?_c(n.config,s):`${n.config.apiScheme}://${s}`}class yT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(mt(this.auth,"network-request-failed")),gT.get())})}}function qr(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=mt(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vT(n,e){return Xi(n,"POST","/v1/accounts:delete",e)}async function $p(n,e){return Xi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ET(n,e=!1){const t=oe(n),i=await t.getIdToken(e),s=mc(i);j(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:xs(el(s.auth_time)),issuedAtTime:xs(el(s.iat)),expirationTime:xs(el(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function el(n){return Number(n)*1e3}function mc(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Xr("JWT malformed, contained fewer than 3 sections"),null;try{const s=co(t);return s?JSON.parse(s):(Xr("Failed to decode base64 JWT payload"),null)}catch(s){return Xr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function hd(n){const e=mc(n);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qs(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ot&&TT(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function TT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=xs(this.lastLoginAt),this.creationTime=xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _o(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Qs(n,$p(t,{idToken:i}));j(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Hp(r.providerUserInfo):[],l=RT(n.providerData,o),c=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new Rl(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(n,p)}async function IT(n){const e=oe(n);await _o(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RT(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Hp(n){return n.map(e=>{var{providerId:t}=e,i=dc(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CT(n,e){const t=await jp(n,{},async()=>{const i=Yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=Wp(n,s,"/v1/token",`key=${r}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",qp.fetch()(o,{method:"POST",headers:l,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function AT(n,e){return Xi(n,"POST","/v2/accounts:revokeToken",Ko(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){j(e.length!==0,"internal-error");const t=hd(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await CT(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new Ii;return i&&(j(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(j(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(j(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ii,this.toJSON())}_performRefresh(){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(n,e){j(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class jt{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=dc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Rl(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Qs(this,this.stsTokenManager.getToken(this.auth,e));return j(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ET(this,e)}reload(){return IT(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await _o(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ft(this.auth.app))return Promise.reject(_n(this.auth));const e=await this.getIdToken();return await Qs(this,vT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,l,c,u,f;const p=(i=t.displayName)!==null&&i!==void 0?i:void 0,m=(s=t.email)!==null&&s!==void 0?s:void 0,E=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,A=(o=t.photoURL)!==null&&o!==void 0?o:void 0,k=(l=t.tenantId)!==null&&l!==void 0?l:void 0,S=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,F=(u=t.createdAt)!==null&&u!==void 0?u:void 0,q=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:M,emailVerified:$,isAnonymous:we,providerData:ie,stsTokenManager:w}=t;j(M&&w,e,"internal-error");const g=Ii.fromJSON(this.name,w);j(typeof M=="string",e,"internal-error"),an(p,e.name),an(m,e.name),j(typeof $=="boolean",e,"internal-error"),j(typeof we=="boolean",e,"internal-error"),an(E,e.name),an(A,e.name),an(k,e.name),an(S,e.name),an(F,e.name),an(q,e.name);const y=new jt({uid:M,auth:e,email:m,emailVerified:$,displayName:p,isAnonymous:we,photoURL:A,phoneNumber:E,tenantId:k,stsTokenManager:g,createdAt:F,lastLoginAt:q});return ie&&Array.isArray(ie)&&(y.providerData=ie.map(T=>Object.assign({},T))),S&&(y._redirectEventId=S),y}static async _fromIdTokenResponse(e,t,i=!1){const s=new Ii;s.updateFromServerResponse(t);const r=new jt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await _o(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];j(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Hp(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),l=new Ii;l.updateFromIdToken(i);const c=new jt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Rl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd=new Map;function zt(n){Yt(n instanceof Function,"Expected a class definition");let e=dd.get(n);return e?(Yt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,dd.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Gp.type="NONE";const fd=Gp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(n,e,t){return`firebase:${n}:${e}:${t}`}class Ri{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Jr(this.userKey,s.apiKey,r),this.fullPersistenceKey=Jr("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ri(zt(fd),e,i);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=s[0]||zt(fd);const o=Jr(i,e.config.apiKey,e.name);let l=null;for(const u of t)try{const f=await u._get(o);if(f){const p=jt._fromJSON(e,f);u!==r&&(l=p),r=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Ri(r,e,i):(r=c[0],l&&await r._set(o,l.toJSON()),await Promise.all(t.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Ri(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zp(e))return"Blackberry";if(e_(e))return"Webos";if(Qp(e))return"Safari";if((e.includes("chrome/")||Yp(e))&&!e.includes("edge/"))return"Chrome";if(Jp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Kp(n=ze()){return/firefox\//i.test(n)}function Qp(n=ze()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yp(n=ze()){return/crios\//i.test(n)}function Xp(n=ze()){return/iemobile/i.test(n)}function Jp(n=ze()){return/android/i.test(n)}function Zp(n=ze()){return/blackberry/i.test(n)}function e_(n=ze()){return/webos/i.test(n)}function gc(n=ze()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function bT(n=ze()){var e;return gc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ST(){return xv()&&document.documentMode===10}function t_(n=ze()){return gc(n)||Jp(n)||e_(n)||Zp(n)||/windows phone/i.test(n)||Xp(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(n,e=[]){let t;switch(n){case"Browser":t=pd(ze());break;case"Worker":t=`${pd(ze())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${tn}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,l)=>{try{const c=e(r);o(c)}catch(c){l(c)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kT(n,e={}){return Xi(n,"GET","/v2/passwordPolicy",Ko(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=6;class DT{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:NT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _d(this),this.idTokenSubscription=new _d(this),this.beforeStateQueue=new PT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=zt(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Ri.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await $p(this,{idToken:e}),i=await jt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ft(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _o(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_T()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ft(this.app))return Promise.reject(_n(this));const t=e?oe(e):null;return t&&j(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ft(this.app)?Promise.reject(_n(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ft(this.app)?Promise.reject(_n(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kT(this),t=new DT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new si("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await AT(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&zt(e)||this._popupRedirectResolver;j(t,this,"argument-error"),this.redirectPersistenceManager=await Ri.create(this,[zt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,i,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=n_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&hT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ur(n){return oe(n)}class _d{constructor(e){this.auth=e,this.observer=null,this.addObserver=jv(t=>this.observer=t)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xT(n){yc=n}function LT(n){return yc.loadJS(n)}function MT(){return yc.gapiScript}function VT(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(n,e){const t=Dn(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Hs(r,e??{}))return s;It(s,"already-initialized")}return t.initialize({options:e})}function UT(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(zt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function BT(n,e,t){const i=ur(n);j(i._canInitEmulator,i,"emulator-config-failed"),j(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=i_(e),{host:o,port:l}=qT(e),c=l===null?"":`:${l}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),jT()}function i_(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function qT(n){const e=i_(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:md(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:md(o)}}}function md(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function jT(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return qt("not implemented")}_getIdTokenResponse(e){return qt("not implemented")}_linkToIdToken(e,t){return qt("not implemented")}_getReauthenticationResolver(e){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(n,e){return zp(n,"POST","/v1/accounts:signInWithIdp",Ko(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT="http://localhost";class Qn extends s_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):It("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=dc(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Qn(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ci(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ci(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ci(e,t)}buildRequest(){const e={requestUri:zT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Yi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends vc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends hr{constructor(){super("facebook.com")}static credential(e){return Qn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends hr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Qn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return cn.credential(t,i)}catch{return null}}}cn.GOOGLE_SIGN_IN_METHOD="google.com";cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends hr{constructor(){super("github.com")}static credential(e){return Qn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.GITHUB_SIGN_IN_METHOD="github.com";un.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends hr{constructor(){super("twitter.com")}static credential(e,t){return Qn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return hn.credential(t,i)}catch{return null}}}hn.TWITTER_SIGN_IN_METHOD="twitter.com";hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WT(n,e){return zp(n,"POST","/v1/accounts:signUp",Ko(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await jt._fromIdTokenResponse(e,i,s),o=gd(i);return new En({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=gd(i);return new En({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function gd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VN(n){var e;if(ft(n.app))return Promise.reject(_n(n));const t=ur(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new En({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await WT(t,{returnSecureToken:!0}),s=await En._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo extends ot{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,mo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new mo(e,t,i,s)}}function r_(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?mo._fromErrorAndOperation(n,r,e,i):r})}async function $T(n,e,t=!1){const i=await Qs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return En._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HT(n,e,t=!1){const{auth:i}=n;if(ft(i.app))return Promise.reject(_n(i));const s="reauthenticate";try{const r=await Qs(n,r_(i,s,e,n),t);j(r.idToken,i,"internal-error");const o=mc(r.idToken);j(o,i,"internal-error");const{sub:l}=o;return j(n.uid===l,i,"user-mismatch"),En._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&It(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GT(n,e,t=!1){if(ft(n.app))return Promise.reject(_n(n));const i="signIn",s=await r_(n,i,e),r=await En._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}function KT(n,e,t,i){return oe(n).onIdTokenChanged(e,t,i)}function QT(n,e,t){return oe(n).beforeAuthStateChanged(e,t)}function YT(n,e,t,i){return oe(n).onAuthStateChanged(e,t,i)}function XT(n){return oe(n).signOut()}const go="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(go,"1"),this.storage.removeItem(go),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT=1e3,ZT=10;class a_ extends o_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=t_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);ST()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ZT):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},JT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}a_.type="LOCAL";const ew=a_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_ extends o_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}l_.type="SESSION";const c_=l_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Qo(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(o).map(async u=>u(t.origin,r)),c=await tw(l);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((l,c)=>{const u=Ec("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(m.data.response);break;default:clearTimeout(f),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return window}function iw(n){vt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(){return typeof vt().WorkerGlobalScope<"u"&&typeof vt().importScripts=="function"}async function sw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ow(){return u_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_="firebaseLocalStorageDb",aw=1,yo="firebaseLocalStorage",d_="fbase_key";class dr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Yo(n,e){return n.transaction([yo],e?"readwrite":"readonly").objectStore(yo)}function lw(){const n=indexedDB.deleteDatabase(h_);return new dr(n).toPromise()}function Cl(){const n=indexedDB.open(h_,aw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(yo,{keyPath:d_})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(yo)?e(i):(i.close(),await lw(),e(await Cl()))})})}async function yd(n,e,t){const i=Yo(n,!0).put({[d_]:e,value:t});return new dr(i).toPromise()}async function cw(n,e){const t=Yo(n,!1).get(e),i=await new dr(t).toPromise();return i===void 0?null:i.value}function vd(n,e){const t=Yo(n,!0).delete(e);return new dr(t).toPromise()}const uw=800,hw=3;class f_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cl(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>hw)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return u_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qo._getInstance(ow()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await sw(),!this.activeServiceWorker)return;this.sender=new nw(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cl();return await yd(e,go,"1"),await vd(e,go),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>yd(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>cw(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>vd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Yo(s,!1).getAll();return new dr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}f_.type="LOCAL";const dw=f_;new cr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(n,e){return e?zt(e):(j(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc extends s_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ci(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ci(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ci(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function fw(n){return GT(n.auth,new Tc(n),n.bypassAuthState)}function pw(n){const{auth:e,user:t}=n;return j(t,e,"internal-error"),HT(t,new Tc(n),n.bypassAuthState)}async function _w(n){const{auth:e,user:t}=n;return j(t,e,"internal-error"),$T(t,new Tc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fw;case"linkViaPopup":case"linkViaRedirect":return _w;case"reauthViaPopup":case"reauthViaRedirect":return pw;default:It(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=new cr(2e3,1e4);async function FN(n,e,t){if(ft(n.app))return Promise.reject(mt(n,"operation-not-supported-in-this-environment"));const i=ur(n);dT(n,e,vc);const s=p_(i,t);return new qn(i,"signInViaPopup",e,s).executeNotNull()}class qn extends __{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,qn.currentPopupAction&&qn.currentPopupAction.cancel(),qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=Ec();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mw.get())};e()}}qn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw="pendingRedirect",Zr=new Map;class yw extends __{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Zr.get(this.auth._key());if(!e){try{const i=await vw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Zr.set(this.auth._key(),e)}return this.bypassAuthState||Zr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vw(n,e){const t=ww(e),i=Tw(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Ew(n,e){Zr.set(n._key(),e)}function Tw(n){return zt(n._redirectPersistence)}function ww(n){return Jr(gw,n.config.apiKey,n.name)}async function Iw(n,e,t=!1){if(ft(n.app))return Promise.reject(_n(n));const i=ur(n),s=p_(i,e),o=await new yw(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=10*60*1e3;class Cw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Aw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!m_(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(mt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Rw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ed(e))}saveEventToCache(e){this.cachedEventUids.add(Ed(e)),this.lastProcessedEventTime=Date.now()}}function Ed(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function m_({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Aw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return m_(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bw(n,e={}){return Xi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Pw=/^https?/;async function kw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await bw(n);for(const t of e)try{if(Nw(t))return}catch{}It(n,"unauthorized-domain")}function Nw(n){const e=Il(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Pw.test(t))return!1;if(Sw.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=new cr(3e4,6e4);function Td(){const n=vt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Ow(n){return new Promise((e,t)=>{var i,s,r;function o(){Td(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Td(),t(mt(n,"network-request-failed"))},timeout:Dw.get()})}if(!((s=(i=vt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=vt().gapi)===null||r===void 0)&&r.load)o();else{const l=VT("iframefcb");return vt()[l]=()=>{gapi.load?o():t(mt(n,"network-request-failed"))},LT(`${MT()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw eo=null,e})}let eo=null;function xw(n){return eo=eo||Ow(n),eo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=new cr(5e3,15e3),Mw="__/auth/iframe",Vw="emulator/auth/iframe",Fw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Uw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bw(n){const e=n.config;j(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?_c(e,Vw):`https://${n.config.authDomain}/${Mw}`,i={apiKey:e.apiKey,appName:n.name,v:tn},s=Uw.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Yi(i).slice(1)}`}async function qw(n){const e=await xw(n),t=vt().gapi;return j(t,n,"internal-error"),e.open({where:document.body,url:Bw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fw,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=mt(n,"network-request-failed"),l=vt().setTimeout(()=>{r(o)},Lw.get());function c(){vt().clearTimeout(l),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zw=500,Ww=600,$w="_blank",Hw="http://localhost";class wd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Gw(n,e,t,i=zw,s=Ww){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const c=Object.assign(Object.assign({},jw),{width:i.toString(),height:s.toString(),top:r,left:o}),u=ze().toLowerCase();t&&(l=Yp(u)?$w:t),Kp(u)&&(e=e||Hw,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[E,A])=>`${m}${E}=${A},`,"");if(bT(u)&&l!=="_self")return Kw(e||"",l),new wd(null);const p=window.open(e||"",l,f);j(p,n,"popup-blocked");try{p.focus()}catch{}return new wd(p)}function Kw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw="__/auth/handler",Yw="emulator/auth/handler",Xw=encodeURIComponent("fac");async function Id(n,e,t,i,s,r){j(n.config.authDomain,n,"auth-domain-config-required"),j(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:tn,eventId:s};if(e instanceof vc){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",uo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof hr){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),u=c?`#${Xw}=${encodeURIComponent(c)}`:"";return`${Jw(n)}?${Yi(l).slice(1)}${u}`}function Jw({config:n}){return n.emulator?_c(n,Yw):`https://${n.authDomain}/${Qw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl="webStorageSupport";class Zw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=c_,this._completeRedirectFn=Iw,this._overrideRedirectResult=Ew}async _openPopup(e,t,i,s){var r;Yt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Id(e,t,i,Il(),s);return Gw(e,o,Ec())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Id(e,t,i,Il(),s);return iw(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Yt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await qw(e),i=new Cw(e);return t.register("authEvent",s=>(j(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(tl,{type:tl},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[tl];o!==void 0&&t(!!o),It(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=kw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return t_()||Qp()||gc()}}const eI=Zw;var Rd="@firebase/auth",Cd="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iI(n){rt(new st("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=i.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:n_(n)},u=new OT(i,s,r,c);return UT(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),rt(new st("auth-internal",e=>{const t=ur(e.getProvider("auth").getImmediate());return(i=>new tI(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ke(Rd,Cd,nI(n)),ke(Rd,Cd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=5*60,rI=wp("authIdTokenMaxAge")||sI;let Ad=null;const oI=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>rI)return;const s=t==null?void 0:t.token;Ad!==s&&(Ad=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function aI(n=Go()){const e=Dn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=FT(n,{popupRedirectResolver:eI,persistence:[dw,ew,c_]}),i=wp("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=oI(r.toString());QT(t,o,()=>o(t.currentUser)),KT(t,l=>o(l))}}const s=vp("auth");return s&&BT(t,`http://${s}`),t}function lI(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}xT({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=mt("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",lI().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iI("Browser");var bd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hn,g_;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function y(){}y.prototype=g.prototype,w.D=g.prototype,w.prototype=new y,w.prototype.constructor=w,w.C=function(T,I,C){for(var v=Array(arguments.length-2),Mt=2;Mt<arguments.length;Mt++)v[Mt-2]=arguments[Mt];return g.prototype[I].apply(T,v)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,g,y){y||(y=0);var T=Array(16);if(typeof g=="string")for(var I=0;16>I;++I)T[I]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(I=0;16>I;++I)T[I]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=w.g[0],y=w.g[1],I=w.g[2];var C=w.g[3],v=g+(C^y&(I^C))+T[0]+3614090360&4294967295;g=y+(v<<7&4294967295|v>>>25),v=C+(I^g&(y^I))+T[1]+3905402710&4294967295,C=g+(v<<12&4294967295|v>>>20),v=I+(y^C&(g^y))+T[2]+606105819&4294967295,I=C+(v<<17&4294967295|v>>>15),v=y+(g^I&(C^g))+T[3]+3250441966&4294967295,y=I+(v<<22&4294967295|v>>>10),v=g+(C^y&(I^C))+T[4]+4118548399&4294967295,g=y+(v<<7&4294967295|v>>>25),v=C+(I^g&(y^I))+T[5]+1200080426&4294967295,C=g+(v<<12&4294967295|v>>>20),v=I+(y^C&(g^y))+T[6]+2821735955&4294967295,I=C+(v<<17&4294967295|v>>>15),v=y+(g^I&(C^g))+T[7]+4249261313&4294967295,y=I+(v<<22&4294967295|v>>>10),v=g+(C^y&(I^C))+T[8]+1770035416&4294967295,g=y+(v<<7&4294967295|v>>>25),v=C+(I^g&(y^I))+T[9]+2336552879&4294967295,C=g+(v<<12&4294967295|v>>>20),v=I+(y^C&(g^y))+T[10]+4294925233&4294967295,I=C+(v<<17&4294967295|v>>>15),v=y+(g^I&(C^g))+T[11]+2304563134&4294967295,y=I+(v<<22&4294967295|v>>>10),v=g+(C^y&(I^C))+T[12]+1804603682&4294967295,g=y+(v<<7&4294967295|v>>>25),v=C+(I^g&(y^I))+T[13]+4254626195&4294967295,C=g+(v<<12&4294967295|v>>>20),v=I+(y^C&(g^y))+T[14]+2792965006&4294967295,I=C+(v<<17&4294967295|v>>>15),v=y+(g^I&(C^g))+T[15]+1236535329&4294967295,y=I+(v<<22&4294967295|v>>>10),v=g+(I^C&(y^I))+T[1]+4129170786&4294967295,g=y+(v<<5&4294967295|v>>>27),v=C+(y^I&(g^y))+T[6]+3225465664&4294967295,C=g+(v<<9&4294967295|v>>>23),v=I+(g^y&(C^g))+T[11]+643717713&4294967295,I=C+(v<<14&4294967295|v>>>18),v=y+(C^g&(I^C))+T[0]+3921069994&4294967295,y=I+(v<<20&4294967295|v>>>12),v=g+(I^C&(y^I))+T[5]+3593408605&4294967295,g=y+(v<<5&4294967295|v>>>27),v=C+(y^I&(g^y))+T[10]+38016083&4294967295,C=g+(v<<9&4294967295|v>>>23),v=I+(g^y&(C^g))+T[15]+3634488961&4294967295,I=C+(v<<14&4294967295|v>>>18),v=y+(C^g&(I^C))+T[4]+3889429448&4294967295,y=I+(v<<20&4294967295|v>>>12),v=g+(I^C&(y^I))+T[9]+568446438&4294967295,g=y+(v<<5&4294967295|v>>>27),v=C+(y^I&(g^y))+T[14]+3275163606&4294967295,C=g+(v<<9&4294967295|v>>>23),v=I+(g^y&(C^g))+T[3]+4107603335&4294967295,I=C+(v<<14&4294967295|v>>>18),v=y+(C^g&(I^C))+T[8]+1163531501&4294967295,y=I+(v<<20&4294967295|v>>>12),v=g+(I^C&(y^I))+T[13]+2850285829&4294967295,g=y+(v<<5&4294967295|v>>>27),v=C+(y^I&(g^y))+T[2]+4243563512&4294967295,C=g+(v<<9&4294967295|v>>>23),v=I+(g^y&(C^g))+T[7]+1735328473&4294967295,I=C+(v<<14&4294967295|v>>>18),v=y+(C^g&(I^C))+T[12]+2368359562&4294967295,y=I+(v<<20&4294967295|v>>>12),v=g+(y^I^C)+T[5]+4294588738&4294967295,g=y+(v<<4&4294967295|v>>>28),v=C+(g^y^I)+T[8]+2272392833&4294967295,C=g+(v<<11&4294967295|v>>>21),v=I+(C^g^y)+T[11]+1839030562&4294967295,I=C+(v<<16&4294967295|v>>>16),v=y+(I^C^g)+T[14]+4259657740&4294967295,y=I+(v<<23&4294967295|v>>>9),v=g+(y^I^C)+T[1]+2763975236&4294967295,g=y+(v<<4&4294967295|v>>>28),v=C+(g^y^I)+T[4]+1272893353&4294967295,C=g+(v<<11&4294967295|v>>>21),v=I+(C^g^y)+T[7]+4139469664&4294967295,I=C+(v<<16&4294967295|v>>>16),v=y+(I^C^g)+T[10]+3200236656&4294967295,y=I+(v<<23&4294967295|v>>>9),v=g+(y^I^C)+T[13]+681279174&4294967295,g=y+(v<<4&4294967295|v>>>28),v=C+(g^y^I)+T[0]+3936430074&4294967295,C=g+(v<<11&4294967295|v>>>21),v=I+(C^g^y)+T[3]+3572445317&4294967295,I=C+(v<<16&4294967295|v>>>16),v=y+(I^C^g)+T[6]+76029189&4294967295,y=I+(v<<23&4294967295|v>>>9),v=g+(y^I^C)+T[9]+3654602809&4294967295,g=y+(v<<4&4294967295|v>>>28),v=C+(g^y^I)+T[12]+3873151461&4294967295,C=g+(v<<11&4294967295|v>>>21),v=I+(C^g^y)+T[15]+530742520&4294967295,I=C+(v<<16&4294967295|v>>>16),v=y+(I^C^g)+T[2]+3299628645&4294967295,y=I+(v<<23&4294967295|v>>>9),v=g+(I^(y|~C))+T[0]+4096336452&4294967295,g=y+(v<<6&4294967295|v>>>26),v=C+(y^(g|~I))+T[7]+1126891415&4294967295,C=g+(v<<10&4294967295|v>>>22),v=I+(g^(C|~y))+T[14]+2878612391&4294967295,I=C+(v<<15&4294967295|v>>>17),v=y+(C^(I|~g))+T[5]+4237533241&4294967295,y=I+(v<<21&4294967295|v>>>11),v=g+(I^(y|~C))+T[12]+1700485571&4294967295,g=y+(v<<6&4294967295|v>>>26),v=C+(y^(g|~I))+T[3]+2399980690&4294967295,C=g+(v<<10&4294967295|v>>>22),v=I+(g^(C|~y))+T[10]+4293915773&4294967295,I=C+(v<<15&4294967295|v>>>17),v=y+(C^(I|~g))+T[1]+2240044497&4294967295,y=I+(v<<21&4294967295|v>>>11),v=g+(I^(y|~C))+T[8]+1873313359&4294967295,g=y+(v<<6&4294967295|v>>>26),v=C+(y^(g|~I))+T[15]+4264355552&4294967295,C=g+(v<<10&4294967295|v>>>22),v=I+(g^(C|~y))+T[6]+2734768916&4294967295,I=C+(v<<15&4294967295|v>>>17),v=y+(C^(I|~g))+T[13]+1309151649&4294967295,y=I+(v<<21&4294967295|v>>>11),v=g+(I^(y|~C))+T[4]+4149444226&4294967295,g=y+(v<<6&4294967295|v>>>26),v=C+(y^(g|~I))+T[11]+3174756917&4294967295,C=g+(v<<10&4294967295|v>>>22),v=I+(g^(C|~y))+T[2]+718787259&4294967295,I=C+(v<<15&4294967295|v>>>17),v=y+(C^(I|~g))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(I+(v<<21&4294967295|v>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+C&4294967295}i.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var y=g-this.blockSize,T=this.B,I=this.h,C=0;C<g;){if(I==0)for(;C<=y;)s(this,w,C),C+=this.blockSize;if(typeof w=="string"){for(;C<g;)if(T[I++]=w.charCodeAt(C++),I==this.blockSize){s(this,T),I=0;break}}else for(;C<g;)if(T[I++]=w[C++],I==this.blockSize){s(this,T),I=0;break}}this.h=I,this.o+=g},i.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var y=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=y&255,y/=256;for(this.u(w),w=Array(16),g=y=0;4>g;++g)for(var T=0;32>T;T+=8)w[y++]=this.g[g]>>>T&255;return w};function r(w,g){var y=l;return Object.prototype.hasOwnProperty.call(y,w)?y[w]:y[w]=g(w)}function o(w,g){this.h=g;for(var y=[],T=!0,I=w.length-1;0<=I;I--){var C=w[I]|0;T&&C==g||(y[I]=C,T=!1)}this.g=y}var l={};function c(w){return-128<=w&&128>w?r(w,function(g){return new o([g|0],0>g?-1:0)}):new o([w|0],0>w?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return S(u(-w));for(var g=[],y=1,T=0;w>=y;T++)g[T]=w/y|0,y*=4294967296;return new o(g,0)}function f(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return S(f(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(g,8)),T=p,I=0;I<w.length;I+=8){var C=Math.min(8,w.length-I),v=parseInt(w.substring(I,I+C),g);8>C?(C=u(Math.pow(g,C)),T=T.j(C).add(u(v))):(T=T.j(y),T=T.add(u(v)))}return T}var p=c(0),m=c(1),E=c(16777216);n=o.prototype,n.m=function(){if(k(this))return-S(this).m();for(var w=0,g=1,y=0;y<this.g.length;y++){var T=this.i(y);w+=(0<=T?T:4294967296+T)*g,g*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(A(this))return"0";if(k(this))return"-"+S(this).toString(w);for(var g=u(Math.pow(w,6)),y=this,T="";;){var I=$(y,g).g;y=F(y,I.j(g));var C=((0<y.g.length?y.g[0]:y.h)>>>0).toString(w);if(y=I,A(y))return C+T;for(;6>C.length;)C="0"+C;T=C+T}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function A(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function k(w){return w.h==-1}n.l=function(w){return w=F(this,w),k(w)?-1:A(w)?0:1};function S(w){for(var g=w.g.length,y=[],T=0;T<g;T++)y[T]=~w.g[T];return new o(y,~w.h).add(m)}n.abs=function(){return k(this)?S(this):this},n.add=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],T=0,I=0;I<=g;I++){var C=T+(this.i(I)&65535)+(w.i(I)&65535),v=(C>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);T=v>>>16,C&=65535,v&=65535,y[I]=v<<16|C}return new o(y,y[y.length-1]&-2147483648?-1:0)};function F(w,g){return w.add(S(g))}n.j=function(w){if(A(this)||A(w))return p;if(k(this))return k(w)?S(this).j(S(w)):S(S(this).j(w));if(k(w))return S(this.j(S(w)));if(0>this.l(E)&&0>w.l(E))return u(this.m()*w.m());for(var g=this.g.length+w.g.length,y=[],T=0;T<2*g;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var I=0;I<w.g.length;I++){var C=this.i(T)>>>16,v=this.i(T)&65535,Mt=w.i(I)>>>16,as=w.i(I)&65535;y[2*T+2*I]+=v*as,q(y,2*T+2*I),y[2*T+2*I+1]+=C*as,q(y,2*T+2*I+1),y[2*T+2*I+1]+=v*Mt,q(y,2*T+2*I+1),y[2*T+2*I+2]+=C*Mt,q(y,2*T+2*I+2)}for(T=0;T<g;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=g;T<2*g;T++)y[T]=0;return new o(y,0)};function q(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function M(w,g){this.g=w,this.h=g}function $(w,g){if(A(g))throw Error("division by zero");if(A(w))return new M(p,p);if(k(w))return g=$(S(w),g),new M(S(g.g),S(g.h));if(k(g))return g=$(w,S(g)),new M(S(g.g),g.h);if(30<w.g.length){if(k(w)||k(g))throw Error("slowDivide_ only works with positive integers.");for(var y=m,T=g;0>=T.l(w);)y=we(y),T=we(T);var I=ie(y,1),C=ie(T,1);for(T=ie(T,2),y=ie(y,2);!A(T);){var v=C.add(T);0>=v.l(w)&&(I=I.add(y),C=v),T=ie(T,1),y=ie(y,1)}return g=F(w,I.j(g)),new M(I,g)}for(I=p;0<=w.l(g);){for(y=Math.max(1,Math.floor(w.m()/g.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),C=u(y),v=C.j(g);k(v)||0<v.l(w);)y-=T,C=u(y),v=C.j(g);A(C)&&(C=m),I=I.add(C),w=F(w,v)}return new M(I,w)}n.A=function(w){return $(this,w).h},n.and=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)&w.i(T);return new o(y,this.h&w.h)},n.or=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)|w.i(T);return new o(y,this.h|w.h)},n.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)^w.i(T);return new o(y,this.h^w.h)};function we(w){for(var g=w.g.length+1,y=[],T=0;T<g;T++)y[T]=w.i(T)<<1|w.i(T-1)>>>31;return new o(y,w.h)}function ie(w,g){var y=g>>5;g%=32;for(var T=w.g.length-y,I=[],C=0;C<T;C++)I[C]=0<g?w.i(C+y)>>>g|w.i(C+y+1)<<32-g:w.i(C+y);return new o(I,w.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,g_=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Hn=o}).apply(typeof bd<"u"?bd:typeof self<"u"?self:typeof window<"u"?window:{});var jr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var y_,Ps,v_,to,Al,E_,T_,w_;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof jr=="object"&&jr];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var i=t(this);function s(a,h){if(h)e:{var d=i;a=a.split(".");for(var _=0;_<a.length-1;_++){var R=a[_];if(!(R in d))break e;d=d[R]}a=a[a.length-1],_=d[a],h=h(_),h!=_&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function r(a,h){a instanceof String&&(a+="");var d=0,_=!1,R={next:function(){if(!_&&d<a.length){var b=d++;return{value:h(b,a[b]),done:!1}}return _=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(a){return a||function(){return r(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,_),a.apply(h,R)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function E(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var _=d.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function A(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(_,R,b){for(var O=Array(arguments.length-2),se=2;se<arguments.length;se++)O[se-2]=arguments[se];return h.prototype[R].apply(_,O)}}function k(a){const h=a.length;if(0<h){const d=Array(h);for(let _=0;_<h;_++)d[_]=a[_];return d}return[]}function S(a,h){for(let d=1;d<arguments.length;d++){const _=arguments[d];if(c(_)){const R=a.length||0,b=_.length||0;a.length=R+b;for(let O=0;O<b;O++)a[R+O]=_[O]}else a.push(_)}}class F{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function q(a){return/^[\s\xa0]*$/.test(a)}function M(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function $(a){return $[" "](a),a}$[" "]=function(){};var we=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function ie(a,h,d){for(const _ in a)h.call(d,a[_],_,a)}function w(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function g(a){const h={};for(const d in a)h[d]=a[d];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,h){let d,_;for(let R=1;R<arguments.length;R++){_=arguments[R];for(d in _)a[d]=_[d];for(let b=0;b<y.length;b++)d=y[b],Object.prototype.hasOwnProperty.call(_,d)&&(a[d]=_[d])}}function I(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function C(a){l.setTimeout(()=>{throw a},0)}function v(){var a=Ca;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Mt{constructor(){this.h=this.g=null}add(h,d){const _=as.get();_.set(h,d),this.h?this.h.next=_:this.g=_,this.h=_}}var as=new F(()=>new Dy,a=>a.reset());class Dy{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ls,cs=!1,Ca=new Mt,th=()=>{const a=l.Promise.resolve(void 0);ls=()=>{a.then(Oy)}};var Oy=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(d){C(d)}var h=as;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}cs=!1};function nn(){this.s=this.s,this.C=this.C}nn.prototype.s=!1,nn.prototype.ma=function(){this.s||(this.s=!0,this.N())},nn.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Me(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var xy=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function us(a,h){if(Me.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(we){e:{try{$(h.nodeName);var R=!0;break e}catch{}R=!1}R||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ly[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&us.aa.h.call(this)}}A(us,Me);var Ly={2:"touch",3:"pen",4:"mouse"};us.prototype.h=function(){us.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var wr="closure_listenable_"+(1e6*Math.random()|0),My=0;function Vy(a,h,d,_,R){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!_,this.ha=R,this.key=++My,this.da=this.fa=!1}function Ir(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Rr(a){this.src=a,this.g={},this.h=0}Rr.prototype.add=function(a,h,d,_,R){var b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);var O=ba(a,h,_,R);return-1<O?(h=a[O],d||(h.fa=!1)):(h=new Vy(h,this.src,b,!!_,R),h.fa=d,a.push(h)),h};function Aa(a,h){var d=h.type;if(d in a.g){var _=a.g[d],R=Array.prototype.indexOf.call(_,h,void 0),b;(b=0<=R)&&Array.prototype.splice.call(_,R,1),b&&(Ir(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ba(a,h,d,_){for(var R=0;R<a.length;++R){var b=a[R];if(!b.da&&b.listener==h&&b.capture==!!d&&b.ha==_)return R}return-1}var Sa="closure_lm_"+(1e6*Math.random()|0),Pa={};function nh(a,h,d,_,R){if(Array.isArray(h)){for(var b=0;b<h.length;b++)nh(a,h[b],d,_,R);return null}return d=rh(d),a&&a[wr]?a.K(h,d,u(_)?!!_.capture:!!_,R):Fy(a,h,d,!1,_,R)}function Fy(a,h,d,_,R,b){if(!h)throw Error("Invalid event type");var O=u(R)?!!R.capture:!!R,se=Na(a);if(se||(a[Sa]=se=new Rr(a)),d=se.add(h,d,_,O,b),d.proxy)return d;if(_=Uy(),d.proxy=_,_.src=a,_.listener=d,a.addEventListener)xy||(R=O),R===void 0&&(R=!1),a.addEventListener(h.toString(),_,R);else if(a.attachEvent)a.attachEvent(sh(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Uy(){function a(d){return h.call(a.src,a.listener,d)}const h=By;return a}function ih(a,h,d,_,R){if(Array.isArray(h))for(var b=0;b<h.length;b++)ih(a,h[b],d,_,R);else _=u(_)?!!_.capture:!!_,d=rh(d),a&&a[wr]?(a=a.i,h=String(h).toString(),h in a.g&&(b=a.g[h],d=ba(b,d,_,R),-1<d&&(Ir(b[d]),Array.prototype.splice.call(b,d,1),b.length==0&&(delete a.g[h],a.h--)))):a&&(a=Na(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ba(h,d,_,R)),(d=-1<a?h[a]:null)&&ka(d))}function ka(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[wr])Aa(h.i,a);else{var d=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(d,_,a.capture):h.detachEvent?h.detachEvent(sh(d),_):h.addListener&&h.removeListener&&h.removeListener(_),(d=Na(h))?(Aa(d,a),d.h==0&&(d.src=null,h[Sa]=null)):Ir(a)}}}function sh(a){return a in Pa?Pa[a]:Pa[a]="on"+a}function By(a,h){if(a.da)a=!0;else{h=new us(h,this);var d=a.listener,_=a.ha||a.src;a.fa&&ka(a),a=d.call(_,h)}return a}function Na(a){return a=a[Sa],a instanceof Rr?a:null}var Da="__closure_events_fn_"+(1e9*Math.random()>>>0);function rh(a){return typeof a=="function"?a:(a[Da]||(a[Da]=function(h){return a.handleEvent(h)}),a[Da])}function Ve(){nn.call(this),this.i=new Rr(this),this.M=this,this.F=null}A(Ve,nn),Ve.prototype[wr]=!0,Ve.prototype.removeEventListener=function(a,h,d,_){ih(this,a,h,d,_)};function $e(a,h){var d,_=a.F;if(_)for(d=[];_;_=_.F)d.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new Me(h,a);else if(h instanceof Me)h.target=h.target||a;else{var R=h;h=new Me(_,a),T(h,R)}if(R=!0,d)for(var b=d.length-1;0<=b;b--){var O=h.g=d[b];R=Cr(O,_,!0,h)&&R}if(O=h.g=a,R=Cr(O,_,!0,h)&&R,R=Cr(O,_,!1,h)&&R,d)for(b=0;b<d.length;b++)O=h.g=d[b],R=Cr(O,_,!1,h)&&R}Ve.prototype.N=function(){if(Ve.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],_=0;_<d.length;_++)Ir(d[_]);delete a.g[h],a.h--}}this.F=null},Ve.prototype.K=function(a,h,d,_){return this.i.add(String(a),h,!1,d,_)},Ve.prototype.L=function(a,h,d,_){return this.i.add(String(a),h,!0,d,_)};function Cr(a,h,d,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var R=!0,b=0;b<h.length;++b){var O=h[b];if(O&&!O.da&&O.capture==d){var se=O.listener,Ne=O.ha||O.src;O.fa&&Aa(a.i,O),R=se.call(Ne,_)!==!1&&R}}return R&&!_.defaultPrevented}function oh(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function ah(a){a.g=oh(()=>{a.g=null,a.i&&(a.i=!1,ah(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class qy extends nn{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ah(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hs(a){nn.call(this),this.h=a,this.g={}}A(hs,nn);var lh=[];function ch(a){ie(a.g,function(h,d){this.g.hasOwnProperty(d)&&ka(h)},a),a.g={}}hs.prototype.N=function(){hs.aa.N.call(this),ch(this)},hs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Oa=l.JSON.stringify,jy=l.JSON.parse,zy=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function xa(){}xa.prototype.h=null;function uh(a){return a.h||(a.h=a.i())}function hh(){}var ds={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function La(){Me.call(this,"d")}A(La,Me);function Ma(){Me.call(this,"c")}A(Ma,Me);var xn={},dh=null;function Ar(){return dh=dh||new Ve}xn.La="serverreachability";function fh(a){Me.call(this,xn.La,a)}A(fh,Me);function fs(a){const h=Ar();$e(h,new fh(h))}xn.STAT_EVENT="statevent";function ph(a,h){Me.call(this,xn.STAT_EVENT,a),this.stat=h}A(ph,Me);function He(a){const h=Ar();$e(h,new ph(h,a))}xn.Ma="timingevent";function _h(a,h){Me.call(this,xn.Ma,a),this.size=h}A(_h,Me);function ps(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function _s(){this.g=!0}_s.prototype.xa=function(){this.g=!1};function Wy(a,h,d,_,R,b){a.info(function(){if(a.g)if(b)for(var O="",se=b.split("&"),Ne=0;Ne<se.length;Ne++){var Z=se[Ne].split("=");if(1<Z.length){var Fe=Z[0];Z=Z[1];var Ue=Fe.split("_");O=2<=Ue.length&&Ue[1]=="type"?O+(Fe+"="+Z+"&"):O+(Fe+"=redacted&")}}else O=null;else O=b;return"XMLHTTP REQ ("+_+") [attempt "+R+"]: "+h+`
`+d+`
`+O})}function $y(a,h,d,_,R,b,O){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+R+"]: "+h+`
`+d+`
`+b+" "+O})}function di(a,h,d,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Gy(a,d)+(_?" "+_:"")})}function Hy(a,h){a.info(function(){return"TIMEOUT: "+h})}_s.prototype.info=function(){};function Gy(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var _=d[a];if(!(2>_.length)){var R=_[1];if(Array.isArray(R)&&!(1>R.length)){var b=R[0];if(b!="noop"&&b!="stop"&&b!="close")for(var O=1;O<R.length;O++)R[O]=""}}}}return Oa(d)}catch{return h}}var br={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},mh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Va;function Sr(){}A(Sr,xa),Sr.prototype.g=function(){return new XMLHttpRequest},Sr.prototype.i=function(){return{}},Va=new Sr;function sn(a,h,d,_){this.j=a,this.i=h,this.l=d,this.R=_||1,this.U=new hs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new gh}function gh(){this.i=null,this.g="",this.h=!1}var yh={},Fa={};function Ua(a,h,d){a.L=1,a.v=Dr(Vt(h)),a.m=d,a.P=!0,vh(a,null)}function vh(a,h){a.F=Date.now(),Pr(a),a.A=Vt(a.v);var d=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Oh(d.i,"t",_),a.C=0,d=a.j.J,a.h=new gh,a.g=Xh(a.j,d?h:null,!a.m),0<a.O&&(a.M=new qy(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,_=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(lh[0]=R.toString()),R=lh);for(var b=0;b<R.length;b++){var O=nh(d,R[b],_||h.handleEvent,!1,h.h||h);if(!O)break;h.g[O.key]=O}h=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),fs(),Wy(a.i,a.u,a.A,a.l,a.R,a.m)}sn.prototype.ca=function(a){a=a.target;const h=this.M;h&&Ft(a)==3?h.j():this.Y(a)},sn.prototype.Y=function(a){try{if(a==this.g)e:{const Ue=Ft(this.g);var h=this.g.Ba();const _i=this.g.Z();if(!(3>Ue)&&(Ue!=3||this.g&&(this.h.h||this.g.oa()||Bh(this.g)))){this.J||Ue!=4||h==7||(h==8||0>=_i?fs(3):fs(2)),Ba(this);var d=this.g.Z();this.X=d;t:if(Eh(this)){var _=Bh(this.g);a="";var R=_.length,b=Ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ln(this),ms(this);var O="";break t}this.h.i=new l.TextDecoder}for(h=0;h<R;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(b&&h==R-1)});_.length=0,this.h.g+=a,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=d==200,$y(this.i,this.u,this.A,this.l,this.R,Ue,d),this.o){if(this.T&&!this.K){t:{if(this.g){var se,Ne=this.g;if((se=Ne.g?Ne.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(se)){var Z=se;break t}}Z=null}if(d=Z)di(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qa(this,d);else{this.o=!1,this.s=3,He(12),Ln(this),ms(this);break e}}if(this.P){d=!0;let ht;for(;!this.J&&this.C<O.length;)if(ht=Ky(this,O),ht==Fa){Ue==4&&(this.s=4,He(14),d=!1),di(this.i,this.l,null,"[Incomplete Response]");break}else if(ht==yh){this.s=4,He(15),di(this.i,this.l,O,"[Invalid Chunk]"),d=!1;break}else di(this.i,this.l,ht,null),qa(this,ht);if(Eh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ue!=4||O.length!=0||this.h.h||(this.s=1,He(16),d=!1),this.o=this.o&&d,!d)di(this.i,this.l,O,"[Invalid Chunked Response]"),Ln(this),ms(this);else if(0<O.length&&!this.W){this.W=!0;var Fe=this.j;Fe.g==this&&Fe.ba&&!Fe.M&&(Fe.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),Ga(Fe),Fe.M=!0,He(11))}}else di(this.i,this.l,O,null),qa(this,O);Ue==4&&Ln(this),this.o&&!this.J&&(Ue==4?Gh(this.j,this):(this.o=!1,Pr(this)))}else hv(this.g),d==400&&0<O.indexOf("Unknown SID")?(this.s=3,He(12)):(this.s=0,He(13)),Ln(this),ms(this)}}}catch{}finally{}};function Eh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Ky(a,h){var d=a.C,_=h.indexOf(`
`,d);return _==-1?Fa:(d=Number(h.substring(d,_)),isNaN(d)?yh:(_+=1,_+d>h.length?Fa:(h=h.slice(_,_+d),a.C=_+d,h)))}sn.prototype.cancel=function(){this.J=!0,Ln(this)};function Pr(a){a.S=Date.now()+a.I,Th(a,a.I)}function Th(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ps(m(a.ba,a),h)}function Ba(a){a.B&&(l.clearTimeout(a.B),a.B=null)}sn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Hy(this.i,this.A),this.L!=2&&(fs(),He(17)),Ln(this),this.s=2,ms(this)):Th(this,this.S-a)};function ms(a){a.j.G==0||a.J||Gh(a.j,a)}function Ln(a){Ba(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,ch(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function qa(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||ja(d.h,a))){if(!a.K&&ja(d.h,a)&&d.G==3){try{var _=d.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var R=_;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Fr(d),Mr(d);else break e;Ha(d),He(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=ps(m(d.Za,d),6e3));if(1>=Rh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Vn(d,11)}else if((a.K||d.g==a)&&Fr(d),!q(h))for(R=d.Da.g.parse(h),h=0;h<R.length;h++){let Z=R[h];if(d.T=Z[0],Z=Z[1],d.G==2)if(Z[0]=="c"){d.K=Z[1],d.ia=Z[2];const Fe=Z[3];Fe!=null&&(d.la=Fe,d.j.info("VER="+d.la));const Ue=Z[4];Ue!=null&&(d.Aa=Ue,d.j.info("SVER="+d.Aa));const _i=Z[5];_i!=null&&typeof _i=="number"&&0<_i&&(_=1.5*_i,d.L=_,d.j.info("backChannelRequestTimeoutMs_="+_)),_=d;const ht=a.g;if(ht){const Br=ht.g?ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Br){var b=_.h;b.g||Br.indexOf("spdy")==-1&&Br.indexOf("quic")==-1&&Br.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(za(b,b.h),b.h=null))}if(_.D){const Ka=ht.g?ht.g.getResponseHeader("X-HTTP-Session-Id"):null;Ka&&(_.ya=Ka,ae(_.I,_.D,Ka))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),_=d;var O=a;if(_.qa=Yh(_,_.J?_.ia:null,_.W),O.K){Ch(_.h,O);var se=O,Ne=_.L;Ne&&(se.I=Ne),se.B&&(Ba(se),Pr(se)),_.g=O}else $h(_);0<d.i.length&&Vr(d)}else Z[0]!="stop"&&Z[0]!="close"||Vn(d,7);else d.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?Vn(d,7):$a(d):Z[0]!="noop"&&d.l&&d.l.ta(Z),d.v=0)}}fs(4)}catch{}}var Qy=class{constructor(a,h){this.g=a,this.map=h}};function wh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ih(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Rh(a){return a.h?1:a.g?a.g.size:0}function ja(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function za(a,h){a.g?a.g.add(h):a.h=h}function Ch(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}wh.prototype.cancel=function(){if(this.i=Ah(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ah(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return k(a.i)}function Yy(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],d=a.length,_=0;_<d;_++)h.push(a[_]);return h}h=[],d=0;for(_ in a)h[d++]=a[_];return h}function Xy(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const _ in a)h[d++]=_;return h}}}function bh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=Xy(a),_=Yy(a),R=_.length,b=0;b<R;b++)h.call(void 0,_[b],d&&d[b],a)}var Sh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jy(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var _=a[d].indexOf("="),R=null;if(0<=_){var b=a[d].substring(0,_);R=a[d].substring(_+1)}else b=a[d];h(b,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Mn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Mn){this.h=a.h,kr(this,a.j),this.o=a.o,this.g=a.g,Nr(this,a.s),this.l=a.l;var h=a.i,d=new vs;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Ph(this,d),this.m=a.m}else a&&(h=String(a).match(Sh))?(this.h=!1,kr(this,h[1]||"",!0),this.o=gs(h[2]||""),this.g=gs(h[3]||"",!0),Nr(this,h[4]),this.l=gs(h[5]||"",!0),Ph(this,h[6]||"",!0),this.m=gs(h[7]||"")):(this.h=!1,this.i=new vs(null,this.h))}Mn.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ys(h,kh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ys(h,kh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ys(d,d.charAt(0)=="/"?tv:ev,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ys(d,iv)),a.join("")};function Vt(a){return new Mn(a)}function kr(a,h,d){a.j=d?gs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Nr(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Ph(a,h,d){h instanceof vs?(a.i=h,sv(a.i,a.h)):(d||(h=ys(h,nv)),a.i=new vs(h,a.h))}function ae(a,h,d){a.i.set(h,d)}function Dr(a){return ae(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function gs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ys(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,Zy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Zy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var kh=/[#\/\?@]/g,ev=/[#\?:]/g,tv=/[#\?]/g,nv=/[#\?@]/g,iv=/#/g;function vs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function rn(a){a.g||(a.g=new Map,a.h=0,a.i&&Jy(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}n=vs.prototype,n.add=function(a,h){rn(this),this.i=null,a=fi(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Nh(a,h){rn(a),h=fi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Dh(a,h){return rn(a),h=fi(a,h),a.g.has(h)}n.forEach=function(a,h){rn(this),this.g.forEach(function(d,_){d.forEach(function(R){a.call(h,R,_,this)},this)},this)},n.na=function(){rn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let _=0;_<h.length;_++){const R=a[_];for(let b=0;b<R.length;b++)d.push(h[_])}return d},n.V=function(a){rn(this);let h=[];if(typeof a=="string")Dh(this,a)&&(h=h.concat(this.g.get(fi(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},n.set=function(a,h){return rn(this),this.i=null,a=fi(this,a),Dh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Oh(a,h,d){Nh(a,h),0<d.length&&(a.i=null,a.g.set(fi(a,h),k(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var _=h[d];const b=encodeURIComponent(String(_)),O=this.V(_);for(_=0;_<O.length;_++){var R=b;O[_]!==""&&(R+="="+encodeURIComponent(String(O[_]))),a.push(R)}}return this.i=a.join("&")};function fi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function sv(a,h){h&&!a.j&&(rn(a),a.i=null,a.g.forEach(function(d,_){var R=_.toLowerCase();_!=R&&(Nh(this,_),Oh(this,R,d))},a)),a.j=h}function rv(a,h){const d=new _s;if(l.Image){const _=new Image;_.onload=E(on,d,"TestLoadImage: loaded",!0,h,_),_.onerror=E(on,d,"TestLoadImage: error",!1,h,_),_.onabort=E(on,d,"TestLoadImage: abort",!1,h,_),_.ontimeout=E(on,d,"TestLoadImage: timeout",!1,h,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function ov(a,h){const d=new _s,_=new AbortController,R=setTimeout(()=>{_.abort(),on(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(b=>{clearTimeout(R),b.ok?on(d,"TestPingServer: ok",!0,h):on(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(R),on(d,"TestPingServer: error",!1,h)})}function on(a,h,d,_,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),_(d)}catch{}}function av(){this.g=new zy}function lv(a,h,d){const _=d||"";try{bh(a,function(R,b){let O=R;u(R)&&(O=Oa(R)),h.push(_+b+"="+encodeURIComponent(O))})}catch(R){throw h.push(_+"type="+encodeURIComponent("_badmap")),R}}function Or(a){this.l=a.Ub||null,this.j=a.eb||!1}A(Or,xa),Or.prototype.g=function(){return new xr(this.l,this.j)},Or.prototype.i=function(a){return function(){return a}}({});function xr(a,h){Ve.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(xr,Ve),n=xr.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ts(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Es(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ts(this)),this.g&&(this.readyState=3,Ts(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function xh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Es(this):Ts(this),this.readyState==3&&xh(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Es(this))},n.Qa=function(a){this.g&&(this.response=a,Es(this))},n.ga=function(){this.g&&Es(this)};function Es(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ts(a)}n.setRequestHeader=function(a,h){this.u.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Ts(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(xr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Lh(a){let h="";return ie(a,function(d,_){h+=_,h+=":",h+=d,h+=`\r
`}),h}function Wa(a,h,d){e:{for(_ in d){var _=!1;break e}_=!0}_||(d=Lh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ae(a,h,d))}function fe(a){Ve.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(fe,Ve);var cv=/^https?$/i,uv=["POST","PUT"];n=fe.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,h,d,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Va.g(),this.v=this.o?uh(this.o):uh(Va),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(b){Mh(this,b);return}if(a=d||"",d=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var R in _)d.set(R,_[R]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const b of _.keys())d.set(b,_.get(b));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(d.keys()).find(b=>b.toLowerCase()=="content-type"),R=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(uv,h,void 0))||_||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,O]of d)this.g.setRequestHeader(b,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Uh(this),this.u=!0,this.g.send(a),this.u=!1}catch(b){Mh(this,b)}};function Mh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Vh(a),Lr(a)}function Vh(a){a.A||(a.A=!0,$e(a,"complete"),$e(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,$e(this,"complete"),$e(this,"abort"),Lr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Lr(this,!0)),fe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Fh(this):this.bb())},n.bb=function(){Fh(this)};function Fh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Ft(a)!=4||a.Z()!=2)){if(a.u&&Ft(a)==4)oh(a.Ea,0,a);else if($e(a,"readystatechange"),Ft(a)==4){a.h=!1;try{const O=a.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var _;if(_=O===0){var R=String(a.D).match(Sh)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),_=!cv.test(R?R.toLowerCase():"")}d=_}if(d)$e(a,"complete"),$e(a,"success");else{a.m=6;try{var b=2<Ft(a)?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.Z()+"]",Vh(a)}}finally{Lr(a)}}}}function Lr(a,h){if(a.g){Uh(a);const d=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||$e(a,"ready");try{d.onreadystatechange=_}catch{}}}function Uh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function Ft(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<Ft(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),jy(h)}};function Bh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function hv(a){const h={};a=(a.g&&2<=Ft(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(q(a[_]))continue;var d=I(a[_]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const b=h[R]||[];h[R]=b,b.push(d)}w(h,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ws(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function qh(a){this.Aa=0,this.i=[],this.j=new _s,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ws("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ws("baseRetryDelayMs",5e3,a),this.cb=ws("retryDelaySeedMs",1e4,a),this.Wa=ws("forwardChannelMaxRetries",2,a),this.wa=ws("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new wh(a&&a.concurrentRequestLimit),this.Da=new av,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=qh.prototype,n.la=8,n.G=1,n.connect=function(a,h,d,_){He(0),this.W=a,this.H=h||{},d&&_!==void 0&&(this.H.OSID=d,this.H.OAID=_),this.F=this.X,this.I=Yh(this,null,this.W),Vr(this)};function $a(a){if(jh(a),a.G==3){var h=a.U++,d=Vt(a.I);if(ae(d,"SID",a.K),ae(d,"RID",h),ae(d,"TYPE","terminate"),Is(a,d),h=new sn(a,a.j,h),h.L=2,h.v=Dr(Vt(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=Xh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Pr(h)}Qh(a)}function Mr(a){a.g&&(Ga(a),a.g.cancel(),a.g=null)}function jh(a){Mr(a),a.u&&(l.clearTimeout(a.u),a.u=null),Fr(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Vr(a){if(!Ih(a.h)&&!a.s){a.s=!0;var h=a.Ga;ls||th(),cs||(ls(),cs=!0),Ca.add(h,a),a.B=0}}function dv(a,h){return Rh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ps(m(a.Ga,a,h),Kh(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new sn(this,this.j,a);let b=this.o;if(this.S&&(b?(b=g(b),T(b,this.S)):b=this.S),this.m!==null||this.O||(R.H=b,b=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var _=this.i[d];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Wh(this,R,h),d=Vt(this.I),ae(d,"RID",a),ae(d,"CVER",22),this.D&&ae(d,"X-HTTP-Session-Id",this.D),Is(this,d),b&&(this.O?h="headers="+encodeURIComponent(String(Lh(b)))+"&"+h:this.m&&Wa(d,this.m,b)),za(this.h,R),this.Ua&&ae(d,"TYPE","init"),this.P?(ae(d,"$req",h),ae(d,"SID","null"),R.T=!0,Ua(R,d,null)):Ua(R,d,h),this.G=2}}else this.G==3&&(a?zh(this,a):this.i.length==0||Ih(this.h)||zh(this))};function zh(a,h){var d;h?d=h.l:d=a.U++;const _=Vt(a.I);ae(_,"SID",a.K),ae(_,"RID",d),ae(_,"AID",a.T),Is(a,_),a.m&&a.o&&Wa(_,a.m,a.o),d=new sn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Wh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),za(a.h,d),Ua(d,_,h)}function Is(a,h){a.H&&ie(a.H,function(d,_){ae(h,_,d)}),a.l&&bh({},function(d,_){ae(h,_,d)})}function Wh(a,h,d){d=Math.min(a.i.length,d);var _=a.l?m(a.l.Na,a.l,a):null;e:{var R=a.i;let b=-1;for(;;){const O=["count="+d];b==-1?0<d?(b=R[0].g,O.push("ofs="+b)):b=0:O.push("ofs="+b);let se=!0;for(let Ne=0;Ne<d;Ne++){let Z=R[Ne].g;const Fe=R[Ne].map;if(Z-=b,0>Z)b=Math.max(0,R[Ne].g-100),se=!1;else try{lv(Fe,O,"req"+Z+"_")}catch{_&&_(Fe)}}if(se){_=O.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,_}function $h(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ls||th(),cs||(ls(),cs=!0),Ca.add(h,a),a.v=0}}function Ha(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ps(m(a.Fa,a),Kh(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,Hh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ps(m(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,He(10),Mr(this),Hh(this))};function Ga(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Hh(a){a.g=new sn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Vt(a.qa);ae(h,"RID","rpc"),ae(h,"SID",a.K),ae(h,"AID",a.T),ae(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ae(h,"TO",a.ja),ae(h,"TYPE","xmlhttp"),Is(a,h),a.m&&a.o&&Wa(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Dr(Vt(h)),d.m=null,d.P=!0,vh(d,a)}n.Za=function(){this.C!=null&&(this.C=null,Mr(this),Ha(this),He(19))};function Fr(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Gh(a,h){var d=null;if(a.g==h){Fr(a),Ga(a),a.g=null;var _=2}else if(ja(a.h,h))d=h.D,Ch(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var R=a.B;_=Ar(),$e(_,new _h(_,d)),Vr(a)}else $h(a);else if(R=h.s,R==3||R==0&&0<h.X||!(_==1&&dv(a,h)||_==2&&Ha(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),R){case 1:Vn(a,5);break;case 4:Vn(a,10);break;case 3:Vn(a,6);break;default:Vn(a,2)}}}function Kh(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Vn(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),_=a.Xa;const R=!_;_=new Mn(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||kr(_,"https"),Dr(_),R?rv(_.toString(),d):ov(_.toString(),d)}else He(2);a.G=0,a.l&&a.l.sa(h),Qh(a),jh(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),He(2)):(this.j.info("Failed to ping google.com"),He(1))};function Qh(a){if(a.G=0,a.ka=[],a.l){const h=Ah(a.h);(h.length!=0||a.i.length!=0)&&(S(a.ka,h),S(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Yh(a,h,d){var _=d instanceof Mn?Vt(d):new Mn(d);if(_.g!="")h&&(_.g=h+"."+_.g),Nr(_,_.s);else{var R=l.location;_=R.protocol,h=h?h+"."+R.hostname:R.hostname,R=+R.port;var b=new Mn(null);_&&kr(b,_),h&&(b.g=h),R&&Nr(b,R),d&&(b.l=d),_=b}return d=a.D,h=a.ya,d&&h&&ae(_,d,h),ae(_,"VER",a.la),Is(a,_),_}function Xh(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new fe(new Or({eb:d})):new fe(a.pa),h.Ha(a.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jh(){}n=Jh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ur(){}Ur.prototype.g=function(a,h){return new nt(a,h)};function nt(a,h){Ve.call(this),this.g=new qh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!q(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!q(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new pi(this)}A(nt,Ve),nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},nt.prototype.close=function(){$a(this.g)},nt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Oa(a),a=d);h.i.push(new Qy(h.Ya++,a)),h.G==3&&Vr(h)},nt.prototype.N=function(){this.g.l=null,delete this.j,$a(this.g),delete this.g,nt.aa.N.call(this)};function Zh(a){La.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}A(Zh,La);function ed(){Ma.call(this),this.status=1}A(ed,Ma);function pi(a){this.g=a}A(pi,Jh),pi.prototype.ua=function(){$e(this.g,"a")},pi.prototype.ta=function(a){$e(this.g,new Zh(a))},pi.prototype.sa=function(a){$e(this.g,new ed)},pi.prototype.ra=function(){$e(this.g,"b")},Ur.prototype.createWebChannel=Ur.prototype.g,nt.prototype.send=nt.prototype.o,nt.prototype.open=nt.prototype.m,nt.prototype.close=nt.prototype.close,w_=function(){return new Ur},T_=function(){return Ar()},E_=xn,Al={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},br.NO_ERROR=0,br.TIMEOUT=8,br.HTTP_ERROR=6,to=br,mh.COMPLETE="complete",v_=mh,hh.EventType=ds,ds.OPEN="a",ds.CLOSE="b",ds.ERROR="c",ds.MESSAGE="d",Ve.prototype.listen=Ve.prototype.K,Ps=hh,fe.prototype.listenOnce=fe.prototype.L,fe.prototype.getLastError=fe.prototype.Ka,fe.prototype.getLastErrorCode=fe.prototype.Ba,fe.prototype.getStatus=fe.prototype.Z,fe.prototype.getResponseJson=fe.prototype.Oa,fe.prototype.getResponseText=fe.prototype.oa,fe.prototype.send=fe.prototype.ea,fe.prototype.setWithCredentials=fe.prototype.Ha,y_=fe}).apply(typeof jr<"u"?jr:typeof self<"u"?self:typeof window<"u"?window:{});const Sd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qe=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new lr("@firebase/firestore");function yi(){return Yn.logLevel}function x(n,...e){if(Yn.logLevel<=G.DEBUG){const t=e.map(wc);Yn.debug(`Firestore (${Ji}): ${n}`,...t)}}function Xt(n,...e){if(Yn.logLevel<=G.ERROR){const t=e.map(wc);Yn.error(`Firestore (${Ji}): ${n}`,...t)}}function Vi(n,...e){if(Yn.logLevel<=G.WARN){const t=e.map(wc);Yn.warn(`Firestore (${Ji}): ${n}`,...t)}}function wc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(n="Unexpected state"){const e=`FIRESTORE (${Ji}) INTERNAL ASSERTION FAILED: `+n;throw Xt(e),new Error(e)}function te(n,e){n||B()}function W(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends ot{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(qe.UNAUTHENTICATED))}shutdown(){}}class uI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class hI{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){te(this.o===void 0);let i=this.i;const s=c=>this.i!==i?(i=this.i,t(c)):Promise.resolve();let r=new Gn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Gn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Gn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(te(typeof i.accessToken=="string"),new I_(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string"),new qe(e)}}class dI{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class fI{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new dI(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _I{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){te(this.o===void 0);const i=r=>{r.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(te(typeof t.token=="string"),this.R=t.token,new pI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=mI(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%e.length))}return i}}function X(n,e){return n<e?-1:n>e?1:0}function Fi(n,e,t){return n.length===e.length&&n.every((i,s)=>t(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new Re(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new L(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{static fromTimestamp(e){return new z(e)}static min(){return new z(new Re(0,0))}static max(){return new z(new Re(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,t,i){t===void 0?t=0:t>e.length&&B(),i===void 0?i=e.length-t:i>e.length-t&&B(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Ys.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ys?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=e.get(s),o=t.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ue extends Ys{construct(e,t,i){return new ue(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new L(N.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(s=>s.length>0))}return new ue(t)}static emptyPath(){return new ue([])}}const gI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xe extends Ys{construct(e,t,i){return new xe(e,t,i)}static isValidIdentifier(e){return gI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xe(["__name__"])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new L(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new L(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new L(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(i+=l,s++):(r(),s++)}if(r(),o)throw new L(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xe(t)}static emptyPath(){return new xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(ue.fromString(e))}static fromName(e){return new V(ue.fromString(e).popFirst(5))}static empty(){return new V(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ue.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new ue(e.slice()))}}function yI(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(i===1e9?new Re(t+1,0):new Re(t,i));return new Tn(s,V.empty(),e)}function vI(n){return new Tn(n.readTime,n.key,-1)}class Tn{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Tn(z.min(),V.empty(),-1)}static max(){return new Tn(z.max(),V.empty(),-1)}}function EI(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=V.comparator(n.documentKey,e.documentKey),t!==0?t:X(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zi(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==TI)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,i)=>{t(e)})}static reject(e){return new P((t,i)=>{i(e)})}static waitFor(e){return new P((t,i)=>{let s=0,r=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++r,o&&r===s&&t()},c=>i(c))}),o=!0,r===s&&t()})}static or(e){let t=P.resolve(!1);for(const i of e)t=t.next(s=>s?P.resolve(s):i());return t}static forEach(e,t){const i=[];return e.forEach((s,r)=>{i.push(t.call(this,s,r))}),this.waitFor(i)}static mapArray(e,t){return new P((i,s)=>{const r=e.length,o=new Array(r);let l=0;for(let c=0;c<r;c++){const u=c;t(e[u]).next(f=>{o[u]=f,++l,l===r&&i(o)},f=>s(f))}})}static doWhile(e,t){return new P((i,s)=>{const r=()=>{e()===!0?t().next(()=>{r()},s):i()};r()})}}function II(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function es(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Xo.oe=-1;function Jo(n){return n==null}function vo(n){return n===0&&1/n==-1/0}function RI(n){return typeof n=="number"&&Number.isInteger(n)&&!vo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Pd(e)),e=AI(n.get(t),e);return Pd(e)}function AI(n,e){let t=e;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":t+="";break;case"":t+="";break;default:t+=r}}return t}function Pd(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ri(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function C_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Te=class bl{constructor(e,t){this.comparator=e,this.root=t||mn.EMPTY}insert(e,t){return new bl(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,mn.BLACK,null,null))}remove(e){return new bl(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zr(this.root,e,this.comparator,!1)}getReverseIterator(){return new zr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zr(this.root,e,this.comparator,!0)}},zr=class{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},mn=class Ut{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??Ut.RED,this.left=s??Ut.EMPTY,this.right=r??Ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new Ut(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ut.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}};mn.EMPTY=null,mn.RED=!0,mn.BLACK=!1;mn.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(e,t,i,s,r){return this}insert(e,t,i){return new mn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Nd(this.data.getIterator())}getIteratorFrom(e){return new Nd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ce(this.comparator);return t.data=e,t}}class Nd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.fields=e,e.sort(xe.comparator)}static empty(){return new pt([])}unionWith(e){let t=new Ce(xe.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new pt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Fi(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new A_("Invalid base64 string: "+r):r}}(e);return new Le(t)}static fromUint8Array(e){const t=function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r}(e);return new Le(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Le.EMPTY_BYTE_STRING=new Le("");const bI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wn(n){if(te(!!n),typeof n=="string"){let e=0;const t=bI.exec(n);if(te(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ge(n.seconds),nanos:ge(n.nanos)}}function ge(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function In(n){return typeof n=="string"?Le.fromBase64String(n):Le.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Zo(n){const e=n.mapValue.fields.__previous_value__;return Ic(e)?Zo(e):e}function Xs(n){const e=wn(n.mapValue.fields.__local_write_time__.timestampValue);return new Re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e,t,i,s,r,o,l,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class Js{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Js("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Js&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Rn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ic(n)?4:kI(n)?9007199254740991:PI(n)?10:11:B()}function Rt(n,e){if(n===e)return!0;const t=Rn(n);if(t!==Rn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Xs(n).isEqual(Xs(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=wn(s.timestampValue),l=wn(r.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,r){return In(s.bytesValue).isEqual(In(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,r){return ge(s.geoPointValue.latitude)===ge(r.geoPointValue.latitude)&&ge(s.geoPointValue.longitude)===ge(r.geoPointValue.longitude)}(n,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return ge(s.integerValue)===ge(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=ge(s.doubleValue),l=ge(r.doubleValue);return o===l?vo(o)===vo(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return Fi(n.arrayValue.values||[],e.arrayValue.values||[],Rt);case 10:case 11:return function(s,r){const o=s.mapValue.fields||{},l=r.mapValue.fields||{};if(kd(o)!==kd(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Rt(o[c],l[c])))return!1;return!0}(n,e);default:return B()}}function Zs(n,e){return(n.values||[]).find(t=>Rt(t,e))!==void 0}function Ui(n,e){if(n===e)return 0;const t=Rn(n),i=Rn(e);if(t!==i)return X(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return X(n.booleanValue,e.booleanValue);case 2:return function(r,o){const l=ge(r.integerValue||r.doubleValue),c=ge(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return Dd(n.timestampValue,e.timestampValue);case 4:return Dd(Xs(n),Xs(e));case 5:return X(n.stringValue,e.stringValue);case 6:return function(r,o){const l=In(r),c=In(o);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(r,o){const l=r.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=X(l[u],c[u]);if(f!==0)return f}return X(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,o){const l=X(ge(r.latitude),ge(o.latitude));return l!==0?l:X(ge(r.longitude),ge(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Od(n.arrayValue,e.arrayValue);case 10:return function(r,o){var l,c,u,f;const p=r.fields||{},m=o.fields||{},E=(l=p.value)===null||l===void 0?void 0:l.arrayValue,A=(c=m.value)===null||c===void 0?void 0:c.arrayValue,k=X(((u=E==null?void 0:E.values)===null||u===void 0?void 0:u.length)||0,((f=A==null?void 0:A.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:Od(E,A)}(n.mapValue,e.mapValue);case 11:return function(r,o){if(r===Wr.mapValue&&o===Wr.mapValue)return 0;if(r===Wr.mapValue)return 1;if(o===Wr.mapValue)return-1;const l=r.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=X(c[p],f[p]);if(m!==0)return m;const E=Ui(l[c[p]],u[f[p]]);if(E!==0)return E}return X(c.length,f.length)}(n.mapValue,e.mapValue);default:throw B()}}function Dd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return X(n,e);const t=wn(n),i=wn(e),s=X(t.seconds,i.seconds);return s!==0?s:X(t.nanos,i.nanos)}function Od(n,e){const t=n.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const r=Ui(t[s],i[s]);if(r)return r}return X(t.length,i.length)}function Bi(n){return Sl(n)}function Sl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=wn(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return In(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return V.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",s=!0;for(const r of t.values||[])s?s=!1:i+=",",i+=Sl(r);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${Sl(t.fields[o])}`;return s+"}"}(n.mapValue):B()}function no(n){switch(Rn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Zo(n);return e?16+no(e):16;case 5:return 2*n.stringValue.length;case 6:return In(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((s,r)=>s+no(r),0)}(n.arrayValue);case 10:case 11:return function(i){let s=0;return ri(i.fields,(r,o)=>{s+=r.length+no(o)}),s}(n.mapValue);default:throw B()}}function Pl(n){return!!n&&"integerValue"in n}function Rc(n){return!!n&&"arrayValue"in n}function xd(n){return!!n&&"nullValue"in n}function Ld(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function io(n){return!!n&&"mapValue"in n}function PI(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ls(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ri(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Ls(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ls(n.arrayValue.values[t]);return e}return Object.assign({},n)}function kI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.value=e}static empty(){return new at({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!io(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ls(t)}setAll(e){let t=xe.emptyPath(),i={},s=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,i,s),i={},s=[],t=l.popLast()}o?i[l.lastSegment()]=Ls(o):s.push(l.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());io(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Rt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];io(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){ri(t,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new at(Ls(this.value))}}function b_(n){const e=[];return ri(n.fields,(t,i)=>{const s=new xe([t]);if(io(i)){const r=b_(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new pt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t,i,s,r,o,l){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=l}static newInvalidDocument(e){return new je(e,0,z.min(),z.min(),z.min(),at.empty(),0)}static newFoundDocument(e,t,i,s){return new je(e,1,t,z.min(),i,s,0)}static newNoDocument(e,t){return new je(e,2,t,z.min(),z.min(),at.empty(),0)}static newUnknownDocument(e,t){return new je(e,3,t,z.min(),z.min(),at.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t){this.position=e,this.inclusive=t}}function Md(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=V.comparator(V.fromName(o.referenceValue),t.key):i=Ui(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Vd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Rt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,t="asc"){this.field=e,this.dir=t}}function NI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{}class Ie extends S_{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new OI(e,t,i):t==="array-contains"?new MI(e,i):t==="in"?new VI(e,i):t==="not-in"?new FI(e,i):t==="array-contains-any"?new UI(e,i):new Ie(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new xI(e,i):new LI(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ui(t,this.value)):t!==null&&Rn(this.value)===Rn(t)&&this.matchesComparison(Ui(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ct extends S_{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ct(e,t)}matches(e){return P_(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function P_(n){return n.op==="and"}function k_(n){return DI(n)&&P_(n)}function DI(n){for(const e of n.filters)if(e instanceof Ct)return!1;return!0}function kl(n){if(n instanceof Ie)return n.field.canonicalString()+n.op.toString()+Bi(n.value);if(k_(n))return n.filters.map(e=>kl(e)).join(",");{const e=n.filters.map(t=>kl(t)).join(",");return`${n.op}(${e})`}}function N_(n,e){return n instanceof Ie?function(i,s){return s instanceof Ie&&i.op===s.op&&i.field.isEqual(s.field)&&Rt(i.value,s.value)}(n,e):n instanceof Ct?function(i,s){return s instanceof Ct&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,o,l)=>r&&N_(o,s.filters[l]),!0):!1}(n,e):void B()}function D_(n){return n instanceof Ie?function(t){return`${t.field.canonicalString()} ${t.op} ${Bi(t.value)}`}(n):n instanceof Ct?function(t){return t.op.toString()+" {"+t.getFilters().map(D_).join(" ,")+"}"}(n):"Filter"}class OI extends Ie{constructor(e,t,i){super(e,t,i),this.key=V.fromName(i.referenceValue)}matches(e){const t=V.comparator(e.key,this.key);return this.matchesComparison(t)}}class xI extends Ie{constructor(e,t){super(e,"in",t),this.keys=O_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class LI extends Ie{constructor(e,t){super(e,"not-in",t),this.keys=O_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function O_(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>V.fromName(i.referenceValue))}class MI extends Ie{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Rc(t)&&Zs(t.arrayValue,this.value)}}class VI extends Ie{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Zs(this.value.arrayValue,t)}}class FI extends Ie{constructor(e,t){super(e,"not-in",t)}matches(e){if(Zs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Zs(this.value.arrayValue,t)}}class UI extends Ie{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Rc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Zs(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,t=null,i=[],s=[],r=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=l,this.ue=null}}function Fd(n,e=null,t=[],i=[],s=null,r=null,o=null){return new BI(n,e,t,i,s,r,o)}function Cc(n){const e=W(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>kl(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),Jo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Bi(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Bi(i)).join(",")),e.ue=t}return e.ue}function Ac(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!NI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!N_(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Vd(n.startAt,e.startAt)&&Vd(n.endAt,e.endAt)}function Nl(n){return V.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,t=null,i=[],s=[],r=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function qI(n,e,t,i,s,r,o,l){return new ea(n,e,t,i,s,r,o,l)}function bc(n){return new ea(n)}function Ud(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function jI(n){return n.collectionGroup!==null}function Ms(n){const e=W(n);if(e.ce===null){e.ce=[];const t=new Set;for(const r of e.explicitOrderBy)e.ce.push(r),t.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ce(xe.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.ce.push(new To(r,i))}),t.has(xe.keyField().canonicalString())||e.ce.push(new To(xe.keyField(),i))}return e.ce}function Et(n){const e=W(n);return e.le||(e.le=zI(e,Ms(n))),e.le}function zI(n,e){if(n.limitType==="F")return Fd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const r=s.dir==="desc"?"asc":"desc";return new To(s.field,r)});const t=n.endAt?new Eo(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Eo(n.startAt.position,n.startAt.inclusive):null;return Fd(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Dl(n,e,t){return new ea(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ta(n,e){return Ac(Et(n),Et(e))&&n.limitType===e.limitType}function x_(n){return`${Cc(Et(n))}|lt:${n.limitType}`}function vi(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(s=>D_(s)).join(", ")}]`),Jo(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(s=>Bi(s)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(s=>Bi(s)).join(",")),`Target(${i})`}(Et(n))}; limitType=${n.limitType})`}function na(n,e){return e.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):V.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(n,e)&&function(i,s){for(const r of Ms(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(n,e)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(n,e)&&function(i,s){return!(i.startAt&&!function(o,l,c){const u=Md(o,l,c);return o.inclusive?u<=0:u<0}(i.startAt,Ms(i),s)||i.endAt&&!function(o,l,c){const u=Md(o,l,c);return o.inclusive?u>=0:u>0}(i.endAt,Ms(i),s))}(n,e)}function WI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function L_(n){return(e,t)=>{let i=!1;for(const s of Ms(n)){const r=$I(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function $I(n,e,t){const i=n.field.isKeyField()?V.comparator(e.key,t.key):function(r,o,l){const c=o.data.field(r),u=l.data.field(r);return c!==null&&u!==null?Ui(c,u):B()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return B()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ri(this.inner,(t,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return C_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI=new Te(V.comparator);function Jt(){return HI}const M_=new Te(V.comparator);function ks(...n){let e=M_;for(const t of n)e=e.insert(t.key,t);return e}function V_(n){let e=M_;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function jn(){return Vs()}function F_(){return Vs()}function Vs(){return new oi(n=>n.toString(),(n,e)=>n.isEqual(e))}const GI=new Te(V.comparator),KI=new Ce(V.comparator);function Y(...n){let e=KI;for(const t of n)e=e.add(t);return e}const QI=new Ce(X);function YI(){return QI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vo(e)?"-0":e}}function U_(n){return{integerValue:""+n}}function XI(n,e){return RI(e)?U_(e):Sc(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(){this._=void 0}}function JI(n,e,t){return n instanceof wo?function(s,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Ic(r)&&(r=Zo(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(t,e):n instanceof qi?q_(n,e):n instanceof er?j_(n,e):function(s,r){const o=B_(s,r),l=Bd(o)+Bd(s.Pe);return Pl(o)&&Pl(s.Pe)?U_(l):Sc(s.serializer,l)}(n,e)}function ZI(n,e,t){return n instanceof qi?q_(n,e):n instanceof er?j_(n,e):t}function B_(n,e){return n instanceof Io?function(i){return Pl(i)||function(r){return!!r&&"doubleValue"in r}(i)}(e)?e:{integerValue:0}:null}class wo extends ia{}class qi extends ia{constructor(e){super(),this.elements=e}}function q_(n,e){const t=z_(e);for(const i of n.elements)t.some(s=>Rt(s,i))||t.push(i);return{arrayValue:{values:t}}}class er extends ia{constructor(e){super(),this.elements=e}}function j_(n,e){let t=z_(e);for(const i of n.elements)t=t.filter(s=>!Rt(s,i));return{arrayValue:{values:t}}}class Io extends ia{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Bd(n){return ge(n.integerValue||n.doubleValue)}function z_(n){return Rc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,t){this.field=e,this.transform=t}}function tR(n,e){return n.field.isEqual(e.field)&&function(i,s){return i instanceof qi&&s instanceof qi||i instanceof er&&s instanceof er?Fi(i.elements,s.elements,Rt):i instanceof Io&&s instanceof Io?Rt(i.Pe,s.Pe):i instanceof wo&&s instanceof wo}(n.transform,e.transform)}class nR{constructor(e,t){this.version=e,this.transformResults=t}}class Gt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Gt}static exists(e){return new Gt(void 0,e)}static updateTime(e){return new Gt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function so(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class sa{}function W_(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new H_(n.key,Gt.none()):new fr(n.key,n.data,Gt.none());{const t=n.data,i=at.empty();let s=new Ce(xe.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new ai(n.key,i,new pt(s.toArray()),Gt.none())}}function iR(n,e,t){n instanceof fr?function(s,r,o){const l=s.value.clone(),c=jd(s.fieldTransforms,r,o.transformResults);l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof ai?function(s,r,o){if(!so(s.precondition,r))return void r.convertToUnknownDocument(o.version);const l=jd(s.fieldTransforms,r,o.transformResults),c=r.data;c.setAll($_(s)),c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Fs(n,e,t,i){return n instanceof fr?function(r,o,l,c){if(!so(r.precondition,o))return l;const u=r.value.clone(),f=zd(r.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,i):n instanceof ai?function(r,o,l,c){if(!so(r.precondition,o))return l;const u=zd(r.fieldTransforms,c,o),f=o.data;return f.setAll($_(r)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(p=>p.field))}(n,e,t,i):function(r,o,l){return so(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function sR(n,e){let t=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),r=B_(i.transform,s||null);r!=null&&(t===null&&(t=at.empty()),t.set(i.field,r))}return t||null}function qd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Fi(i,s,(r,o)=>tR(r,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class fr extends sa{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ai extends sa{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function $_(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function jd(n,e,t){const i=new Map;te(n.length===t.length);for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,l=e.data.field(r.field);i.set(r.field,ZI(o,l,t[s]))}return i}function zd(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,JI(r,o,e))}return i}class H_ extends sa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rR extends sa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&iR(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Fs(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Fs(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=F_();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let l=this.applyToLocalView(o,r.mutatedFields);l=t.has(s.key)?null:l;const c=W_(o,l);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(z.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Y())}isEqual(e){return this.batchId===e.batchId&&Fi(this.mutations,e.mutations,(t,i)=>qd(t,i))&&Fi(this.baseMutations,e.baseMutations,(t,i)=>qd(t,i))}}class Pc{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){te(e.mutations.length===i.length);let s=function(){return GI}();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Pc(e,t,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve,J;function cR(n){switch(n){default:return B();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function G_(n){if(n===void 0)return Xt("GRPC error has no .code"),N.UNKNOWN;switch(n){case ve.OK:return N.OK;case ve.CANCELLED:return N.CANCELLED;case ve.UNKNOWN:return N.UNKNOWN;case ve.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case ve.INTERNAL:return N.INTERNAL;case ve.UNAVAILABLE:return N.UNAVAILABLE;case ve.UNAUTHENTICATED:return N.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case ve.NOT_FOUND:return N.NOT_FOUND;case ve.ALREADY_EXISTS:return N.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return N.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case ve.ABORTED:return N.ABORTED;case ve.OUT_OF_RANGE:return N.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return N.UNIMPLEMENTED;case ve.DATA_LOSS:return N.DATA_LOSS;default:return B()}}(J=ve||(ve={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR=new Hn([4294967295,4294967295],0);function Wd(n){const e=uR().encode(n),t=new g_;return t.update(e),new Uint8Array(t.digest())}function $d(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Hn([t,i],0),new Hn([s,r],0)]}class kc{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ns(`Invalid padding: ${t}`);if(i<0)throw new Ns(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ns(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ns(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Hn.fromNumber(this.Te)}Ee(e,t,i){let s=e.add(t.multiply(Hn.fromNumber(i)));return s.compare(hR)===1&&(s=new Hn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Wd(e),[i,s]=$d(t);for(let r=0;r<this.hashCount;r++){const o=this.Ee(i,s,r);if(!this.de(o))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new kc(r,s,t);return i.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const t=Wd(e),[i,s]=$d(t);for(let r=0;r<this.hashCount;r++){const o=this.Ee(i,s,r);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ns extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,pr.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new ra(z.min(),s,new Te(X),Jt(),Y())}}class pr{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new pr(i,t,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t,i,s){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=s}}class K_{constructor(e,t){this.targetId=e,this.me=t}}class Q_{constructor(e,t,i=Le.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class Hd{constructor(){this.fe=0,this.ge=Gd(),this.pe=Le.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Y(),t=Y(),i=Y();return this.ge.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:B()}}),new pr(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=Gd()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,te(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class dR{constructor(e){this.Le=e,this.Be=new Map,this.ke=Jt(),this.qe=$r(),this.Qe=$r(),this.Ke=new Te(X)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:B()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,s)=>{this.je(s)&&t(s)})}Je(e){const t=e.targetId,i=e.me.count,s=this.Ye(t);if(s){const r=s.target;if(Nl(r))if(i===0){const o=new V(r.path);this.We(t,o,je.newNoDocument(o,z.min()))}else te(i===1);else{const o=this.Ze(t);if(o!==i){const l=this.Xe(e),c=l?this.et(l,e,o):1;if(c!==0){this.He(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,u)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=t;let o,l;try{o=In(i).toUint8Array()}catch(c){if(c instanceof A_)return Vi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new kc(o,s,r)}catch(c){return Vi(c instanceof Ns?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let s=0;return i.forEach(r=>{const o=this.Le.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(l)||(this.We(t,r,null),s++)}),s}it(e){const t=new Map;this.Be.forEach((r,o)=>{const l=this.Ye(o);if(l){if(r.current&&Nl(l.target)){const c=new V(l.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,je.newNoDocument(c,e))}r.be&&(t.set(o,r.ve()),r.Ce())}});let i=Y();this.Qe.forEach((r,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(r))}),this.ke.forEach((r,o)=>o.setReadTime(e));const s=new ra(e,t,this.Ke,this.ke,i);return this.ke=Jt(),this.qe=$r(),this.Qe=$r(),this.Ke=new Te(X),s}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const s=this.ze(e);this.ot(e,t)?s.Fe(t,1):s.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Hd,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new Ce(X),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ce(X),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Hd),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function $r(){return new Te(V.comparator)}function Gd(){return new Te(V.comparator)}const fR={asc:"ASCENDING",desc:"DESCENDING"},pR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_R={and:"AND",or:"OR"};class mR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ol(n,e){return n.useProto3Json||Jo(e)?e:{value:e}}function Ro(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Y_(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function gR(n,e){return Ro(n,e.toTimestamp())}function Tt(n){return te(!!n),z.fromTimestamp(function(t){const i=wn(t);return new Re(i.seconds,i.nanos)}(n))}function Nc(n,e){return xl(n,e).canonicalString()}function xl(n,e){const t=function(s){return new ue(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function X_(n){const e=ue.fromString(n);return te(nm(e)),e}function Ll(n,e){return Nc(n.databaseId,e.path)}function nl(n,e){const t=X_(e);if(t.get(1)!==n.databaseId.projectId)throw new L(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new V(Z_(t))}function J_(n,e){return Nc(n.databaseId,e)}function yR(n){const e=X_(n);return e.length===4?ue.emptyPath():Z_(e)}function Ml(n){return new ue(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Z_(n){return te(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Kd(n,e,t){return{name:Ll(n,e),fields:t.value.mapValue.fields}}function vR(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:B()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(u,f){return u.useProto3Json?(te(f===void 0||typeof f=="string"),Le.fromBase64String(f||"")):(te(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Le.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const f=u.code===void 0?N.UNKNOWN:G_(u.code);return new L(f,u.message||"")}(o);t=new Q_(i,s,r,l||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=nl(n,i.document.name),r=Tt(i.document.updateTime),o=i.document.createTime?Tt(i.document.createTime):z.min(),l=new at({mapValue:{fields:i.document.fields}}),c=je.newFoundDocument(s,r,o,l),u=i.targetIds||[],f=i.removedTargetIds||[];t=new ro(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=nl(n,i.document),r=i.readTime?Tt(i.readTime):z.min(),o=je.newNoDocument(s,r),l=i.removedTargetIds||[];t=new ro([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=nl(n,i.document),r=i.removedTargetIds||[];t=new ro([],r,s,null)}else{if(!("filter"in e))return B();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new lR(s,r),l=i.targetId;t=new K_(l,o)}}return t}function ER(n,e){let t;if(e instanceof fr)t={update:Kd(n,e.key,e.value)};else if(e instanceof H_)t={delete:Ll(n,e.key)};else if(e instanceof ai)t={update:Kd(n,e.key,e.data),updateMask:PR(e.fieldMask)};else{if(!(e instanceof rR))return B();t={verify:Ll(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(r,o){const l=o.transform;if(l instanceof wo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof qi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof er)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Io)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw B()}(0,i))),e.precondition.isNone||(t.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:gR(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:B()}(n,e.precondition)),t}function TR(n,e){return n&&n.length>0?(te(e!==void 0),n.map(t=>function(s,r){let o=s.updateTime?Tt(s.updateTime):Tt(r);return o.isEqual(z.min())&&(o=Tt(r)),new nR(o,s.transformResults||[])}(t,e))):[]}function wR(n,e){return{documents:[J_(n,e.path)]}}function IR(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=J_(n,s);const r=function(u){if(u.length!==0)return tm(Ct.create(u,"and"))}(e.filters);r&&(t.structuredQuery.where=r);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:Ei(m.field),direction:AR(m.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Ol(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:t,parent:s}}function RR(n){let e=yR(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){te(i===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let r=[];t.where&&(r=function(p){const m=em(p);return m instanceof Ct&&k_(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(m=>function(A){return new To(Ti(A.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(t.orderBy));let l=null;t.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Jo(m)?null:m}(t.limit));let c=null;t.startAt&&(c=function(p){const m=!!p.before,E=p.values||[];return new Eo(E,m)}(t.startAt));let u=null;return t.endAt&&(u=function(p){const m=!p.before,E=p.values||[];return new Eo(E,m)}(t.endAt)),qI(e,s,o,r,l,"F",c,u)}function CR(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function em(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Ti(t.unaryFilter.field);return Ie.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Ti(t.unaryFilter.field);return Ie.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ti(t.unaryFilter.field);return Ie.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ti(t.unaryFilter.field);return Ie.create(o,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(n):n.fieldFilter!==void 0?function(t){return Ie.create(Ti(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ct.create(t.compositeFilter.filters.map(i=>em(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return B()}}(t.compositeFilter.op))}(n):B()}function AR(n){return fR[n]}function bR(n){return pR[n]}function SR(n){return _R[n]}function Ei(n){return{fieldPath:n.canonicalString()}}function Ti(n){return xe.fromServerFormat(n.fieldPath)}function tm(n){return n instanceof Ie?function(t){if(t.op==="=="){if(Ld(t.value))return{unaryFilter:{field:Ei(t.field),op:"IS_NAN"}};if(xd(t.value))return{unaryFilter:{field:Ei(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ld(t.value))return{unaryFilter:{field:Ei(t.field),op:"IS_NOT_NAN"}};if(xd(t.value))return{unaryFilter:{field:Ei(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ei(t.field),op:bR(t.op),value:t.value}}}(n):n instanceof Ct?function(t){const i=t.getFilters().map(s=>tm(s));return i.length===1?i[0]:{compositeFilter:{op:SR(t.op),filters:i}}}(n):B()}function PR(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function nm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t,i,s,r=z.min(),o=z.min(),l=Le.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new fn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new fn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e){this.ht=e}}function NR(n){const e=RR({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Dl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(){this.ln=new OR}addToCollectionParentIndex(e,t){return this.ln.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(Tn.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(Tn.min())}updateCollectionGroup(e,t,i){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class OR{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new Ce(ue.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Ce(ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ye{static withCacheSize(e){return new Ye(e,Ye.DEFAULT_COLLECTION_PERCENTILE,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye.DEFAULT_COLLECTION_PERCENTILE=10,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ye.DEFAULT=new Ye(41943040,Ye.DEFAULT_COLLECTION_PERCENTILE,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ye.DISABLED=new Ye(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new ji(0)}static Qn(){return new ji(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd([n,e],[t,i]){const s=X(n,t);return s===0?X(e,i):s}class xR{constructor(e){this.Gn=e,this.buffer=new Ce(Yd),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Yd(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class LR{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){x("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){es(t)?x("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Zi(t)}await this.Yn(3e5)})}}class MR{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return P.resolve(Xo.oe);const i=new xR(t);return this.Zn.forEachTarget(e,s=>i.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>i.Hn(s))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Qd)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qd):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,s,r,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(i=p,l=Date.now(),this.removeTargets(e,i,t))).next(p=>(r=p,c=Date.now(),this.removeOrphanedDocuments(e,i))).next(p=>(u=Date.now(),yi()<=G.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${r} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:p})))}}function VR(n,e){return new MR(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(){this.changes=new oi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?P.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(i!==null&&Fs(i.mutation,s,pt.empty(),Re.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Y()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Y()){const s=jn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,i).next(r=>{let o=ks();return r.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const i=jn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Y()))}populateOverlays(e,t,i){const s=[];return i.forEach(r=>{t.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,i,s){let r=Jt();const o=Vs(),l=function(){return Vs()}();return t.forEach((c,u)=>{const f=i.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof ai)?r=r.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Fs(f.mutation,u,f.mutation.getFieldMask(),Re.now())):o.set(u.key,pt.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,f)=>o.set(u,f)),t.forEach((u,f)=>{var p;return l.set(u,new UR(f,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const i=Vs();let s=new Te((o,l)=>o-l),r=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let f=i.get(c)||pt.empty();f=l.applyToLocalView(u,f),i.set(c,f);const p=(s.get(l.batchId)||Y()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=F_();f.forEach(m=>{if(!r.has(m)){const E=W_(t.get(m),i.get(m));E!==null&&p.set(m,E),r=r.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return P.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,s){return function(o){return V.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):jI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):P.resolve(jn());let l=-1,c=r;return o.next(u=>P.forEach(u,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),r.get(f)?P.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,Y())).next(f=>({batchId:l,changes:V_(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new V(t)).next(i=>{let s=ks();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const r=t.collectionGroup;let o=ks();return this.indexManager.getCollectionParents(e,r).next(l=>P.forEach(l,c=>{const u=function(p,m){return new ea(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,i,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r,s))).next(o=>{r.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,je.newInvalidDocument(f)))});let l=ks();return o.forEach((c,u)=>{const f=r.get(c);f!==void 0&&Fs(f.mutation,u,pt.empty(),Re.now()),na(t,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return P.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Tt(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(s){return{name:s.name,query:NR(s.bundledQuery),readTime:Tt(s.readTime)}}(t)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(){this.overlays=new Te(V.comparator),this.Er=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const i=jn();return P.forEach(t,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((s,r)=>{this.Tt(e,t,r)}),P.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.Er.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.Er.delete(i)),P.resolve()}getOverlaysForCollection(e,t,i){const s=jn(),r=t.length+1,o=new V(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new Te((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>i){let f=r.get(u.largestBatchId);f===null&&(f=jn(),r=r.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=jn(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=s)););return P.resolve(l)}Tt(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(i.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new aR(t,i));let r=this.Er.get(t);r===void 0&&(r=Y(),this.Er.set(t,r)),this.Er.set(t,r.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(){this.sessionToken=Le.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(){this.dr=new Ce(be.Ar),this.Rr=new Ce(be.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const i=new be(e,t);this.dr=this.dr.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new be(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){const t=new V(new ue([])),i=new be(t,e),s=new be(t,e+1),r=[];return this.Rr.forEachInRange([i,s],o=>{this.gr(o),r.push(o.key)}),r}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new V(new ue([])),i=new be(t,e),s=new be(t,e+1);let r=Y();return this.Rr.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new be(e,0),i=this.dr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class be{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return V.comparator(e.key,t.key)||X(e.br,t.br)}static Vr(e,t){return X(e.br,t.br)||V.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new Ce(be.Ar)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new oR(r,t,i,s);this.mutationQueue.push(o);for(const l of s)this.vr=this.vr.add(new be(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,t){return P.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.Fr(i),r=s<0?0:s;return P.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new be(t,0),s=new be(t,Number.POSITIVE_INFINITY),r=[];return this.vr.forEachInRange([i,s],o=>{const l=this.Cr(o.br);r.push(l)}),P.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Ce(X);return t.forEach(s=>{const r=new be(s,0),o=new be(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([r,o],l=>{i=i.add(l.br)})}),P.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;V.isDocumentKey(r)||(r=r.child(""));const o=new be(new V(r),0);let l=new Ce(X);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!i.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.br)),!0)},o),P.resolve(this.Mr(l))}Mr(e){const t=[];return e.forEach(i=>{const s=this.Cr(i);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){te(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return P.forEach(t.mutations,s=>{const r=new be(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=i})}Ln(e){}containsKey(e,t){const i=new be(t,0),s=this.vr.firstAfterOrEqual(i);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e){this.Nr=e,this.docs=function(){return new Te(V.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return P.resolve(i?i.document.mutableCopy():je.newInvalidDocument(t))}getEntries(e,t){let i=Jt();return t.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():je.newInvalidDocument(s))}),P.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=Jt();const o=t.path,l=new V(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||EI(vI(f),i)<=0||(s.has(f.key)||na(t,f))&&(r=r.insert(f.key,f.mutableCopy()))}return P.resolve(r)}getAllFromCollectionGroup(e,t,i,s){B()}Lr(e,t){return P.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new HR(this)}getSize(e){return P.resolve(this.size)}}class HR extends FR{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?t.push(this.hr.addEntry(e,s)):this.hr.removeEntry(i)}),P.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.persistence=e,this.Br=new oi(t=>Cc(t),Ac),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.kr=0,this.qr=new Dc,this.targetCount=0,this.Qr=ji.qn()}forEachTarget(e,t){return this.Br.forEach((i,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),P.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new ji(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Un(t),P.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.Br.forEach((o,l)=>{l.sequenceNumber<=t&&i.get(l.targetId)===null&&(this.Br.delete(o),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),P.waitFor(r).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const i=this.Br.get(t)||null;return P.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),P.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),P.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return P.resolve(i)}containsKey(e,t){return P.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Xo(0),this.Ur=!1,this.Ur=!0,this.Wr=new zR,this.referenceDelegate=e(this),this.Gr=new GR(this),this.indexManager=new DR,this.remoteDocumentCache=function(s){return new $R(s)}(i=>this.referenceDelegate.zr(i)),this.serializer=new kR(t),this.jr=new qR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new jR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new WR(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){x("MemoryPersistence","Starting transaction:",e);const s=new KR(this.$r.next());return this.referenceDelegate.Hr(),i(s).next(r=>this.referenceDelegate.Jr(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Yr(e,t){return P.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}}class KR extends wI{constructor(e){super(),this.currentSequenceNumber=e}}class Oc{constructor(e){this.persistence=e,this.Zr=new Dc,this.Xr=null}static ei(e){return new Oc(e)}get ti(){if(this.Xr)return this.Xr;throw B()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),P.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),P.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(s=>this.ti.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(r=>this.ti.add(r.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.ti,i=>{const s=V.fromPath(i);return this.ni(e,s).next(r=>{r||t.removeEntry(s,z.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return P.or([()=>P.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Co{constructor(e,t){this.persistence=e,this.ri=new oi(i=>CI(i.path),(i,s)=>i.isEqual(s)),this.garbageCollector=VR(this,t)}static ei(e,t){return new Co(e,t)}Hr(){}Jr(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(s=>i+s))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return P.forEach(this.ri,(i,s)=>this.ir(e,i,s).next(r=>r?P.resolve():t(s)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,t).next(l=>{l||(i++,r.removeEntry(o,z.min()))})).next(()=>r.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),P.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),P.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=no(e.data.value)),t}ir(e,t,i){return P.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.ri.get(t);return P.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=s}static zi(e,t){let i=Y(),s=Y();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new xc(e,t.fromCache,i,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Lv()?8:II(ze())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,s){const r={result:null};return this.Xi(e,t).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.es(e,t,s,i).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new QR;return this.ts(e,t,o).next(l=>{if(r.result=l,this.Hi)return this.ns(e,t,o,l.size)})}).next(()=>r.result)}ns(e,t,i,s){return i.documentReadCount<this.Ji?(yi()<=G.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",vi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),P.resolve()):(yi()<=G.DEBUG&&x("QueryEngine","Query:",vi(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Yi*s?(yi()<=G.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",vi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Et(t))):P.resolve())}Xi(e,t){if(Ud(t))return P.resolve(null);let i=Et(t);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Dl(t,null,"F"),i=Et(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=Y(...r);return this.Zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,i).next(c=>{const u=this.rs(t,l);return this.ss(t,u,o,c.readTime)?this.Xi(e,Dl(t,null,"F")):this.os(e,u,t,c)}))})))}es(e,t,i,s){return Ud(t)||s.isEqual(z.min())?P.resolve(null):this.Zi.getDocuments(e,i).next(r=>{const o=this.rs(t,r);return this.ss(t,o,i,s)?P.resolve(null):(yi()<=G.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),vi(t)),this.os(e,o,t,yI(s,-1)).next(l=>l))})}rs(e,t){let i=new Ce(L_(e));return t.forEach((s,r)=>{na(e,r)&&(i=i.add(r))}),i}ss(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ts(e,t,i){return yi()<=G.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",vi(t)),this.Zi.getDocumentsMatchingQuery(e,t,Tn.min(),i)}os(e,t,i,s){return this.Zi.getDocumentsMatchingQuery(e,i,s).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,t,i,s){this.persistence=e,this._s=t,this.serializer=s,this.us=new Te(X),this.cs=new oi(r=>Cc(r),Ac),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BR(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function JR(n,e,t,i){return new XR(n,e,t,i)}async function sm(n,e){const t=W(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],l=[];let c=Y();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of r){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(i,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:l}))})})}function ZR(n,e){const t=W(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=t.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const p=u.batch,m=p.keys();let E=P.resolve();return m.forEach(A=>{E=E.next(()=>f.getEntry(c,A)).next(k=>{const S=u.docVersions.get(A);te(S!==null),k.version.compareTo(S)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),f.addEntry(k)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,i,e,r).next(()=>r.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(l){let c=Y();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(i,s))})}function rm(n){const e=W(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function eC(n,e){const t=W(n),i=e.snapshotVersion;let s=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.hs.newChangeBuffer({trackRemovals:!0});s=t.us;const l=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;l.push(t.Gr.removeMatchingKeys(r,f.removedDocuments,p).next(()=>t.Gr.addMatchingKeys(r,f.addedDocuments,p)));let E=m.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(Le.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,i)),s=s.insert(p,E),function(k,S,F){return k.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(m,E,f)&&l.push(t.Gr.updateTargetData(r,E))});let c=Jt(),u=Y();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(r,f))}),l.push(tC(r,o,e.documentUpdates).next(f=>{c=f.Is,u=f.Es})),!i.isEqual(z.min())){const f=t.Gr.getLastRemoteSnapshotVersion(r).next(p=>t.Gr.setTargetsMetadata(r,r.currentSequenceNumber,i));l.push(f)}return P.waitFor(l).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(t.us=s,r))}function tC(n,e,t){let i=Y(),s=Y();return t.forEach(r=>i=i.add(r)),e.getEntries(n,i).next(r=>{let o=Jt();return t.forEach((l,c)=>{const u=r.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(z.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):x("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:s}})}function nC(n,e){const t=W(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function iC(n,e){const t=W(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return t.Gr.getTargetData(i,e).next(r=>r?(s=r,P.resolve(s)):t.Gr.allocateTargetId(i).next(o=>(s=new fn(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=t.us.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}async function Vl(n,e,t){const i=W(n),s=i.us.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!es(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.us=i.us.remove(e),i.cs.delete(s.target)}function Xd(n,e,t){const i=W(n);let s=z.min(),r=Y();return i.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const p=W(c),m=p.cs.get(f);return m!==void 0?P.resolve(p.us.get(m)):p.Gr.getTargetData(u,f)}(i,o,Et(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{r=c})}).next(()=>i._s.getDocumentsMatchingQuery(o,e,t?s:z.min(),t?r:Y())).next(l=>(sC(i,WI(e),l),{documents:l,ds:r})))}function sC(n,e,t){let i=n.ls.get(e)||z.min();t.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),n.ls.set(e,i)}class Jd{constructor(){this.activeTargetIds=YI()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rC{constructor(){this._o=new Jd,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Jd,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hr=null;function il(){return Hr===null?Hr=function(){return 268435456+Math.round(2147483648*Math.random())}():Hr++,"0x"+Hr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be="WebChannelConnection";class cC extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${s}/databases/${r}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Oo(t,i,s,r,o){const l=il(),c=this.No(t,i.toUriEncodedString());x("RestConnection",`Sending RPC '${t}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,r,o),this.Bo(t,c,u,s).then(f=>(x("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw Vi("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}ko(t,i,s,r,o,l){return this.Oo(t,i,s,r,o)}Lo(t,i,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ji}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((r,o)=>t[o]=r),s&&s.headers.forEach((r,o)=>t[o]=r)}No(t,i){const s=aC[t];return`${this.Fo}/v1/${i}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,i,s){const r=il();return new Promise((o,l)=>{const c=new y_;c.setWithCredentials(!0),c.listenOnce(v_.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case to.NO_ERROR:const f=c.getResponseJson();x(Be,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(f)),o(f);break;case to.TIMEOUT:x(Be,`RPC '${e}' ${r} timed out`),l(new L(N.DEADLINE_EXCEEDED,"Request time out"));break;case to.HTTP_ERROR:const p=c.getStatus();if(x(Be,`RPC '${e}' ${r} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const E=m==null?void 0:m.error;if(E&&E.status&&E.message){const A=function(S){const F=S.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(F)>=0?F:N.UNKNOWN}(E.status);l(new L(A,E.message))}else l(new L(N.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new L(N.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{x(Be,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(s);x(Be,`RPC '${e}' ${r} sending request:`,s),c.send(t,"POST",u,i,15)})}qo(e,t,i){const s=il(),r=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=w_(),l=T_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,t,i),c.encodeInitMessageHeaders=!0;const f=r.join("");x(Be,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);let m=!1,E=!1;const A=new lC({Eo:S=>{E?x(Be,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(m||(x(Be,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),x(Be,`RPC '${e}' stream ${s} sending:`,S),p.send(S))},Ao:()=>p.close()}),k=(S,F,q)=>{S.listen(F,M=>{try{q(M)}catch($){setTimeout(()=>{throw $},0)}})};return k(p,Ps.EventType.OPEN,()=>{E||(x(Be,`RPC '${e}' stream ${s} transport opened.`),A.So())}),k(p,Ps.EventType.CLOSE,()=>{E||(E=!0,x(Be,`RPC '${e}' stream ${s} transport closed`),A.Do())}),k(p,Ps.EventType.ERROR,S=>{E||(E=!0,Vi(Be,`RPC '${e}' stream ${s} transport errored:`,S),A.Do(new L(N.UNAVAILABLE,"The operation could not be completed")))}),k(p,Ps.EventType.MESSAGE,S=>{var F;if(!E){const q=S.data[0];te(!!q);const M=q,$=(M==null?void 0:M.error)||((F=M[0])===null||F===void 0?void 0:F.error);if($){x(Be,`RPC '${e}' stream ${s} received error:`,$);const we=$.status;let ie=function(y){const T=ve[y];if(T!==void 0)return G_(T)}(we),w=$.message;ie===void 0&&(ie=N.INTERNAL,w="Unknown error status: "+we+" with message "+$.message),E=!0,A.Do(new L(ie,w)),p.close()}else x(Be,`RPC '${e}' stream ${s} received:`,q),A.vo(q)}}),k(l,E_.STAT_EVENT,S=>{S.stat===Al.PROXY?x(Be,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===Al.NOPROXY&&x(Be,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.bo()},0),A}}function sl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(n){return new mR(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,t,i=1e3,s=1.5,r=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=s,this.$o=r,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),s=Math.max(0,t-i);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,t,i,s,r,o,l,c){this.li=e,this.Yo=i,this.Zo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new om(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(Xt(t.toString()),Xt("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Xo===t&&this.I_(i,s)},i=>{e(()=>{const s=new L(N.UNKNOWN,"Fetching auth token failed: "+i.message);return this.E_(s)})})}I_(e,t){const i=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{i(()=>this.E_(s))}),this.stream.onMessage(s=>{i(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uC extends am{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=vR(this.serializer,e),i=function(r){if(!("targetChange"in r))return z.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?z.min():o.readTime?Tt(o.readTime):z.min()}(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=Ml(this.serializer),t.addTarget=function(r,o){let l;const c=o.target;if(l=Nl(c)?{documents:wR(r,c)}:{query:IR(r,c).ct},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Y_(r,o.resumeToken);const u=Ol(r,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(z.min())>0){l.readTime=Ro(r,o.snapshotVersion.toTimestamp());const u=Ol(r,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const i=CR(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=Ml(this.serializer),t.removeTarget=e,this.c_(t)}}class hC extends am{constructor(e,t,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return te(!!e.streamToken),this.lastStreamToken=e.streamToken,te(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=TR(e.writeResults,e.commitTime),i=Tt(e.commitTime);return this.listener.y_(i,t)}w_(){const e={};e.database=Ml(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>ER(this.serializer,i))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC extends class{}{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new L(N.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Oo(e,xl(t,i),s,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new L(N.UNKNOWN,r.toString())})}ko(e,t,i,s,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.ko(e,xl(t,i),s,o,l,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(N.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class fC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Xt(t),this.C_=!1):x("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=r,this.Q_.uo(o=>{i.enqueueAndForget(async()=>{li(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=W(c);u.k_.add(4),await _r(u),u.K_.set("Unknown"),u.k_.delete(4),await aa(u)}(this))})}),this.K_=new fC(i,s)}}async function aa(n){if(li(n))for(const e of n.q_)await e(!0)}async function _r(n){for(const e of n.q_)await e(!1)}function lm(n,e){const t=W(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),Fc(t)?Vc(t):ts(t).s_()&&Mc(t,e))}function Lc(n,e){const t=W(n),i=ts(t);t.B_.delete(e),i.s_()&&cm(t,e),t.B_.size===0&&(i.s_()?i.a_():li(t)&&t.K_.set("Unknown"))}function Mc(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ts(n).V_(e)}function cm(n,e){n.U_.xe(e),ts(n).m_(e)}function Vc(n){n.U_=new dR({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),ts(n).start(),n.K_.F_()}function Fc(n){return li(n)&&!ts(n).i_()&&n.B_.size>0}function li(n){return W(n).k_.size===0}function um(n){n.U_=void 0}async function _C(n){n.K_.set("Online")}async function mC(n){n.B_.forEach((e,t)=>{Mc(n,e)})}async function gC(n,e){um(n),Fc(n)?(n.K_.O_(e),Vc(n)):n.K_.set("Unknown")}async function yC(n,e,t){if(n.K_.set("Online"),e instanceof Q_&&e.state===2&&e.cause)try{await async function(s,r){const o=r.cause;for(const l of r.targetIds)s.B_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.B_.delete(l),s.U_.removeTarget(l))}(n,e)}catch(i){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Ao(n,i)}else if(e instanceof ro?n.U_.$e(e):e instanceof K_?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(z.min()))try{const i=await rm(n.localStore);t.compareTo(i)>=0&&await function(r,o){const l=r.U_.it(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=r.B_.get(u);f&&r.B_.set(u,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const f=r.B_.get(c);if(!f)return;r.B_.set(c,f.withResumeToken(Le.EMPTY_BYTE_STRING,f.snapshotVersion)),cm(r,c);const p=new fn(f.target,c,u,f.sequenceNumber);Mc(r,p)}),r.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(i){x("RemoteStore","Failed to raise snapshot:",i),await Ao(n,i)}}async function Ao(n,e,t){if(!es(e))throw e;n.k_.add(1),await _r(n),n.K_.set("Offline"),t||(t=()=>rm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await aa(n)})}function hm(n,e){return e().catch(t=>Ao(n,t,e))}async function la(n){const e=W(n),t=Cn(e);let i=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;vC(e);)try{const s=await nC(e.localStore,i);if(s===null){e.L_.length===0&&t.a_();break}i=s.batchId,EC(e,s)}catch(s){await Ao(e,s)}dm(e)&&fm(e)}function vC(n){return li(n)&&n.L_.length<10}function EC(n,e){n.L_.push(e);const t=Cn(n);t.s_()&&t.f_&&t.g_(e.mutations)}function dm(n){return li(n)&&!Cn(n).i_()&&n.L_.length>0}function fm(n){Cn(n).start()}async function TC(n){Cn(n).w_()}async function wC(n){const e=Cn(n);for(const t of n.L_)e.g_(t.mutations)}async function IC(n,e,t){const i=n.L_.shift(),s=Pc.from(i,e,t);await hm(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await la(n)}async function RC(n,e){e&&Cn(n).f_&&await async function(i,s){if(function(o){return cR(o)&&o!==N.ABORTED}(s.code)){const r=i.L_.shift();Cn(i).__(),await hm(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await la(i)}}(n,e),dm(n)&&fm(n)}async function ef(n,e){const t=W(n);t.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const i=li(t);t.k_.add(3),await _r(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await aa(t)}async function CC(n,e){const t=W(n);e?(t.k_.delete(2),await aa(t)):e||(t.k_.add(2),await _r(t),t.K_.set("Unknown"))}function ts(n){return n.W_||(n.W_=function(t,i,s){const r=W(t);return r.b_(),new uC(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(n.datastore,n.asyncQueue,{Ro:_C.bind(null,n),mo:mC.bind(null,n),po:gC.bind(null,n),R_:yC.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),Fc(n)?Vc(n):n.K_.set("Unknown")):(await n.W_.stop(),um(n))})),n.W_}function Cn(n){return n.G_||(n.G_=function(t,i,s){const r=W(t);return r.b_(),new hC(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:TC.bind(null,n),po:RC.bind(null,n),p_:wC.bind(null,n),y_:IC.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await la(n)):(await n.G_.stop(),n.L_.length>0&&(x("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,l=new Uc(e,t,o,s,r);return l.start(i),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bc(n,e){if(Xt("AsyncQueue",`${e}: ${n}`),es(n))return new L(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{static emptySet(e){return new Ai(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||V.comparator(t.key,i.key):(t,i)=>V.comparator(t.key,i.key),this.keyedMap=ks(),this.sortedSet=new Te(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ai)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Ai;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.z_=new Te(V.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):B():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class zi{constructor(e,t,i,s,r,o,l,c,u){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,i,s,r){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new zi(e,t,Ai.emptySet(t),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ta(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class bC{constructor(){this.queries=nf(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const s=W(t),r=s.queries;s.queries=nf(),r.forEach((o,l)=>{for(const c of l.J_)c.onError(i)})})(this,new L(N.ABORTED,"Firestore shutting down"))}}function nf(){return new oi(n=>x_(n),ta)}async function SC(n,e){const t=W(n);let i=3;const s=e.query;let r=t.queries.get(s);r?!r.Y_()&&e.Z_()&&(i=2):(r=new AC,i=e.Z_()?0:1);try{switch(i){case 0:r.H_=await t.onListen(s,!0);break;case 1:r.H_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const l=Bc(o,`Initialization of query '${vi(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,r),r.J_.push(e),e.ea(t.onlineState),r.H_&&e.ta(r.H_)&&qc(t)}async function PC(n,e){const t=W(n),i=e.query;let s=3;const r=t.queries.get(i);if(r){const o=r.J_.indexOf(e);o>=0&&(r.J_.splice(o,1),r.J_.length===0?s=e.Z_()?0:1:!r.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function kC(n,e){const t=W(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const l of o.J_)l.ta(s)&&(i=!0);o.H_=s}}i&&qc(t)}function NC(n,e,t){const i=W(n),s=i.queries.get(e);if(s)for(const r of s.J_)r.onError(t);i.queries.delete(e)}function qc(n){n.X_.forEach(e=>{e.next()})}var Fl,sf;(sf=Fl||(Fl={})).na="default",sf.Cache="cache";class DC{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new zi(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=zi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Fl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e){this.key=e}}class _m{constructor(e){this.key=e}}class OC{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Y(),this.mutatedKeys=Y(),this.Va=L_(e),this.ma=new Ai(this.Va)}get fa(){return this.da}ga(e,t){const i=t?t.pa:new tf,s=t?t.ma:this.ma;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),E=na(this.query,p)?p:null,A=!!m&&this.mutatedKeys.has(m.key),k=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let S=!1;m&&E?m.data.isEqual(E.data)?A!==k&&(i.track({type:3,doc:E}),S=!0):this.ya(m,E)||(i.track({type:2,doc:E}),S=!0,(c&&this.Va(E,c)>0||u&&this.Va(E,u)<0)&&(l=!0)):!m&&E?(i.track({type:0,doc:E}),S=!0):m&&!E&&(i.track({type:1,doc:m}),S=!0,(c||u)&&(l=!0)),S&&(E?(o=o.add(E),r=k?r.add(f):r.delete(f)):(o=o.delete(f),r=r.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),r=r.delete(f.key),i.track({type:1,doc:f})}return{ma:o,pa:i,ss:l,mutatedKeys:r}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const r=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((f,p)=>function(E,A){const k=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return k(E)-k(A)}(f.type,p.type)||this.Va(f.doc,p.doc)),this.wa(i),s=s!=null&&s;const l=t&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new zi(this.query,e.ma,r,o,e.mutatedKeys,c===0,u,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new tf,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Y(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new _m(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new pm(i))}),t}va(e){this.da=e.ds,this.Ra=Y();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return zi.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class xC{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class LC{constructor(e){this.key=e,this.Fa=!1}}class MC{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new oi(l=>x_(l),ta),this.Oa=new Map,this.Na=new Set,this.La=new Te(V.comparator),this.Ba=new Map,this.ka=new Dc,this.qa={},this.Qa=new Map,this.Ka=ji.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function VC(n,e,t=!0){const i=Tm(n);let s;const r=i.xa.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.Ca()):s=await mm(i,e,t,!0),s}async function FC(n,e){const t=Tm(n);await mm(t,e,!0,!1)}async function mm(n,e,t,i){const s=await iC(n.localStore,Et(e)),r=s.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let l;return i&&(l=await UC(n,e,r,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&lm(n.remoteStore,s),l}async function UC(n,e,t,i,s){n.Ua=(p,m,E)=>async function(k,S,F,q){let M=S.view.ga(F);M.ss&&(M=await Xd(k.localStore,S.query,!1).then(({documents:w})=>S.view.ga(w,M)));const $=q&&q.targetChanges.get(S.targetId),we=q&&q.targetMismatches.get(S.targetId)!=null,ie=S.view.applyChanges(M,k.isPrimaryClient,$,we);return of(k,S.targetId,ie.ba),ie.snapshot}(n,p,m,E);const r=await Xd(n.localStore,e,!0),o=new OC(e,r.ds),l=o.ga(r.documents),c=pr.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),u=o.applyChanges(l,n.isPrimaryClient,c);of(n,t,u.ba);const f=new xC(e,t,o);return n.xa.set(e,f),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),u.snapshot}async function BC(n,e,t){const i=W(n),s=i.xa.get(e),r=i.Oa.get(s.targetId);if(r.length>1)return i.Oa.set(s.targetId,r.filter(o=>!ta(o,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Vl(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),t&&Lc(i.remoteStore,s.targetId),Ul(i,s.targetId)}).catch(Zi)):(Ul(i,s.targetId),await Vl(i.localStore,s.targetId,!0))}async function qC(n,e){const t=W(n),i=t.xa.get(e),s=t.Oa.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Lc(t.remoteStore,i.targetId))}async function jC(n,e,t){const i=QC(n);try{const s=await function(o,l){const c=W(o),u=Re.now(),f=l.reduce((E,A)=>E.add(A.key),Y());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",E=>{let A=Jt(),k=Y();return c.hs.getEntries(E,f).next(S=>{A=S,A.forEach((F,q)=>{q.isValidDocument()||(k=k.add(F))})}).next(()=>c.localDocuments.getOverlayedDocuments(E,A)).next(S=>{p=S;const F=[];for(const q of l){const M=sR(q,p.get(q.key).overlayedDocument);M!=null&&F.push(new ai(q.key,M,b_(M.value.mapValue),Gt.exists(!0)))}return c.mutationQueue.addMutationBatch(E,u,F,l)}).next(S=>{m=S;const F=S.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(E,S.batchId,F)})}).then(()=>({batchId:m.batchId,changes:V_(p)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.qa[o.currentUser.toKey()];u||(u=new Te(X)),u=u.insert(l,c),o.qa[o.currentUser.toKey()]=u}(i,s.batchId,t),await mr(i,s.changes),await la(i.remoteStore)}catch(s){const r=Bc(s,"Failed to persist write");t.reject(r)}}async function gm(n,e){const t=W(n);try{const i=await eC(t.localStore,e);e.targetChanges.forEach((s,r)=>{const o=t.Ba.get(r);o&&(te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?te(o.Fa):s.removedDocuments.size>0&&(te(o.Fa),o.Fa=!1))}),await mr(t,i,e)}catch(i){await Zi(i)}}function rf(n,e,t){const i=W(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.xa.forEach((r,o)=>{const l=o.view.ea(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=W(o);c.onlineState=l;let u=!1;c.queries.forEach((f,p)=>{for(const m of p.J_)m.ea(l)&&(u=!0)}),u&&qc(c)}(i.eventManager,e),s.length&&i.Ma.R_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function zC(n,e,t){const i=W(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Ba.get(e),r=s&&s.key;if(r){let o=new Te(V.comparator);o=o.insert(r,je.newNoDocument(r,z.min()));const l=Y().add(r),c=new ra(z.min(),new Map,new Te(X),o,l);await gm(i,c),i.La=i.La.remove(r),i.Ba.delete(e),jc(i)}else await Vl(i.localStore,e,!1).then(()=>Ul(i,e,t)).catch(Zi)}async function WC(n,e){const t=W(n),i=e.batch.batchId;try{const s=await ZR(t.localStore,e);vm(t,i,null),ym(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await mr(t,s)}catch(s){await Zi(s)}}async function $C(n,e,t){const i=W(n);try{const s=await function(o,l){const c=W(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(te(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(i.localStore,e);vm(i,e,t),ym(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await mr(i,s)}catch(s){await Zi(s)}}function ym(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function vm(n,e,t){const i=W(n);let s=i.qa[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(t?r.reject(t):r.resolve(),s=s.remove(e)),i.qa[i.currentUser.toKey()]=s}}function Ul(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(i=>{n.ka.containsKey(i)||Em(n,i)})}function Em(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(Lc(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),jc(n))}function of(n,e,t){for(const i of t)i instanceof pm?(n.ka.addReference(i.key,e),HC(n,i)):i instanceof _m?(x("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||Em(n,i.key)):B()}function HC(n,e){const t=e.key,i=t.path.canonicalString();n.La.get(t)||n.Na.has(i)||(x("SyncEngine","New document in limbo: "+t),n.Na.add(i),jc(n))}function jc(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new V(ue.fromString(e)),i=n.Ka.next();n.Ba.set(i,new LC(t)),n.La=n.La.insert(t,i),lm(n.remoteStore,new fn(Et(bc(t.path)),i,"TargetPurposeLimboResolution",Xo.oe))}}async function mr(n,e,t){const i=W(n),s=[],r=[],o=[];i.xa.isEmpty()||(i.xa.forEach((l,c)=>{o.push(i.Ua(c,e,t).then(u=>{var f;if((u||t)&&i.isPrimaryClient){const p=u?!u.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;i.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=xc.zi(c.targetId,u);r.push(p)}}))}),await Promise.all(o),i.Ma.R_(s),await async function(c,u){const f=W(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>P.forEach(u,m=>P.forEach(m.Wi,E=>f.persistence.referenceDelegate.addReference(p,m.targetId,E)).next(()=>P.forEach(m.Gi,E=>f.persistence.referenceDelegate.removeReference(p,m.targetId,E)))))}catch(p){if(!es(p))throw p;x("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const E=f.us.get(m),A=E.snapshotVersion,k=E.withLastLimboFreeSnapshotVersion(A);f.us=f.us.insert(m,k)}}}(i.localStore,r))}async function GC(n,e){const t=W(n);if(!t.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const i=await sm(t.localStore,e);t.currentUser=e,function(r,o){r.Qa.forEach(l=>{l.forEach(c=>{c.reject(new L(N.CANCELLED,o))})}),r.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await mr(t,i.Ts)}}function KC(n,e){const t=W(n),i=t.Ba.get(e);if(i&&i.Fa)return Y().add(i.key);{let s=Y();const r=t.Oa.get(e);if(!r)return s;for(const o of r){const l=t.xa.get(o);s=s.unionWith(l.view.fa)}return s}}function Tm(n){const e=W(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=gm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zC.bind(null,e),e.Ma.R_=kC.bind(null,e.eventManager),e.Ma.Wa=NC.bind(null,e.eventManager),e}function QC(n){const e=W(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=WC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$C.bind(null,e),e}class bo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=oa(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return JR(this.persistence,new YR,e.initialUser,this.serializer)}ja(e){return new im(Oc.ei,this.serializer)}za(e){return new rC}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bo.provider={build:()=>new bo};class YC extends bo{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){te(this.persistence.referenceDelegate instanceof Co);const i=this.persistence.referenceDelegate.garbageCollector;return new LR(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Ye.withCacheSize(this.cacheSizeBytes):Ye.DEFAULT;return new im(i=>Co.ei(i,t),this.serializer)}}class Bl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>rf(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=GC.bind(null,this.syncEngine),await CC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bC}()}createDatastore(e){const t=oa(e.databaseInfo.databaseId),i=function(r){return new cC(r)}(e.databaseInfo);return function(r,o,l,c){return new dC(r,o,l,c)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,s,r,o,l){return new pC(i,s,r,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>rf(this.syncEngine,t,0),function(){return Zd.p()?new Zd:new oC}())}createSyncEngine(e,t){return function(s,r,o,l,c,u,f){const p=new MC(s,r,o,l,c,u);return f&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const r=W(s);x("RemoteStore","RemoteStore shutting down."),r.k_.add(5),await _r(r),r.Q_.shutdown(),r.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Bl.provider={build:()=>new Bl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Xt("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e,t,i,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=s,this.user=qe.UNAUTHENTICATED,this.clientId=R_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,async o=>{x("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(x("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Bc(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function rl(n,e){n.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await sm(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function af(n,e){n.asyncQueue.verifyOperationInProgress();const t=await ZC(n);x("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>ef(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>ef(e.remoteStore,s)),n._onlineComponents=e}async function ZC(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await rl(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Vi("Error using user provided cache. Falling back to memory cache: "+t),await rl(n,new bo)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await rl(n,new YC(void 0));return n._offlineComponents}async function wm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await af(n,n._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await af(n,new Bl))),n._onlineComponents}function eA(n){return wm(n).then(e=>e.syncEngine)}async function lf(n){const e=await wm(n),t=e.eventManager;return t.onListen=VC.bind(null,e.syncEngine),t.onUnlisten=BC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=FC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=qC.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(n,e,t){if(!t)throw new L(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function tA(n,e,t,i){if(e===!0&&i===!0)throw new L(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function uf(n){if(!V.isDocumentKey(n))throw new L(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function hf(n){if(V.isDocumentKey(n))throw new L(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function zc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":B()}function bi(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=zc(n);throw new L(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new L(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Im((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new L(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new L(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new L(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ca{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new df({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new df(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new cI;switch(i.type){case"firstParty":return new fI(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new L(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=cf.get(t);i&&(x("ComponentProvider","Removing Datastore"),cf.delete(t),i.terminate())}(this),Promise.resolve()}}function nA(n,e,t,i={}){var s;const r=(n=bi(n,ca))._getSettings(),o=`${e}:${t}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Vi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let l,c;if(typeof i.mockUserToken=="string")l=i.mockUserToken,c=qe.MOCK_USER;else{l=Ip(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new L(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new qe(u)}n._authCredentials=new uI(new I_(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ua(this.firestore,e,this._query)}}class it{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}}class gn extends ua{constructor(e,t,i){super(e,t,bc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new V(e))}withConverter(e){return new gn(this.firestore,e,this._path)}}function iA(n,e,...t){if(n=oe(n),Rm("collection","path",e),n instanceof ca){const i=ue.fromString(e,...t);return hf(i),new gn(n,null,i)}{if(!(n instanceof it||n instanceof gn))throw new L(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ue.fromString(e,...t));return hf(i),new gn(n.firestore,null,i)}}function sA(n,e,...t){if(n=oe(n),arguments.length===1&&(e=R_.newId()),Rm("doc","path",e),n instanceof ca){const i=ue.fromString(e,...t);return uf(i),new it(n,null,new V(i))}{if(!(n instanceof it||n instanceof gn))throw new L(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ue.fromString(e,...t));return uf(i),new it(n.firestore,n instanceof gn?n.converter:null,new V(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new om(this,"async_queue_retry"),this.fu=()=>{const i=sl();i&&x("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=sl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=sl();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new Gn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!es(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(i);throw Xt("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const s=Uc.createAndSchedule(this,e,t,i,r=>this.Su(r));return this.du.push(s),s}pu(){this.Au&&B()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function pf(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1}(n,["next","error","complete"])}class So extends ca{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new ff,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ff(e),this._firestoreClient=void 0,await e}}}function rA(n,e){const t=typeof n=="object"?n:Go(),i=typeof n=="string"?n:"(default)",s=Dn(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Ep("firestore");r&&nA(s,...r)}return s}function Cm(n){if(n._terminated)throw new L(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||oA(n),n._firestoreClient}function oA(n){var e,t,i;const s=n._freezeSettings(),r=function(l,c,u,f){return new SI(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Im(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new JC(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wi(Le.fromBase64String(e))}catch(t){throw new L(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Wi(Le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=/^__.*__$/;class lA{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new ai(e,this.data,this.fieldMask,t,this.fieldTransforms):new fr(e,this.data,t,this.fieldTransforms)}}function Am(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class ha{constructor(e,t,i,s,r,o){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Fu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new ha(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:i,Nu:!1});return s.Lu(e),s}Bu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:i,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Po(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Am(this.Mu)&&aA.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class cA{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||oa(e)}$u(e,t,i,s=!1){return new ha({Mu:e,methodName:t,Ku:i,path:xe.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uA(n){const e=n._freezeSettings(),t=oa(n._databaseId);return new cA(n._databaseId,!!e.ignoreUndefinedProperties,t)}function hA(n,e,t,i,s,r={}){const o=n.$u(r.merge||r.mergeFields?2:0,e,t,s);Pm("Data must be an object, but it was:",o,i);const l=bm(i,o);let c,u;if(r.merge)c=new pt(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const f=[];for(const p of r.mergeFields){const m=fA(e,p,t);if(!o.contains(m))throw new L(N.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);_A(f,m)||f.push(m)}c=new pt(f),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new lA(new at(l),c,u)}function dA(n,e,t){return new ha({Mu:3,Ku:e.settings.Ku,methodName:n._methodName,Nu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Kc extends $c{constructor(e,t){super(e),this.Uu=t}_toFieldTransform(e){const t=dA(this,e,!0),i=this.Uu.map(r=>Qc(r,t)),s=new qi(i);return new eR(e.path,s)}isEqual(e){return e instanceof Kc&&Hs(this.Uu,e.Uu)}}function Qc(n,e){if(Sm(n=oe(n)))return Pm("Unsupported field value:",e,n),bm(n,e);if(n instanceof $c)return function(i,s){if(!Am(s.Mu))throw s.qu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,s){const r=[];let o=0;for(const l of i){let c=Qc(l,s.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}}(n,e)}return function(i,s){if((i=oe(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return XI(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=Re.fromDate(i);return{timestampValue:Ro(s.serializer,r)}}if(i instanceof Re){const r=new Re(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Ro(s.serializer,r)}}if(i instanceof Hc)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Wi)return{bytesValue:Y_(s.serializer,i._byteString)};if(i instanceof it){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Nc(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof Gc)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return Sc(l.serializer,c)})}}}}}}(i,s);throw s.qu(`Unsupported field value: ${zc(i)}`)}(n,e)}function bm(n,e){const t={};return C_(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ri(n,(i,s)=>{const r=Qc(s,e.Ou(i));r!=null&&(t[i]=r)}),{mapValue:{fields:t}}}function Sm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Re||n instanceof Hc||n instanceof Wi||n instanceof it||n instanceof $c||n instanceof Gc)}function Pm(n,e,t){if(!Sm(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const i=zc(t);throw i==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+i)}}function fA(n,e,t){if((e=oe(e))instanceof Wc)return e._internalPath;if(typeof e=="string")return km(n,e);throw Po("Field path arguments must be of type string or ",n,!1,void 0,t)}const pA=new RegExp("[~\\*/\\[\\]]");function km(n,e,t){if(e.search(pA)>=0)throw Po(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Wc(...e.split("."))._internalPath}catch{throw Po(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Po(n,e,t,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new L(N.INVALID_ARGUMENT,l+n+c)}function _A(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Dm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class mA extends Nm{data(){return super.data()}}function Dm(n,e){return typeof e=="string"?km(n,e):e instanceof Wc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yA{convertValue(e,t="none"){switch(Rn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(In(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw B()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return ri(e,(s,r)=>{i[s]=this.convertValue(r,t)}),i}convertVectorValue(e){var t,i,s;const r=(s=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map(o=>ge(o.doubleValue));return new Gc(r)}convertGeoPoint(e){return new Hc(ge(e.latitude),ge(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Zo(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Xs(e));default:return null}}convertTimestamp(e){const t=wn(e);return new Re(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=ue.fromString(e);te(nm(i));const s=new Js(i.get(1),i.get(3)),r=new V(i.popFirst(5));return s.isEqual(t)||Xt(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Om extends Nm{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new oo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Dm("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class oo extends Om{data(e={}){return super.data(e)}}class EA{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ds(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new oo(this._firestore,this._userDataWriter,i.key,i,new Ds(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new oo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ds(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>r||l.type!==3).map(l=>{const c=new oo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ds(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:TA(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function TA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}class xm extends yA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,t)}}function WN(n,e,t){n=bi(n,it);const i=bi(n.firestore,So),s=vA(n.converter,e,t);return wA(i,[hA(uA(i),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Gt.none())])}function Lm(n,...e){var t,i,s;n=oe(n);let r={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||pf(e[o])||(r=e[o],o++);const l={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(pf(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(i=p.error)===null||i===void 0?void 0:i.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,u,f;if(n instanceof it)u=bi(n.firestore,So),f=bc(n._key.path),c={next:p=>{e[o]&&e[o](IA(u,n,p))},error:e[o+1],complete:e[o+2]};else{const p=bi(n,ua);u=bi(p.firestore,So),f=p._query;const m=new xm(u);c={next:E=>{e[o]&&e[o](new EA(u,m,p,E))},error:e[o+1],complete:e[o+2]},gA(n._query)}return function(m,E,A,k){const S=new XC(k),F=new DC(E,S,A);return m.asyncQueue.enqueueAndForget(async()=>SC(await lf(m),F)),()=>{S.eu(),m.asyncQueue.enqueueAndForget(async()=>PC(await lf(m),F))}}(Cm(u),f,l,c)}function wA(n,e){return function(i,s){const r=new Gn;return i.asyncQueue.enqueueAndForget(async()=>jC(await eA(i),s,r)),r.promise}(Cm(n),e)}function IA(n,e,t){const i=t.docs.get(e._key),s=new xm(n);return new Om(n,s,e._key,i,new Ds(t.hasPendingWrites,t.fromCache),e.converter)}function $N(...n){return new Kc("arrayUnion",n)}(function(e,t=!0){(function(s){Ji=s})(tn),rt(new st("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),l=new So(new hI(i.getProvider("auth-internal")),new _I(i.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new L(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Js(u.options.projectId,f)}(o,s),o);return r=Object.assign({useFetchStreams:t},r),l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),ke(Sd,"4.7.5",e),ke(Sd,"4.7.5","esm2017")})();var _f={};const mf="@firebase/database",gf="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mm="";function RA(n){Mm=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pe(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:$s(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Lt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new CA(e)}}catch{}return new AA},zn=Vm("localStorage"),bA=Vm("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=new lr("@firebase/database"),SA=function(){let n=1;return function(){return n++}}(),Fm=function(n){const e=$v(n),t=new qv;t.update(e);const i=t.digest();return sc.encodeByteArray(i)},gr=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=gr.apply(null,i):typeof i=="object"?e+=Pe(i):e+=i,e+=" "}return e};let Us=null,yf=!0;const PA=function(n,e){D(!e,"Can't turn on custom loggers persistently."),Si.logLevel=G.VERBOSE,Us=Si.log.bind(Si)},De=function(...n){if(yf===!0&&(yf=!1,Us===null&&bA.get("logging_enabled")===!0&&PA()),Us){const e=gr.apply(null,n);Us(e)}},yr=function(n){return function(...e){De(n,...e)}},ql=function(...n){const e="FIREBASE INTERNAL ERROR: "+gr(...n);Si.error(e)},Zt=function(...n){const e=`FIREBASE FATAL ERROR: ${gr(...n)}`;throw Si.error(e),new Error(e)},et=function(...n){const e="FIREBASE WARNING: "+gr(...n);Si.warn(e)},kA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&et("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},da=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},NA=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},$i="[MIN_NAME]",Xn="[MAX_NAME]",ci=function(n,e){if(n===e)return 0;if(n===$i||e===Xn)return-1;if(e===$i||n===Xn)return 1;{const t=vf(n),i=vf(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},DA=function(n,e){return n===e?0:n<e?-1:1},Rs=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Pe(e))},Yc=function(n){if(typeof n!="object"||n===null)return Pe(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Pe(e[i]),t+=":",t+=Yc(n[e[i]]);return t+="}",t},Um=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function We(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Bm=function(n){D(!da(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,l,c;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=l+i,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const u=[];for(c=t;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(s?1:0),u.reverse();const f=u.join("");let p="";for(c=0;c<64;c+=8){let m=parseInt(f.substr(c,8),2).toString(16);m.length===1&&(m="0"+m),p=p+m}return p.toLowerCase()},OA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},xA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function LA(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const MA=new RegExp("^-?(0*)\\d{1,10}$"),VA=-2147483648,FA=2147483647,vf=function(n){if(MA.test(n)){const e=Number(n);if(e>=VA&&e<=FA)return e}return null},ns=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw et("Exception was thrown by user callback.",t),e},Math.floor(0))}},UA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Bs=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){et(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(De("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',et(e)}}class ao{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ao.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="5",qm="v",jm="s",zm="r",Wm="f",$m=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Hm="ls",Gm="p",jl="ac",Km="websocket",Qm="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,t,i,s,r=!1,o="",l=!1,c=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=zn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&zn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function jA(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Xm(n,e,t){D(typeof e=="string","typeof type must == string"),D(typeof t=="object","typeof params must == object");let i;if(e===Km)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Qm)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);jA(n)&&(t.ns=n.namespace);const s=[];return We(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(){this.counters_={}}incrementCounter(e,t=1){Lt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Cv(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol={},al={};function Jc(n){const e=n.toString();return ol[e]||(ol[e]=new zA),ol[e]}function WA(n,e){const t=n.toString();return al[t]||(al[t]=e()),al[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&ns(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="start",HA="close",GA="pLPCommand",KA="pRTLPCB",Jm="id",Zm="pw",eg="ser",QA="cb",YA="seg",XA="ts",JA="d",ZA="dframe",tg=1870,ng=30,eb=tg-ng,tb=25e3,nb=3e4;class wi{constructor(e,t,i,s,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=yr(e),this.stats_=Jc(t),this.urlFn=c=>(this.appCheckToken&&(c[jl]=this.appCheckToken),Xm(t,Qm,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new $A(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(nb)),NA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Zc((...r)=>{const[o,l,c,u,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ef)this.id=l,this.password=c;else if(o===HA)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[Ef]="t",i[eg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[QA]=this.scriptTagHolder.uniqueCallbackIdentifier),i[qm]=Xc,this.transportSessionId&&(i[jm]=this.transportSessionId),this.lastSessionId&&(i[Hm]=this.lastSessionId),this.applicationId&&(i[Gm]=this.applicationId),this.appCheckToken&&(i[jl]=this.appCheckToken),typeof location<"u"&&location.hostname&&$m.test(location.hostname)&&(i[zm]=Wm);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){wi.forceAllow_=!0}static forceDisallow(){wi.forceDisallow_=!0}static isAvailable(){return wi.forceAllow_?!0:!wi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!OA()&&!xA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Pe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=gp(t),s=Um(i,eb);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[ZA]="t",i[Jm]=e,i[Zm]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Pe(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Zc{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=SA(),window[GA+this.uniqueCallbackIdentifier]=e,window[KA+this.uniqueCallbackIdentifier]=t,this.myIFrame=Zc.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){De("frame writing exception"),l.stack&&De(l.stack),De(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||De("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Jm]=this.myID,e[Zm]=this.myPW,e[eg]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ng+i.length<=tg;){const o=this.pendingSegs.shift();i=i+"&"+YA+s+"="+o.seg+"&"+XA+s+"="+o.ts+"&"+JA+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(tb)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{De("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib=16384,sb=45e3;let ko=null;typeof MozWebSocket<"u"?ko=MozWebSocket:typeof WebSocket<"u"&&(ko=WebSocket);class dt{constructor(e,t,i,s,r,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=yr(this.connId),this.stats_=Jc(t),this.connURL=dt.connectionURL_(t,o,l,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[qm]=Xc,typeof location<"u"&&location.hostname&&$m.test(location.hostname)&&(o[zm]=Wm),t&&(o[jm]=t),i&&(o[Hm]=i),s&&(o[jl]=s),r&&(o[Gm]=r),Xm(e,Km,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,zn.set("previous_websocket_failure",!0);try{let i;Ap(),this.mySock=new ko(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){dt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&ko!==null&&!dt.forceDisallow_}static previouslyFailed(){return zn.isInMemoryStorage||zn.get("previous_websocket_failure")===!0}markConnectionHealthy(){zn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=$s(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Pe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Um(t,ib);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(sb))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dt.responsesRequiredToBeHealthy=2;dt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{static get ALL_TRANSPORTS(){return[wi,dt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=dt&&dt.isAvailable();let i=t&&!dt.previouslyFailed();if(e.webSocketOnly&&(t||et("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[dt];else{const s=this.transports_=[];for(const r of tr.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);tr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}tr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb=6e4,ob=5e3,ab=10*1024,lb=100*1024,ll="t",Tf="d",cb="s",wf="r",ub="e",If="o",Rf="a",Cf="n",Af="p",hb="h";class db{constructor(e,t,i,s,r,o,l,c,u,f){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=yr("c:"+this.id+":"),this.transportManager_=new tr(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Bs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>lb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ab?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ll in e){const t=e[ll];t===Rf?this.upgradeIfSecondaryHealthy_():t===wf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===If&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Rs("t",e),i=Rs("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Af,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Rf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Cf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Rs("t",e),i=Rs("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Rs(ll,e);if(Tf in e){const i=e[Tf];if(t===hb){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Cf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===cb?this.onConnectionShutdown_(i):t===wf?this.onReset_(i):t===ub?ql("Server Error: "+i):t===If?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ql("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Xc!==i&&et("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Bs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(rb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Bs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ob))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Af,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(zn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){D(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No extends sg{static getInstance(){return new No}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!rc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=32,Sf=768;class ne{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ee(){return new ne("")}function H(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function An(n){return n.pieces_.length-n.pieceNum_}function re(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ne(n.pieces_,e)}function eu(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function fb(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function nr(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function rg(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ne(e,0)}function ye(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof ne)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new ne(t,0)}function K(n){return n.pieceNum_>=n.pieces_.length}function Je(n,e){const t=H(n),i=H(e);if(t===null)return e;if(t===i)return Je(re(n),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function pb(n,e){const t=nr(n,0),i=nr(e,0);for(let s=0;s<t.length&&s<i.length;s++){const r=ci(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function tu(n,e){if(An(n)!==An(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function lt(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(An(n)>An(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class _b{constructor(e,t){this.errorPrefix_=t,this.parts_=nr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ho(this.parts_[i]);og(this)}}function mb(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ho(e),og(n)}function gb(n){const e=n.parts_.pop();n.byteLength_-=Ho(e),n.parts_.length>0&&(n.byteLength_-=1)}function og(n){if(n.byteLength_>Sf)throw new Error(n.errorPrefix_+"has a key path longer than "+Sf+" bytes ("+n.byteLength_+").");if(n.parts_.length>bf)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+bf+") or object contains a cycle "+Un(n))}function Un(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu extends sg{static getInstance(){return new nu}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=1e3,yb=60*5*1e3,Pf=30*1e3,vb=1.3,Eb=3e4,Tb="server_kill",kf=3;class Kt extends ig{constructor(e,t,i,s,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=Kt.nextPersistentConnectionId_++,this.log_=yr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Cs,this.maxReconnectDelay_=yb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Ap())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");nu.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&No.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(Pe(r)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Bt,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,u=l.s;Kt.warnOnListenWarnings_(c,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Lt(e,"w")){const i=Oi(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();et(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Bv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Pf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Uv(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Pe(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ql("Unrecognized action received from server: "+Pe(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Eb&&(this.reconnectDelay_=Cs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*vb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Kt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,i())},u=function(p){D(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:c,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,m]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?De("getToken() completed but was canceled"):(De("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=m&&m.token,l=new db(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,E=>{et(E+" ("+this.repoInfo_.toString()+")"),this.interrupt(Tb)},r))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&et(p),c())}}}interrupt(e){De("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){De("Resuming connection for reason: "+e),delete this.interruptReasons_[e],uo(this.interruptReasons_)&&(this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Yc(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new ne(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){De("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=kf&&(this.reconnectDelay_=Pf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){De("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=kf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Mm.replace(/\./g,"-")]=1,rc()?e["framework.cordova"]=1:Cp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=No.getInstance().currentlyOnline();return uo(this.interruptReasons_)&&e}}Kt.nextPersistentConnectionId_=0;Kt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Q(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new Q($i,e),s=new Q($i,t);return this.compare(i,s)!==0}minPost(){return Q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gr;class ag extends fa{static get __EMPTY_NODE(){return Gr}static set __EMPTY_NODE(e){Gr=e}compare(e,t){return ci(e.name,t.name)}isDefinedOn(e){throw Qi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Q.MIN}maxPost(){return new Q(Xn,Gr)}makePost(e,t){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new Q(e,Gr)}toString(){return".key"}}const Pi=new ag;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Se{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??Se.RED,this.left=s??Ze.EMPTY_NODE,this.right=r??Ze.EMPTY_NODE}copy(e,t,i,s,r){return new Se(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ze.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Ze.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Se.RED=!0;Se.BLACK=!1;class wb{copy(e,t,i,s,r){return this}insert(e,t,i){return new Se(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ze{constructor(e,t=Ze.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ze(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Se.BLACK,null,null))}remove(e){return new Ze(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Se.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Kr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Kr(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Kr(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Kr(this.root_,null,this.comparator_,!0,e)}}Ze.EMPTY_NODE=new wb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ib(n,e){return ci(n.name,e.name)}function iu(n,e){return ci(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zl;function Rb(n){zl=n}const lg=function(n){return typeof n=="number"?"number:"+Bm(n):"string:"+n},cg=function(n){if(n.isLeafNode()){const e=n.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Lt(e,".sv"),"Priority must be a string or number.")}else D(n===zl||n.isEmpty(),"priority of unexpected type.");D(n===zl||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nf;class Ae{static set __childrenNodeConstructor(e){Nf=e}static get __childrenNodeConstructor(){return Nf}constructor(e,t=Ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),cg(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:H(e)===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=H(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(D(i!==".priority"||An(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+lg(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Bm(this.value_):e+=this.value_,this.lazyHash_=Fm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ae.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=Ae.VALUE_TYPE_ORDER.indexOf(t),r=Ae.VALUE_TYPE_ORDER.indexOf(i);return D(s>=0,"Unknown leaf type: "+t),D(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ug,hg;function Cb(n){ug=n}function Ab(n){hg=n}class bb extends fa{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?ci(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Q.MIN}maxPost(){return new Q(Xn,new Ae("[PRIORITY-POST]",hg))}makePost(e,t){const i=ug(e);return new Q(t,new Ae("[PRIORITY-POST]",i))}toString(){return".priority"}}const he=new bb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb=Math.log(2);class Pb{constructor(e){const t=r=>parseInt(Math.log(r)/Sb,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Do=function(n,e,t,i){n.sort(e);const s=function(c,u){const f=u-c;let p,m;if(f===0)return null;if(f===1)return p=n[c],m=t?t(p):p,new Se(m,p.node,Se.BLACK,null,null);{const E=parseInt(f/2,10)+c,A=s(c,E),k=s(E+1,u);return p=n[E],m=t?t(p):p,new Se(m,p.node,Se.BLACK,A,k)}},r=function(c){let u=null,f=null,p=n.length;const m=function(A,k){const S=p-A,F=p;p-=A;const q=s(S+1,F),M=n[S],$=t?t(M):M;E(new Se($,M.node,k,null,q))},E=function(A){u?(u.left=A,u=A):(f=A,u=A)};for(let A=0;A<c.count;++A){const k=c.nextBitIsOne(),S=Math.pow(2,c.count-(A+1));k?m(S,Se.BLACK):(m(S,Se.BLACK),m(S,Se.RED))}return f},o=new Pb(n.length),l=r(o);return new Ze(i||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cl;const mi={};class Wt{static get Default(){return D(mi&&he,"ChildrenNode.ts has not been loaded"),cl=cl||new Wt({".priority":mi},{".priority":he}),cl}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Oi(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ze?t:null}hasIndex(e){return Lt(this.indexSet_,e.toString())}addIndex(e,t){D(e!==Pi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(Q.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=Do(i,e.getCompare()):l=mi;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const f=Object.assign({},this.indexes_);return f[c]=l,new Wt(f,u)}addToIndexes(e,t){const i=ho(this.indexes_,(s,r)=>{const o=Oi(this.indexSet_,r);if(D(o,"Missing index implementation for "+r),s===mi)if(o.isDefinedOn(e.node)){const l=[],c=t.getIterator(Q.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&l.push(u),u=c.getNext();return l.push(e),Do(l,o.getCompare())}else return mi;else{const l=t.get(e.name);let c=s;return l&&(c=c.remove(new Q(e.name,l))),c.insert(e,e.node)}});return new Wt(i,this.indexSet_)}removeFromIndexes(e,t){const i=ho(this.indexes_,s=>{if(s===mi)return s;{const r=t.get(e.name);return r?s.remove(new Q(e.name,r)):s}});return new Wt(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As;class U{static get EMPTY_NODE(){return As||(As=new U(new Ze(iu),null,Wt.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&cg(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||As}updatePriority(e){return this.children_.isEmpty()?this:new U(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?As:t}}getChild(e){const t=H(e);return t===null?this:this.getImmediateChild(t).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(D(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new Q(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?As:this.priorityNode_;return new U(s,o,r)}}updateChild(e,t){const i=H(e);if(i===null)return t;{D(H(e)!==".priority"||An(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(re(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(he,(o,l)=>{t[o]=l.val(e),i++,r&&U.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+lg(this.getPriority().val())+":"),this.forEachChild(he,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Fm(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new Q(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Q(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Q(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Q.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Q.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vr?-1:0}withIndex(e){if(e===Pi||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new U(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Pi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(he),s=t.getIterator(he);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Pi?null:this.indexMap_.get(e.toString())}}U.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class kb extends U{constructor(){super(new Ze(iu),U.EMPTY_NODE,Wt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return U.EMPTY_NODE}isEmpty(){return!1}}const vr=new kb;Object.defineProperties(Q,{MIN:{value:new Q($i,U.EMPTY_NODE)},MAX:{value:new Q(Xn,vr)}});ag.__EMPTY_NODE=U.EMPTY_NODE;Ae.__childrenNodeConstructor=U;Rb(vr);Ab(vr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=!0;function Ee(n,e=null){if(n===null)return U.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ae(t,Ee(e))}if(!(n instanceof Array)&&Nb){const t=[];let i=!1;if(We(n,(o,l)=>{if(o.substring(0,1)!=="."){const c=Ee(l);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),t.push(new Q(o,c)))}}),t.length===0)return U.EMPTY_NODE;const r=Do(t,Ib,o=>o.name,iu);if(i){const o=Do(t,he.getCompare());return new U(r,Ee(e),new Wt({".priority":o},{".priority":he}))}else return new U(r,Ee(e),Wt.Default)}else{let t=U.EMPTY_NODE;return We(n,(i,s)=>{if(Lt(n,i)&&i.substring(0,1)!=="."){const r=Ee(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(Ee(e))}}Cb(Ee);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db extends fa{constructor(e){super(),this.indexPath_=e,D(!K(e)&&H(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?ci(e.name,t.name):r}makePost(e,t){const i=Ee(e),s=U.EMPTY_NODE.updateChild(this.indexPath_,i);return new Q(t,s)}maxPost(){const e=U.EMPTY_NODE.updateChild(this.indexPath_,vr);return new Q(Xn,e)}toString(){return nr(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob extends fa{compare(e,t){const i=e.node.compareTo(t.node);return i===0?ci(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Q.MIN}maxPost(){return Q.MAX}makePost(e,t){const i=Ee(e);return new Q(t,i)}toString(){return".value"}}const xb=new Ob;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(n){return{type:"value",snapshotNode:n}}function Hi(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function ir(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function sr(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Lb(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(s).equals(i.getChild(s))&&l.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(ir(t,l)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Hi(t,i)):o.trackChildChange(sr(t,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(he,(s,r)=>{t.hasChild(s)||i.trackChildChange(ir(s,r))}),t.isLeafNode()||t.forEachChild(he,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(sr(s,r,o))}else i.trackChildChange(Hi(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?U.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.indexedFilter_=new su(e.getIndex()),this.index_=e.getIndex(),this.startPost_=rr.getStartPost_(e),this.endPost_=rr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new Q(t,i))||(i=U.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=U.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(U.EMPTY_NODE);const r=this;return t.forEachChild(he,(o,l)=>{r.matches(new Q(o,l))||(s=s.updateImmediateChild(o,U.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new rr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new Q(t,i))||(i=U.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=U.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=U.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(U.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,U.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const p=this.index_.getCompare();o=(m,E)=>p(E,m)}else o=this.index_.getCompare();const l=e;D(l.numChildren()===this.limit_,"");const c=new Q(t,i),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(c);if(l.hasChild(t)){const p=l.getImmediateChild(t);let m=s.getChildAfterChild(this.index_,u,this.reverse_);for(;m!=null&&(m.name===t||l.hasChild(m.name));)m=s.getChildAfterChild(this.index_,m,this.reverse_);const E=m==null?1:o(m,c);if(f&&!i.isEmpty()&&E>=0)return r!=null&&r.trackChildChange(sr(t,i,p)),l.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(ir(t,p));const k=l.updateImmediateChild(t,U.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(r!=null&&r.trackChildChange(Hi(m.name,m.node)),k.updateImmediateChild(m.name,m.node)):k}}else return i.isEmpty()?e:f&&o(u,c)>=0?(r!=null&&(r.trackChildChange(ir(u.name,u.node)),r.trackChildChange(Hi(t,i))),l.updateImmediateChild(t,i).updateImmediateChild(u.name,U.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=he}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$i}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===he}copy(){const e=new ru;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Vb(n){return n.loadsAllData()?new su(n.getIndex()):n.hasLimit()?new Mb(n):new rr(n)}function Df(n){const e={};if(n.isDefault())return e;let t;if(n.index_===he?t="$priority":n.index_===xb?t="$value":n.index_===Pi?t="$key":(D(n.index_ instanceof Db,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Pe(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=Pe(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+Pe(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=Pe(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+Pe(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Of(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==he&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends ig{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=yr("p:rest:"),this.listens_={}}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Oo.getListenId_(e,i),l={};this.listens_[o]=l;const c=Df(e._queryParams);this.restRequest_(r+".json",c,(u,f)=>{let p=f;if(u===404&&(p=null,u=null),u===null&&this.onDataUpdate_(r,p,!1,i),Oi(this.listens_,o)===l){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",s(m,null)}})}unlisten(e,t){const i=Oo.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Df(e._queryParams),i=e._path.toString(),s=new Bt;return this.restRequest_(i+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Yi(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=$s(l.responseText)}catch{et("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,c)}else l.status!==401&&l.status!==404&&et("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(){this.rootNode_=U.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(){return{value:null,children:new Map}}function is(n,e,t){if(K(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=H(e);n.children.has(i)||n.children.set(i,xo());const s=n.children.get(i);e=re(e),is(s,e,t)}}function Wl(n,e){if(K(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(he,(i,s)=>{is(n,new ne(i),s)}),Wl(n,e)}}else if(n.children.size>0){const t=H(e);return e=re(e),n.children.has(t)&&Wl(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function $l(n,e,t){n.value!==null?t(e,n.value):Ub(n,(i,s)=>{const r=new ne(e.toString()+"/"+i);$l(s,r,t)})}function Ub(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&We(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=10*1e3,qb=30*1e3,jb=5*60*1e3;class zb{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Bb(e);const i=xf+(qb-xf)*Math.random();Bs(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;We(e,(s,r)=>{r>0&&Lt(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Bs(this.reportStats_.bind(this),Math.floor(Math.random()*2*jb))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(_t||(_t={}));function fg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ou(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function au(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=_t.ACK_USER_WRITE,this.source=fg()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ne(e));return new Lo(ee(),t,this.revert)}}else return D(H(this.path)===e,"operationForChild called for unrelated child."),new Lo(re(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t){this.source=e,this.path=t,this.type=_t.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new or(this.source,ee()):new or(this.source,re(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=_t.OVERWRITE}operationForChild(e){return K(this.path)?new Jn(this.source,ee(),this.snap.getImmediateChild(e)):new Jn(this.source,re(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=_t.MERGE}operationForChild(e){if(K(this.path)){const t=this.children.subtree(new ne(e));return t.isEmpty()?null:t.value?new Jn(this.source,ee(),t.value):new ar(this.source,ee(),t)}else return D(H(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ar(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const t=H(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function $b(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Lb(o.childName,o.snapshotNode))}),bs(n,s,"child_removed",e,i,t),bs(n,s,"child_added",e,i,t),bs(n,s,"child_moved",r,i,t),bs(n,s,"child_changed",e,i,t),bs(n,s,"value",e,i,t),s}function bs(n,e,t,i,s,r){const o=i.filter(l=>l.type===t);o.sort((l,c)=>Gb(n,l,c)),o.forEach(l=>{const c=Hb(n,l,r);s.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(c,n.query_))})})}function Hb(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Gb(n,e,t){if(e.childName==null||t.childName==null)throw Qi("Should only compare child_ events.");const i=new Q(e.childName,e.snapshotNode),s=new Q(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(n,e){return{eventCache:n,serverCache:e}}function qs(n,e,t,i){return pa(new Zn(e,t,i),n.serverCache)}function pg(n,e,t,i){return pa(n.eventCache,new Zn(e,t,i))}function Hl(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ei(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ul;const Kb=()=>(ul||(ul=new Ze(DA)),ul);class le{static fromObject(e){let t=new le(null);return We(e,(i,s)=>{t=t.set(new ne(i),s)}),t}constructor(e,t=Kb()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ee(),value:this.value};if(K(e))return null;{const i=H(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(re(e),t);return r!=null?{path:ye(new ne(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const t=H(e),i=this.children.get(t);return i!==null?i.subtree(re(e)):new le(null)}}set(e,t){if(K(e))return new le(t,this.children);{const i=H(e),r=(this.children.get(i)||new le(null)).set(re(e),t),o=this.children.insert(i,r);return new le(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new le(null):new le(null,this.children);{const t=H(e),i=this.children.get(t);if(i){const s=i.remove(re(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new le(null):new le(this.value,r)}else return this}}get(e){if(K(e))return this.value;{const t=H(e),i=this.children.get(t);return i?i.get(re(e)):null}}setTree(e,t){if(K(e))return t;{const i=H(e),r=(this.children.get(i)||new le(null)).setTree(re(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new le(this.value,o)}}fold(e){return this.fold_(ee(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(ye(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,ee(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(K(e))return null;{const r=H(e),o=this.children.get(r);return o?o.findOnPath_(re(e),ye(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ee(),t)}foreachOnPath_(e,t,i){if(K(e))return this;{this.value&&i(t,this.value);const s=H(e),r=this.children.get(s);return r?r.foreachOnPath_(re(e),ye(t,s),i):new le(null)}}foreach(e){this.foreach_(ee(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(ye(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.writeTree_=e}static empty(){return new gt(new le(null))}}function js(n,e,t){if(K(e))return new gt(new le(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Je(s,e);return r=r.updateChild(o,t),new gt(n.writeTree_.set(s,r))}else{const s=new le(t),r=n.writeTree_.setTree(e,s);return new gt(r)}}}function Lf(n,e,t){let i=n;return We(t,(s,r)=>{i=js(i,ye(e,s),r)}),i}function Mf(n,e){if(K(e))return gt.empty();{const t=n.writeTree_.setTree(e,new le(null));return new gt(t)}}function Gl(n,e){return ui(n,e)!=null}function ui(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Je(t.path,e)):null}function Vf(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(he,(i,s)=>{e.push(new Q(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new Q(i,s.value))}),e}function yn(n,e){if(K(e))return n;{const t=ui(n,e);return t!=null?new gt(new le(t)):new gt(n.writeTree_.subtree(e))}}function Kl(n){return n.writeTree_.isEmpty()}function Gi(n,e){return _g(ee(),n.writeTree_,e)}function _g(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(D(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=_g(ye(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(ye(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(n,e){return vg(e,n)}function Qb(n,e,t,i,s){D(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=js(n.visibleWrites,e,t)),n.lastWriteId=i}function Yb(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Xb(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);D(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&Jb(l,i.path)?s=!1:lt(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return Zb(n),!0;if(i.snap)n.visibleWrites=Mf(n.visibleWrites,i.path);else{const l=i.children;We(l,c=>{n.visibleWrites=Mf(n.visibleWrites,ye(i.path,c))})}return!0}else return!1}function Jb(n,e){if(n.snap)return lt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&lt(ye(n.path,t),e))return!0;return!1}function Zb(n){n.visibleWrites=mg(n.allWrites,eS,ee()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function eS(n){return n.visible}function mg(n,e,t){let i=gt.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let l;if(r.snap)lt(t,o)?(l=Je(t,o),i=js(i,l,r.snap)):lt(o,t)&&(l=Je(o,t),i=js(i,ee(),r.snap.getChild(l)));else if(r.children){if(lt(t,o))l=Je(t,o),i=Lf(i,l,r.children);else if(lt(o,t))if(l=Je(o,t),K(l))i=Lf(i,ee(),r.children);else{const c=Oi(r.children,H(l));if(c){const u=c.getChild(re(l));i=js(i,ee(),u)}}}else throw Qi("WriteRecord should have .snap or .children")}}return i}function gg(n,e,t,i,s){if(!i&&!s){const r=ui(n.visibleWrites,e);if(r!=null)return r;{const o=yn(n.visibleWrites,e);if(Kl(o))return t;if(t==null&&!Gl(o,ee()))return null;{const l=t||U.EMPTY_NODE;return Gi(o,l)}}}else{const r=yn(n.visibleWrites,e);if(!s&&Kl(r))return t;if(!s&&t==null&&!Gl(r,ee()))return null;{const o=function(u){return(u.visible||s)&&(!i||!~i.indexOf(u.writeId))&&(lt(u.path,e)||lt(e,u.path))},l=mg(n.allWrites,o,e),c=t||U.EMPTY_NODE;return Gi(l,c)}}}function tS(n,e,t){let i=U.EMPTY_NODE;const s=ui(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(he,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=yn(n.visibleWrites,e);return t.forEachChild(he,(o,l)=>{const c=Gi(yn(r,new ne(o)),l);i=i.updateImmediateChild(o,c)}),Vf(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=yn(n.visibleWrites,e);return Vf(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function nS(n,e,t,i,s){D(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=ye(e,t);if(Gl(n.visibleWrites,r))return null;{const o=yn(n.visibleWrites,r);return Kl(o)?s.getChild(t):Gi(o,s.getChild(t))}}function iS(n,e,t,i){const s=ye(e,t),r=ui(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=yn(n.visibleWrites,s);return Gi(o,i.getNode().getImmediateChild(t))}else return null}function sS(n,e){return ui(n.visibleWrites,e)}function rS(n,e,t,i,s,r,o){let l;const c=yn(n.visibleWrites,e),u=ui(c,ee());if(u!=null)l=u;else if(t!=null)l=Gi(c,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],p=o.getCompare(),m=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let E=m.getNext();for(;E&&f.length<s;)p(E,i)!==0&&f.push(E),E=m.getNext();return f}else return[]}function oS(){return{visibleWrites:gt.empty(),allWrites:[],lastWriteId:-1}}function Mo(n,e,t,i){return gg(n.writeTree,n.treePath,e,t,i)}function cu(n,e){return tS(n.writeTree,n.treePath,e)}function Ff(n,e,t,i){return nS(n.writeTree,n.treePath,e,t,i)}function Vo(n,e){return sS(n.writeTree,ye(n.treePath,e))}function aS(n,e,t,i,s,r){return rS(n.writeTree,n.treePath,e,t,i,s,r)}function uu(n,e,t){return iS(n.writeTree,n.treePath,e,t)}function yg(n,e){return vg(ye(n.treePath,e),n.writeTree)}function vg(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;D(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),D(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,sr(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,ir(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Hi(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,sr(i,e.snapshotNode,s.oldSnap));else throw Qi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Eg=new cS;class hu{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Zn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return uu(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ei(this.viewCache_),r=aS(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(n){return{filter:n}}function hS(n,e){D(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function dS(n,e,t,i,s){const r=new lS;let o,l;if(t.type===_t.OVERWRITE){const u=t;u.source.fromUser?o=Ql(n,e,u.path,u.snap,i,s,r):(D(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!K(u.path),o=Fo(n,e,u.path,u.snap,i,s,l,r))}else if(t.type===_t.MERGE){const u=t;u.source.fromUser?o=pS(n,e,u.path,u.children,i,s,r):(D(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Yl(n,e,u.path,u.children,i,s,l,r))}else if(t.type===_t.ACK_USER_WRITE){const u=t;u.revert?o=gS(n,e,u.path,i,s,r):o=_S(n,e,u.path,u.affectedTree,i,s,r)}else if(t.type===_t.LISTEN_COMPLETE)o=mS(n,e,t.path,i,r);else throw Qi("Unknown operation type: "+t.type);const c=r.getChanges();return fS(e,o,c),{viewCache:o,changes:c}}function fS(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Hl(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(dg(Hl(e)))}}function Tg(n,e,t,i,s,r){const o=e.eventCache;if(Vo(i,t)!=null)return e;{let l,c;if(K(t))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ei(e),f=u instanceof U?u:U.EMPTY_NODE,p=cu(i,f);l=n.filter.updateFullNode(e.eventCache.getNode(),p,r)}else{const u=Mo(i,ei(e));l=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=H(t);if(u===".priority"){D(An(t)===1,"Can't have a priority with additional path components");const f=o.getNode();c=e.serverCache.getNode();const p=Ff(i,t,f,c);p!=null?l=n.filter.updatePriority(f,p):l=o.getNode()}else{const f=re(t);let p;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const m=Ff(i,t,o.getNode(),c);m!=null?p=o.getNode().getImmediateChild(u).updateChild(f,m):p=o.getNode().getImmediateChild(u)}else p=uu(i,u,e.serverCache);p!=null?l=n.filter.updateChild(o.getNode(),u,p,f,s,r):l=o.getNode()}}return qs(e,l,o.isFullyInitialized()||K(t),n.filter.filtersNodes())}}function Fo(n,e,t,i,s,r,o,l){const c=e.serverCache;let u;const f=o?n.filter:n.filter.getIndexedFilter();if(K(t))u=f.updateFullNode(c.getNode(),i,null);else if(f.filtersNodes()&&!c.isFiltered()){const E=c.getNode().updateChild(t,i);u=f.updateFullNode(c.getNode(),E,null)}else{const E=H(t);if(!c.isCompleteForPath(t)&&An(t)>1)return e;const A=re(t),S=c.getNode().getImmediateChild(E).updateChild(A,i);E===".priority"?u=f.updatePriority(c.getNode(),S):u=f.updateChild(c.getNode(),E,S,A,Eg,null)}const p=pg(e,u,c.isFullyInitialized()||K(t),f.filtersNodes()),m=new hu(s,p,r);return Tg(n,p,t,s,m,l)}function Ql(n,e,t,i,s,r,o){const l=e.eventCache;let c,u;const f=new hu(s,e,r);if(K(t))u=n.filter.updateFullNode(e.eventCache.getNode(),i,o),c=qs(e,u,!0,n.filter.filtersNodes());else{const p=H(t);if(p===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),i),c=qs(e,u,l.isFullyInitialized(),l.isFiltered());else{const m=re(t),E=l.getNode().getImmediateChild(p);let A;if(K(m))A=i;else{const k=f.getCompleteChild(p);k!=null?eu(m)===".priority"&&k.getChild(rg(m)).isEmpty()?A=k:A=k.updateChild(m,i):A=U.EMPTY_NODE}if(E.equals(A))c=e;else{const k=n.filter.updateChild(l.getNode(),p,A,m,f,o);c=qs(e,k,l.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Uf(n,e){return n.eventCache.isCompleteForChild(e)}function pS(n,e,t,i,s,r,o){let l=e;return i.foreach((c,u)=>{const f=ye(t,c);Uf(e,H(f))&&(l=Ql(n,l,f,u,s,r,o))}),i.foreach((c,u)=>{const f=ye(t,c);Uf(e,H(f))||(l=Ql(n,l,f,u,s,r,o))}),l}function Bf(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Yl(n,e,t,i,s,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;K(t)?u=i:u=new le(null).setTree(t,i);const f=e.serverCache.getNode();return u.children.inorderTraversal((p,m)=>{if(f.hasChild(p)){const E=e.serverCache.getNode().getImmediateChild(p),A=Bf(n,E,m);c=Fo(n,c,new ne(p),A,s,r,o,l)}}),u.children.inorderTraversal((p,m)=>{const E=!e.serverCache.isCompleteForChild(p)&&m.value===null;if(!f.hasChild(p)&&!E){const A=e.serverCache.getNode().getImmediateChild(p),k=Bf(n,A,m);c=Fo(n,c,new ne(p),k,s,r,o,l)}}),c}function _S(n,e,t,i,s,r,o){if(Vo(s,t)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(K(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Fo(n,e,t,c.getNode().getChild(t),s,r,l,o);if(K(t)){let u=new le(null);return c.getNode().forEachChild(Pi,(f,p)=>{u=u.set(new ne(f),p)}),Yl(n,e,t,u,s,r,l,o)}else return e}else{let u=new le(null);return i.foreach((f,p)=>{const m=ye(t,f);c.isCompleteForPath(m)&&(u=u.set(f,c.getNode().getChild(m)))}),Yl(n,e,t,u,s,r,l,o)}}function mS(n,e,t,i,s){const r=e.serverCache,o=pg(e,r.getNode(),r.isFullyInitialized()||K(t),r.isFiltered());return Tg(n,o,t,i,Eg,s)}function gS(n,e,t,i,s,r){let o;if(Vo(i,t)!=null)return e;{const l=new hu(i,e,s),c=e.eventCache.getNode();let u;if(K(t)||H(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Mo(i,ei(e));else{const p=e.serverCache.getNode();D(p instanceof U,"serverChildren would be complete if leaf node"),f=cu(i,p)}f=f,u=n.filter.updateFullNode(c,f,r)}else{const f=H(t);let p=uu(i,f,e.serverCache);p==null&&e.serverCache.isCompleteForChild(f)&&(p=c.getImmediateChild(f)),p!=null?u=n.filter.updateChild(c,f,p,re(t),l,r):e.eventCache.getNode().hasChild(f)?u=n.filter.updateChild(c,f,U.EMPTY_NODE,re(t),l,r):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Mo(i,ei(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||Vo(i,ee())!=null,qs(e,u,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new su(i.getIndex()),r=Vb(i);this.processor_=uS(r);const o=t.serverCache,l=t.eventCache,c=s.updateFullNode(U.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(U.EMPTY_NODE,l.getNode(),null),f=new Zn(c,o.isFullyInitialized(),s.filtersNodes()),p=new Zn(u,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=pa(p,f),this.eventGenerator_=new Wb(this.query_)}get query(){return this.query_}}function vS(n){return n.viewCache_.serverCache.getNode()}function ES(n,e){const t=ei(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!K(e)&&!t.getImmediateChild(H(e)).isEmpty())?t.getChild(e):null}function qf(n){return n.eventRegistrations_.length===0}function TS(n,e){n.eventRegistrations_.push(e)}function jf(n,e,t){const i=[];if(t){D(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function zf(n,e,t,i){e.type===_t.MERGE&&e.source.queryId!==null&&(D(ei(n.viewCache_),"We should always have a full cache before handling merges"),D(Hl(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=dS(n.processor_,s,e,t,i);return hS(n.processor_,r.viewCache),D(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,wg(n,r.changes,r.viewCache.eventCache.getNode(),null)}function wS(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(he,(r,o)=>{i.push(Hi(r,o))}),t.isFullyInitialized()&&i.push(dg(t.getNode())),wg(n,i,t.getNode(),e)}function wg(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return $b(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo;class IS{constructor(){this.views=new Map}}function RS(n){D(!Uo,"__referenceConstructor has already been defined"),Uo=n}function CS(){return D(Uo,"Reference.ts has not been loaded"),Uo}function AS(n){return n.views.size===0}function du(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return D(r!=null,"SyncTree gave us an op for an invalid query."),zf(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(zf(o,e,t,i));return r}}function bS(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=Mo(t,s?i:null),c=!1;l?c=!0:i instanceof U?(l=cu(t,i),c=!1):(l=U.EMPTY_NODE,c=!1);const u=pa(new Zn(l,c,!1),new Zn(i,s,!1));return new yS(e,u)}return o}function SS(n,e,t,i,s,r){const o=bS(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),TS(o,t),wS(o,t)}function PS(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const l=bn(n);if(s==="default")for(const[c,u]of n.views.entries())o=o.concat(jf(u,t,i)),qf(u)&&(n.views.delete(c),u.query._queryParams.loadsAllData()||r.push(u.query));else{const c=n.views.get(s);c&&(o=o.concat(jf(c,t,i)),qf(c)&&(n.views.delete(s),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!bn(n)&&r.push(new(CS())(e._repo,e._path)),{removed:r,events:o}}function Ig(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ki(n,e){let t=null;for(const i of n.views.values())t=t||ES(i,e);return t}function Rg(n,e){if(e._queryParams.loadsAllData())return _a(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Cg(n,e){return Rg(n,e)!=null}function bn(n){return _a(n)!=null}function _a(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bo;function kS(n){D(!Bo,"__referenceConstructor has already been defined"),Bo=n}function NS(){return D(Bo,"Reference.ts has not been loaded"),Bo}let DS=1;class Wf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new le(null),this.pendingWriteTree_=oS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ag(n,e,t,i,s){return Qb(n.pendingWriteTree_,e,t,i,s),s?Er(n,new Jn(fg(),e,t)):[]}function Wn(n,e,t=!1){const i=Yb(n.pendingWriteTree_,e);if(Xb(n.pendingWriteTree_,e)){let r=new le(null);return i.snap!=null?r=r.set(ee(),!0):We(i.children,o=>{r=r.set(new ne(o),!0)}),Er(n,new Lo(i.path,r,t))}else return[]}function ma(n,e,t){return Er(n,new Jn(ou(),e,t))}function OS(n,e,t){const i=le.fromObject(t);return Er(n,new ar(ou(),e,i))}function xS(n,e){return Er(n,new or(ou(),e))}function LS(n,e,t){const i=pu(n,t);if(i){const s=_u(i),r=s.path,o=s.queryId,l=Je(r,e),c=new or(au(o),l);return mu(n,r,c)}else return[]}function Xl(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Cg(o,e))){const c=PS(o,e,t,i);AS(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const u=c.removed;if(l=c.events,!s){const f=u.findIndex(m=>m._queryParams.loadsAllData())!==-1,p=n.syncPointTree_.findOnPath(r,(m,E)=>bn(E));if(f&&!p){const m=n.syncPointTree_.subtree(r);if(!m.isEmpty()){const E=FS(m);for(let A=0;A<E.length;++A){const k=E[A],S=k.query,F=Pg(n,k);n.listenProvider_.startListening(zs(S),qo(n,S),F.hashFn,F.onComplete)}}}!p&&u.length>0&&!i&&(f?n.listenProvider_.stopListening(zs(e),null):u.forEach(m=>{const E=n.queryToTagMap.get(ga(m));n.listenProvider_.stopListening(zs(m),E)}))}US(n,u)}return l}function MS(n,e,t,i){const s=pu(n,i);if(s!=null){const r=_u(s),o=r.path,l=r.queryId,c=Je(o,e),u=new Jn(au(l),c,t);return mu(n,o,u)}else return[]}function VS(n,e,t,i){const s=pu(n,i);if(s){const r=_u(s),o=r.path,l=r.queryId,c=Je(o,e),u=le.fromObject(t),f=new ar(au(l),c,u);return mu(n,o,f)}else return[]}function $f(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(m,E)=>{const A=Je(m,s);r=r||ki(E,A),o=o||bn(E)});let l=n.syncPointTree_.get(s);l?(o=o||bn(l),r=r||ki(l,ee())):(l=new IS,n.syncPointTree_=n.syncPointTree_.set(s,l));let c;r!=null?c=!0:(c=!1,r=U.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((E,A)=>{const k=ki(A,ee());k&&(r=r.updateImmediateChild(E,k))}));const u=Cg(l,e);if(!u&&!e._queryParams.loadsAllData()){const m=ga(e);D(!n.queryToTagMap.has(m),"View does not exist, but we have a tag");const E=BS();n.queryToTagMap.set(m,E),n.tagToQueryMap.set(E,m)}const f=lu(n.pendingWriteTree_,s);let p=SS(l,e,t,f,r,c);if(!u&&!o&&!i){const m=Rg(l,e);p=p.concat(qS(n,e,m))}return p}function fu(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const c=Je(o,e),u=ki(l,c);if(u)return u});return gg(s,e,r,t,!0)}function Er(n,e){return bg(e,n.syncPointTree_,null,lu(n.pendingWriteTree_,ee()))}function bg(n,e,t,i){if(K(n.path))return Sg(n,e,t,i);{const s=e.get(ee());t==null&&s!=null&&(t=ki(s,ee()));let r=[];const o=H(n.path),l=n.operationForChild(o),c=e.children.get(o);if(c&&l){const u=t?t.getImmediateChild(o):null,f=yg(i,o);r=r.concat(bg(l,c,u,f))}return s&&(r=r.concat(du(s,n,i,t))),r}}function Sg(n,e,t,i){const s=e.get(ee());t==null&&s!=null&&(t=ki(s,ee()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=t?t.getImmediateChild(o):null,u=yg(i,o),f=n.operationForChild(o);f&&(r=r.concat(Sg(f,l,c,u)))}),s&&(r=r.concat(du(s,n,i,t))),r}function Pg(n,e){const t=e.query,i=qo(n,t);return{hashFn:()=>(vS(e)||U.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?LS(n,t._path,i):xS(n,t._path);{const r=LA(s,t);return Xl(n,t,null,r)}}}}function qo(n,e){const t=ga(e);return n.queryToTagMap.get(t)}function ga(n){return n._path.toString()+"$"+n._queryIdentifier}function pu(n,e){return n.tagToQueryMap.get(e)}function _u(n){const e=n.indexOf("$");return D(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ne(n.substr(0,e))}}function mu(n,e,t){const i=n.syncPointTree_.get(e);D(i,"Missing sync point for query tag that we're tracking");const s=lu(n.pendingWriteTree_,e);return du(i,t,s,null)}function FS(n){return n.fold((e,t,i)=>{if(t&&bn(t))return[_a(t)];{let s=[];return t&&(s=Ig(t)),We(i,(r,o)=>{s=s.concat(o)}),s}})}function zs(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(NS())(n._repo,n._path):n}function US(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=ga(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function BS(){return DS++}function qS(n,e,t){const i=e._path,s=qo(n,e),r=Pg(n,t),o=n.listenProvider_.startListening(zs(e),s,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(i);if(s)D(!bn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((u,f,p)=>{if(!K(u)&&f&&bn(f))return[_a(f).query];{let m=[];return f&&(m=m.concat(Ig(f).map(E=>E.query))),We(p,(E,A)=>{m=m.concat(A)}),m}});for(let u=0;u<c.length;++u){const f=c[u];n.listenProvider_.stopListening(zs(f),qo(n,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new gu(t)}node(){return this.node_}}class yu{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ye(this.path_,e);return new yu(this.syncTree_,t)}node(){return fu(this.syncTree_,this.path_)}}const jS=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Hf=function(n,e,t){if(!n||typeof n!="object")return n;if(D(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return zS(n[".sv"],e,t);if(typeof n[".sv"]=="object")return WS(n[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},zS=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:D(!1,"Unexpected server value: "+n)}},WS=function(n,e,t){n.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&D(!1,"Unexpected increment value: "+i);const s=e.node();if(D(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},$S=function(n,e,t,i){return vu(e,new yu(t,n),i)},kg=function(n,e,t){return vu(n,new gu(e),t)};function vu(n,e,t){const i=n.getPriority().val(),s=Hf(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=Hf(o.getValue(),e,t);return l!==o.getValue()||s!==o.getPriority().val()?new Ae(l,Ee(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Ae(s))),o.forEachChild(he,(l,c)=>{const u=vu(c,e.getImmediateChild(l),t);u!==c&&(r=r.updateImmediateChild(l,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Tu(n,e){let t=e instanceof ne?e:new ne(e),i=n,s=H(t);for(;s!==null;){const r=Oi(i.node.children,s)||{children:{},childCount:0};i=new Eu(s,i,r),t=re(t),s=H(t)}return i}function ss(n){return n.node.value}function Ng(n,e){n.node.value=e,Jl(n)}function Dg(n){return n.node.childCount>0}function HS(n){return ss(n)===void 0&&!Dg(n)}function ya(n,e){We(n.node.children,(t,i)=>{e(new Eu(t,n,i))})}function Og(n,e,t,i){t&&!i&&e(n),ya(n,s=>{Og(s,e,!0,i)}),t&&i&&e(n)}function GS(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Tr(n){return new ne(n.parent===null?n.name:Tr(n.parent)+"/"+n.name)}function Jl(n){n.parent!==null&&KS(n.parent,n.name,n)}function KS(n,e,t){const i=HS(t),s=Lt(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Jl(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Jl(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=/[\[\].#$\/\u0000-\u001F\u007F]/,YS=/[\[\].#$\u0000-\u001F\u007F]/,hl=10*1024*1024,wu=function(n){return typeof n=="string"&&n.length!==0&&!QS.test(n)},xg=function(n){return typeof n=="string"&&n.length!==0&&!YS.test(n)},XS=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),xg(n)},Lg=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!da(n)||n&&typeof n=="object"&&Lt(n,".sv")},Zl=function(n,e,t,i){va(xi(n,"value"),e,t)},va=function(n,e,t){const i=t instanceof ne?new _b(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Un(i));if(typeof e=="function")throw new Error(n+"contains a function "+Un(i)+" with contents = "+e.toString());if(da(e))throw new Error(n+"contains "+e.toString()+" "+Un(i));if(typeof e=="string"&&e.length>hl/3&&Ho(e)>hl)throw new Error(n+"contains a string greater than "+hl+" utf8 bytes "+Un(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(We(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!wu(o)))throw new Error(n+" contains an invalid key ("+o+") "+Un(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);mb(i,o),va(n,l,i),gb(i)}),s&&r)throw new Error(n+' contains ".value" child '+Un(i)+" in addition to actual children.")}},JS=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const r=nr(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!wu(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(pb);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&lt(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},ZS=function(n,e,t,i){const s=xi(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];We(e,(o,l)=>{const c=new ne(o);if(va(s,l,ye(t,c)),eu(c)===".priority"&&!Lg(l))throw new Error(s+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),JS(s,r)},e0=function(n,e,t){if(da(e))throw new Error(xi(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Lg(e))throw new Error(xi(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Mg=function(n,e,t,i){if(!xg(t))throw new Error(xi(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},t0=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Mg(n,e,t)},Os=function(n,e){if(H(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},n0=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!wu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!XS(t))throw new Error(xi(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Iu(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!tu(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Vg(n,e,t){Iu(n,t),Fg(n,i=>tu(i,e))}function en(n,e,t){Iu(n,t),Fg(n,i=>lt(i,e)||lt(e,i))}function Fg(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(s0(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function s0(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Us&&De("event: "+t.toString()),ns(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0="repo_interrupt",o0=25;class a0{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new i0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=xo(),this.transactionQueueTree_=new Eu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function l0(n,e,t){if(n.stats_=Jc(n.repoInfo_),n.forceRestClient_||UA())n.server_=new Oo(n.repoInfo_,(i,s,r,o)=>{Gf(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Kf(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pe(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Kt(n.repoInfo_,e,(i,s,r,o)=>{Gf(n,i,s,r,o)},i=>{Kf(n,i)},i=>{u0(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=WA(n.repoInfo_,()=>new zb(n.stats_,n.server_)),n.infoData_=new Fb,n.infoSyncTree_=new Wf({startListening:(i,s,r,o)=>{let l=[];const c=n.infoData_.getNode(i._path);return c.isEmpty()||(l=ma(n.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Cu(n,"connected",!1),n.serverSyncTree_=new Wf({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(l,c)=>{const u=o(l,c);en(n.eventQueue_,i._path,u)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function c0(n){const t=n.infoData_.getNode(new ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ru(n){return jS({timestamp:c0(n)})}function Gf(n,e,t,i,s){n.dataUpdateCount++;const r=new ne(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const c=ho(t,u=>Ee(u));o=VS(n.serverSyncTree_,r,c,s)}else{const c=Ee(t);o=MS(n.serverSyncTree_,r,c,s)}else if(i){const c=ho(t,u=>Ee(u));o=OS(n.serverSyncTree_,r,c)}else{const c=Ee(t);o=ma(n.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=Ea(n,r)),en(n.eventQueue_,l,o)}function Kf(n,e){Cu(n,"connected",e),e===!1&&d0(n)}function u0(n,e){We(e,(t,i)=>{Cu(n,t,i)})}function Cu(n,e,t){const i=new ne("/.info/"+e),s=Ee(t);n.infoData_.updateSnapshot(i,s);const r=ma(n.infoSyncTree_,i,s);en(n.eventQueue_,i,r)}function Ug(n){return n.nextWriteId_++}function h0(n,e,t,i,s){Au(n,"set",{path:e.toString(),value:t,priority:i});const r=Ru(n),o=Ee(t,i),l=fu(n.serverSyncTree_,e),c=kg(o,l,r),u=Ug(n),f=Ag(n.serverSyncTree_,e,c,u,!0);Iu(n.eventQueue_,f),n.server_.put(e.toString(),o.val(!0),(m,E)=>{const A=m==="ok";A||et("set at "+e+" failed: "+m);const k=Wn(n.serverSyncTree_,u,!A);en(n.eventQueue_,e,k),Ki(n,s,m,E)});const p=Wg(n,e);Ea(n,p),en(n.eventQueue_,p,[])}function d0(n){Au(n,"onDisconnectEvents");const e=Ru(n),t=xo();$l(n.onDisconnect_,ee(),(s,r)=>{const o=$S(s,r,n.serverSyncTree_,e);is(t,s,o)});let i=[];$l(t,ee(),(s,r)=>{i=i.concat(ma(n.serverSyncTree_,s,r));const o=Wg(n,s);Ea(n,o)}),n.onDisconnect_=xo(),en(n.eventQueue_,ee(),i)}function f0(n,e,t){n.server_.onDisconnectCancel(e.toString(),(i,s)=>{i==="ok"&&Wl(n.onDisconnect_,e),Ki(n,t,i,s)})}function Qf(n,e,t,i){const s=Ee(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(r,o)=>{r==="ok"&&is(n.onDisconnect_,e,s),Ki(n,i,r,o)})}function p0(n,e,t,i,s){const r=Ee(t,i);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,l)=>{o==="ok"&&is(n.onDisconnect_,e,r),Ki(n,s,o,l)})}function _0(n,e,t,i){if(uo(t)){De("onDisconnect().update() called with empty data.  Don't do anything."),Ki(n,i,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,r)=>{s==="ok"&&We(t,(o,l)=>{const c=Ee(l);is(n.onDisconnect_,ye(e,o),c)}),Ki(n,i,s,r)})}function m0(n,e,t){let i;H(e._path)===".info"?i=$f(n.infoSyncTree_,e,t):i=$f(n.serverSyncTree_,e,t),Vg(n.eventQueue_,e._path,i)}function g0(n,e,t){let i;H(e._path)===".info"?i=Xl(n.infoSyncTree_,e,t):i=Xl(n.serverSyncTree_,e,t),Vg(n.eventQueue_,e._path,i)}function y0(n){n.persistentConnection_&&n.persistentConnection_.interrupt(r0)}function Au(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),De(t,...e)}function Ki(n,e,t,i){e&&ns(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Bg(n,e,t){return fu(n.serverSyncTree_,e,t)||U.EMPTY_NODE}function bu(n,e=n.transactionQueueTree_){if(e||Ta(n,e),ss(e)){const t=jg(n,e);D(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&v0(n,Tr(e),t)}else Dg(e)&&ya(e,t=>{bu(n,t)})}function v0(n,e,t){const i=t.map(u=>u.currentWriteId),s=Bg(n,e,i);let r=s;const o=s.hash();for(let u=0;u<t.length;u++){const f=t[u];D(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const p=Je(e,f.path);r=r.updateChild(p,f.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;n.server_.put(c.toString(),l,u=>{Au(n,"transaction put response",{path:c.toString(),status:u});let f=[];if(u==="ok"){const p=[];for(let m=0;m<t.length;m++)t[m].status=2,f=f.concat(Wn(n.serverSyncTree_,t[m].currentWriteId)),t[m].onComplete&&p.push(()=>t[m].onComplete(null,!0,t[m].currentOutputSnapshotResolved)),t[m].unwatcher();Ta(n,Tu(n.transactionQueueTree_,e)),bu(n,n.transactionQueueTree_),en(n.eventQueue_,e,f);for(let m=0;m<p.length;m++)ns(p[m])}else{if(u==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{et("transaction at "+c.toString()+" failed: "+u);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=u}Ea(n,e)}},o)}function Ea(n,e){const t=qg(n,e),i=Tr(t),s=jg(n,t);return E0(n,s,i),i}function E0(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],u=Je(t,c.path);let f=!1,p;if(D(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)f=!0,p=c.abortReason,s=s.concat(Wn(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=o0)f=!0,p="maxretry",s=s.concat(Wn(n.serverSyncTree_,c.currentWriteId,!0));else{const m=Bg(n,c.path,o);c.currentInputSnapshot=m;const E=e[l].update(m.val());if(E!==void 0){va("transaction failed: Data returned ",E,c.path);let A=Ee(E);typeof E=="object"&&E!=null&&Lt(E,".priority")||(A=A.updatePriority(m.getPriority()));const S=c.currentWriteId,F=Ru(n),q=kg(A,m,F);c.currentOutputSnapshotRaw=A,c.currentOutputSnapshotResolved=q,c.currentWriteId=Ug(n),o.splice(o.indexOf(S),1),s=s.concat(Ag(n.serverSyncTree_,c.path,q,c.currentWriteId,c.applyLocally)),s=s.concat(Wn(n.serverSyncTree_,S,!0))}else f=!0,p="nodata",s=s.concat(Wn(n.serverSyncTree_,c.currentWriteId,!0))}en(n.eventQueue_,t,s),s=[],f&&(e[l].status=2,function(m){setTimeout(m,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(p),!1,null))))}Ta(n,n.transactionQueueTree_);for(let l=0;l<i.length;l++)ns(i[l]);bu(n,n.transactionQueueTree_)}function qg(n,e){let t,i=n.transactionQueueTree_;for(t=H(e);t!==null&&ss(i)===void 0;)i=Tu(i,t),e=re(e),t=H(e);return i}function jg(n,e){const t=[];return zg(n,e,t),t.sort((i,s)=>i.order-s.order),t}function zg(n,e,t){const i=ss(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);ya(e,s=>{zg(n,s,t)})}function Ta(n,e){const t=ss(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Ng(e,t.length>0?t:void 0)}ya(e,i=>{Ta(n,i)})}function Wg(n,e){const t=Tr(qg(n,e)),i=Tu(n.transactionQueueTree_,e);return GS(i,s=>{dl(n,s)}),dl(n,i),Og(i,s=>{dl(n,s)}),t}function dl(n,e){const t=ss(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(D(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(D(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Wn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ng(e,void 0):t.length=r+1,en(n.eventQueue_,Tr(e),s);for(let o=0;o<i.length;o++)ns(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function w0(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):et(`Invalid query segment '${t}' in query '${n}'`)}return e}const Yf=function(n,e){const t=I0(n),i=t.namespace;t.domain==="firebase.com"&&Zt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Zt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||kA();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ym(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new ne(t.pathString)}},I0=function(n){let e="",t="",i="",s="",r="",o=!0,l="https",c=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(l=n.substring(0,u-1),n=n.substring(u+2));let f=n.indexOf("/");f===-1&&(f=n.length);let p=n.indexOf("?");p===-1&&(p=n.length),e=n.substring(0,Math.min(f,p)),f<p&&(s=T0(n.substring(f,p)));const m=w0(n.substring(Math.min(n.length,p)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const E=e.slice(0,u);if(E.toLowerCase()==="localhost")t="localhost";else if(E.split(".").length<=2)t=E;else{const A=e.indexOf(".");i=e.substring(0,A).toLowerCase(),t=e.substring(A+1),r=i}"ns"in m&&(r=m.ns)}return{host:e,port:c,domain:t,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Pe(this.snapshot.exportVal())}}class C0{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Bt;return f0(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Os("OnDisconnect.remove",this._path);const e=new Bt;return Qf(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Os("OnDisconnect.set",this._path),Zl("OnDisconnect.set",e,this._path);const t=new Bt;return Qf(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Os("OnDisconnect.setWithPriority",this._path),Zl("OnDisconnect.setWithPriority",e,this._path),e0("OnDisconnect.setWithPriority",t);const i=new Bt;return p0(this._repo,this._path,e,t,i.wrapCallback(()=>{})),i.promise}update(e){Os("OnDisconnect.update",this._path),ZS("OnDisconnect.update",e,this._path);const t=new Bt;return _0(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return K(this._path)?null:eu(this._path)}get ref(){return new On(this._repo,this._path)}get _queryIdentifier(){const e=Of(this._queryParams),t=Yc(e);return t==="{}"?"default":t}get _queryObject(){return Of(this._queryParams)}isEqual(e){if(e=oe(e),!(e instanceof Su))return!1;const t=this._repo===e._repo,i=tu(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+fb(this._path)}}class On extends Su{constructor(e,t){super(e,t,new ru,!1)}get parent(){const e=rg(this._path);return e===null?null:new On(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class jo{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ne(e),i=ec(this.ref,e);return new jo(this._node.getChild(t),i,he)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new jo(s,ec(this.ref,i),he)))}hasChild(e){const t=new ne(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function HN(n,e){return n=oe(n),n._checkNotDeleted("ref"),e!==void 0?ec(n._root,e):n._root}function ec(n,e){return n=oe(n),H(n._path)===null?t0("child","path",e):Mg("child","path",e),new On(n._repo,ye(n._path,e))}function GN(n){return n=oe(n),new b0(n._repo,n._path)}function KN(n,e){n=oe(n),Os("set",n._path),Zl("set",e,n._path);const t=new Bt;return h0(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class Pu{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new R0("value",this,new jo(e.snapshotNode,new On(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new C0(this,e,t):null}matches(e){return e instanceof Pu?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function S0(n,e,t,i,s){const r=new A0(t,void 0),o=new Pu(r);return m0(n._repo,n,o),()=>g0(n._repo,n,o)}function QN(n,e,t,i){return S0(n,"value",e)}RS(On);kS(On);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0="FIREBASE_DATABASE_EMULATOR_HOST",tc={};let k0=!1;function N0(n,e,t,i){n.repoInfo_=new Ym(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function D0(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Zt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),De("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Yf(r,s),l=o.repoInfo,c;typeof process<"u"&&_f&&(c=_f[P0]),c?(r=`http://${c}?ns=${l.namespace}`,o=Yf(r,s),l=o.repoInfo):o.repoInfo.secure;const u=new qA(n.name,n.options,e);n0("Invalid Firebase Database URL",o),K(o.path)||Zt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=x0(l,n,u,new BA(n.name,t));return new L0(f,n)}function O0(n,e){const t=tc[e];(!t||t[n.key]!==n)&&Zt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),y0(n),delete t[n.key]}function x0(n,e,t,i){let s=tc[e.name];s||(s={},tc[e.name]=s);let r=s[n.toURLString()];return r&&Zt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new a0(n,k0,t,i),s[n.toURLString()]=r,r}class L0{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(l0(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new On(this._repo,ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(O0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Zt("Cannot call "+e+" on a deleted database.")}}function M0(n=Go(),e){const t=Dn(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Ep("database");i&&V0(t,...i)}return t}function V0(n,e,t,i={}){n=oe(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Zt("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Zt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ao(ao.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Ip(i.mockUserToken,n.app.options.projectId);r=new ao(o)}N0(s,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(n){RA(tn),rt(new st("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return D0(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),ke(mf,gf,n),ke(mf,gf,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0={".sv":"timestamp"};function YN(){return U0}Kt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Kt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};F0();let B0={apiKey:"AIzaSyBBtp0X-mJVTRHKFBMwt2_3pxIbfhhz_ak",authDomain:"dreamreactfirebase.firebaseapp.com",projectId:"dreamreactfirebase",storageBucket:"dreamreactfirebase.firebasestorage.app",messagingSenderId:"622346676045",appId:"1:622346676045:web:a646ed4187bc79d7443904",measurementId:"G-6FNYF33DY3",databaseURL:"https://dreamreactfirebase-default-rtdb.europe-west1.firebasedatabase.app"},ku=hc(B0),XN=rA(ku),JN=aI(ku),ZN=M0(ku);function Nu(n,e=null){let t;if(!globalThis.window){const{subscribe:s}=$t(e);return{subscribe:s}}if(!n){console.warn("Firebase Auth is not initialized. Are you missing FirebaseApp as a parent component?");const{subscribe:s}=$t(null);return{subscribe:s}}const{subscribe:i}=$t((n==null?void 0:n.currentUser)??null,s=>(t=YT(n,r=>{s(r)}),()=>t()));return{subscribe:i}}kt();Du[Dt]="node_modules/sveltefire/dist/components/User.svelte";function Du(n,e){bt(new.target),Ot(e,!1,Du);const t=Sn(),i=()=>(kn(r,"user"),Pn(r,"$user",t)),s=At().auth,r=Nu(s);Pt();var o=pe(),l=me(o);return Nn(l,i,c=>{var u=pe(),f=me(u);tt(f,e,"default",{get user(){return i()}},null),_e(c,u)},c=>{var u=pe(),f=me(u);tt(f,e,"signedOut",{},null),_e(c,u)}),_e(n,o),xt({...St()})}Nt(Du);function q0(n,e,t){let i;if(!globalThis.window){const{subscribe:o}=$t(t);return{subscribe:o,ref:null,id:""}}if(!n){console.warn("Firestore is not initialized. Are you missing FirebaseApp as a parent component?");const{subscribe:o}=$t(null);return{subscribe:o,ref:null,id:""}}const s=typeof e=="string"?sA(n,e):e,{subscribe:r}=$t(t,o=>(i=Lm(s,l=>{o(l.data()??null)}),()=>i()));return{subscribe:r,ref:s,id:s.id}}function j0(n,e,t=[]){let i;if(!globalThis.window){const{subscribe:o}=$t(t);return{subscribe:o,ref:null}}if(!n){console.warn("Firestore is not initialized. Are you missing FirebaseApp as a parent component?");const{subscribe:o}=$t([]);return{subscribe:o,ref:null}}const s=typeof e=="string"?iA(n,e):e,{subscribe:r}=$t(t,o=>(i=Lm(s,l=>{const c=l.docs.map(u=>({id:u.id,ref:u.ref,...u.data()}));o(c)}),()=>i()));return{subscribe:r,ref:s}}const $g="firebase";function z0(n){_v($g,n)}function At(){return mv($g)}kt();Ou[Dt]="node_modules/sveltefire/dist/components/Collection.svelte";function Ou(n,e){bt(new.target),Ot(e,!1,Ou);const t=Sn(),i=()=>(kn(l,"store"),Pn(l,"$store",t));let s=Oe(e,"ref",8),r=Oe(e,"startWith",24,()=>{});const{firestore:o}=At();let l=j0(o,s(),r());Pt();var c=pe(),u=me(c);return Nn(u,()=>Di(i(),void 0,!1),f=>{var p=pe(),m=me(p);tt(m,e,"default",{get data(){return i()},get ref(){return l.ref},get count(){var E;return((E=i())==null?void 0:E.length)??0},firestore:o},null),_e(f,p)},f=>{var p=pe(),m=me(p);tt(m,e,"loading",{},null),_e(f,p)}),_e(n,c),xt({...St()})}Nt(Ou);kt();xu[Dt]="node_modules/sveltefire/dist/components/Doc.svelte";function xu(n,e){bt(new.target),Ot(e,!1,xu);const t=Sn(),i=()=>(kn(l,"store"),Pn(l,"$store",t));let s=Oe(e,"ref",8),r=Oe(e,"startWith",24,()=>{});const{firestore:o}=At();let l=q0(o,s(),r());Pt();var c=pe(),u=me(c);return Nn(u,()=>Di(i(),void 0,!1)&&Di(i(),null,!1),f=>{var p=pe(),m=me(p);tt(m,e,"default",{get data(){return i()},get ref(){return l.ref},firestore:o},null),_e(f,p)},f=>{var p=pe(),m=me(p);tt(m,e,"loading",{},null),_e(f,p)}),_e(n,c),xt({...St()})}Nt(xu);kt();Lu[Dt]="node_modules/sveltefire/dist/components/FirebaseApp.svelte";function Lu(n,e){bt(new.target),Ot(e,!1,Lu);let t=Oe(e,"firestore",24,()=>{}),i=Oe(e,"rtdb",24,()=>{}),s=Oe(e,"auth",24,()=>{}),r=Oe(e,"storage",24,()=>{}),o=Oe(e,"analytics",24,()=>{});z0({firestore:t(),rtdb:i(),auth:s(),storage:r(),analytics:o()}),Pt();var l=pe(),c=me(l);return tt(c,e,"default",{},null),_e(n,l),xt({...St()})}Nt(Lu);kt();Mu[Dt]="node_modules/sveltefire/dist/components/SignedIn.svelte";function Mu(n,e){bt(new.target),Ot(e,!1,Mu);const t=Sn(),i=()=>(kn(r,"user"),Pn(r,"$user",t)),s=At().auth,r=Nu(s);Pt();var o=pe(),l=me(o);return Nn(l,i,c=>{var u=pe(),f=me(u);tt(f,e,"default",{get user(){return i()},auth:s,signOut:()=>XT(s)},null),_e(c,u)}),_e(n,o),xt({...St()})}Nt(Mu);kt();Vu[Dt]="node_modules/sveltefire/dist/components/SignedOut.svelte";function Vu(n,e){bt(new.target),Ot(e,!1,Vu);const t=Sn(),i=()=>(kn(r,"user"),Pn(r,"$user",t)),s=At().auth,r=Nu(s);Pt();var o=pe(),l=me(o);return Nn(l,()=>!i(),c=>{var u=pe(),f=me(u);tt(f,e,"default",{auth:s},null),_e(c,u)}),_e(n,o),xt({...St()})}Nt(Vu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="firebasestorage.googleapis.com",Gg="storageBucket",W0=2*60*1e3,$0=10*60*1e3,H0=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends ot{constructor(e,t,i=0){super(fl(e),`Firebase Storage: ${t} (${fl(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,de.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return fl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ce;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ce||(ce={}));function fl(n){return"storage/"+n}function Fu(){const n="An unknown error occurred, please check the error payload for server response.";return new de(ce.UNKNOWN,n)}function G0(n){return new de(ce.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function K0(n){return new de(ce.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Q0(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new de(ce.UNAUTHENTICATED,n)}function Y0(){return new de(ce.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function X0(n){return new de(ce.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Kg(){return new de(ce.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Qg(){return new de(ce.CANCELED,"User canceled the upload/download.")}function J0(n){return new de(ce.INVALID_URL,"Invalid URL '"+n+"'.")}function Z0(n){return new de(ce.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function eP(){return new de(ce.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Gg+"' property when initializing the app?")}function Yg(){return new de(ce.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function tP(){return new de(ce.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function nP(){return new de(ce.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function iP(n){return new de(ce.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function nc(n){return new de(ce.INVALID_ARGUMENT,n)}function Xg(){return new de(ce.APP_DELETED,"The Firebase app was deleted.")}function sP(n){return new de(ce.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ws(n,e){return new de(ce.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ss(n){throw new de(ce.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Ke.makeFromUrl(e,t)}catch{return new Ke(e,"")}if(i.path==="")return i;throw Z0(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r($){$.path.charAt($.path.length-1)==="/"&&($.path_=$.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u($){$.path_=decodeURIComponent($.path)}const f="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",E=new RegExp(`^https?://${p}/${f}/b/${s}/o${m}`,"i"),A={bucket:1,path:3},k=t===Hg?"(?:storage.googleapis.com|storage.cloud.google.com)":t,S="([^?#]*)",F=new RegExp(`^https?://${k}/${s}/${S}`,"i"),M=[{regex:l,indices:c,postModify:r},{regex:E,indices:A,postModify:u},{regex:F,indices:{bucket:1,path:2},postModify:u}];for(let $=0;$<M.length;$++){const we=M[$],ie=we.regex.exec(e);if(ie){const w=ie[we.indices.bucket];let g=ie[we.indices.path];g||(g=""),i=new Ke(w,g),we.postModify(i);break}}if(i==null)throw J0(e);return i}}class rP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(n,e,t){let i=1,s=null,r=null,o=!1,l=0;function c(){return l===2}let u=!1;function f(...S){u||(u=!0,e.apply(null,S))}function p(S){s=setTimeout(()=>{s=null,n(E,c())},S)}function m(){r&&clearTimeout(r)}function E(S,...F){if(u){m();return}if(S){m(),f.call(null,S,...F);return}if(c()||o){m(),f.call(null,S,...F);return}i<64&&(i*=2);let M;l===1?(l=2,M=0):M=(i+Math.random())*1e3,p(M)}let A=!1;function k(S){A||(A=!0,m(),!u&&(s!==null?(S||(l=2),clearTimeout(s),p(0)):S||(l=1)))}return p(0),r=setTimeout(()=>{o=!0,k(!0)},t),k}function aP(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lP(n){return n!==void 0}function cP(n){return typeof n=="function"}function uP(n){return typeof n=="object"&&!Array.isArray(n)}function wa(n){return typeof n=="string"||n instanceof String}function Xf(n){return Uu()&&n instanceof Blob}function Uu(){return typeof Blob<"u"}function Jf(n,e,t,i){if(i<e)throw nc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw nc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function Jg(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}var Kn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Kn||(Kn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e,t,i,s,r,o,l,c,u,f,p,m=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,A)=>{this.resolve_=E,this.reject_=A,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Qr(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const l=r.getErrorCode()===Kn.NO_ERROR,c=r.getStatus();if(!l||Zg(c,this.additionalRetryCodes_)&&this.retry){const f=r.getErrorCode()===Kn.ABORT;i(!1,new Qr(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;i(!0,new Qr(u,r))})},t=(i,s)=>{const r=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());lP(c)?r(c):r()}catch(c){o(c)}else if(l!==null){const c=Fu();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Xg():Qg();o(c)}else{const c=Kg();o(c)}};this.canceled_?t(!1,new Qr(!1,null,!0)):this.backoffId_=oP(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&aP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Qr{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function dP(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function fP(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function pP(n,e){e&&(n["X-Firebase-GMPID"]=e)}function _P(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function mP(n,e,t,i,s,r,o=!0){const l=Jg(n.urlParams),c=n.url+l,u=Object.assign({},n.headers);return pP(u,e),dP(u,t),fP(u,r),_P(u,i),new hP(c,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function yP(...n){const e=gP();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Uu())return new Blob(n);throw new de(ce.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function vP(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EP(n){if(typeof atob>"u")throw iP("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class pl{constructor(e,t){this.data=e,this.contentType=t||null}}function TP(n,e){switch(n){case yt.RAW:return new pl(ey(e));case yt.BASE64:case yt.BASE64URL:return new pl(ty(n,e));case yt.DATA_URL:return new pl(IP(e),RP(e))}throw Fu()}function ey(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const r=i,o=n.charCodeAt(++t);i=65536|(r&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function wP(n){let e;try{e=decodeURIComponent(n)}catch{throw Ws(yt.DATA_URL,"Malformed data URL.")}return ey(e)}function ty(n,e){switch(n){case yt.BASE64:{const s=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(s||r)throw Ws(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case yt.BASE64URL:{const s=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(s||r)throw Ws(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=EP(e)}catch(s){throw s.message.includes("polyfill")?s:Ws(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}class ny{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Ws(yt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=CP(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function IP(n){const e=new ny(n);return e.base64?ty(yt.BASE64,e.rest):wP(e.rest)}function RP(n){return new ny(n).contentType}function CP(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t){let i=0,s="";Xf(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Xf(this.data_)){const i=this.data_,s=vP(i,e,t);return s===null?null:new dn(s)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new dn(i,!0)}}static getBlob(...e){if(Uu()){const t=e.map(i=>i instanceof dn?i.data_:i);return new dn(yP.apply(null,t))}else{const t=e.map(o=>wa(o)?TP(yt.RAW,o).data:o.data_);let i=0;t.forEach(o=>{i+=o.byteLength});const s=new Uint8Array(i);let r=0;return t.forEach(o=>{for(let l=0;l<o.length;l++)s[r++]=o[l]}),new dn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(n){let e;try{e=JSON.parse(n)}catch{return null}return uP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AP(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function bP(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function iy(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(n,e){return e}class Ge{constructor(e,t,i,s){this.server=e,this.local=t||e,this.writable=!!i,this.xform=s||SP}}let Yr=null;function PP(n){return!wa(n)||n.length<2?n:iy(n)}function sy(){if(Yr)return Yr;const n=[];n.push(new Ge("bucket")),n.push(new Ge("generation")),n.push(new Ge("metageneration")),n.push(new Ge("name","fullPath",!0));function e(r,o){return PP(o)}const t=new Ge("name");t.xform=e,n.push(t);function i(r,o){return o!==void 0?Number(o):o}const s=new Ge("size");return s.xform=i,n.push(s),n.push(new Ge("timeCreated")),n.push(new Ge("updated")),n.push(new Ge("md5Hash",null,!0)),n.push(new Ge("cacheControl",null,!0)),n.push(new Ge("contentDisposition",null,!0)),n.push(new Ge("contentEncoding",null,!0)),n.push(new Ge("contentLanguage",null,!0)),n.push(new Ge("contentType",null,!0)),n.push(new Ge("metadata","customMetadata",!0)),Yr=n,Yr}function kP(n,e){function t(){const i=n.bucket,s=n.fullPath,r=new Ke(i,s);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function NP(n,e,t){const i={};i.type="file";const s=t.length;for(let r=0;r<s;r++){const o=t[r];i[o.local]=o.xform(i,e[o.server])}return kP(i,n),i}function ry(n,e,t){const i=Bu(e);return i===null?null:NP(n,i,t)}function DP(n,e,t,i){const s=Bu(e);if(s===null||!wa(s.downloadTokens))return null;const r=s.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(u=>{const f=n.bucket,p=n.fullPath,m="/b/"+o(f)+"/o/"+o(p),E=rs(m,t,i),A=Jg({alt:"media",token:u});return E+A})[0]}function oy(n,e){const t={},i=e.length;for(let s=0;s<i;s++){const r=e[s];r.writable&&(t[r.server]=n[r.local])}return JSON.stringify(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="prefixes",ep="items";function OP(n,e,t){const i={prefixes:[],items:[],nextPageToken:t.nextPageToken};if(t[Zf])for(const s of t[Zf]){const r=s.replace(/\/$/,""),o=n._makeStorageReference(new Ke(e,r));i.prefixes.push(o)}if(t[ep])for(const s of t[ep]){const r=n._makeStorageReference(new Ke(e,s.name));i.items.push(r)}return i}function xP(n,e,t){const i=Bu(t);return i===null?null:OP(n,e,i)}class hi{constructor(e,t,i,s){this.url=e,this.method=t,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(n){if(!n)throw Fu()}function qu(n,e){function t(i,s){const r=ry(n,s,e);return wt(r!==null),r}return t}function LP(n,e){function t(i,s){const r=xP(n,e,s);return wt(r!==null),r}return t}function MP(n,e){function t(i,s){const r=ry(n,s,e);return wt(r!==null),DP(r,s,n.host,n._protocol)}return t}function os(n){function e(t,i){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=Y0():s=Q0():t.getStatus()===402?s=K0(n.bucket):t.getStatus()===403?s=X0(n.path):s=i,s.status=t.getStatus(),s.serverResponse=i.serverResponse,s}return e}function ay(n){const e=os(n);function t(i,s){let r=e(i,s);return i.getStatus()===404&&(r=G0(n.path)),r.serverResponse=s.serverResponse,r}return t}function VP(n,e,t){const i=e.fullServerUrl(),s=rs(i,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,l=new hi(s,r,qu(n,t),o);return l.errorHandler=ay(e),l}function FP(n,e,t,i,s){const r={};e.isRoot?r.prefix="":r.prefix=e.path+"/",t.length>0&&(r.delimiter=t),i&&(r.pageToken=i),s&&(r.maxResults=s);const o=e.bucketOnlyServerUrl(),l=rs(o,n.host,n._protocol),c="GET",u=n.maxOperationRetryTime,f=new hi(l,c,LP(n,e.bucket),u);return f.urlParams=r,f.errorHandler=os(e),f}function UP(n,e,t){const i=e.fullServerUrl(),s=rs(i,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,l=new hi(s,r,MP(n,t),o);return l.errorHandler=ay(e),l}function BP(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function ly(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=BP(null,e)),i}function qP(n,e,t,i,s){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let M="";for(let $=0;$<2;$++)M=M+Math.random().toString().slice(2);return M}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const u=ly(e,i,s),f=oy(u,t),p="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+c+"--",E=dn.getBlob(p,i,m);if(E===null)throw Yg();const A={name:u.fullPath},k=rs(r,n.host,n._protocol),S="POST",F=n.maxUploadRetryTime,q=new hi(k,S,qu(n,t),F);return q.urlParams=A,q.headers=o,q.body=E.uploadData(),q.errorHandler=os(e),q}class zo{constructor(e,t,i,s){this.current=e,this.total=t,this.finalized=!!i,this.metadata=s||null}}function ju(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{wt(!1)}return wt(!!t&&(e||["active"]).indexOf(t)!==-1),t}function jP(n,e,t,i,s){const r=e.bucketOnlyServerUrl(),o=ly(e,i,s),l={name:o.fullPath},c=rs(r,n.host,n._protocol),u="POST",f={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${i.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},p=oy(o,t),m=n.maxUploadRetryTime;function E(k){ju(k);let S;try{S=k.getResponseHeader("X-Goog-Upload-URL")}catch{wt(!1)}return wt(wa(S)),S}const A=new hi(c,u,E,m);return A.urlParams=l,A.headers=f,A.body=p,A.errorHandler=os(e),A}function zP(n,e,t,i){const s={"X-Goog-Upload-Command":"query"};function r(u){const f=ju(u,["active","final"]);let p=null;try{p=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{wt(!1)}p||wt(!1);const m=Number(p);return wt(!isNaN(m)),new zo(m,i.size(),f==="final")}const o="POST",l=n.maxUploadRetryTime,c=new hi(t,o,r,l);return c.headers=s,c.errorHandler=os(e),c}const tp=256*1024;function WP(n,e,t,i,s,r,o,l){const c=new zo(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=i.size()),i.size()!==c.total)throw tP();const u=c.total-c.current;let f=u;s>0&&(f=Math.min(f,s));const p=c.current,m=p+f;let E="";f===0?E="finalize":u===f?E="upload, finalize":E="upload";const A={"X-Goog-Upload-Command":E,"X-Goog-Upload-Offset":`${c.current}`},k=i.slice(p,m);if(k===null)throw Yg();function S($,we){const ie=ju($,["active","final"]),w=c.current+f,g=i.size();let y;return ie==="final"?y=qu(e,r)($,we):y=null,new zo(w,g,ie==="final",y)}const F="POST",q=e.maxUploadRetryTime,M=new hi(t,F,S,q);return M.headers=A,M.body=k.uploadData(),M.progressCallback=l||null,M.errorHandler=os(n),M}const Xe={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function _l(n){switch(n){case"running":case"pausing":case"canceling":return Xe.RUNNING;case"paused":return Xe.PAUSED;case"success":return Xe.SUCCESS;case"canceled":return Xe.CANCELED;case"error":return Xe.ERROR;default:return Xe.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e,t,i){if(cP(e)||t!=null||i!=null)this.next=e,this.error=t??void 0,this.complete=i??void 0;else{const r=e;this.next=r.next,this.error=r.error,this.complete=r.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class HP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Kn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Kn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Kn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,s){if(this.sent_)throw Ss("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const r in s)s.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,s[r].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ss("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ss("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ss("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ss("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class GP extends HP{initXhr(){this.xhr_.responseType="text"}}function Bn(){return new GP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let KP=class{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,i=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=i,this._mappings=sy(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(ce.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const r=this.isExponentialBackoffExpired();if(Zg(s.status,[]))if(r)s=Kg();else{this.sleepTime=Math.max(this.sleepTime*2,H0),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(ce.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,r)=>{this._resolve=s,this._reject=r,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,i])=>{switch(this._state){case"running":e(t,i);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const i=jP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(i,Bn,e,t);this._request=s,s.getPromise().then(r=>{this._request=void 0,this._uploadUrl=r,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,i)=>{const s=zP(this._ref.storage,this._ref._location,e,this._blob),r=this._ref.storage._makeRequest(s,Bn,t,i);this._request=r,r.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=tp*this._chunkMultiplier,t=new zo(this._transferred,this._blob.size()),i=this._uploadUrl;this._resolveToken((s,r)=>{let o;try{o=WP(this._ref._location,this._ref.storage,i,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const l=this._ref.storage._makeRequest(o,Bn,s,r,!1);this._request=l,l.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){tp*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const i=VP(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(i,Bn,e,t);this._request=s,s.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const i=qP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(i,Bn,e,t);this._request=s,s.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Qg(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=_l(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,i,s){const r=new $P(t||void 0,i||void 0,s||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(_l(this._state)){case Xe.SUCCESS:gi(this._resolve.bind(null,this.snapshot))();break;case Xe.CANCELED:case Xe.ERROR:const t=this._reject;gi(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(_l(this._state)){case Xe.RUNNING:case Xe.PAUSED:e.next&&gi(e.next.bind(e,this.snapshot))();break;case Xe.SUCCESS:e.complete&&gi(e.complete.bind(e))();break;case Xe.CANCELED:case Xe.ERROR:e.error&&gi(e.error.bind(e,this._error))();break;default:e.error&&gi(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t){this._service=e,t instanceof Ke?this._location=t:this._location=Ke.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ti(e,t)}get root(){const e=new Ke(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return iy(this._location.path)}get storage(){return this._service}get parent(){const e=AP(this._location.path);if(e===null)return null;const t=new Ke(this._location.bucket,e);return new ti(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw sP(e)}}function QP(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new KP(n,new dn(e),t)}function YP(n,e){const t={},i=FP(n.storage,n._location,"/",t.pageToken,t.maxResults);return n.storage.makeRequestWithTokens(i,Bn)}function XP(n){n._throwIfRoot("getDownloadURL");const e=UP(n.storage,n._location,sy());return n.storage.makeRequestWithTokens(e,Bn).then(t=>{if(t===null)throw nP();return t})}function JP(n,e){const t=bP(n._location.path,e),i=new Ke(n._location.bucket,t);return new ti(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZP(n){return/^[A-Za-z]+:\/\//.test(n)}function ek(n,e){return new ti(n,e)}function cy(n,e){if(n instanceof zu){const t=n;if(t._bucket==null)throw eP();const i=new ti(t,t._bucket);return e!=null?cy(i,e):i}else return e!==void 0?JP(n,e):n}function tk(n,e){if(e&&ZP(e)){if(n instanceof zu)return ek(n,e);throw nc("To use ref(service, url), the first argument must be a Storage instance.")}else return cy(n,e)}function np(n,e){const t=e==null?void 0:e[Gg];return t==null?null:Ke.makeFromBucketSpec(t,n)}class zu{constructor(e,t,i,s,r){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=Hg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=W0,this._maxUploadRetryTime=$0,this._requests=new Set,s!=null?this._bucket=Ke.makeFromBucketSpec(s,this._host):this._bucket=np(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ke.makeFromBucketSpec(this._url,e):this._bucket=np(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Jf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Jf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ti(this,e)}_makeRequest(e,t,i,s,r=!0){if(this._deleted)return new rP(Xg());{const o=mP(e,this._appId,i,s,t,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const ip="@firebase/storage",sp="0.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk="storage";function ik(n,e,t){return n=oe(n),QP(n,e,t)}function sk(n,e){return n=oe(n),YP(n)}function rk(n){return n=oe(n),XP(n)}function Wu(n,e){return n=oe(n),tk(n,e)}function ok(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new zu(t,i,s,e,tn)}function ak(){rt(new st(nk,ok,"PUBLIC").setMultipleInstances(!0)),ke(ip,sp,""),ke(ip,sp,"esm2017")}ak();const rp={prefixes:[],items:[]};function lk(n,e,t=rp){if(!globalThis.window){const{subscribe:r}=Ht(t);return{subscribe:r,reference:null}}if(!n){console.warn("Cloud Storage is not initialized. Are you missing FirebaseApp as a parent component?");const{subscribe:r}=Ht(rp);return{subscribe:r,reference:null}}const i=typeof e=="string"?Wu(n,e):e,{subscribe:s}=Ht(t,r=>{sk(i).then(o=>{r(o)})});return{subscribe:s,reference:i}}function ck(n,e,t=null){if(!globalThis.window){const{subscribe:r}=Ht(t);return{subscribe:r,reference:null}}if(!n){console.warn("Cloud Storage is not initialized. Are you missing FirebaseApp as a parent component?");const{subscribe:r}=Ht(null);return{subscribe:r,reference:null}}const i=typeof e=="string"?Wu(n,e):e,{subscribe:s}=Ht(t,r=>{rk(i).then(o=>{r(o)})});return{subscribe:s,reference:i}}function uk(n,e,t,i){if(!globalThis.window){const{subscribe:l}=Ht(null);return{subscribe:l,reference:null}}if(!n){console.warn("Cloud Storage is not initialized. Are you missing FirebaseApp as a parent component?");const{subscribe:l}=Ht(null);return{subscribe:l,reference:null}}const s=typeof e=="string"?Wu(n,e):e;let r;const{subscribe:o}=Ht(null,l=>{const c=ik(s,t,i);return r=c.on("state_changed",u=>{l(u)},u=>{console.error(u),l(c.snapshot)},()=>{l(c.snapshot)}),()=>r()});return{subscribe:o,reference:s}}kt();$u[Dt]="node_modules/sveltefire/dist/components/DownloadURL.svelte";function $u(n,e){bt(new.target),Ot(e,!1,$u);const t=Sn(),i=()=>(kn(o,"store"),Pn(o,"$store",t));let s=Oe(e,"ref",8);const{storage:r}=At(),o=ck(r,s());Pt();var l=pe(),c=me(l);return Nn(c,()=>Di(i(),void 0,!1),u=>{var f=pe(),p=me(f);tt(p,e,"default",{get link(){return i()},get ref(){return o.reference},storage:r},null),_e(u,f)},u=>{var f=pe(),p=me(f);tt(p,e,"loading",{},null),_e(u,f)}),_e(n,l),xt({...St()})}Nt($u);kt();Hu[Dt]="node_modules/sveltefire/dist/components/StorageList.svelte";function Hu(n,e){bt(new.target),Ot(e,!1,Hu);const t=Sn(),i=()=>(kn(o,"listStore"),Pn(o,"$listStore",t));let s=Oe(e,"ref",8);const{storage:r}=At(),o=lk(r,s());Pt();var l=pe(),c=me(l);return Nn(c,()=>Di(i(),void 0,!1),u=>{var f=pe(),p=me(f);tt(p,e,"default",{get list(){return i()},get ref(){return o.reference},storage:r},null),_e(u,f)},u=>{var f=pe(),p=me(f);tt(p,e,"loading",{},null),_e(u,f)}),_e(n,l),xt({...St()})}Nt(Hu);kt();Gu[Dt]="node_modules/sveltefire/dist/components/UploadTask.svelte";function Gu(n,e){bt(new.target),Ot(e,!1,Gu);const t=Sn(),i=()=>(kn(u,"upload"),Pn(u,"$upload",t)),s=Ev();let r=Oe(e,"ref",8),o=Oe(e,"data",8),l=Oe(e,"metadata",24,()=>{});const{storage:c}=At(),u=uk(c,r(),o(),l());gv(()=>i(),()=>{var m,E;Tv(s,((m=i())==null?void 0:m.bytesTransferred)/((E=i())==null?void 0:E.totalBytes)*100)}),yv(),Pt();var f=pe(),p=me(f);return Nn(p,()=>Di(i(),void 0,!1),m=>{var E=pe(),A=me(E);tt(A,e,"default",{get task(){var k;return(k=i())==null?void 0:k.task},get snapshot(){return i()},get progress(){return vv(s)},get ref(){return u.reference},storage:c},null),_e(m,E)}),_e(n,f),xt({...St()})}Nt(Gu);const uy="@firebase/installations",Ku="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=1e4,dy=`w:${Ku}`,fy="FIS_v2",hk="https://firebaseinstallations.googleapis.com/v1",dk=60*60*1e3,fk="installations",pk="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ni=new si(fk,pk,_k);function py(n){return n instanceof ot&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y({projectId:n}){return`${hk}/projects/${n}/installations`}function my(n){return{token:n.token,requestStatus:2,expiresIn:gk(n.expiresIn),creationTime:Date.now()}}async function gy(n,e){const i=(await e.json()).error;return ni.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function yy({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function mk(n,{refreshToken:e}){const t=yy(n);return t.append("Authorization",yk(e)),t}async function vy(n){const e=await n();return e.status>=500&&e.status<600?n():e}function gk(n){return Number(n.replace("s","000"))}function yk(n){return`${fy} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vk({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=_y(n),s=yy(n),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:t,authVersion:fy,appId:n.appId,sdkVersion:dy},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await vy(()=>fetch(i,l));if(c.ok){const u=await c.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:my(u.authToken)}}else throw await gy("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=/^[cdef][\w-]{21}$/,ic="";function wk(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Ik(n);return Tk.test(t)?t:ic}catch{return ic}}function Ik(n){return Ek(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=new Map;function wy(n,e){const t=Ia(n);Iy(t,e),Rk(t,e)}function Iy(n,e){const t=Ty.get(n);if(t)for(const i of t)i(e)}function Rk(n,e){const t=Ck();t&&t.postMessage({key:n,fid:e}),Ak()}let $n=null;function Ck(){return!$n&&"BroadcastChannel"in self&&($n=new BroadcastChannel("[Firebase] FID Change"),$n.onmessage=n=>{Iy(n.data.key,n.data.fid)}),$n}function Ak(){Ty.size===0&&$n&&($n.close(),$n=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk="firebase-installations-database",Sk=1,ii="firebase-installations-store";let ml=null;function Qu(){return ml||(ml=Op(bk,Sk,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ii)}}})),ml}async function Wo(n,e){const t=Ia(n),s=(await Qu()).transaction(ii,"readwrite"),r=s.objectStore(ii),o=await r.get(t);return await r.put(e,t),await s.done,(!o||o.fid!==e.fid)&&wy(n,e.fid),e}async function Ry(n){const e=Ia(n),i=(await Qu()).transaction(ii,"readwrite");await i.objectStore(ii).delete(e),await i.done}async function Ra(n,e){const t=Ia(n),s=(await Qu()).transaction(ii,"readwrite"),r=s.objectStore(ii),o=await r.get(t),l=e(o);return l===void 0?await r.delete(t):await r.put(l,t),await s.done,l&&(!o||o.fid!==l.fid)&&wy(n,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yu(n){let e;const t=await Ra(n.appConfig,i=>{const s=Pk(i),r=kk(n,s);return e=r.registrationPromise,r.installationEntry});return t.fid===ic?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Pk(n){const e=n||{fid:wk(),registrationStatus:0};return Cy(e)}function kk(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ni.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Nk(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Dk(n)}:{installationEntry:e}}async function Nk(n,e){try{const t=await vk(n,e);return Wo(n.appConfig,t)}catch(t){throw py(t)&&t.customData.serverCode===409?await Ry(n.appConfig):await Wo(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Dk(n){let e=await op(n.appConfig);for(;e.registrationStatus===1;)await Ey(100),e=await op(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Yu(n);return i||t}return e}function op(n){return Ra(n,e=>{if(!e)throw ni.create("installation-not-found");return Cy(e)})}function Cy(n){return Ok(n)?{fid:n.fid,registrationStatus:0}:n}function Ok(n){return n.registrationStatus===1&&n.registrationTime+hy<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xk({appConfig:n,heartbeatServiceProvider:e},t){const i=Lk(n,t),s=mk(n,t),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:dy,appId:n.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await vy(()=>fetch(i,l));if(c.ok){const u=await c.json();return my(u)}else throw await gy("Generate Auth Token",c)}function Lk(n,{fid:e}){return`${_y(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xu(n,e=!1){let t;const i=await Ra(n.appConfig,r=>{if(!Ay(r))throw ni.create("not-registered");const o=r.authToken;if(!e&&Fk(o))return r;if(o.requestStatus===1)return t=Mk(n,e),r;{if(!navigator.onLine)throw ni.create("app-offline");const l=Bk(r);return t=Vk(n,l),l}});return t?await t:i.authToken}async function Mk(n,e){let t=await ap(n.appConfig);for(;t.authToken.requestStatus===1;)await Ey(100),t=await ap(n.appConfig);const i=t.authToken;return i.requestStatus===0?Xu(n,e):i}function ap(n){return Ra(n,e=>{if(!Ay(e))throw ni.create("not-registered");const t=e.authToken;return qk(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Vk(n,e){try{const t=await xk(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await Wo(n.appConfig,i),t}catch(t){if(py(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Ry(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Wo(n.appConfig,i)}throw t}}function Ay(n){return n!==void 0&&n.registrationStatus===2}function Fk(n){return n.requestStatus===2&&!Uk(n)}function Uk(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+dk}function Bk(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function qk(n){return n.requestStatus===1&&n.requestTime+hy<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jk(n){const e=n,{installationEntry:t,registrationPromise:i}=await Yu(e);return i?i.catch(console.error):Xu(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zk(n,e=!1){const t=n;return await Wk(t),(await Xu(t,e)).token}async function Wk(n){const{registrationPromise:e}=await Yu(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(n){if(!n||!n.options)throw gl("App Configuration");if(!n.name)throw gl("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw gl(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function gl(n){return ni.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by="installations",Hk="installations-internal",Gk=n=>{const e=n.getProvider("app").getImmediate(),t=$k(e),i=Dn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Kk=n=>{const e=n.getProvider("app").getImmediate(),t=Dn(e,by).getImmediate();return{getId:()=>jk(t),getToken:s=>zk(t,s)}};function Qk(){rt(new st(by,Gk,"PUBLIC")),rt(new st(Hk,Kk,"PRIVATE"))}Qk();ke(uy,Ku);ke(uy,Ku,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="analytics",Yk="firebase_id",Xk="origin",Jk=60*1e3,Zk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ju="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe=new lr("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ut=new si("analytics","Analytics",eN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(n){if(!n.startsWith(Ju)){const e=ut.create("invalid-gtag-resource",{gtagURL:n});return Qe.warn(e.message),""}return n}function Sy(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function nN(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function iN(n,e){const t=nN("firebase-js-sdk-policy",{createScriptURL:tN}),i=document.createElement("script"),s=`${Ju}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function sN(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function rN(n,e,t,i,s,r){const o=i[s];try{if(o)await e[o];else{const c=(await Sy(t)).find(u=>u.measurementId===s);c&&await e[c.appId]}}catch(l){Qe.error(l)}n("config",s,r)}async function oN(n,e,t,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await Sy(t);for(const c of o){const u=l.find(p=>p.measurementId===c),f=u&&e[u.appId];if(f)r.push(f);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),n("event",i,s||{})}catch(r){Qe.error(r)}}function aN(n,e,t,i){async function s(r,...o){try{if(r==="event"){const[l,c]=o;await oN(n,e,t,l,c)}else if(r==="config"){const[l,c]=o;await rN(n,e,t,i,l,c)}else if(r==="consent"){const[l,c]=o;n("consent",l,c)}else if(r==="get"){const[l,c,u]=o;n("get",l,c,u)}else if(r==="set"){const[l]=o;n("set",l)}else n(r,...o)}catch(l){Qe.error(l)}}return s}function lN(n,e,t,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=aN(r,n,e,t),{gtagCore:r,wrappedGtag:window[s]}}function cN(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Ju)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=30,hN=1e3;class dN{constructor(e={},t=hN){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Py=new dN;function fN(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function pN(n){var e;const{appId:t,apiKey:i}=n,s={method:"GET",headers:fN(i)},r=Zk.replace("{app-id}",t),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let l="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(l=c.error.message)}catch{}throw ut.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function _N(n,e=Py,t){const{appId:i,apiKey:s,measurementId:r}=n.options;if(!i)throw ut.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw ut.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new yN;return setTimeout(async()=>{l.abort()},Jk),ky({appId:i,apiKey:s,measurementId:r},o,l,e)}async function ky(n,{throttleEndTimeMillis:e,backoffCount:t},i,s=Py){var r;const{appId:o,measurementId:l}=n;try{await mN(i,e)}catch(c){if(l)return Qe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw c}try{const c=await pN(n);return s.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!gN(u)){if(s.deleteThrottleMetadata(o),l)return Qe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw c}const f=Number((r=u==null?void 0:u.customData)===null||r===void 0?void 0:r.httpStatus)===503?id(t,s.intervalMillis,uN):id(t,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:t+1};return s.setThrottleMetadata(o,p),Qe.debug(`Calling attemptFetch again in ${f} millis`),ky(n,p,i,s)}}function mN(n,e){return new Promise((t,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(r),i(ut.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function gN(n){if(!(n instanceof ot)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class yN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function vN(n,e,t,i,s){if(s&&s.global){n("event",t,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});n("event",t,o)}}async function EN(n,e,t,i){{const s=await e;n("config",s,{update:!0,user_id:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TN(){if(ac())try{await lc()}catch(n){return Qe.warn(ut.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Qe.warn(ut.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function wN(n,e,t,i,s,r,o){var l;const c=_N(n);c.then(E=>{t[E.measurementId]=E.appId,n.options.measurementId&&E.measurementId!==n.options.measurementId&&Qe.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${E.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(E=>Qe.error(E)),e.push(c);const u=TN().then(E=>{if(E)return i.getId()}),[f,p]=await Promise.all([c,u]);cN(r)||iN(r,f.measurementId),s("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[Xk]="firebase",m.update=!0,p!=null&&(m[Yk]=p),s("config",f.measurementId,m),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e){this.app=e}_delete(){return delete Ni[this.app.options.appId],Promise.resolve()}}let Ni={},cp=[];const up={};let yl="dataLayer",RN="gtag",hp,Zu,dp=!1;function CN(){const n=[];if(oc()&&n.push("This is a browser extension environment."),bp()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,s)=>`(${s+1}) ${i}`).join(" "),t=ut.create("invalid-analytics-context",{errorInfo:e});Qe.warn(t.message)}}function AN(n,e,t){CN();const i=n.options.appId;if(!i)throw ut.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Qe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ut.create("no-api-key");if(Ni[i]!=null)throw ut.create("already-exists",{id:i});if(!dp){sN(yl);const{wrappedGtag:r,gtagCore:o}=lN(Ni,cp,up,yl,RN);Zu=r,hp=o,dp=!0}return Ni[i]=wN(n,cp,up,e,hp,yl,t),new IN(n)}async function bN(){if(oc()||!bp()||!ac())return!1;try{return await lc()}catch{return!1}}function SN(n,e,t){n=oe(n),EN(Zu,Ni[n.app.options.appId],e).catch(i=>Qe.error(i))}function Ny(n,e,t,i){n=oe(n),vN(Zu,Ni[n.app.options.appId],e,t,i).catch(s=>Qe.error(s))}const fp="@firebase/analytics",pp="0.10.10";function PN(){rt(new st(lp,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return AN(i,s,t)},"PUBLIC")),rt(new st("analytics-internal",n,"PRIVATE")),ke(fp,pp),ke(fp,pp,"esm2017");function n(e){try{const t=e.getProvider(lp).getImmediate();return{logEvent:(i,s,r)=>Ny(t,i,s,r)}}catch(t){throw ut.create("interop-component-reg-failed",{reason:t})}}}PN();kt();eh[Dt]="node_modules/sveltefire/dist/components/PageView.svelte";function eh(n,e){bt(new.target),Ot(e,!1,eh);let t=Oe(e,"eventName",8,"page_view"),i=Oe(e,"setUser",8,!0),s=Oe(e,"customParams",24,()=>({}));const r=At().analytics,o=At().auth;return wv(async()=>{var l;await bN()&&(i()&&SN(r,((l=o.currentUser)==null?void 0:l.uid)??null),Ny(r,t(),{page_location:window.location.href,page_path:window.location.pathname,page_title:document.title,...s()}))}),Pt(),xt({...St()})}Nt(eh);export{hc as A,rt as B,st as C,Gs as D,si as E,Lu as F,cn as G,Lm as H,sA as I,iA as J,tt as K,lr as L,LN as M,Vu as S,wl as _,JN as a,Mu as b,VN as c,YN as d,ZN as e,GN as f,KN as g,XN as h,j0 as i,q0 as j,WN as k,$N as l,bv as m,jv as n,QN as o,yp as p,ke as q,HN as r,FN as s,Mp as t,WE as u,JE as v,XE as w,tn as x,MN as y,Lt as z};
