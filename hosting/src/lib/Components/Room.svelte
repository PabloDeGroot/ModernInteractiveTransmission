<script lang="ts">
    import type { User } from "firebase/auth";
    import type { UserRoom } from "../../types/firebase/room";
    //import type Peer from "peerjs";
    import GetRoom, {
        AddUser,
        CreateRoom,
        RemoveUser,
    } from "$lib/firestrore/Room";
    import { deleteDoc, setDoc } from "firebase/firestore";
    //import { BaseConnectionErrorType } from "../../../node_modules/peerjs";
    import DreamConnection from "./DreamConnection.svelte";
    import type { Call } from "../../types/Call";

    import MyPeer, { MyPeerConnection } from "$lib/WebRTC/MyPeer";
    import { FirestoreSignalingChannel } from "$lib/WebRTC/FirestoreSignalingChannel";
    import { FirestoreCallChannel } from "$lib/WebRTC/FirestoreCallChannel";
    import Dream from "./Dream.svelte";
    import { auth } from "$lib/firebase";
    import { slide } from "svelte/transition";

    interface RoomProps {
        firebaseUser: User;
        roomId: string;
        color?: string;
    }
    var uid = auth.currentUser?.uid;

    var name = auth.currentUser?.displayName;
    /*
    if call is closed and local stream is not null redial
    when started to stream call all users that have not been called
    users that have been called will be sent a message to redial

    
    
    */

    let { firebaseUser, roomId, color = "red" }: RoomProps = $props();
    let users = $state<UserRoom[]>([]);
    let calls = $state<Call[]>([]);
    let connections = $state<MyPeerConnection[]>([]);
    let localStream = $state<MediaStream | null>(null);

    //let remoteStreams = $state<MediaStream[]>([]);
    let components = [] as DreamConnection[];

    let signal = new FirestoreCallChannel(roomId);
    let test = new MyPeer(signal, uid!, name!, color);
    test.onConnection = (conn) => {
        connections.push(conn);
        console.log("Room: Connection", conn);
        conn.data.onmessage = (data) => {
            console.log("Room: Data received", data);
        };
        conn.data.onopen = () => {
            conn.data.send("Hello from Peer: " + conn.id);
        };
        conn.onClose = () => {
            console.log("Room: Connection closed", conn);
            let index = connections.findIndex((c) => c === conn);
            if (index === -1) return;
            connections.splice(index, 1);
        };

        // conn.pc.ontrack = (e) => {
        //     console.log("Room: Track received", e);
        //     //remoteStreams.push(e.streams[0]);
        //     conn.changePlayOutDelay();
        // };
        // if (localStream != null) { // todo pass to DreamConnection
        //     conn.changePlayOutDelay();
        //     localStream.getTracks().forEach((track) => {
        //         conn.pc.addTrack(track, localStream!);
        //     });
        // }
    };
    console.log("Room: Peer", test.id);

    // FIRESTORE
    const user = {
        peerId: test.id as unknown as string,
        testId: test.id,
        status: "idle",
        username: firebaseUser.displayName,
        profilePic: firebaseUser.photoURL,
    } as UserRoom;
    const roomDoc = GetRoom(roomId);
    roomDoc.subscribe((doc) => {
        console.log("Room: Document data:", doc);
        if (!doc) return;

        if (
            !doc.users ||
            doc.users.find((u) => u.peerId === user.peerId) == null
        ) {
            AddUser(roomDoc.ref, user);
        }
        if (doc.users) {
            users = doc.users;
        }
        //users = doc.users;
        console.log("Room: Document data:", doc.id);
    });
    /// PEERJS
    // peer.on("call", (call) => {
    //     if (call.peer == peer.id) return;
    //     console.log("Room: Call received", call);
    //     if (calls.find((c) => c.call.peer === call.peer)) {
    //         call.emitError(
    //             BaseConnectionErrorType.NegotiationFailed,
    //             "Call already exists",
    //         );
    //         return;
    //     }
    //     let connection = null;
    //     if (call.metadata && call.metadata.interactive === true) {
    //         connection = peer.connect(call.peer);
    //     }
    //     if (localStream) {
    //         console.log("Room: Answering Call with Stream");
    //         call.answer(localStream);
    //     } else {
    //         console.log("Room: Answering Call without Stream");
    //         call.answer();
    //     }
    //     let user = users.find((u) => u.peerId === call.peer) as UserRoom;
    //     calls.push({ call, user, connection });
    // });

    // let removeCall = (call: Call, redial: boolean) => {
    //     console.log("Room: Removing Call", $state.snapshot(call));
    //     let index = calls.findIndex((c) => c.call === call.call);
    //     if (index === -1) return;
    //     calls.splice(index, 1);

    //     call.call.close();

    //     console.log("Room: Is Open", call.call.open);
    //     console.log("Room: Redial", redial);
    //     console.log("Local Stream", localStream);
    //     if (localStream != null && redial) {
    //         redialCall(call);
    //     }
    //     //call.call.close();
    // };
    // let redialCall = (call: Call) => {
    //     console.log("Room: Redialing Call", call);
    //     callUser(call.call.peer);
    // };
    let callUsers = (media: MediaStream) => {
        localStream = media;

        test.call();
    };
    // let callUser = (peerid: string) => {
    //     if (peer == null || localStream == null) return;
    //     let call = calls.find((c) => c.call.peer === peerid)?.call;

    //     if (call != null) {
    //         console.log("Room: Call already exists");
    //         call.dataChannel.send("Stream Started");
    //         return;
    //     }

    //     call = peer.call(peerid, localStream);
    //     call.on("iceStateChanged", (state) => {
    //         console.log("Room: ICE State Changed", state);
    //         if (state == "disconnected") {
    //             console.log("Room: ICE Disconnected");
    //             removeCall({ call, user: null }, false);
    //         }
    //     });
    //     let user = users.find((u) => u.peerId === peerid) as UserRoom;
    //     calls.push({ call, user });
    // };
    // FIREBASE CLEANUP
    window.onbeforeunload = () => {
        test.close();
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
                    //call.call.dataChannel,
                );

                try {
                    //call.call.dataChannel.send("Stream Ended");
                } catch (e) {
                    console.log("Room: Error sending message", e);
                }
            });
        };
    });
    window.onkeydown = (e) => {
        console.log("Room: Key pressed", e);
        if (components.length == 0) return;
        components[0].KeyEvent(e, true);
    };
    window.onkeyup = (e) => {
        console.log("Room: Key released", e);
        if (components.length == 0) return;
        components[0].KeyEvent(e, false);
    };
