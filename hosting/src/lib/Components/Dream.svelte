<script lang="ts">
    import type { UserRoom } from "../../types/firebase/room";

    interface DreamProps {
        stream: MediaStream;
        local: boolean;
        user: UserRoom;
        interarctive: boolean;
    }
    let { stream }: DreamProps = $props();
    let muted = $state(true);
    
    let videoSource: HTMLVideoElement;
    
    $effect(() => {
        videoSource.muted = muted;
        videoSource.srcObject = stream;
        try{
            videoSource.play();
        }
        catch(e){
            console.log(e);
        }
    });
</script>

<div>
    <!-- svelte-ignore a11y_media_has_caption -->
    <video  bind:this={videoSource} autoplay></video>
</div>
