import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

import firebase from "sveltekit-adapter-firebase"
/** @type {import('@sveltejs/kit').Config} */

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  kit: {
    adapter: firebase()
  }
}
