<script lang="ts">
    import type { UserRoom } from "../../types/firebase/room";

    interface DreamProps {
        stream: MediaStream;
        local: boolean;
        user: UserRoom;
        interarctive: boolean;
    }
    let { stream }: DreamProps = $props();
    let muted = $state(!navigator.userActivation.isActive);
    
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
    let toggleMute = () => {
        muted = !muted;
    };
</script>

<div>
    <!-- svelte-ignore a11y_media_has_caption -->
    <video  bind:this={videoSource} autoplay></video>
    <button onclick={toggleMute}>{muted ? "Unmute" : "Mute"}</button>
</div>
