<script lang="ts">
    import { page } from "$app/stores";
    import { auth } from "$lib/firebase";
    import { SignedIn, SignedOut, userStore } from "sveltefire";
    import { Peer } from "peerjs";
    import GetPeer from "$lib/Peer";
    import Room from "$lib/Components/Room.svelte";

    let peer = $state<Peer | null>(null);
    GetPeer().then((p) => {
        peer = p;
    });
</script>

<h1>{$page.params.slug}</h1>

{#if peer == null}
    <p>Loading...</p>
{:else}
    <SignedIn let:user>
        <Room firebaseUser={user} roomId={$page.params.slug} {peer} />
    </SignedIn>
    <SignedOut>
        <script>
            window.location.href = "/";
        </script>
    </SignedOut>
{/if}
