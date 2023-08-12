

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/legal/terms/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.a99e416e.js","_app/immutable/chunks/index.fe0a1c86.js","_app/immutable/chunks/stores.69f96dac.js","_app/immutable/chunks/index.f4007c38.js"];
export const stylesheets = [];
export const fonts = [];
