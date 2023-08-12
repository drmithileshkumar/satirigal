

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.3e02dab9.js","_app/immutable/chunks/index.fe0a1c86.js","_app/immutable/chunks/stores.ba3acca9.js","_app/immutable/chunks/singletons.35efc5d6.js","_app/immutable/chunks/index.f4007c38.js","_app/immutable/chunks/paths.66d34cb2.js"];
export const stylesheets = [];
export const fonts = [];
