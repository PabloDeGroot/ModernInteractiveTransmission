<script lang="ts">
    import { FirebaseApp, SignedIn } from "sveltefire";
    import { SignedOut } from "sveltefire";
    import {
        GoogleAuthProvider,
        signInWithPopup,
    } from "firebase/auth";
    const provider = new GoogleAuthProvider();
</script>

<main>

        <SignedOut let:auth>
            <button on:click={() => signInWithPopup(auth, provider)}
                >logIn</button
            >
        </SignedOut>
        <SignedIn let:auth let:signOut>
            <button on:click={() => signOut()}>logOut</button>
        </SignedIn>
</main>
