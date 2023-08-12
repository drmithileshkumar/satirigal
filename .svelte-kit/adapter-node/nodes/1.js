

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.fcbf67d9.js","_app/immutable/chunks/index.fe0a1c86.js","_app/immutable/chunks/stores.d0fe406c.js","_app/immutable/chunks/singletons.87448716.js","_app/immutable/chunks/index.f4007c38.js","_app/immutable/chunks/paths.bfc41388.js"];
export const stylesheets = [];
export const fonts = [];
