import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite';
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [sveltekit()],
  
  optimizeDeps: {
    exclude:["peerjs"]
  }
})
