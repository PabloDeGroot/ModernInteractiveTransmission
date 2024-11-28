import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0._o60yexD.js","_app/immutable/chunks/disclose-version.B6QaIZV3.js","_app/immutable/chunks/runtime.CiZkIjR8.js","_app/immutable/chunks/snippet.BmNpjhUL.js","_app/immutable/chunks/validate.8uF8prI8.js","_app/immutable/chunks/index.esm2017.CPnx2G7Y.js","_app/immutable/chunks/legacy.DPw7MWmv.js","_app/immutable/chunks/index-client.ZnVZiJVA.js","_app/immutable/chunks/validate.BfyLVMtv.js","_app/immutable/chunks/index.ba3-T6C2.js"];
export const stylesheets = [];
export const fonts = [];
