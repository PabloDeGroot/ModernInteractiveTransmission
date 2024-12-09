<script lang="ts">
    import { page } from "$app/stores";
    import { auth } from "$lib/firebase";
    import { SignedIn, SignedOut, userStore } from "sveltefire";
    import Room from "$lib/Components/Room.svelte";
    let ready = $state(false);
    auth.authStateReady().then(() => {
        ready = true;
    });
</script>

{#if !ready}
    <p>Loading...</p>
{:else}
    <SignedIn let:user>
        <div class="card variant-ghost-primary -backdrop-hue-rotate-90 backdrop-blur-md flex flex-col items-center room ">
            <Room firebaseUser={user} roomId={$page.params.slug} />
        </div>
    </SignedIn>
    <SignedOut>
        <script>
            window.location.href = "/";
        </script>
    </SignedOut>
{/if}

<style>
    .room {
        height: 95%;
        width: 98%;
    }
</style>