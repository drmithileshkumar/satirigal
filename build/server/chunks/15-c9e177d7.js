import { r as redirect } from './index-9b9a1ed0.js';

const ssr = false;
async function load({ parent, fetch, params, url }) {
  if (!(url.host === "satirigal.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    throw redirect(301, `https://satirigal.com`);
  }
  const { user } = await parent();
  if (!user) {
    throw redirect(301, `/`);
  }
  let res = await fetch(`/api/userDetail`);
  let userDetail = await res.json();
  return {
    userDetail
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load,
  ssr: ssr
});

const index = 15;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-cfedbedb.js')).default;
const universal_id = "src/routes/settings/profile/+page.js";
const imports = ["_app/immutable/nodes/15.0ee003a1.js","_app/immutable/chunks/index.ade5cbd2.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.fe0a1c86.js","_app/immutable/chunks/Textfield.505bfc91.js","_app/immutable/chunks/Ripple.f4cb968a.js","_app/immutable/chunks/classAdderBuilder.3bb4970d.js","_app/immutable/chunks/prefixFilter.9aa1f37f.js","_app/immutable/chunks/ContextFragment.0405af55.js","_app/immutable/chunks/index.f4007c38.js","_app/immutable/chunks/Suffix.5f2f5063.js","_app/immutable/chunks/Input.b0792bb4.js","_app/immutable/chunks/Title.0aa4a77e.js","_app/immutable/chunks/Button.54000be3.js","_app/immutable/chunks/IconButton.bf6be77d.js","_app/immutable/chunks/SelectionGroupIcon.81fea803.js","_app/immutable/chunks/Graphic.7c6f08ee.js","_app/immutable/chunks/keyboard.d29cf581.js","_app/immutable/chunks/Subheader.b2cb5b88.js","_app/immutable/chunks/focus-trap.609077c9.js","_app/immutable/chunks/stores.ba3acca9.js","_app/immutable/chunks/singletons.35efc5d6.js","_app/immutable/chunks/paths.66d34cb2.js","_app/immutable/chunks/stores.69f96dac.js"];
const stylesheets = ["_app/immutable/assets/15.ebb9dd4a.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=15-c9e177d7.js.map
