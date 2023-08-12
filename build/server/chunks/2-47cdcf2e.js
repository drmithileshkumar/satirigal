import { r as redirect } from './index-9b9a1ed0.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "mathril.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    throw redirect(301, `https://mathril.com`);
  }
  return {};
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-4e7559bc.js')).default;
const universal_id = "src/routes/+page.js";
const imports = ["_app/immutable/nodes/2.9e7c0883.js","_app/immutable/chunks/index.ade5cbd2.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.fe0a1c86.js","_app/immutable/chunks/ActionIcons.2788abc4.js","_app/immutable/chunks/classAdderBuilder.3bb4970d.js","_app/immutable/chunks/paths.bfc41388.js","_app/immutable/chunks/stores.69f96dac.js","_app/immutable/chunks/index.f4007c38.js"];
const stylesheets = ["_app/immutable/assets/2.3270be55.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=2-47cdcf2e.js.map
