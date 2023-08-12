import { r as redirect } from './index-9b9a1ed0.js';

async function load({ fetch, params, url }) {
  if (!(url.host === "satirigal.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    throw redirect(301, `https://satirigal.com`);
  }
  let postID = url.searchParams.get("postID");
  let res = await fetch(`/api/post/${postID}`);
  let post = await res.json();
  return {
    post
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 19;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-8d8eb7af.js')).default;
const universal_id = "src/routes/[publicID]/edit/+page.js";
const imports = ["_app/immutable/nodes/19.69d7b5fe.js","_app/immutable/chunks/index.ade5cbd2.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.fe0a1c86.js","_app/immutable/chunks/ActionIcons.2788abc4.js","_app/immutable/chunks/classAdderBuilder.3bb4970d.js","_app/immutable/chunks/Media.63c111ac.js","_app/immutable/chunks/Actions.a7c78e01.js","_app/immutable/chunks/Button.54000be3.js","_app/immutable/chunks/Ripple.f4cb968a.js","_app/immutable/chunks/ImageUploader.f77b8eae.js","_app/immutable/chunks/stores.69f96dac.js","_app/immutable/chunks/index.f4007c38.js","_app/immutable/chunks/stores.d0fe406c.js","_app/immutable/chunks/singletons.87448716.js","_app/immutable/chunks/paths.bfc41388.js","_app/immutable/chunks/navigation.186fefac.js","_app/immutable/chunks/Set.0ca803c6.js","_app/immutable/chunks/keyboard.d29cf581.js","_app/immutable/chunks/ContextFragment.0405af55.js","_app/immutable/chunks/Text.dd5b60c0.js"];
const stylesheets = ["_app/immutable/assets/19.3accf142.css","_app/immutable/assets/ImageUploader.a46da225.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=19-31de1ead.js.map
