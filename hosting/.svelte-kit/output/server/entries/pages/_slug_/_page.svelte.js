import { F as FILENAME, C as push, K as push_element, O as pop_element, R as bind_props, G as pop, S as spread_attributes, N as attr, T as copy_payload, U as assign_payload, V as ensure_array_like, M as invalid_default_snippet, I as store_get, J as unsubscribe_stores } from "../../../chunks/index2.js";
import { p as page } from "../../../chunks/stores.js";
import { f as firestore, a as auth, S as SignedIn } from "../../../chunks/SignedOut.js";
import "firebase/auth";
import { collection, onSnapshot, doc, setDoc, arrayUnion } from "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";
import "firebase/database";
import { w as writable } from "../../../chunks/index.js";
import "firebase/compat/app";
import { P as ProgressRadial } from "../../../chunks/ProgressRadial.js";
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
Dream[FILENAME] = "src/lib/Components/Dream.svelte";
function Dream($$payload, $$props) {
  push(Dream);
  let {
    stream,
    mouseMove = void 0,
    mouseDown = void 0,
    mouseUp = void 0,
    mouseWheel = void 0
  } = $$props;
  !navigator.userActivation.isActive;
  $$payload.out += `<div class="rounded h-full overflow-hidden flex items-center">`;
  push_element($$payload, "div", 44, 0);
  $$payload.out += `<video class="max-h-full h-fit" autoplay>`;
  push_element($$payload, "video", 46, 4);
  $$payload.out += `</video>`;
  pop_element();
  $$payload.out += ` `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop_element();
  bind_props($$props, { mouseMove, mouseDown, mouseUp, mouseWheel });
  pop();
}
Dream.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Cursor[FILENAME] = "~icons/vaadin/cursor.svelte";
function Cursor($$payload, $$props) {
  push(Cursor);
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out += `<svg${spread_attributes(
    {
      viewBox: "0 0 16 16",
      width: "1.2em",
      height: "1.2em",
      ...p
    },
    void 0,
    void 0,
    3
  )}>`;
  push_element($$payload, "svg", 1, 37);
  $$payload.out += `<path fill="currentColor" d="M4 0v13l3.31-3.47L10 16l1.37-.63L8.65 9H13z">`;
  push_element($$payload, "path", 1, 99);
  $$payload.out += `</path>`;
  pop_element();
  $$payload.out += `</svg>`;
  pop_element();
  pop();
}
Cursor.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Click[FILENAME] = "src/lib/Components/Toolbar/Items/Click.svelte";
function Click($$payload, $$props) {
  push(Click);
  let { active = void 0 } = $$props;
  let activeClass = "border-2 border-slate-900 !bg-opacity-0";
  $$payload.out += `<button type="button"${attr("class", activeClass)}>`;
  push_element($$payload, "button", 19, 0);
  Cursor($$payload, {});
  $$payload.out += `<!----></button>`;
  pop_element();
  bind_props($$props, { active });
  pop();
}
Click.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Rubber[FILENAME] = "~icons/jam/rubber.svelte";
function Rubber($$payload, $$props) {
  push(Rubber);
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out += `<svg${spread_attributes(
    {
      viewBox: "-1.5 -2.5 24 24",
      width: "1.2em",
      height: "1.2em",
      ...p
    },
    void 0,
    void 0,
    3
  )}>`;
  push_element($$payload, "svg", 1, 37);
  $$payload.out += `<path fill="currentColor" d="M12.728 12.728L8.485 8.485l-5.657 5.657l2.122 2.121a3 3 0 0 0 4.242 0zM11.284 17H14a1 1 0 0 1 0 2H3a1 1 0 0 1-.133-1.991l-1.453-1.453a2 2 0 0 1 0-2.828L12.728 1.414a2 2 0 0 1 2.828 0L19.8 5.657a2 2 0 0 1 0 2.828z">`;
  push_element($$payload, "path", 1, 105);
  $$payload.out += `</path>`;
  pop_element();
  $$payload.out += `</svg>`;
  pop_element();
  pop();
}
Rubber.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Pencil[FILENAME] = "~icons/bxs/pencil.svelte";
function Pencil($$payload, $$props) {
  push(Pencil);
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out += `<svg${spread_attributes(
    {
      viewBox: "0 0 24 24",
      width: "1.2em",
      height: "1.2em",
      ...p
    },
    void 0,
    void 0,
    3
  )}>`;
  push_element($$payload, "svg", 1, 37);
  $$payload.out += `<path fill="currentColor" d="M8.707 19.707L18 10.414L13.586 6l-9.293 9.293a1 1 0 0 0-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263M21 7.414a2 2 0 0 0 0-2.828L19.414 3a2 2 0 0 0-2.828 0L15 4.586L19.414 9z">`;
  push_element($$payload, "path", 1, 99);
  $$payload.out += `</path>`;
  pop_element();
  $$payload.out += `</svg>`;
  pop_element();
  pop();
}
Pencil.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Draw[FILENAME] = "src/lib/Components/Toolbar/Items/Draw.svelte";
function Draw($$payload, $$props) {
  push(Draw);
  let { active = false, isPencil = true } = $$props;
  let activeClass = "border-2 border-slate-900 !bg-opacity-0";
  $$payload.out += `<button type="button"${attr("class", activeClass)}>`;
  push_element($$payload, "button", 37, 0);
  if (isPencil) {
    $$payload.out += "<!--[-->";
    Pencil($$payload, {});
  } else {
    $$payload.out += "<!--[!-->";
    Rubber($$payload, {});
  }
  $$payload.out += `<!--]--></button>`;
  pop_element();
  bind_props($$props, { active, isPencil });
  pop();
}
Draw.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Toolbar[FILENAME] = "src/lib/Components/Toolbar/Toolbar.svelte";
function Toolbar($$payload, $$props) {
  push(Toolbar);
  let { selectedTool = "click" } = $$props;
  let clickActive = true;
  let drawActive = false;
  let drawPencil = true;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="flex flex-col mr-2 p-1 bg-surface-50 bg-opacity-30 border rounded backdrop-blur-3xl">`;
    push_element($$payload2, "div", 32, 0);
    Click($$payload2, {
      get active() {
        return clickActive;
      },
      set active($$value) {
        clickActive = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> `;
    Draw($$payload2, {
      get active() {
        return drawActive;
      },
      set active($$value) {
        drawActive = $$value;
        $$settled = false;
      },
      get isPencil() {
        return drawPencil;
      },
      set isPencil($$value) {
        drawPencil = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div>`;
    pop_element();
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { selectedTool });
  pop();
}
Toolbar.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
DreamConnection[FILENAME] = "src/lib/Components/DreamConnection.svelte";
function DreamConnection($$payload, $$props) {
  push(DreamConnection);
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
  let selectedTool = "click";
  let MouseDown = (e) => {
    let data = {
      type: "BasicInput",
      device: "mouse",
      action: "click",
      button: e.button == 1 ? "middle" : e.button == 2 ? "right" : "left",
      pressed: true,
      x: e.offsetX / e.target.clientWidth,
      y: e.offsetY / e.target.clientHeight
    };
    sendData(data);
    console.log("DreamConnection: Mouse down");
  };
  let MouseUp = (e) => {
    let data = {
      type: "BasicInput",
      device: "mouse",
      action: "click",
      button: e.button == 1 ? "middle" : e.button == 2 ? "right" : "left",
      pressed: false,
      x: e.offsetX / e.target.clientWidth,
      y: e.offsetY / e.target.clientHeight
    };
    sendData(data);
    console.log("DreamConnection: Mouse up");
  };
  let MouseMove = (e) => {
    let data = {
      type: "BasicInput",
      device: "mouse",
      action: "move",
      selectedTool,
      //action: "ck",
      erase: false,
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
      key: e.code
    };
    sendData(data);
    console.log("DreamConnection: Key pressed");
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    if (media != null) {
      $$payload2.out += "<!--[-->";
      Toolbar($$payload2, {
        get selectedTool() {
          return selectedTool;
        },
        set selectedTool($$value) {
          selectedTool = $$value;
          $$settled = false;
        }
      });
      $$payload2.out += `<!----> `;
      Dream($$payload2, {
        interarctive: false,
        stream: media,
        local: false,
        mouseMove: MouseMove,
        mouseDown: MouseDown,
        mouseUp: MouseUp,
        mouseWheel: Scroll
      });
      $$payload2.out += `<!---->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { remove, KeyEvent });
  pop();
}
DreamConnection.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
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
Room[FILENAME] = "src/lib/Components/Room.svelte";
function Room($$payload, $$props) {
  push(Room);
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
  $$payload.out += `<div class="flex flex-col items-center justify-center w-full h-full">`;
  push_element($$payload, "div", 219, 0);
  $$payload.out += `<div class="flex-1 h-full">`;
  push_element($$payload, "div", 220, 4);
  $$payload.out += `<div class="main-dream h-full flex justify-center">`;
  push_element($$payload, "div", 221, 8);
  if (connections.length == 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="self-center">`;
    push_element($$payload, "p", 223, 16);
    $$payload.out += `Waiting for someone to start sharing...</p>`;
    pop_element();
  } else {
    $$payload.out += "<!--[!-->";
    DreamConnection($$payload, { call: connections[0], localStream });
  }
  $$payload.out += `<!--]--></div>`;
  pop_element();
  $$payload.out += ` `;
  if (connections.length > 1) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(connections.slice(1));
    $$payload.out += `<div class="other-dreams">`;
    push_element($$payload, "div", 235, 12);
    $$payload.out += `<!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let stream = each_array[$$index];
      $$payload.out += `<p>`;
      push_element($$payload, "p", 237, 20);
      $$payload.out += `dsada</p>`;
      pop_element();
      $$payload.out += ` <button>`;
      push_element($$payload, "button", 238, 20);
      DreamConnection($$payload, { call: stream, localStream });
      $$payload.out += `<!----></button>`;
      pop_element();
    }
    $$payload.out += `<!--]--></div>`;
    pop_element();
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  pop();
}
Room.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
EnsureLogin[FILENAME] = "src/lib/Components/EnsureLogin.svelte";
function EnsureLogin($$payload, $$props) {
  push(EnsureLogin);
  pop();
}
EnsureLogin.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
_page[FILENAME] = "src/routes/[slug]/+page.svelte";
function _page($$payload, $$props) {
  push(_page);
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
          $$payload2.out += `<div class="card variant-ghost-primary -backdrop-hue-rotate-90 backdrop-blur-md flex flex-col items-center p-2 room m-2 svelte-l1jl19">`;
          push_element($$payload2, "div", 27, 8);
          $$payload2.out += `<div class="card-content h-full flex-1 flex flex-col items-center">`;
          push_element($$payload2, "div", 30, 12);
          Room($$payload2, {
            firebaseUser: user,
            roomId: store_get($$store_subs ??= {}, "$page", page).params.slug,
            color
          });
          $$payload2.out += `<!----></div>`;
          pop_element();
          $$payload2.out += `</div>`;
          pop_element();
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
_page.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
export {
  _page as default
};
