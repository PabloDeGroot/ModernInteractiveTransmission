
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
const config: RTCConfiguration = {
    iceServers: [
        { urls: "stun:stun.l.google.com:19302" },
        { urls: "stun:stun.l.google.com:5349" },
        { urls: "stun:stun1.l.google.com:3478" },
        { urls: "stun:stun1.l.google.com:5349" },
        { urls: "stun:stun2.l.google.com:19302" },
        { urls: "stun:stun2.l.google.com:5349" },
        { urls: "stun:stun3.l.google.com:3478" },
        { urls: "stun:stun3.l.google.com:5349" },
        { urls: "stun:stun4.l.google.com:19302" },
        { urls: "stun:stun4.l.google.com:5349" }
    ],
};

class MyPeerConnection {
    target: string;
    id: string;
    caller: boolean;
    myname: string;
    myColor: string;
    targetName?: string;
    targetColor?: string;
    signaler: FirestoreSignalingChannel;
    pc = new RTCPeerConnection(config);
    data = this.pc.createDataChannel("data", { negotiated: true, id: 0 });
    constructor(signaler: FirestoreSignalingChannel, target: string, id: string, caller: boolean, myname: string, myColor: string) {
        this.signaler = signaler;
        this.target = target;
        this.id = id;
        this.caller = caller;
        this.myname = myname;
        this.myColor = myColor;
        this.initPeerConnection();
        this.initSignaling();
        this.registerListeners();
        this.data.onclose = () => {
            this.cleanup();
        }
        console.log("My Peer: Created", this.id, this.target);
    }
    onClose?: () => void;

    cleanup = () => {
        this.signaler.close();
        this.onClose?.();
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
            this.signaler.send({ candidate: e.candidate, id: this.id, color: this.myColor, name: this.myname })
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
    onConnected?: () => void;
    initSignaling = async () => {
        this.signaler.onmessage = async ({ description, candidate, id }) => {
            console.log("My Peer: Signaling message", description, candidate, id);
            if (id !== this.target) {
                return;
            }
            if (id === this.id) {
                return;
            }
            let polite = this.caller;//id < this.id;
            console.log("Is Polite", polite);
            try {
                if (description) {
                    const offerCollision =
                        description.type === "offer" &&
                        (this.makingOffer || this.pc.signalingState !== "stable");
                    if(this.pc.connectionState === "connected"){
                        return;
                    }

                    this.ignoreOffer = !polite && offerCollision;
                    if (this.ignoreOffer) {
                        return;
                    }

                    await this.pc.setRemoteDescription(description);
                    if (description.type === "offer") {
                        await this.pc.setLocalDescription();
                        console.log("My Peer: Local description set", this.pc.localDescription);

                        this.signaler.send({ description: this.pc.localDescription, id: this.id });
                    } else if (description.type === "answer") {
                        //this.signaler.send({ description: this.pc.localDescription, id: this.id });
                        this.changePlayOutDelay();
                        //this.onConnection?.({ data: this.data, pc: this.pc });

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
        this.data.close();
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
            this.onConnection?.(connection);

            //}

        }
    }

}

export default MyPeer;
export { MyPeerConnection };