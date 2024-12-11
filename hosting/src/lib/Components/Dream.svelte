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

    let videoSource = $state<HTMLVideoElement|null>(null);
    let done = $state(false);

    $effect(() => {
        if(videoSource == null) return;
        if(done) return;
        done = true;
        //videoSource.muted = muted;
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

<div class="rounded h-full overflow-hidden flex items-center">
    <!-- svelte-ignore a11y_media_has_caption -->
    <video
        class="max-h-full h-fit"
        onmousemove={mouseMove}
        onmousedown={mouseDown}
        onmouseup={mouseUp}
        onwheel={mouseWheel}
        bind:this={videoSource}
        autoplay
    ></video>
    {#if false}
        <button onclick={toggleMute}>{muted ? "Unmute" : "Mute"}</button>
        <button
            onclick={() => {
                //videoSource.parentElement!.requestFullscreen();
            }}
            class="absolute top-0 right-0"
        >
            Fullscreen
        </button>
    {/if}
</div>
