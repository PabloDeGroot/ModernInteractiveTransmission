<script lang="ts">
    import Dream from "./Dream.svelte";
    import type { Call } from "../../types/Call";
    interface DreamConnectionProps {
        call: Call;
        remove: (redial: boolean) => void;
    }
    let { call, remove }: DreamConnectionProps = $props();
    let media = $state<MediaStream | null>(null);
    let readiling = false;
    $effect(() => {
        call.call.on("stream", (remoteStream) => {
            console.log("DreamConnection: Stream received", remoteStream);
            media = remoteStream;
        });
        call.call.on("willCloseOnRemote", () => {
            console.log("DreamConnection: Will close on remote");
            call.call.dataChannel.onmessage = (e) => {
                console.log("DreamConnection: Message received", e.data);
                if (e.data == "Stream Ended") {
                    console.log("DreamConnection: Closing call");
                    remove(true);
                    readiling = true;
                    media = null;
                }
                if (e.data == "Stream Started") {
                    console.log("DreamConnection: Redialing");
                    readiling = true;
                    remove(true);
                }
            };
            call.call.dataChannel.onclose = (e) => {
                if (readiling) return;

                console.log("DreamConnection: Data channel closed", e);
                remove(false);
            };
        });
    });
    let sendData = (data: any) => {
        if (call.connection == null) return;
        call.connection.send(data);
    };
    let OnClick = (e: MouseEvent) => {
        let btn = "left";
        if (e.button == 1) btn = "middle";
        if (e.button == 2) btn = "right";
        let data = {
            type: "BasicInput",
            device: "mouse",
            action: "click",
            button: btn,
            x: e.clientX,
            y: e.clientY,
        };
        sendData(data);
        console.log("DreamConnection: Clicked");
    };
    let MouseMove = (e: MouseEvent) => {
        let data = {
            type: "BasicInput",
            device: "mouse",
            action: "move",
            x: e.clientX,
            y: e.clientY,
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
            x: e.clientX,
            y: e.clientY,
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
            key: e.key,
        };
        sendData(data);
        console.log("DreamConnection: Key pressed");
    }
    call.call.on("close", () => {
        if (call.connection == null) return;

        console.log("DreamConnection: Call closed");
        //remove(false);
    });
</script>

{#if media != null}
    <Dream
        interarctive={false}
        user={call.user!}
        stream={media}
        local={false}
    />
{/if}
