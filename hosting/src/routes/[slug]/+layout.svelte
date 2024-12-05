<script>
    import { page } from "$app/stores";
    import Presence from "$lib/Components/Presence.svelte";
    import { SignedIn } from "sveltefire";
    let { children } = $props();
    let roomId = $page.params.slug;

</script>

<SignedIn>
    <Presence roomID={roomId}></Presence>
</SignedIn>
{@render children()}
