
<script>
    import { auth, firestore } from "$lib/firebase";
    import { setContext } from "svelte";
    import { FirebaseApp } from "sveltefire";

	let { children } = $props()

</script>

<nav>
	<a href="/">home</a>
	<a href="/about">about</a>
</nav>
<FirebaseApp auth={auth} firestore={firestore}>
	
{@render children()}
</FirebaseApp>