

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/legal/privacy/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.19143991.js","_app/immutable/chunks/index.fe0a1c86.js","_app/immutable/chunks/stores.69f96dac.js","_app/immutable/chunks/index.f4007c38.js"];
export const stylesheets = [];
export const fonts = [];
