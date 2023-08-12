function load({ locals }) {
  return {
    user: locals.user && {
      publicID: locals.user.publicID,
      name: locals.user.name,
      phone: locals.user.phone,
      profile: locals.user.profile,
      likes: locals.user.likes
    }
  };
}

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-6f0a447c.js')).default;
const server_id = "src/routes/+layout.server.js";
const imports = ["_app/immutable/nodes/0.57b3836e.js","_app/immutable/chunks/index.fe0a1c86.js","_app/immutable/chunks/focus-trap.609077c9.js","_app/immutable/chunks/classAdderBuilder.3bb4970d.js","_app/immutable/chunks/Ripple.f4cb968a.js","_app/immutable/chunks/Svg.f12e3f9c.js","_app/immutable/chunks/Graphic.7c6f08ee.js","_app/immutable/chunks/keyboard.d29cf581.js","_app/immutable/chunks/Subheader.b2cb5b88.js","_app/immutable/chunks/Button.54000be3.js","_app/immutable/chunks/navigation.a03ee98f.js","_app/immutable/chunks/singletons.35efc5d6.js","_app/immutable/chunks/index.f4007c38.js","_app/immutable/chunks/paths.66d34cb2.js","_app/immutable/chunks/stores.ba3acca9.js","_app/immutable/chunks/stores.69f96dac.js","_app/immutable/chunks/ActionIcons.2788abc4.js","_app/immutable/chunks/TopAppBar.8a3ab73f.js","_app/immutable/chunks/Title.0aa4a77e.js","_app/immutable/chunks/IconButton.bf6be77d.js"];
const stylesheets = ["_app/immutable/assets/0.306cb75b.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=0-bc234b49.js.map
