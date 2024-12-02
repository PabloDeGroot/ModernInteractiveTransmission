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
    interface RoomProps {
        firebaseUser: User;
        roomId: string;
        peer: Peer;
    }
    let { firebaseUser, roomId, peer }: RoomProps = $props();
    let users = $state<UserRoom[]>([]);
    //let user = $state<UserRoom | null>(null);
    let media = $state<MediaStream[]>([]);
    let callUsers: (media: MediaStream) => void;

    // FIRESTORE
    const user = {
        peerId: peer.id,
        status: "idle",
        username: firebaseUser.displayName,
        profilePic: firebaseUser.photoURL,
    } as UserRoom;
    const roomDoc = GetRoom(roomId);
    roomDoc.subscribe((doc) => {
        console.log("Document data:", doc);
        if (doc) {
            if (doc.users.find((u) => u.peerId === user.peerId) == null) {
                AddUser(roomDoc.ref, user);
            }
            users = doc.users;
            console.log("Document data:", doc.id);
        } else {
            //create room
            CreateRoom(roomDoc.ref).then(() => {
                AddUser(roomDoc.ref, user);
            });
        }
    });
    /// PEERJS
    peer.on("call", (call) => {
        console.log("Call received");
        call.answer();
        call.on("stream", (remoteStream) => {
            media.push(remoteStream);
        });
        call.on("close", () => {
            console.log("Call closed");
            media = media.filter((s) => s !== call.remoteStream);
        });
        
    });

    peer.on("connection", (conn) => {
        conn.on("data", (data) => {
            console.log("Received", data);
        });
    });
    // CALL USERS
    callUsers = (media: MediaStream) => {
        let calls =[];
        users.forEach((u) => {
            if (peer == null || user == null) return;
            if (u.peerId !== user.peerId) {
                console.log("Calling", u.peerId);
                const call = peer.call(u.peerId, media);
                call.on("stream", (remoteStream) => {
                    // Show stream in some video/canvas element.
                });
                calls.push(call);
            }
        });
        media.getVideoTracks()[0].onended = () => {
            console.log("Stream ended");
            calls.forEach(c => c.close());
            
           
        };
    };

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
        media.forEach(stream => {
            stream.getVideoTracks().forEach(x=>x.onended = () => {
                console.log("Stream ended");
                media = media.filter(s => s !== stream);
            });
            stream.onremovetrack = () => {
                console.log("Stream removed");
                media = media.filter(s => s !== stream);
            }
        });
    });
</script>

{#if media}
    {#each media as stream}
        <Dream {stream} local={false} />
    {/each}
{/if}

<button onclick={() => {
    if (peer == null) return;
    navigator.mediaDevices
        .getDisplayMedia({ video: true, audio: true })
        .then((media) => {
            callUsers(media);
        });


}}>Call Users</button>