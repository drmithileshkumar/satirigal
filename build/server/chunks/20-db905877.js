import { r as redirect } from './index-9b9a1ed0.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "satirigal.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    throw redirect(301, `https://satirigal.com`);
  }
  let commentID = url.searchParams.get("commentID");
  let res = await fetch(`/api/comment/${commentID}`);
  let comment = await res.json();
  return {
    comment
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 20;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-58aa26fd.js')).default;
const universal_id = "src/routes/[publicID]/edit/comment/+page.js";
const imports = ["_app/immutable/nodes/20.76ea706f.js","_app/immutable/chunks/index.ade5cbd2.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.fe0a1c86.js","_app/immutable/chunks/ActionIcons.2788abc4.js","_app/immutable/chunks/classAdderBuilder.3bb4970d.js","_app/immutable/chunks/Actions.a7c78e01.js","_app/immutable/chunks/Button.54000be3.js","_app/immutable/chunks/Ripple.f4cb968a.js","_app/immutable/chunks/stores.69f96dac.js","_app/immutable/chunks/index.f4007c38.js","_app/immutable/chunks/stores.d0fe406c.js","_app/immutable/chunks/singletons.87448716.js","_app/immutable/chunks/paths.bfc41388.js","_app/immutable/chunks/navigation.186fefac.js"];
const stylesheets = ["_app/immutable/assets/20.b7cfbbfc.css","_app/immutable/assets/ImageUploader.a46da225.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=20-db905877.js.map
