import * as universal from '../entries/pages/search/_page.js';

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/search/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/search/+page.js";
export const imports = ["_app/immutable/nodes/13.a3a6495c.js","_app/immutable/chunks/index.fe0a1c86.js","_app/immutable/chunks/ActionIcons.2788abc4.js","_app/immutable/chunks/classAdderBuilder.3bb4970d.js","_app/immutable/chunks/Button.54000be3.js","_app/immutable/chunks/Ripple.f4cb968a.js","_app/immutable/chunks/Svg.f12e3f9c.js","_app/immutable/chunks/SelectionGroupIcon.81fea803.js","_app/immutable/chunks/Graphic.7c6f08ee.js","_app/immutable/chunks/keyboard.d29cf581.js","_app/immutable/chunks/Subheader.b2cb5b88.js","_app/immutable/chunks/Suffix.5f2f5063.js","_app/immutable/chunks/Input.b0792bb4.js","_app/immutable/chunks/navigation.186fefac.js","_app/immutable/chunks/singletons.87448716.js","_app/immutable/chunks/index.f4007c38.js","_app/immutable/chunks/paths.bfc41388.js"];
export const stylesheets = ["_app/immutable/assets/13.d9fe8d87.css"];
export const fonts = [];
