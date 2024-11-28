import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { sveltekit } from '@sveltejs/kit/vite';
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [sveltekit()],
})
