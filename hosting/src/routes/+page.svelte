<script lang="ts">
    import { FirebaseApp, SignedIn } from "sveltefire";
    import { SignedOut } from "sveltefire";
    import {
        AppShell,
        Avatar,
        LightSwitch,
        ProgressRadial,
    } from "@skeletonlabs/skeleton";
    import img from "$lib/images/google.png";

    import {
        GoogleAuthProvider,
        signInWithPopup,
        signInAnonymously,
    } from "firebase/auth";
    import { auth } from "$lib/firebase";
    import { read } from "$app/server";
    import { goto } from "$app/navigation";
    let ready = $state(false);

    auth.authStateReady().then(() => {
        ready = true;
    });
    const provider = new GoogleAuthProvider();
    let roomId = "";
</script>

<main class="flex justify-center items-center flex-1">
    {#if !ready}{:else}
        <SignedOut let:auth>
            <div
                class="card card-hover variant-ghost-primary -backdrop-hue-rotate-90 backdrop-blur-sm flex flex-col items-center"
            >
                <header
                    class="card-header text-center text-lg font-bold underline underline-offset-4"
                >
                    Sign In
                </header>
                <footer
                    class="card-footer p-4 mb-5 mt-5 flex flex-col items-center"
                >
                    <button
                        type="button"
                        class="btn variant-filled w-full"
                        onclick={() => signInWithPopup(auth, provider)}
                    >
                        <img src={img} alt="Google Logo" class="w-6 h-6" />
                        <span>Login with Google</span>
                    </button>

                    <button
                        type="button"
                        class="btn variant-filled w-full mt-4"
                        onclick={() => signInAnonymously(auth)}
                        >Anon logIn</button
                    >
                </footer>
            </div>
        </SignedOut>
        <SignedIn>
            <div
                class="card card-hover variant-ghost-primary -backdrop-hue-rotate-90 backdrop-blur-sm"
            >
                <div class="card-content">
                    <header
                        class="card-header text-center text-lg font-bold underline underline-offset-4"
                    >
                        Join a Room
                    </header>

                    <form
                        onsubmit={(e) => {
                            e.preventDefault();
                            goto(`${roomId}`);
                        }}
                    >
                        <section class="p-4 mb-5 mt-5">
                            <input
                                bind:value={roomId}
                                class="input p-1 rounded-md border-none outline-primary-500 placeholder-gray-300 backdrop-hue-rotate-180  backdrop-brightness-50"
                                style="background-color: #00000030;"
                                title="Enter Room Id"
                                type="text"
                                placeholder="Enter Room Id"
                            />
                        </section>
                        <footer class="card-footer">
                            <button class="btn variant-filled-secondary w-full"
                                >Join</button
                            >
                        </footer>
                    </form>
                </div>
            </div>
        </SignedIn>
    {/if}
</main>
