<script lang="ts">
    import type { UserRoom } from "../../types/firebase/room";

    interface DreamProps {
        stream: MediaStream;
        local: boolean;
        user?: UserRoom;
        interarctive?: boolean;
        mouseMove?: (e: MouseEvent) => void | undefined;
        mouseDown?: (e: MouseEvent) => void | undefined;
        mouseUp?: (e: MouseEvent) => void | undefined;
        mouseWheel?: (e: WheelEvent) => void | undefined;
    }
    let {
        stream,
        mouseMove = $bindable(),
        mouseDown = $bindable(),
        mouseUp = $bindable(),
        mouseWheel = $bindable(),
    }: DreamProps = $props();
    let muted = $state(!navigator.userActivation.isActive);

    let videoSource: HTMLVideoElement;

    $effect(() => {
        videoSource.muted = muted;
        videoSource.srcObject = stream;

        try {
            videoSource.play();
        } catch (e) {
            console.log(e);
        }
    });
    let toggleMute = () => {
        muted = !muted;
    };
</script>

<div>
    <!-- svelte-ignore a11y_media_has_caption -->
    <video style="cursor: none;" onmousemove={mouseMove} onmousedown={mouseDown} onmouseup={mouseUp} onwheel={mouseWheel} bind:this={videoSource} autoplay></video>
    <button onclick={toggleMute}>{muted ? "Unmute" : "Mute"}</button>
</div>
