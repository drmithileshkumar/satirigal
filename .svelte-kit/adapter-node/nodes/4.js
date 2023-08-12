

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/android/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.fb368dfc.js","_app/immutable/chunks/index.fe0a1c86.js"];
export const stylesheets = ["_app/immutable/assets/4.a4b56de1.css"];
export const fonts = [];
