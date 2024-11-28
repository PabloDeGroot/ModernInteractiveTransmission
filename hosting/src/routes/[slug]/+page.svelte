<script lang="ts">
    import { page } from '$app/stores';
    import { auth } from '$lib/firebase.js';
    import { userStore } from 'sveltefire';
    const user = userStore(auth);

    let { data } = $props();
    
</script>
<h1>{$page.params.slug}</h1>
