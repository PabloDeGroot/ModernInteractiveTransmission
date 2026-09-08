
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

    const config: RTCConfiguration = {
        iceServers: [
            //{ urls: "stun:stun.my-stun-server.tld" },
            { urls: "stun:stun.l.google.com:5349" },/*
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

    config.iceServers?.push(iceServers.iceServers);

    console.log("Ice Servers", config);
    return config;
};

export class MyPeerConnection {
    target: string;
    id: string;
    caller: boolean;
    //currentName: string;
    //currentColor: string;
    targetName: string;
    targetColor: string;
    signaler: FirestoreSignalingChannel;
    pc!: RTCPeerConnection;
    data!: RTCDataChannel;
    onPcReady?: () => void;

    constructor(signaler: FirestoreSignalingChannel, target: string, id: string, caller: boolean) {
        this.signaler = signaler;
        this.target = target;
        this.id = id;
        this.caller = caller;
        initializeIceServers().then((config) => {
            this.pc = new RTCPeerConnection(config);
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
            this.data.onclosing = () => {
                console.log("My Peer: Data channel closing");
                this.cleanup();
            }
            this.data.onerror = () => {
                console.log("My Peer: Data channel error");
                this.cleanup();
            }
            this.onPcReady?.();
        });
        console.log("My Peer: Created", this.id, this.target);

    }
    onclose: () => void;

    cleanup = () => {
        this.signaler.close();
        this.onclose?.();
        this.pc.close();
        this.data.close();

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


        this.pc.onnegotiationneeded = async () => {
            try {
                console.log("My Peer: Negotiation needed");
                this.makingOffer = true;
                await this.pc.setLocalDescription();
                console.log("My Peer: Local description set", this.pc.localDescription);
                this.signaler.send({ description: this.pc.localDescription, id: this.id });
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
            this.signaler.send({ candidate: e.candidate, id: this.id })
        };
    }
    ignoreOffer = false;

    playoutDelayHint = 0;
    changePlayOutDelay = () => {
        let recievers = this.pc.getReceivers();
        if (this.playoutDelayHint < 0) return;
        for (const receiver of recievers) {
            (receiver as any).playoutDelayHint = this.playoutDelayHint;
        }
    }
    isSettingRemoteAnswerPending = false;

    onConnected?: () => void;
    initSignaling = async () => {
        this.signaler.onmessage = async ({ description, candidate, id, color, name }) => {
            console.log("My Peer: Signaling message", description, candidate, id);

            this.targetName = name;
            this.targetColor = color;
            let polite = this.caller;//id < this.id;
            console.log("Is Polite", polite);
            try {
                if (description) {

                    // An offer may come in while we are busy processing SRD(answer).
                    // In this case, we will be in "stable" by the time the offer is processed
                    // so it is safe to chain it on our Operations Chain now.
                    const readyForOffer =
                        !this.makingOffer &&
                        (this.pc.signalingState == "stable" || this.isSettingRemoteAnswerPending);
                    const offerCollision = description.type == "offer" && !readyForOffer;

                    this.ignoreOffer = !polite && offerCollision;
                    if (this.ignoreOffer) {
                        return;
                    }
                    this.isSettingRemoteAnswerPending = description.type == "answer";
                    await this.pc.setRemoteDescription(description);  // SRD rolls back as needed
                    this.isSettingRemoteAnswerPending = false;

                    if (description.type === "offer") {
                        await this.pc.setLocalDescription();
                        console.log("My Peer: Local description set", this.pc.localDescription);

                        this.signaler.send({ description: this.pc.localDescription, id: this.id });
                    }
                    /*else if (description.type === "answer") {
                        //this.signaler.send({ description: this.pc.localDescription, id: this.id });
                        this.changePlayOutDelay();
                        //this.onConnection?.({ data: this.data, pc: this.pc });

                    }*/

                } else if (candidate) {
                    try {
                        //if (!this.pc.remoteDescription || !this.pc.remoteDescription.type) {
                        await this.pc.addIceCandidate(candidate);
                        //}
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

        this.pc.addEventListener('iceconnectionstatechange ', () => {
            console.log(
                `ICE connection state change: ${this.pc.iceConnectionState}`);
        });
    };
    close = () => {
        this.pc.close();
        this.signaler.close();
        this.data.send("close");
        this.data.close();
    }

}

class MyPeer {
    caller: FirestoreCallChannel;
    conns: MyPeerConnection[] = [];
    id: string;
    onConnection?: (peer: MyPeerConnection) => void;
    onCall?: () => void;
    call = () => {
        //this.caller.call(this.id)
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
    constructor(caller: FirestoreCallChannel, id: string) {
        this.caller = caller;
        this.id = id;
        //this.id = Math.floor(Math.random() * 1000000);
        //this.initCalls();

    }
    initCalls = () => {
        this.caller.onCall = (caller) => {
            console.log("My Peer: Call recived", caller);
            if (caller == this.id) {
                console.log("My Peer: Call recived from self", caller);
                return;
            }
            //this.caller.awnser(caller, this.id); the desktop client cant answer the callss
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
            let connection = new MyPeerConnection(signal, target, this.id, callee);
            this.conns.push(connection);
            connection.onPcReady = () => {
                this.onConnection?.(connection);
            }
            /*
            connection.onConnected = () => {

            }*/

        }
    }

}

export default MyPeer;