<script>
    import Presence from "$lib/Components/Presence.svelte";
import { auth, firestore, database } from "$lib/firebase";

    import { FirebaseApp, SignedIn } from "sveltefire";
    let { children } = $props();
    // Fetch the current user's ID from Firebase Authentication.
    
</script>

<nav>
    <a href="/">home</a>
    <a href="/about">about</a>
</nav>
<FirebaseApp {auth} {firestore}>
    {@render children()}

</FirebaseApp>
