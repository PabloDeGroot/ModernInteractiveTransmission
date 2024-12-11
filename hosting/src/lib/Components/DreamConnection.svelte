<script lang="ts">
    import Dream from "./Dream.svelte";
    import type { Call } from "../../types/Call";
    import type { MyPeerConnection } from "$lib/WebRTC/MyPeer";
    import Toolbar from "./Toolbar/Toolbar.svelte";
    interface DreamConnectionProps {
        call: MyPeerConnection;
        localStream?: MediaStream | null;
        remove?: (redial: boolean) => void;
    }
    let {
        call,
        localStream,
        remove = $bindable(),
    }: DreamConnectionProps = $props();
    let media = $state<MediaStream | null>(null);
    call.pc.ontrack = (e) => {
        console.log("Room: Track received", e);
        media = e.streams[0];
    };
    $effect(() => {
        if (localStream != null) {
            console.log("Room: Adding tracks to connection");

            localStream.getTracks().forEach((track) => {
                call.pc.addTrack(track, localStream!);
            });
        }
    });

    let sendData = (data: any) => {
        if (call.data == null) return;
        let username = call.myname;
        let color = call.myColor;
        data = { ...data, username, color };
        if (call.data.readyState != "open") {
            call.data.onopen = () => {
                call.data!.send(JSON.stringify(data));
            };
        } else {
            call.data.send(JSON.stringify(data));
        }
    };
    let selectedTool = $state<"click" | "rubber" | "draw">("click");
    // $effect(() => {
    //     call.call.on("stream", (remoteStream) => {
    //         console.log("DreamConnection: Stream received", remoteStream);
    //         media = remoteStream;
    //     });
    //     call.call.on("willCloseOnRemote", () => {
    //         console.log("DreamConnection: Will close on remote");
    //         call.call.dataChannel.onmessage = (e) => {
    //             console.log("DreamConnection: Message received", e.data);
    //             if (e.data == "Stream Ended") {
    //                 console.log("DreamConnection: Closing call");
    //                 remove(true);
    //                 readiling = true;
    //                 media = null;
    //             }
    //             if (e.data == "Stream Started") {
    //                 console.log("DreamConnection: Redialing");
    //                 readiling = true;
    //                 remove(true);
    //             }
    //         };
    //         call.call.dataChannel.onclose = (e) => {
    //             if (readiling) return;

    //             console.log("DreamConnection: Data channel closed", e);
    //             remove(false);
    //         };
    //     });
    // });
    // let sendData = (data: any) => {
    //     if (call.connection == null) return;
    //     call.connection.send(data);
    // };
    let OnClick = (e: MouseEvent) => {
        let btn = "left";
        if (e.button == 1) btn = "middle";
        if (e.button == 2) btn = "right";
        let data = {
            type: "BasicInput",
            device: "mouse",
            action: "click",
            button: btn,
            x: e.offsetX / (e.target as HTMLElement).clientWidth,
            y: e.offsetY / (e.target as HTMLElement).clientHeight,
        };
        sendData(data);
        console.log("DreamConnection: Clicked");
    };
    let MouseDown = (e: MouseEvent) => {
        let data = {
            type: "BasicInput",
            device: "mouse",
            action: "click",
            button: e.button == 1 ? "middle" : e.button == 2 ? "right" : "left",
            pressed: true,
            x: e.offsetX / (e.target as HTMLElement).clientWidth,
            y: e.offsetY / (e.target as HTMLElement).clientHeight,
        };
        sendData(data);
        console.log("DreamConnection: Mouse down");
    };
    let MouseUp = (e: MouseEvent) => {
        let data = {
            type: "BasicInput",
            device: "mouse",
            action: "click",
            button: e.button == 1 ? "middle" : e.button == 2 ? "right" : "left",
            pressed: false,
            x: e.offsetX / (e.target as HTMLElement).clientWidth,
            y: e.offsetY / (e.target as HTMLElement).clientHeight,
        };
        sendData(data);
        console.log("DreamConnection: Mouse up");
    };

    let MouseMove = (e: MouseEvent) => {
        //let {width, height} = (e.target as HTMLElement).getBoundingClientRect();
        let data = {
            type: "BasicInput",
            device: "mouse",
            action: "move",
            selectedTool: selectedTool,
            //action: "ck",
            erase: false,
            x: e.offsetX / (e.target as HTMLElement).clientWidth,
            y: e.offsetY / (e.target as HTMLElement).clientHeight,
        };

        sendData(data);
        console.log("DreamConnection: Mouse moved");
    };
    let Scroll = (e: WheelEvent) => {
        let direction = e.deltaY > 0 ? "down" : "up";
        let amount = Math.abs(e.deltaY);
        let data = {
            type: "BasicInput",
            device: "mouse",
            action: "scroll",
            x: e.offsetX / (e.target as HTMLElement).clientWidth,
            y: e.offsetY / (e.target as HTMLElement).clientHeight,
            direction: direction,
            amount: amount,
        };
        sendData(data);
        console.log("DreamConnection: Scrolled");
    };
    export function KeyEvent(e: KeyboardEvent, down: boolean) {
        let data = {
            type: "BasicInput",
            device: "keyboard",
            action: down ? "press" : "release",
            key: e.code,
        };
        sendData(data);
        console.log("DreamConnection: Key pressed");
    }
    // call.call.on("close", () => {
    //     if (call.connection == null) return;

    //     console.log("DreamConnection: Call closed");
    //     //remove(false);
    // });
</script>

{#if media != null}
    <Toolbar bind:selectedTool={selectedTool} />
    <Dream
        interarctive={false}
        stream={media}
        local={false}
        mouseMove={MouseMove}
        mouseDown={MouseDown}
        mouseUp={MouseUp}
        mouseWheel={Scroll}
    />
{/if}
