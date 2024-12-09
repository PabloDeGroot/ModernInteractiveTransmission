import {Peer} from "peerjs";

export default function createPeer(): Promise<Peer> {
    return new Promise((resolve, reject) => {
        const peer = new Peer();
        peer.on("open", () => resolve(peer));
        peer.on("error", reject);
    });
}