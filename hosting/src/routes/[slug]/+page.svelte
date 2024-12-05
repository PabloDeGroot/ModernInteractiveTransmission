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
    <h1>{$page.params.slug}</h1>

    <SignedIn let:user>
        <Room firebaseUser={user} roomId={$page.params.slug} />
    </SignedIn>
    <SignedOut>
       
        <script>
            window.location.href = "/";
        </script>
    </SignedOut>
{/if}
