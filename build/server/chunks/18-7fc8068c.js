import { r as redirect } from './index-9b9a1ed0.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "satirigal.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    throw redirect(301, `https://satirigal.com`);
  }
  console.log("Loading user details...");
  let publicID = params.publicID;
  let resuser = await fetch(`/api/${publicID}`);
  let { user, userDetail } = await resuser.json();
  let res1 = await fetch(`/api/${publicID}/profilepic`);
  let res2 = await fetch(`/api/${publicID}/bannerpic`);
  let profilepicData = await res1.blob();
  let bannerpicData = await res2.blob();
  let active = void 0;
  return {
    currentUser: user,
    currentUserDetail: userDetail,
    profilepicData,
    bannerpicData,
    active
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 18;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-8e42207d.js')).default;
const universal_id = "src/routes/[publicID]/+page.js";
const imports = ["_app/immutable/nodes/18.3f73f2c0.js","_app/immutable/chunks/index.ade5cbd2.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.fe0a1c86.js","_app/immutable/chunks/ActionIcons.2788abc4.js","_app/immutable/chunks/classAdderBuilder.3bb4970d.js","_app/immutable/chunks/Button.54000be3.js","_app/immutable/chunks/Ripple.f4cb968a.js","_app/immutable/chunks/prefixFilter.9aa1f37f.js","_app/immutable/chunks/stores.d0fe406c.js","_app/immutable/chunks/singletons.87448716.js","_app/immutable/chunks/index.f4007c38.js","_app/immutable/chunks/paths.bfc41388.js","_app/immutable/chunks/navigation.186fefac.js","_app/immutable/chunks/Subheader.b2cb5b88.js","_app/immutable/chunks/Media.63c111ac.js","_app/immutable/chunks/Actions.a7c78e01.js","_app/immutable/chunks/IconButton.bf6be77d.js","_app/immutable/chunks/Svg.f12e3f9c.js","_app/immutable/chunks/stores.69f96dac.js","_app/immutable/chunks/ComposeComment.svelte_svelte_type_style_lang.b7da4c88.js","_app/immutable/chunks/Set.0ca803c6.js","_app/immutable/chunks/keyboard.d29cf581.js","_app/immutable/chunks/ContextFragment.0405af55.js","_app/immutable/chunks/Graphic.7c6f08ee.js"];
const stylesheets = ["_app/immutable/assets/18.df6e922b.css","_app/immutable/assets/ImageUploader.a46da225.css","_app/immutable/assets/ComposeComment.d1978ce5.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=18-7fc8068c.js.map
