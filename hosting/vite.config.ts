import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    sveltekit(),
    Icons({
      compiler: "svelte",
    })

  ],

  optimizeDeps: {
    exclude: ["peerjs"]
  }
})
