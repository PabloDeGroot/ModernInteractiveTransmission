<script lang="ts">
    interface DreamProps {
        stream: MediaStream;
        local: boolean;
    }
    let { stream }: DreamProps = $props();
    let videoSource: HTMLVideoElement;

    $effect(() => {
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
    <video bind:this={videoSource} autoplay></video>
</div>
