

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/iOS/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.1ded5a2d.js","_app/immutable/chunks/index.fe0a1c86.js"];
export const stylesheets = ["_app/immutable/assets/4.a4b56de1.css"];
export const fonts = [];
