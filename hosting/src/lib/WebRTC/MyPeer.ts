
// on create gets id
// can call and connect to other users with their id

// on create gets id
// can call and connect to other users with their id
import type { ISignalingChannel } from "./ISignalingChannel";
import type { Connection } from "./Connection";
import type { ICallChannel } from "./ICallChannel";
import type { FirestoreCallChannel } from "./FirestoreCallChannel";
import { FirestoreSignalingChannel } from "./FirestoreSignalingChannel";
//impolite peer
//polite peer

/*
An important thing to keep in mind is this: the roles of caller and callee can switch during perfect negotiation.
If the polite peer is the caller and it sends an offer but there's a collision with the impolite peer, 
the polite peer drops its offer and instead replies to the offer it has received from the impolite peer. 
By doing so, the polite peer has switched from being the caller to the callee!
*/

// TURN credentials come from the environment. NOTE: anything read through
// `import.meta.env.VITE_*` is inlined into the browser bundle and is therefore
// PUBLIC. The Cloudflare TURN API token must eventually be moved behind a
// server endpoint (a Cloud Function) that mints short-TTL credentials; until
// then, use a token scoped to TURN only.
const TURN_KEY_ID = import.meta.env.VITE_CLOUDFLARE_TURN_KEY_ID;
const TURN_API_TOKEN = import.meta.env.VITE_CLOUDFLARE_TURN_API_TOKEN;

const fetchIceServers = async () => {
    if (!TURN_KEY_ID || !TURN_API_TOKEN) {
        throw new Error(
            "Missing VITE_CLOUDFLARE_TURN_KEY_ID / VITE_CLOUDFLARE_TURN_API_TOKEN (see .env.example)"
        );
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${TURN_API_TOKEN}`);

    const raw = JSON.stringify({
        "ttl": 100000000
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw
    };
    const response = await fetch(
        `https://rtc.live.cloudflare.com/v1/turn/keys/${TURN_KEY_ID}/credentials/generate`,
        requestOptions
    );
    return response.json();
};

const initializeIceServers = async () => {
    const iceServers = await fetchIceServers();
    iceServers

    const config: RTCConfiguration = {
        iceServers: [
            //{ urls: "stun:stun.my-stun-server.tld" },
            //{ urls: "stun:stun.l.google.com:5349" },
            /*
            { urls: "stun:stun1.l.google.com:3478" },
            { urls: "stun:stun1.l.google.com:5349" },
            { urls: "stun:stun2.l.google.com:19302" },
            { urls: "stun:stun2.l.google.com:5349" },
            { urls: "stun:stun3.l.google.com:3478" },
            { urls: "stun:stun3.l.google.com:5349" },
            { urls: "stun:stun4.l.google.com:19302" },
            { urls: "stun:stun4.l.google.com:5349" }*/
        ],
    };

    //remove stun servers
    iceServers.iceServers.urls = iceServers.iceServers.urls.filter((server: string) => server.includes("stun"));
    config.iceServers?.push(iceServers.iceServers);

    console.log("Ice Servers", config);
    return config;
};
function getH264Profile(codec: RTCRtpCodec) {
    if (codec.mimeType !== "video/H264" || codec.sdpFmtpLine === undefined) {
        return undefined;
    }
    const n = codec.sdpFmtpLine.length;
    return codec.sdpFmtpLine.substring(n - 6, n - 4);
}
//const config = await initializeIceServers();
class MyPeerConnection {
    target: string;
    id: string;
    caller: boolean;
    myname: string;
    myColor: string;
    targetName?: string;
    targetColor?: string;
    signaler: FirestoreSignalingChannel;
    pc!: RTCPeerConnection;
    data = null as RTCDataChannel | null;

