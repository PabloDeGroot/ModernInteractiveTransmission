<script lang="ts">
    import { page } from "$app/stores";
    import { auth } from "$lib/firebase";
    import { SignedIn, SignedOut, userStore } from "sveltefire";
    import Room from "$lib/Components/Room.svelte";
    import { ProgressRadial } from "@skeletonlabs/skeleton";
    import EnsureLogin from "$lib/Components/EnsureLogin.svelte";
    let ready = $state(false);
    auth.authStateReady().then(() => {
        ready = true;
    });
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    let color = getRandomColor();
</script>

{#if !ready}
    <ProgressRadial />
{:else}
    <SignedIn let:user>
        <div
            class="card variant-ghost-primary -backdrop-hue-rotate-90 backdrop-blur-md flex flex-col items-center p-2 room m-2"
        >
            <div class="card-content h-full flex-1 flex flex-col items-center">
                <Room firebaseUser={user} roomId={$page.params.slug} {color} />
            </div>
        </div>
    </SignedIn>
    <EnsureLogin></EnsureLogin>
{/if}

<style>
    .room {
        height: 95%;
        min-width: 50%;
    }
</style>
