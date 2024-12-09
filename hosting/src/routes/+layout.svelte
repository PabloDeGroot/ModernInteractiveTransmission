<script lang="ts">
    import "../app.css";
    import { Gradient } from "../lib/Gradient";
    import { fade, scale } from "svelte/transition";
    import { auth, firestore } from "$lib/firebase";

    import { FirebaseApp, SignedIn } from "sveltefire";
    import { AppShell, Avatar, LightSwitch } from "@skeletonlabs/skeleton";
    import { afterNavigate } from "$app/navigation";
    import { cubicInOut, cubicOut } from "svelte/easing";
    let { children } = $props();

    // Create your instance
    const gradient = new Gradient() as any;
    gradient.colors = ["0x53DF83", "0x47D2E9", "0x5E7CE2", "0xFF4F7D"].map(
        (c) => c.toLowerCase(),
    );
    let ready = $state(false);
    auth.authStateReady().then(() => {
        ready = true;
    });
    let minimize = $state(false);
    afterNavigate((e) => {
        console.log("navigated", e);
        minimize = e.to?.params?.slug != null;
        // gradient.initGradient("#gradient-canvas");
    });

    // Call `initGradient` with the selector to your canvas
    //gradient.initGradient("#gradient-canvas");
    let canvas = $state<HTMLCanvasElement>();
    $effect(() => {
        gradient.initGradient("#gradient-canvas");
    });
    let headerClass = $state("p-4");
    $effect(() => {
        if (minimize) {
            headerClass = "p-2";
        } else {
            headerClass = "p-4";
        }
    });
</script>

<FirebaseApp {auth} {firestore}>
    <div class="flex flex-col items-center justify-center w-full h-screen">
        <SignedIn let:auth let:signOut let:user>
            <header
                class="transition-all flex items-center {headerClass} w-full bg-surface-700 bg-opacity-70 drop-shadow-lg backdrop-blur-md"
            >
                {#if ready}
                    <div class="flex items-center justify-between flex-1">
                        <div class="flex items-center">
                            {#if user.photoURL != null}
                                <Avatar
                                    src={user.photoURL}
                                    alt={user.displayName}
                                    class="mr-4 drop-shadow"
                                    width="w-10"
                                />
                            {/if}
                            {#if user.displayName != null && !minimize}
                                <div transition:fade>
                                    <span class="text-lg">Welcome </span><span
                                        class="text-lg font-bold pl-1"
                                        >{user.displayName}</span
                                    >
                                </div>
                            {/if}
                        </div>
                        <button
                            type="button"
                            class="btn-icon variant-filled-primary"
                            onclick={() => signOut()}
                        >
                            <span class="material-symbols-outlined">
                                logout
                            </span></button
                        >
                    </div>
                {/if}
            </header>
        </SignedIn>
        <div class="flex flex-col items-center justify-center h-full w-full">
            {@render children()}
        </div>

        <canvas
            class="fixed top-0 left-0 w-full h-full -z-10 mix-blend-plus-darker"
            bind:this={canvas}
            id="gradient-canvas"
            data-js-darken-top
            data-transition-in
        ></canvas>
    </div>
</FirebaseApp>

<!--
<nav>
    <a href="/">home</a>
    <a href="/about">about</a>
</nav>
-->
<style>
    #gradient-canvas {
        width: 100%;
        height: 100%;
    }
</style>
