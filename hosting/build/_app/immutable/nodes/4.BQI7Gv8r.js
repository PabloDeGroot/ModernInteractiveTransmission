var Pe=Object.defineProperty;var Me=(a,e,t)=>e in a?Pe(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var n=(a,e,t)=>Me(a,typeof e!="symbol"?e+"":e,t);import{b as P,t as M,c as B,a as E,l as W,f as ye,s as Ne,d as Le}from"../chunks/disclose-version.D-beVrye.js";import{m as Y,a as H,F as C,p as V,h as k,B as ie,e as _,g as m,d as D,b as z,c as R,s as A,f as K,r as w,t as Oe,K as L,aL as te,n as Ae,al as xe,i as Fe,j as Ue}from"../chunks/index-client.BzkbKV1k.js";import{v as G,i as j,p as Ce}from"../chunks/validate.D8cR6DIS.js";import{i as Te,v as Ke}from"../chunks/legacy.DXjJrk1P.js";import{p as he}from"../chunks/stores.CARPgHEZ.js";import{i as je,h as le,j as Be,k as X,l as be,L as We,m as Ye,n as He,E as _e,p as ne,q as Se,_ as me,C as Ve,t as ze,D as ae,u as Je,v as Xe,w as qe,x as Ge,y as Qe,z as fe,A as Ze,B as $e,H as se,I as T,J as oe,a as q,S as et}from"../chunks/PageView.ie4Hhmfi.js";import{d as we,a as J,e as tt,s as ot}from"../chunks/render.DbjVZGEq.js";import{l as p,e as nt,i as at,P as st}from"../chunks/XPro.BQmTHAGR.js";import{b as Ee}from"../chunks/this.BQNVXBWA.js";import{g as it}from"../chunks/entry.CDpEjqJc.js";function lt(a){return Be(le,"room/"+a)}je(le,"room");function rt(a,e){if(a!=null)return X(a,{users:be(e)},{merge:!0})}Y();S[C]="src/lib/Components/Dream.svelte";const ct=(a,e)=>{D(e,!m(e))};var dt=()=>{},ut=P(M('<button> </button> <button class="absolute top-0 right-0">Fullscreen</button>',1),S[C],[[56,8],[57,8]]),gt=P(M('<div class="rounded h-full overflow-hidden flex"><video class="max-h-full" autoplay></video> <!></div>',2),S[C],[[44,0,[[46,4]]]]);function S(a,e){B(new.target),V(e,!0,S),G(e,["mouseMove","mouseDown","mouseUp","mouseWheel"],[],S);let t=k(!navigator.userActivation.isActive),s=k(null),i=k(!1);ie(()=>{if(!_(m(s),null)&&!m(i)){D(i,!0),m(s).muted=m(t),m(s).srcObject=e.stream;try{m(s).play()}catch(l){console.log(...p("log",l))}}});var u=gt(),c=R(u);c.__mousemove=function(...l){J(()=>e.mouseMove,this,l,S,[48,21])},c.__mousedown=function(...l){J(()=>e.mouseDown,this,l,S,[49,21])},c.__mouseup=function(...l){J(()=>e.mouseUp,this,l,S,[50,19])},Ee(c,l=>D(s,l),()=>m(s));var g=A(c,2);return j(g,()=>!1,l=>{var r=ut(),d=K(r);d.__click=[ct,t];var o=R(d,!0);w(d);var f=A(d,2);f.__click=[dt],Oe(()=>ot(o,m(t)?"Unmute":"Mute")),E(l,r)}),w(u),tt("wheel",c,function(...l){J(()=>e.mouseWheel,this,l,S,[51,17])}),E(a,u),z({...W()})}H(S);we(["mousemove","mousedown","mouseup","click"]);Y();x[C]="src/lib/Components/DreamConnection.svelte";function x(a,e){B(new.target),V(e,!0,x),G(e,["remove"],["KeyEvent"],x);let t=Ce(e,"call",7),s=k(null);t().pc.ontrack=o=>{console.log(...p("log","Room: Track received",o)),D(s,L(o.streams[0],null,s))},ie(()=>{_(e.localStream,null,!1)&&(console.log(...p("log","Room: Adding tracks to connection")),e.localStream.getTracks().forEach(o=>{t().pc.addTrack(o,e.localStream)}))});let i=o=>{if(_(t().data,null))return;let f=t().myname,v=t().myColor;o={...o,username:f,color:v},_(t().data.readyState,"open",!1)?t().data.onopen=()=>{t().data.send(JSON.stringify(o))}:t().data.send(JSON.stringify(o))},u=o=>{let f="left";_(o.button,1)&&(f="middle"),_(o.button,2)&&(f="right");let v={type:"BasicInput",device:"mouse",action:"click",button:f,x:o.offsetX/o.target.clientWidth,y:o.offsetY/o.target.clientHeight};i(v),console.log(...p("log","DreamConnection: Clicked"))},c=o=>{let f={type:"BasicInput",device:"mouse",action:"move",x:o.offsetX/o.target.clientWidth,y:o.offsetY/o.target.clientHeight};i(f),console.log(...p("log","DreamConnection: Mouse moved"))},g=o=>{let f=o.deltaY>0?"down":"up",v=Math.abs(o.deltaY),y={type:"BasicInput",device:"mouse",action:"scroll",x:o.offsetX/o.target.clientWidth,y:o.offsetY/o.target.clientHeight,direction:f,amount:v};i(y),console.log(...p("log","DreamConnection: Scrolled"))};function l(o,f){let v={type:"BasicInput",device:"keyboard",action:f?"press":"release",key:o.key};i(v),console.log(...p("log","DreamConnection: Key pressed"))}var r=ye(),d=K(r);return j(d,()=>_(m(s),null,!1),o=>{S(o,{interarctive:!1,get stream(){return m(s)},local:!1,mouseMove:c,mouseDown:()=>{},mouseUp:u,mouseWheel:g})}),E(a,r),z({get KeyEvent(){return l},...W()})}H(x);/**
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
 */class ht{constructor(e,t){this._delegate=e,this.firebase=t,me(e,new Ve("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),ze(this._delegate)))}_getService(e,t=ae){var s;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((s=i.getComponent())===null||s===void 0?void 0:s.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=ae){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){me(this._delegate,e)}_addOrOverwriteComponent(e){Je(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const mt={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},pe=new _e("app-compat","Firebase",mt);/**
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
 */function ft(a){const e={},t={__esModule:!0,initializeApp:u,app:i,registerVersion:Se,setLogLevel:Xe,onLog:qe,apps:null,SDK_VERSION:Ge,INTERNAL:{registerComponent:g,removeApp:s,useAsService:l,modularAPIs:Qe}};t.default=t,Object.defineProperty(t,"apps",{get:c});function s(r){delete e[r]}function i(r){if(r=r||ae,!fe(e,r))throw pe.create("no-app",{appName:r});return e[r]}i.App=a;function u(r,d={}){const o=Ze(r,d);if(fe(e,o.name))return e[o.name];const f=new a(o,t);return e[o.name]=f,f}function c(){return Object.keys(e).map(r=>e[r])}function g(r){const d=r.name,o=d.replace("-compat","");if($e(r)&&r.type==="PUBLIC"){const f=(v=i())=>{if(typeof v[o]!="function")throw pe.create("invalid-app-argument",{appName:d});return v[o]()};r.serviceProps!==void 0&&ne(f,r.serviceProps),t[o]=f,a.prototype[o]=function(...v){return this._getService.bind(this,d).apply(this,r.multipleInstances?v:[])}}return r.type==="PUBLIC"?t[o]:null}function l(r,d){return d==="serverAuth"?null:d}return t}/**
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
 */function Re(){const a=ft(ht);a.INTERNAL=Object.assign(Object.assign({},a.INTERNAL),{createFirebaseNamespace:Re,extendNamespace:e,createSubscribe:He,ErrorFactory:_e,deepExtend:ne});function e(t){ne(a,t)}return a}const pt=Re();/**
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
 */const ve=new We("@firebase/app-compat"),vt="@firebase/app-compat",yt="0.2.46";/**
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
 */function Ct(a){Se(vt,yt,a)}/**
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
 */try{const a=Ye();if(a.firebase!==void 0){ve.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=a.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&ve.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const bt=pt;Ct();var _t="firebase",St="11.0.2";/**
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
 */bt.registerVersion(_t,St,"app-compat");class wt{constructor(e,t,s){n(this,"roomID");n(this,"readRef");n(this,"sendRef");n(this,"data");n(this,"close",async()=>{});n(this,"onmessage");this.roomID=e,this.readRef=t,this.sendRef=s,this.data={data:[]},se(this.readRef,i=>{var l;if(!((l=i.data())!=null&&l.data))return;console.log("Signaler: Emitting onmessage",i.data());let u=i.data().data,c=this.data,g=u.filter(r=>!c.data.includes(r));this.data={data:u},!(this.data.data.length>20)&&g.forEach(r=>{var d;(d=this.onmessage)==null||d.call(this,JSON.parse(r))})})}send(e){console.log("sending",e),X(this.sendRef,{data:be(JSON.stringify(e))},{merge:!0})}}const Et={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun.l.google.com:5349"},{urls:"stun:stun1.l.google.com:3478"},{urls:"stun:stun1.l.google.com:5349"},{urls:"stun:stun2.l.google.com:19302"},{urls:"stun:stun2.l.google.com:5349"},{urls:"stun:stun3.l.google.com:3478"},{urls:"stun:stun3.l.google.com:5349"},{urls:"stun:stun4.l.google.com:19302"},{urls:"stun:stun4.l.google.com:5349"}]};class Rt{constructor(e,t,s,i,u,c){n(this,"target");n(this,"id");n(this,"caller");n(this,"myname");n(this,"myColor");n(this,"targetName");n(this,"targetColor");n(this,"signaler");n(this,"pc",new RTCPeerConnection(Et));n(this,"data",null);n(this,"onClose");n(this,"cleanup",()=>{var e;console.log("My Peer: Cleanup"),this.signaler.close(),this.close(),this.pc.close(),(e=this.data)==null||e.close(),this.onClose?(console.log("My Peer: Close callback"),this.onClose()):console.log("My Peer: No close callback")});n(this,"makingOffer",!1);n(this,"initPeerConnection",()=>{this.pc.onnegotiationneeded=async e=>{try{console.log("My Peer: Negotiation needed",e),this.makingOffer=!0,await this.pc.setLocalDescription(),console.log("My Peer: Local description set",this.pc.localDescription),this.signaler.send({description:this.pc.localDescription,id:this.id,color:this.myColor,name:this.myname})}catch(t){console.error(t)}finally{this.makingOffer=!1}},this.pc.oniceconnectionstatechange=()=>{console.log("My Peer: ICE connection state change",this.pc.iceConnectionState),this.pc.iceConnectionState==="failed"&&this.pc.restartIce()},this.pc.onicecandidate=e=>{e.candidate!==null&&(console.log("My Peer: ICE candidate",e.candidate),this.signaler.send({candidate:e.candidate,id:this.id,color:this.myColor,name:this.myname}))}});n(this,"ignoreOffer",!1);n(this,"playoutDelayHint",0);n(this,"changePlayOutDelay",()=>{let e=this.pc.getReceivers();if(!(this.playoutDelayHint<0))for(const t of e)t.playoutDelayHint=this.playoutDelayHint});n(this,"onConnected");n(this,"initSignaling",async()=>{this.signaler.onmessage=async({description:e,candidate:t,id:s,type:i})=>{if(console.log("My Peer: Signaling message",e,t,s),s!==this.target||s===this.id)return;if(i=="close"){this.cleanup();return}let u=this.caller;console.log("Is Polite",u);try{if(e){const c=e.type==="offer"&&(this.makingOffer||this.pc.signalingState!=="stable");if(this.pc.connectionState==="connected"||(this.ignoreOffer=!u&&c,this.ignoreOffer))return;await this.pc.setRemoteDescription(e),e.type==="offer"&&(await this.pc.setLocalDescription(),console.log("My Peer: Local description set",this.pc.localDescription),this.signaler.send({description:this.pc.localDescription,id:this.id}))}else if(t)try{await this.pc.addIceCandidate(t)}catch(c){if(!this.ignoreOffer)throw c}}catch(c){console.error(c)}}});n(this,"registerListeners",()=>{this.pc.addEventListener("icegatheringstatechange",()=>{console.log(`ICE gathering state changed: ${this.pc.iceGatheringState}`)}),this.pc.addEventListener("connectionstatechange",()=>{var e;console.log(`Connection state change: ${this.pc.connectionState}`),this.pc.connectionState==="connected"&&((e=this.onConnected)==null||e.call(this)),this.pc.connectionState==="disconnected"&&this.cleanup()}),this.pc.addEventListener("signalingstatechange",()=>{console.log(`Signaling state change: ${this.pc.signalingState}`)}),this.pc.addEventListener("iceconnectionstatechange ",()=>{console.log(`ICE connection state change: ${this.pc.iceConnectionState}`)})});n(this,"close",()=>{var e;this.pc.close(),(e=this.data)==null||e.close()});this.signaler=e,this.target=t,this.id=s,this.caller=i,this.myname=u,this.myColor=c,this.initPeerConnection(),this.initSignaling(),this.registerListeners(),this.pc.ondatachannel=g=>{console.log("My Peer: Data channel created",g.channel),this.data=g.channel,this.data.onclose=()=>{this.cleanup()},this.data.addEventListener("message",l=>{typeof l.data=="string"&&console.log("My Peer: Data channel message",l.data),l.data=="close"&&this.cleanup()}),this.data.onerror=l=>{console.error(l),this.cleanup()},this.data.onclosing=()=>{console.log("My Peer: Data channel closing"),this.cleanup()}},console.log("My Peer: Created",this.id,this.target)}}class Dt{constructor(e,t,s,i){n(this,"caller");n(this,"conns",[]);n(this,"id");n(this,"myname");n(this,"myColor");n(this,"onConnection");n(this,"onCall");n(this,"call",()=>{this.caller.call(this.id)});n(this,"close",()=>{this.conns.forEach(e=>e.close()),this.caller.close(this.id)});n(this,"initCalls",()=>{this.caller.onCall=e=>{if(console.log("My Peer: Call recived",e),e==this.id){console.log("My Peer: Call recived from self",e);return}this.caller.awnser(e,this.id)},this.caller.onConnection=(e,t)=>{var g;console.log("My Peer: Connection recived",e,t);let s=new wt(this.caller.roomID,e,t),i=e.id==this.id,u=i?e.parent.parent.id:e.id;u==this.id,console.log("My Peer: IsCallee",i);let c=new Rt(s,u,this.id,i,this.myname,this.myColor);this.conns.push(c),(g=this.onConnection)==null||g.call(this,c)}});this.caller=e,this.id=t,this.myname=s,this.myColor=i,this.initCalls()}}class It{constructor(e){n(this,"roomID");n(this,"colRef");n(this,"callCollection");n(this,"answerCollection");n(this,"unsubscribe");n(this,"awnser",(e,t)=>{var u;let s=T(this.answerCollection,e.toString(),"0",t.toString());X(s,{});let i=T(this.callCollection,e.toString(),"0",t.toString());(u=this.onConnection)==null||u.call(this,i,s)});n(this,"call",e=>{let t=T(this.callCollection,e.toString());X(t,{});let s=oe(this.answerCollection,e.toString(),"0"),i=se(s,u=>{u.docChanges().forEach(c=>{var g;if(c.type==="added"){console.log("Signaler: Emitting onAnswer",c.doc.id);let l=T(this.callCollection,e.toString(),"0",c.doc.id.toString());(g=this.onConnection)==null||g.call(this,c.doc.ref,l)}})});return this.unsubscribe.push(i),t});n(this,"close",async e=>{this.unsubscribe.forEach(t=>t())});n(this,"onCall");n(this,"onConnection");this.roomID=e,this.colRef=T(le,"signal",e),this.callCollection=oe(this.colRef,"call"),this.answerCollection=oe(this.colRef,"answer"),this.unsubscribe=[se(this.callCollection,t=>{t.docChanges().forEach(s=>{var i;s.type==="added"&&(console.log("Signaler: Emitting onCall",s.doc.id),(i=this.onCall)==null||i.call(this,s.doc.id))})})]}}Y();I[C]="src/lib/Components/Room.svelte";var kt=P(M('<p class="self-center">Waiting for someone to start sharing...</p>'),I[C],[[223,16]]),Pt=(a,e,t)=>{console.log(...p("log","Room: Clicked")),D(e,L([m(t),...m(e).slice(1)],null,e))},Mt=P(M("<p>dsada</p> <button><!></button>",1),I[C],[[237,20],[238,20]]),Nt=P(M('<div class="other-dreams"></div>'),I[C],[[235,12]]),Lt=(a,e)=>{navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0}).then(t=>{e(t)})},Ot=P(M('<div class="flex flex-col items-center justify-center w-full h-full"><div class="flex-1 h-full"><div class="main-dream h-full flex justify-center"><!></div> <!></div> <div class="flex items-center justify-center w-full mb-3 absolute bottom-0"><button class="btn variant-filled-secondary mr-4">Share</button> <button class="btn variant-filled-secondary">Share with App</button></div></div>'),I[C],[[219,0,[[220,4,[[221,8]]],[251,8,[[254,12],[264,12]]]]]]);function I(a,e){var ce,de;B(new.target),V(e,!0,I),G(e,[],[],I);var t=(ce=q.currentUser)==null?void 0:ce.uid,s=(de=q.currentUser)==null?void 0:de.displayName;let i=Ce(e,"color",3,"red"),u=k(L([])),c=L([]),g=k(L([])),l=k(null),r=new It(e.roomId),d=new Dt(r,t,s,i());d.onConnection=h=>{m(g).push(h),console.log(...p("log","Room: Connection",h)),h.onClose=()=>{console.log(...p("log","Room: Connection closed",h));let b=m(g).findIndex($=>te($,h));te(b,-1)||m(g).splice(b,1)}},console.log(...p("log","Room: Peer",d.id));const o={peerId:d.id,testId:d.id,status:"idle",username:e.firebaseUser.displayName,profilePic:e.firebaseUser.photoURL},f=lt(e.roomId);f.subscribe(h=>{console.log(...p("log","Room: Document data:",h)),h&&((!h.users||_(h.users.find(b=>te(b.peerId,o.peerId)),null))&&rt(f.ref,o),h.users&&D(u,L(h.users,null,u)),console.log(...p("log","Room: Document data:",h.id)))});let v=h=>{D(l,L(h,null,l)),d.call()},y=null;window.onbeforeunload=()=>{d.close()},ie(()=>{_(m(l),null)||(m(l).getVideoTracks()[0].onended=()=>{D(l,null),console.log(...p("log","Room: Stream ended")),console.log(...p("log","Room: Removing Tracks...")),c.forEach(h=>{console.log(...p("log","Room: Sending Stream Ended Message"))})})}),window.onkeydown=h=>{console.log(...p("log","Room: Key pressed",h)),y==null||y.KeyEvent(h,!0)},window.onkeyup=h=>{console.log(...p("log","Room: Key released",h)),y==null||y.KeyEvent(h,!1)};var U=Ot(),N=R(U),O=R(N),Z=R(O);j(Z,()=>_(m(g).length,0),h=>{var b=kt();E(h,b)},h=>{Ee(x(h,{get call(){return m(g)[0]},get localStream(){return m(l)}}),b=>y=b,()=>y)}),w(O);var De=A(O,2);j(De,()=>m(g).length>1,h=>{var b=Nt();nt(b,21,()=>m(g).slice(1),at,($,ue)=>{var ge=Mt(),ee=A(K(ge),2);ee.__click=[Pt,g,ue];var ke=R(ee);x(ke,{get call(){return m(ue)},get localStream(){return m(l)}}),w(ee),E($,ge)}),w(b),E(h,b)}),w(N);var re=A(N,2),Ie=R(re);return Ie.__click=[Lt,v],Ae(2),w(re),w(U),E(a,U),z({...W()})}H(I);we(["click"]);Y();Q[C]="src/lib/Components/EnsureLogin.svelte";function Q(a,e){return B(new.target),V(e,!1,Q),xe(()=>{q.onAuthStateChanged(t=>{_(t,null)&&it("/",{replaceState:!0,state:{from:location.pathname}})})}),Te(),z({...W()})}H(Q);Y();F[C]="src/routes/[slug]/+page.svelte";var At=P(M('<div class="card variant-ghost-primary -backdrop-hue-rotate-90 backdrop-blur-md flex flex-col items-center p-2 room svelte-l1jl19"><div class="card-content h-full flex-1 flex flex-col items-center"><!></div></div>'),F[C],[[27,8,[[30,12]]]]),xt=P(M("<!> <!>",1),F[C],[]);function F(a,e){B(new.target),V(e,!0,F);const t=Ne(),s=()=>(Ke(he,"page"),Le(he,"$page",t));G(e,[],[],F);let i=k(!1);q.authStateReady().then(()=>{D(i,!0)});function u(){for(var r="0123456789ABCDEF",d="#",o=0;o<6;(o+=1)-1)d+=r[Math.floor(Math.random()*16)];return d}let c=u();var g=ye(),l=K(g);return j(l,()=>!m(i),r=>{st(r,{})},r=>{var d=xt(),o=K(d);et(o,{children:Fe,$$slots:{default:(v,y)=>{const U=Ue(()=>y.user);var N=At(),O=R(N),Z=R(O);I(Z,{get firebaseUser(){return m(U)},get roomId(){return s().params.slug},color:c}),w(O),w(N),E(v,N)}}});var f=A(o,2);Q(f,{}),E(r,d)}),E(a,g),z({...W()})}H(F);export{F as component};
