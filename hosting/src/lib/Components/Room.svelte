<script lang="ts">
    import Dream from "$lib/Components/Dream.svelte";
    import GetPeer from "$lib/Peer";
    import type { User } from "firebase/auth";
    import type { UserRoom } from "../../types/firebase/room";
    import type Peer from "peerjs";
    import GetRoom, {
        AddUser,
        CreateRoom,
        RemoveUser,
    } from "$lib/firestrore/Room";
    import { deleteDoc, setDoc } from "firebase/firestore";
    import { BaseConnectionErrorType, type MediaConnection } from "peerjs";
    import DreamConnection from "./DreamConnection.svelte";
    import type { Call } from "../../types/Call";
    interface RoomProps {
        firebaseUser: User;
        roomId: string;
        peer: Peer;
    }

    /*
    if call is closed and local stream is not null redial
    when started to stream call all users that have not been called
    users that have been called will be sent a message to redial

    
    
    */

    let { firebaseUser, roomId, peer }: RoomProps = $props();
    let users = $state<UserRoom[]>([]);
    let calls = $state<Call[]>([]);
    let localStream = $state<MediaStream | null>(null);

    // FIRESTORE
    const user = {
        peerId: peer.id,
        status: "idle",
        username: firebaseUser.displayName,
        profilePic: firebaseUser.photoURL,
    } as UserRoom;
    const roomDoc = GetRoom(roomId);
    roomDoc.subscribe((doc) => {
        console.log("Room: Document data:", doc);
        if (doc) {
            if (doc.users.find((u) => u.peerId === user.peerId) == null) {
                AddUser(roomDoc.ref, user);
            }
            users = doc.users;
            console.log("Room: Document data:", doc.id);
        } else {
            //create room
            CreateRoom(roomDoc.ref).then(() => {
                AddUser(roomDoc.ref, user);
            });
        }
    });
    /// PEERJS
    peer.on("call", (call) => {
        if (call.peer == peer.id) return;
        console.log("Room: Call received", call);
        if (calls.find((c) => c.call.peer === call.peer)) {
            call.emitError(
                BaseConnectionErrorType.NegotiationFailed,
                "Call already exists",
            );
            return;
        }

        if (localStream) {
            console.log("Room: Answering Call with Stream");
            call.answer(localStream);
        } else {
            console.log("Room: Answering Call without Stream");
            call.answer();
        }
        let user = users.find((u) => u.peerId === call.peer) as UserRoom;
        calls.push({ call, user });
    });

    let removeCall = (call: Call, redial: boolean) => {
        console.log("Room: Removing Call", $state.snapshot(call));
        let index = calls.findIndex((c) => c.call === call.call);
        if (index === -1) return;
        calls.splice(index, 1);

        call.call.close();

        console.log("Room: Is Open", call.call.open);
        console.log("Room: Redial", redial);
        console.log("Local Stream", localStream);
        if (localStream != null && redial) {
            redialCall(call);
        }
        //call.call.close();
    };
    let redialCall = (call: Call) => {
        console.log("Room: Redialing Call", call);
        callUser(call.call.peer);
    };
    let callUsers = (media: MediaStream) => {
        localStream = media;
        users.forEach((u) => {
            if (u.peerId === user.peerId) return;
            callUser(u.peerId);
        });
    };
    let callUser = (peerid: string) => {
        if (peer == null || localStream == null) return;
        let call = calls.find((c) => c.call.peer === peerid)?.call;

        if (call != null) {
            console.log("Room: Call already exists");
            call.dataChannel.send("Stream Started");
            return;
        }

        call = peer.call(peerid, localStream);
        call.on("iceStateChanged", (state) => {
            console.log("Room: ICE State Changed", state);
            if (state == "disconnected") {
                console.log("Room: ICE Disconnected");
                removeCall({ call, user: null }, false);
            }
        });
        let user = users.find((u) => u.peerId === peerid) as UserRoom;
        calls.push({ call, user });
    };
    // FIREBASE CLEANUP
    window.onbeforeunload = () => {
        if (user == null) return;
        if (roomDoc.ref == null) return;
        if (users.length === 1) {
            deleteDoc(roomDoc.ref);
        } else {
            RemoveUser(roomDoc.ref, user);
        }
    };
    $effect(() => {
        if (localStream == null) return;
        localStream.getVideoTracks()[0].onended = () => {
            localStream = null;
            console.log("Room: Stream ended");
            console.log("Room: Removing Tracks...");
            calls.forEach((call) => {
                //localStream?.removeTrack(localStream!.getVideoTracks()[0]);
                console.log(
                    "Room: Sending Stream Ended Message",
                    call.call.dataChannel,
                );

                try {
                    call.call.dataChannel.send("Stream Ended");
                } catch (e) {
                    console.log("Room: Error sending message", e);
                }
            });
        };
    });
</script>

{#each calls as call}
    <p>{call.call.peer}</p>
    <DreamConnection
        {call}
        remove={(redial) => removeCall(call, redial)}
        redial={() => redialCall(call)}
    />
{/each}

<button
    onclick={() => {
        if (peer == null) return;
        navigator.mediaDevices
            .getDisplayMedia({ video: true, audio: true })
            .then((media) => {
                callUsers(media);
            });
    }}>Share</button
>
<button>Share with App</button>
