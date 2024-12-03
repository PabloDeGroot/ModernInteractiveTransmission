<script lang="ts">
    import type { MediaConnection, Peer } from "peerjs";
    import Dream from "./Dream.svelte";
    import type { Call } from "../../types/Call";
    interface DreamConnectionProps {
        call: Call;
        remove: (redial: boolean) => void;
        redial: () => void;
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

    call.call.on("close", () => {
        console.log("DreamConnection: Call closed");
        //remove(false);
    });
</script>

{#if media != null}
    <Dream interarctive={false} user={call.user!} stream={media} local={false} />
{/if}
