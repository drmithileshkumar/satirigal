import { r as redirect } from './index-9b9a1ed0.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "satirigal.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    throw redirect(301, `https://satirigal.com`);
  }
  let commentID = params.commentID;
  let urlink = `/api/comment/${commentID}`;
  let res = await fetch(urlink);
  if (!res.ok) {
    console.log("redirected...");
    throw redirect(301, `/`);
  }
  let comment = await res.json();
  return {
    comment
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-6508ece7.js')).default;
const universal_id = "src/routes/comment/[commentID]/+page.js";
const imports = ["_app/immutable/nodes/6.34108dc7.js","_app/immutable/chunks/index.ade5cbd2.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.fe0a1c86.js","_app/immutable/chunks/FullPost.3d635ed7.js","_app/immutable/chunks/ActionIcons.2788abc4.js","_app/immutable/chunks/classAdderBuilder.3bb4970d.js","_app/immutable/chunks/Media.63c111ac.js","_app/immutable/chunks/Actions.a7c78e01.js","_app/immutable/chunks/IconButton.bf6be77d.js","_app/immutable/chunks/Ripple.f4cb968a.js","_app/immutable/chunks/Button.54000be3.js","_app/immutable/chunks/Svg.f12e3f9c.js","_app/immutable/chunks/Subheader.b2cb5b88.js","_app/immutable/chunks/navigation.a03ee98f.js","_app/immutable/chunks/singletons.35efc5d6.js","_app/immutable/chunks/index.f4007c38.js","_app/immutable/chunks/paths.66d34cb2.js","_app/immutable/chunks/stores.ba3acca9.js","_app/immutable/chunks/Set.0ca803c6.js","_app/immutable/chunks/keyboard.d29cf581.js","_app/immutable/chunks/ContextFragment.0405af55.js","_app/immutable/chunks/ComposeComment.svelte_svelte_type_style_lang.4ef8b20d.js","_app/immutable/chunks/stores.69f96dac.js"];
const stylesheets = ["_app/immutable/assets/FullPost.c467e3c5.css","_app/immutable/assets/ImageUploader.a46da225.css","_app/immutable/assets/ComposeComment.d1978ce5.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=6-ed1250ed.js.map