</script>

<!-- 
{#each calls as call, i}
    <p>{call.call.peer}</p>
    <DreamConnection
        {call}
        remove={(redial) => removeCall(call, redial)}
        bind:this={components[i]}
    />
{/each} -->
<div class="flex flex-col items-center justify-center w-full h-full">
    <div class="flex-1 h-full">
        <div class="main-dream h-full">
            {#if connections.length == 0}
                <p>
                    No one is sharing, click the button bellow to start sharing
                    your screen!
                </p>
            {:else}
                <DreamConnection call={connections[0]} {localStream} />
            {/if}
        </div>
        {#if connections.length > 1}
            <div class="other-dreams">
                {#each connections.slice(1) as stream}
                    <p>dsada</p>
                    <button
                        onclick={() => {
                            console.log("Room: Clicked");
                            connections = [stream, ...connections.slice(1)];
                        }}
                    >
                        <DreamConnection call={stream} {localStream} />
                    </button>
                {/each}
            </div>
        {/if}
    </div>
    <div class="flex items-center justify-center w-full mb-3 absolute bottom-0">
        <button
            class="btn variant-filled-secondary mr-4"
            onclick={() => {
                navigator.mediaDevices
                    .getDisplayMedia({ video: true, audio: true })
                    .then((media) => {
                        callUsers(media);
                    });
            }}>Share</button
        >
        <button class="btn variant-filled-secondary">Share with App</button>
    </div>
</div>
