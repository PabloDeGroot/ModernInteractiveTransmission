import { a4 as sanitize_slots, T as fallback, Z as attr, a5 as add_styles, V as slot, W as bind_props, S as pop, a0 as sanitize_props, _ as stringify, Q as push, a6 as ensure_array_like, a3 as invalid_default_snippet, a1 as store_get, a2 as unsubscribe_stores } from "../../../chunks/index2.js";
import { p as page } from "../../../chunks/stores.js";
import { f as firestore, a as auth, S as SignedIn } from "../../../chunks/SignedIn.js";
import "firebase/auth";
import { doc, collection, onSnapshot, setDoc, arrayUnion } from "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";
import "firebase/database";
import { w as writable } from "../../../chunks/index.js";
import "firebase/compat/app";
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import "../../../chunks/client.js";
function docStore(firestore2, ref, startWith) {
  let unsubscribe;
  if (!globalThis.window) {
    const { subscribe: subscribe2 } = writable(startWith);
    return {
      subscribe: subscribe2,
      ref: null,
      id: ""
    };
  }
  if (!firestore2) {
    console.warn("Firestore is not initialized. Are you missing FirebaseApp as a parent component?");
    const { subscribe: subscribe2 } = writable(null);
    return {
      subscribe: subscribe2,
      ref: null,
      id: ""
    };
  }
  const docRef = typeof ref === "string" ? doc(firestore2, ref) : ref;
  const { subscribe } = writable(startWith, (set) => {
    unsubscribe = onSnapshot(docRef, (snapshot) => {
      set(snapshot.data() ?? null);
    });
    return () => unsubscribe();
  });
  return {
    subscribe,
    ref: docRef,
    id: docRef.id
  };
}
function collectionStore(firestore2, ref, startWith = []) {
  let unsubscribe;
  if (!globalThis.window) {
    const { subscribe: subscribe2 } = writable(startWith);
    return {
      subscribe: subscribe2,
      ref: null
    };
  }
  if (!firestore2) {
    console.warn("Firestore is not initialized. Are you missing FirebaseApp as a parent component?");
    const { subscribe: subscribe2 } = writable([]);
    return {
      subscribe: subscribe2,
      ref: null
    };
  }
  const colRef = collection(firestore2, ref);
  const { subscribe } = writable(startWith, (set) => {
    unsubscribe = onSnapshot(colRef, (snapshot) => {
      const data = snapshot.docs.map((s) => {
        return { id: s.id, ref: s.ref, ...s.data() };
      });
      set(data);
    });
    return () => unsubscribe();
  });
  return {
    subscribe,
    ref: colRef
  };
}
function ProgressRadial($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  push();
  let classesBase;
  let value = fallback($$props["value"], () => void 0, true);
  let stroke = fallback($$props["stroke"], 40);
  let font = fallback($$props["font"], 56);
  let strokeLinecap = fallback($$props["strokeLinecap"], "butt");
  let transition = fallback($$props["transition"], "transition-[stroke-dashoffset]");
  let width = fallback($$props["width"], "w-36");
  let meter = fallback($$props["meter"], "stroke-surface-900 dark:stroke-surface-50");
  let track = fallback($$props["track"], "stroke-surface-500/30");
  let fill = fallback($$props["fill"], "fill-token");
  let labelledby = fallback($$props["labelledby"], "");
  const cBase = "progress-radial relative overflow-hidden";
  const cBaseTrack = "fill-transparent";
  const cBaseMeter = "fill-transparent -rotate-90 origin-[50%_50%]";
  const baseSize = 512;
  const radius = baseSize / 2 - stroke / 2;
  let circumference = radius;
  let dashoffset;
  function setProgress(percent) {
    circumference = radius * 2 * Math.PI;
    dashoffset = circumference - percent / 100 * circumference;
  }
  setProgress(0);
  classesBase = `${cBase} ${width} ${$$sanitized_props.class ?? ""}`;
  $$payload.out += `<figure${attr("class", `progress-radial ${stringify(classesBase)}`)} data-testid="progress-radial" role="meter"${attr("aria-labelledby", labelledby)}${attr("aria-valuenow", value || 0)}${attr("aria-valuetext", value ? `${value}%` : "Indeterminate Spinner")}${attr("aria-valuemin", 0)}${attr("aria-valuemax", 100)}><svg${attr("viewBox", `0 0 ${stringify(baseSize)} ${stringify(baseSize)}`)}${attr("class", `rounded-full ${stringify([value === void 0 ? "animate-spin" : ""].filter(Boolean).join(" "))}`)}><circle${attr("class", `progress-radial-track ${stringify(cBaseTrack)} ${stringify(track)}`)}${attr("stroke-width", stroke)}${attr("r", radius)} cx="50%" cy="50%"></circle><circle${add_styles({
    "stroke-dasharray": `${stringify(circumference)} ${stringify(circumference)}`,
    "stroke-dashoffset": dashoffset
  })}${attr("class", `progress-radial-meter ${stringify(cBaseMeter)} ${stringify(meter)} ${stringify(transition)}`)}${attr("stroke-width", stroke)}${attr("r", radius)} cx="50%" cy="50%"${attr("stroke-linecap", strokeLinecap)}></circle>`;
  if (value != void 0 && value >= 0 && $$slots.default) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-weight="bold"${attr("font-size", font)}${attr("class", `progress-radial-text ${stringify(fill)}`)}><!---->`;
    slot($$payload, $$props, "default", {});
    $$payload.out += `<!----></text>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></svg></figure>`;
  bind_props($$props, {
    value,
    stroke,
    font,
    strokeLinecap,
    transition,
    width,
    meter,
    track,
    fill,
    labelledby
  });
  pop();
}
function GetRoom(id) {
  return docStore(firestore, "room/" + id);
}
collectionStore(firestore, "room");
function AddUser(ref, user) {
  if (ref != null) {
    return setDoc(
      ref,
      {
        users: arrayUnion(user)
      },
      { merge: true }
    );
  }
}
function Dream($$payload, $$props) {
  push();
  let {
    stream,
    mouseMove = void 0,
    mouseDown = void 0,
    mouseUp = void 0,
    mouseWheel = void 0
  } = $$props;
  !navigator.userActivation.isActive;
  $$payload.out += `<div class="rounded h-full overflow-hidden flex"><video class="max-h-full" autoplay></video> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { mouseMove, mouseDown, mouseUp, mouseWheel });
  pop();
}
function DreamConnection($$payload, $$props) {
  push();
  let { call, localStream, remove = void 0 } = $$props;
  let media = null;
  call.pc.ontrack = (e) => {
    console.log("Room: Track received", e);
    media = e.streams[0];
  };
  let sendData = (data) => {
    if (call.data == null) return;
    let username = call.myname;
    let color = call.myColor;
    data = { ...data, username, color };
    if (call.data.readyState != "open") {
      call.data.onopen = () => {
        call.data.send(JSON.stringify(data));
      };
    } else {
      call.data.send(JSON.stringify(data));
    }
  };
  let OnClick = (e) => {
    let btn = "left";
    if (e.button == 1) btn = "middle";
    if (e.button == 2) btn = "right";
    let data = {
      type: "BasicInput",
      device: "mouse",
      action: "click",
      button: btn,
      x: e.offsetX / e.target.clientWidth,
      y: e.offsetY / e.target.clientHeight
    };
    sendData(data);
    console.log("DreamConnection: Clicked");
  };
  let MouseMove = (e) => {
    let data = {
      type: "BasicInput",
      device: "mouse",
      action: "move",
      x: e.offsetX / e.target.clientWidth,
      y: e.offsetY / e.target.clientHeight
    };
    sendData(data);
    console.log("DreamConnection: Mouse moved");
  };
  let Scroll = (e) => {
    let direction = e.deltaY > 0 ? "down" : "up";
    let amount = Math.abs(e.deltaY);
    let data = {
      type: "BasicInput",
      device: "mouse",
      action: "scroll",
      x: e.offsetX / e.target.clientWidth,
      y: e.offsetY / e.target.clientHeight,
      direction,
      amount
    };
    sendData(data);
    console.log("DreamConnection: Scrolled");
  };
  function KeyEvent(e, down) {
    let data = {
      type: "BasicInput",
      device: "keyboard",
      action: down ? "press" : "release",
      key: e.key
    };
    sendData(data);
    console.log("DreamConnection: Key pressed");
  }
  if (media != null) {
    $$payload.out += "<!--[-->";
    Dream($$payload, {
      interarctive: false,
      stream: media,
      local: false,
      mouseMove: MouseMove,
      mouseDown: () => {
      },
      mouseUp: OnClick,
      mouseWheel: Scroll
    });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { remove, KeyEvent });
  pop();
}
class FirestoreSignalingChannel {
  roomID;
  readRef;
  sendRef;
  //docRef: DocumentReference<DocumentData>;
  //callRef: DocumentReference<DocumentData>;
  data;
  constructor(roomId, readRef, sendRef) {
    this.roomID = roomId;
    this.readRef = readRef;
    this.sendRef = sendRef;
    this.data = { data: [] };
    onSnapshot(this.readRef, (doc2) => {
      if (!doc2.data()?.data) return;
      console.log("Signaler: Emitting onmessage", doc2.data());
      let alldata = doc2.data().data;
      let oldData = this.data;
      let newData = alldata.filter((d) => !oldData.data.includes(d));
      this.data = { data: alldata };
      if (this.data.data.length > 20) {
        return;
      }
      newData.forEach((d) => {
        this.onmessage?.(JSON.parse(d));
      });
    });
  }
  send(data) {
    console.log("sending", data);
    setDoc(this.sendRef, { data: arrayUnion(JSON.stringify(data)) }, { merge: true });
  }
  close = async () => {
  };
  onmessage;
}
const fetchIceServers = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer REDACTED_CLOUDFLARE_TURN_API_TOKEN");
  const raw = JSON.stringify({
    "ttl": 1e8
  });
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw
  };
  const response = await fetch("https://rtc.live.cloudflare.com/v1/turn/keys/REDACTED_TURN_KEY_ID/credentials/generate", requestOptions);
  return response.json();
};
const initializeIceServers = async () => {
  const iceServers = await fetchIceServers();
  const config = {
    iceServers: [
      //{ urls: "stun:stun.my-stun-server.tld" },
      { urls: "stun:stun.l.google.com:5349" }
      /*
      { urls: "stun:stun1.l.google.com:3478" },
      { urls: "stun:stun1.l.google.com:5349" },
      { urls: "stun:stun2.l.google.com:19302" },
      { urls: "stun:stun2.l.google.com:5349" },
      { urls: "stun:stun3.l.google.com:3478" },
      { urls: "stun:stun3.l.google.com:5349" },
      { urls: "stun:stun4.l.google.com:19302" },
      { urls: "stun:stun4.l.google.com:5349" }*/
    ]
  };
  config.iceServers?.push(iceServers.iceServers);
  console.log("Ice Servers", config);
  return config;
};
class MyPeerConnection {
  target;
  id;
  caller;
  myname;
  myColor;
  targetName;
  targetColor;
  signaler;
  pc;
  data = null;
  onPcReady;
  constructor(signaler, target, id, caller, myname, myColor) {
    this.signaler = signaler;
    this.target = target;
    this.id = id;
    this.caller = caller;
    this.myname = myname;
    this.myColor = myColor;
    initializeIceServers().then((config) => {
      this.pc = new RTCPeerConnection(config);
      this.initPeerConnection();
      this.initSignaling();
      this.registerListeners();
      this.pc.ondatachannel = (e) => {
        console.log("My Peer: Data channel created", e.channel);
        this.data = e.channel;
        this.data.onclose = () => {
          console.log("My Peer: Data channel closed");
          this.cleanup();
        };
        this.data.addEventListener("message", (e2) => {
          if (typeof e2.data === "string") {
            console.log("My Peer: Data channel message", e2.data);
          }
          if (e2.data == "close") {
            this.cleanup();
          }
        });
        this.data.onerror = (e2) => {
          console.error(e2);
          this.cleanup();
        };
        this.data.onclosing = () => {
          console.log("My Peer: Data channel closing");
          this.cleanup();
        };
      };
      this.onPcReady?.();
    });
    console.log("My Peer: Created", this.id, this.target);
  }
  onClose;
  cleanup = () => {
    console.log("My Peer: Cleanup");
    this.signaler.close();
    this.close();
    this.pc?.close();
    this.data?.close();
    if (this.onClose) {
      console.log("My Peer: Close callback");
      this.onClose();
    } else {
      console.log("My Peer: No close callback");
    }
  };
  makingOffer = false;
  initPeerConnection = () => {
    this.pc.onnegotiationneeded = async (e) => {
      try {
        console.log("My Peer: Negotiation needed", e);
        this.makingOffer = true;
        await this.pc.setLocalDescription();
        console.log("My Peer: Local description set", this.pc.localDescription);
        this.signaler.send({ description: this.pc.localDescription, id: this.id, color: this.myColor, name: this.myname });
      } catch (err) {
        console.error(err);
      } finally {
        this.makingOffer = false;
      }
    };
    this.pc.oniceconnectionstatechange = () => {
      console.log("My Peer: ICE connection state change", this.pc.iceConnectionState);
      if (this.pc.iceConnectionState === "failed") {
        this.pc.restartIce();
      }
    };
    this.pc.onicecandidate = (e) => {
      if (e.candidate === null) return;
      console.log("My Peer: ICE candidate", e.candidate);
      this.signaler.send({ candidate: e.candidate, id: this.id, color: this.myColor, name: this.myname });
    };
  };
  ignoreOffer = false;
  playoutDelayHint = 0;
  changePlayOutDelay = () => {
    let recievers = this.pc.getReceivers();
    if (this.playoutDelayHint < 0) return;
    for (const receiver of recievers) {
      receiver.playoutDelayHint = this.playoutDelayHint;
    }
  };
  isSettingRemoteAnswerPending = false;
  onConnected;
  initSignaling = async () => {
    this.signaler.onmessage = async ({ description, candidate, id, type }) => {
      console.log("My Peer: Signaling message", description, candidate, id);
      if (id !== this.target) {
        return;
      }
      if (id === this.id) {
        return;
      }
      if (type == "close") {
        this.cleanup();
        return;
      }
      let polite = this.caller;
      console.log("Is Polite", polite);
      try {
        if (description) {
          const readyForOffer = !this.makingOffer && (this.pc.signalingState == "stable" || this.isSettingRemoteAnswerPending);
          const offerCollision = description.type == "offer" && !readyForOffer;
          this.ignoreOffer = !polite && offerCollision;
          if (this.ignoreOffer) {
            return;
          }
          this.isSettingRemoteAnswerPending = description.type == "answer";
          await this.pc.setRemoteDescription(description);
          this.isSettingRemoteAnswerPending = false;
          if (description.type === "offer") {
            await this.pc.setLocalDescription();
            console.log("My Peer: Local description set", this.pc.localDescription);
            this.signaler.send({ description: this.pc.localDescription, id: this.id });
          }
        } else if (candidate) {
          try {
            await this.pc.addIceCandidate(candidate);
          } catch (err) {
            if (!this.ignoreOffer) {
              throw err;
            }
          }
        }
      } catch (err) {
        console.error(err);
      }
    };
  };
  registerListeners = () => {
    this.pc.onicecandidateerror = (e) => {
      console.error("MyPeer IceCandidateError: ", e);
    };
    this.pc.addEventListener("icegatheringstatechange", () => {
      console.log(
        `ICE gathering state changed: ${this.pc.iceGatheringState}`
      );
    });
    this.pc.addEventListener("connectionstatechange", () => {
      console.log(`Connection state change: ${this.pc.connectionState}`);
      if (this.pc.connectionState === "connected") {
        this.onConnected?.();
      }
      if (this.pc.connectionState === "disconnected") {
        this.cleanup();
      }
    });
    this.pc.addEventListener("signalingstatechange", () => {
      console.log(`Signaling state change: ${this.pc.signalingState}`);
    });
  };
  close = () => {
    console.log("My Peer: Close");
    this.pc.close();
    this.data?.close();
  };
}
class MyPeer {
  caller;
  conns = [];
  id;
  myname;
  myColor;
  onConnection;
  onCall;
  call = () => {
    this.caller.call(this.id);
  };
  close = () => {
    this.conns.forEach((conn) => conn.close());
    this.caller.close(this.id);
  };
  // answer = (caller: number) => {
  //     this.signaler.awnser(caller, this.id);
  // }
  //pc = new RTCPeerConnection(config);
  //data = this.pc.createDataChannel("data");
  constructor(caller, id, myname, myColor) {
    console.log("My Peer: Created", id);
    this.caller = caller;
    this.id = id;
    this.myname = myname;
    this.myColor = myColor;
    this.initCalls();
  }
  initCalls = () => {
    this.caller.onCall = (caller) => {
      console.log("My Peer: Call recived", caller);
      if (caller == this.id) {
        console.log("My Peer: Call recived from self", caller);
        return;
      }
      this.caller.awnser(caller, this.id);
    };
    this.caller.onConnection = (readDoc, writeDoc) => {
      console.log("My Peer: Connection recived", readDoc, writeDoc);
      let signal = new FirestoreSignalingChannel(this.caller.roomID, readDoc, writeDoc);
      let callee = readDoc.id == this.id;
      let target = callee ? readDoc.parent.parent.id : readDoc.id;
      if (target == this.id) ;
      console.log("My Peer: IsCallee", callee);
      let connection = new MyPeerConnection(signal, target, this.id, callee, this.myname, this.myColor);
      this.conns.push(connection);
      connection.onPcReady = () => {
        this.onConnection?.(connection);
      };
    };
  };
}
class FirestoreCallChannel {
  roomID;
  //docRef: DocumentReference<DocumentData>;
  //callRef: DocumentReference<DocumentData>;
  colRef;
  callCollection;
  answerCollection;
  unsubscribe;
  constructor(roomId) {
    this.roomID = roomId;
    this.colRef = doc(firestore, "signal", roomId);
    this.callCollection = collection(this.colRef, "call");
    this.answerCollection = collection(this.colRef, "answer");
    this.unsubscribe = [onSnapshot(this.callCollection, (doc2) => {
      doc2.docChanges().forEach((change) => {
        console.log("Signaler: Call change", change);
        if (change.type === "added") {
          console.log("Signaler: Emitting onCall", change.doc.id);
          this.onCall?.(change.doc.id);
        }
      });
    })];
  }
  awnser = (caller, callee) => {
    console.log("answering", caller, callee);
    let awnsRef = doc(this.answerCollection, caller.toString(), "0", callee.toString());
    setDoc(awnsRef, {});
    let callRef = doc(this.callCollection, caller.toString(), "0", callee.toString());
    this.onConnection?.(callRef, awnsRef);
  };
  call = (caller) => {
    let docRef = doc(this.callCollection, caller.toString());
    setDoc(docRef, {});
    let answerRef = collection(this.answerCollection, caller.toString(), "0");
    let un = onSnapshot(answerRef, (d) => {
      d.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log("Signaler: Emitting onAnswer", change.doc.id);
          let a = doc(this.callCollection, caller.toString(), "0", change.doc.id.toString());
          this.onConnection?.(change.doc.ref, a);
        }
      });
    });
    this.unsubscribe.push(un);
    return docRef;
  };
  close = async (id) => {
    this.unsubscribe.forEach((un) => un());
  };
  onCall;
  onConnection;
}
function Room($$payload, $$props) {
  push();
  var uid = auth.currentUser?.uid;
  var name = auth.currentUser?.displayName;
  let { firebaseUser, roomId, color = "red" } = $$props;
  let connections = [];
  let localStream = null;
  let signal = new FirestoreCallChannel(roomId);
  let test = new MyPeer(signal, uid, name, color);
  test.onConnection = (conn) => {
    connections.push(conn);
    console.log("Room: Connection", conn);
    conn.onClose = () => {
      console.log("Room: Connection closed", conn);
      let index = connections.findIndex((c) => c === conn);
      if (index === -1) return;
      connections.splice(index, 1);
    };
  };
  console.log("Room: Peer", test.id);
  const user = {
    peerId: test.id,
    testId: test.id,
    status: "idle",
    username: firebaseUser.displayName,
    profilePic: firebaseUser.photoURL
  };
  const roomDoc = GetRoom(roomId);
  roomDoc.subscribe((doc2) => {
    console.log("Room: Document data:", doc2);
    if (!doc2) return;
    if (!doc2.users || doc2.users.find((u) => u.peerId === user.peerId) == null) {
      AddUser(roomDoc.ref, user);
    }
    if (doc2.users) {
      doc2.users;
    }
    console.log("Room: Document data:", doc2.id);
  });
  window.onbeforeunload = () => {
    test.close();
  };
  window.onkeydown = (e) => {
    console.log("Room: Key pressed", e);
  };
  window.onkeyup = (e) => {
    console.log("Room: Key released", e);
  };
  $$payload.out += `<div class="flex flex-col items-center justify-center w-full h-full"><div class="flex-1 h-full"><div class="main-dream h-full flex justify-center">`;
  if (connections.length == 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="self-center">Waiting for someone to start sharing...</p>`;
  } else {
    $$payload.out += "<!--[!-->";
    DreamConnection($$payload, { call: connections[0], localStream });
  }
  $$payload.out += `<!--]--></div> `;
  if (connections.length > 1) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(connections.slice(1));
    $$payload.out += `<div class="other-dreams"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let stream = each_array[$$index];
      $$payload.out += `<p>dsada</p> <button>`;
      DreamConnection($$payload, { call: stream, localStream });
      $$payload.out += `<!----></button>`;
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="flex items-center justify-center w-full mb-3 absolute bottom-0"><button class="btn variant-filled-secondary mr-4">Share</button> <button class="btn variant-filled-secondary">Share with App</button></div></div>`;
  pop();
}
function EnsureLogin($$payload, $$props) {
  push();
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let ready = false;
  auth.authStateReady().then(() => {
    ready = true;
  });
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color2 = "#";
    for (var i = 0; i < 6; i++) {
      color2 += letters[Math.floor(Math.random() * 16)];
    }
    return color2;
  }
  let color = getRandomColor();
  if (!ready) {
    $$payload.out += "<!--[-->";
    ProgressRadial($$payload, {});
  } else {
    $$payload.out += "<!--[!-->";
    SignedIn($$payload, {
      children: invalid_default_snippet,
      $$slots: {
        default: ($$payload2, { user }) => {
          $$payload2.out += `<div class="card variant-ghost-primary -backdrop-hue-rotate-90 backdrop-blur-md flex flex-col items-center p-2 room svelte-l1jl19"><div class="card-content h-full flex-1 flex flex-col items-center">`;
          Room($$payload2, {
            firebaseUser: user,
            roomId: store_get($$store_subs ??= {}, "$page", page).params.slug,
            color
          });
          $$payload2.out += `<!----></div></div>`;
        }
      }
    });
    $$payload.out += `<!----> `;
    EnsureLogin();
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