    onPcReady?: () => void;
    constructor(signaler: FirestoreSignalingChannel, target: string, id: string, caller: boolean, myname: string, myColor: string) {
        this.signaler = signaler;
        this.target = target;
        this.id = id;
        this.caller = caller;
        this.myname = myname;
        this.myColor = myColor;
        initializeIceServers().then((config) => {
            this.pc = new RTCPeerConnection(config);
            try {
                const transceiver = this.pc.addTransceiver("video", { direction: "recvonly" });
                if (transceiver.setCodecPreferences !== undefined) {
                    const sorter = new Map();
                    sorter.set("64", 0);
                    sorter.set("4D", 1);
                    sorter.set("42", 2);

                    const codecs = RTCRtpReceiver.getCapabilities("video")?.codecs;
                    if (codecs === undefined) return;
                    codecs.sort((a, b) => {
                        let rankA = sorter.get(getH264Profile(a));
                        if (rankA === undefined) {
                            rankA = 10;
                        }
                        let rankB = sorter.get(getH264Profile(b));
                        if (rankB === undefined) {
                            rankB = 10;
                        }
                        return rankA - rankB;
                    });
                    for (const codec of codecs) {
                        console.log(codec);
                    }

                    transceiver.setCodecPreferences(codecs);
                }
            } catch (err) {
                console.log(err);
            }
            this.data = this.pc.createDataChannel("data");

            this.initPeerConnection();
            this.initSignaling();
            this.registerListeners();
            this.pc.ondatachannel = ((e) => {
                console.log("My Peer: Data channel created", e.channel);
            });
            this.data.onclose = () => {
                console.log("My Peer: Data channel closed");
                this.cleanup();
            }
            this.data.addEventListener('message', (e) => {
                if (typeof e.data === "string") {
                    console.log("My Peer: Data channel message", e.data);
                }
                if (e.data == "close") {
                    this.cleanup();
                }
            });
            this.data.onerror = (e) => {
                console.error(e);
                this.cleanup();
            }
            this.data.onclosing = () => {
                console.log("My Peer: Data channel closing");
                this.cleanup();

            }

            this.onPcReady?.();
        });
        console.log("My Peer: Created", this.id, this.target);
    }
    onClose?: () => void;

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
    }

    makingOffer = false;
    initPeerConnection = () => {

        // this.pc.ontrack = ({ track, streams }) => { 
        //     track.onunmute = () => {
        //         //if (remoteVideo.srcObject) {
        //         //    return;
        //         //}
        //         //remoteVideo.srcObject = streams[0];
        //     };
        // };


        this.pc!.onnegotiationneeded = async (e) => {
            try {
                console.log("My Peer: Negotiation needed", e);
                this.makingOffer = true;
                await this.pc.setLocalDescription();
                console.log("My Peer: Local description set", this.pc.localDescription);
                this.signaler.send({ description: this.pc.localDescription });
            } catch (err) {
                console.error(err);
            } finally {
                this.makingOffer = false;
            }
        };


        this.pc!.oniceconnectionstatechange = () => {
            console.log("My Peer: ICE connection state change", this.pc.iceConnectionState);
            if (this.pc!.iceConnectionState === "failed") {
                this.pc!.restartIce();
            }
        };

        this.pc!.onicecandidate = (e) => {
            if (e.candidate === null) return;
            console.log("My Peer: ICE candidate", e.candidate);
            this.signaler.send({ candidate: e.candidate })
        };
    }
    ignoreOffer = false;

    playoutDelayHint = 0;
    changePlayOutDelay = () => {
        let recievers = this.pc!.getReceivers();
        if (this.playoutDelayHint < 0) return;
        for (const receiver of recievers) {
            (receiver as any).playoutDelayHint = this.playoutDelayHint;
        }
    }
    isSettingRemoteAnswerPending = false;

    onConnected?: () => void;
    initSignaling = async () => {
        this.signaler.onmessage = async ({ description, candidate, id, type }) => {
            console.log("My Peer: Signaling message", description, candidate, id);
            if (id !== this.target) {
                //return;
            }
            if (id === this.id) {

                //return;
            }
            if (type == "close") {
                this.cleanup();
                return;
            }
            let polite = this.caller;//id < this.id;
            console.log("Is Polite", polite);
            try {
                if (description) {
                    const readyForOffer =
                        !this.makingOffer &&
                        (this.pc!.signalingState == "stable" || this.isSettingRemoteAnswerPending);
                    const offerCollision = description.type == "offer" && !readyForOffer;

                    this.ignoreOffer = !polite && offerCollision;
                    if (this.ignoreOffer) {
                        return;
                    }
                    this.isSettingRemoteAnswerPending = description.type == "answer";
                    await this.pc!.setRemoteDescription(new RTCSessionDescription(description));
                    this.isSettingRemoteAnswerPending = false;
                    if (description.type === "offer") {
                        await this.pc!.setLocalDescription();
                        console.log("My Peer: Local description set", this.pc!.localDescription);

                        this.signaler.send({ description: this.pc!.localDescription });
                    } /*else if (description.type === "answer") {
                        //this.signaler.send({ description: this.pc.localDescription, id: this.id });
                        this.changePlayOutDelay();
                        //this.onConnection?.({ data: this.data, pc: this.pc });

                    }*/

                } else if (candidate) {
                    try {
                        await this.pc!.addIceCandidate(candidate);
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
        }

        this.pc.addEventListener('icegatheringstatechange', () => {
            console.log(
                `ICE gathering state changed: ${this.pc.iceGatheringState}`);
        });

        this.pc.addEventListener('connectionstatechange', () => {
            console.log(`Connection state change: ${this.pc.connectionState}`);
            if (this.pc.connectionState === "connected") {
                this.onConnected?.();
            }
            if (this.pc.connectionState === "disconnected") {
                this.cleanup();
            }
        });

        this.pc.addEventListener('signalingstatechange', () => {
            console.log(`Signaling state change: ${this.pc.signalingState}`);
        });


    };
    close = () => {
        console.log("My Peer: Close");
        this.pc.close();
        this.data?.close();
    }

}

class MyPeer {
    caller: FirestoreCallChannel;
    conns: MyPeerConnection[] = [];
    id: string;
    myname: string;
    myColor: string;
    onConnection?: (peer: MyPeerConnection) => void;
    onCall?: () => void;
    call = () => {
        this.caller.call(this.id)
    }
    close = () => {
        this.conns.forEach((conn) => conn.close());
        this.caller.close(this.id);
    }
    // answer = (caller: number) => {
    //     this.signaler.awnser(caller, this.id);
    // }
    //pc = new RTCPeerConnection(config);
    //data = this.pc.createDataChannel("data");
    constructor(caller: FirestoreCallChannel, id: string, myname: string, myColor: string) {
        console.log("My Peer: Created", id);
        this.caller = caller;
        this.id = id;
        this.myname = myname;
        this.myColor = myColor;
        //this.id = Math.floor(Math.random() * 1000000);
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
            //let connection = new MyPeerConnection(this.signaler, caller, this.id, false);
            //this.onConnection?.(connection);
        }
        this.caller.onConnection = (readDoc, writeDoc) => {
            console.log("My Peer: Connection recived", readDoc, writeDoc);
            let signal = new FirestoreSignalingChannel(this.caller.roomID, readDoc, writeDoc);
            let callee = readDoc.id == this.id;
            let target = callee ? readDoc.parent.parent!.id : readDoc.id;
            if (target == this.id) { }
            console.log("My Peer: IsCallee", callee);
            let connection = new MyPeerConnection(signal, target, this.id, callee, this.myname, this.myColor);
            this.conns.push(connection);
            //connection.onConnected = () => {
            connection.onPcReady = () => {
                this.onConnection?.(connection);
            }
            //}

        }
    }

}

export default MyPeer;
export { MyPeerConnection };