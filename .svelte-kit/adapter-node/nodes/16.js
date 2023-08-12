

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/shipping/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/16.61e6c252.js","_app/immutable/chunks/index.fe0a1c86.js"];
export const stylesheets = [];
export const fonts = [];
