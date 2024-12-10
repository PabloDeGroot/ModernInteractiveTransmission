<script>
    import { auth } from "../firebase";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    onMount(() => {
        auth.onAuthStateChanged((user) => {
            if (user == null) {
                goto("/", {
                    replaceState: true,
                    state: { from: location.pathname },
                });
            }
        });
    });
</script>
