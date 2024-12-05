<script lang="ts">
    import { FirebaseApp, SignedIn } from "sveltefire";
    import { SignedOut } from "sveltefire";
    import {
        GoogleAuthProvider,
        signInWithPopup,
        signInAnonymously,
    } from "firebase/auth";
    const provider = new GoogleAuthProvider();
</script>

<main>

        <SignedOut let:auth>
            
            <button on:click={() => signInWithPopup(auth, provider)}
                >logIn</button
            >
            
            <button on:click={() => signInAnonymously(auth)}
                >Anon logIn</button
            >
        </SignedOut>
        <SignedIn let:auth let:signOut let:user>
            <button on:click={() => signOut()}>logOut</button>
        </SignedIn>
</main>
