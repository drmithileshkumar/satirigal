import { r as redirect } from './index-9b9a1ed0.js';

async function load({ locals }) {
}
const actions = {
  logout: async ({ cookies, locals }) => {
    cookies.delete("jwt", { path: "/" });
    locals.user = null;
    throw redirect(300, "/auth");
  }
  // save: async ({ cookies, locals, request }) => {
  // 	if (!locals.user) throw error(401);
  // 	const data = await request.formData();
  // 	const user = {
  // 		username: data.get('username'),
  // 		email: data.get('email'),
  // 		password: data.get('password'),
  // 		image: data.get('image'),
  // 		bio: data.get('bio')
  // 	};
  // 	const body = await api.put('user', { user }, locals.user.token);
  // 	if (body.errors) return fail(400, body.errors);
  // 	const value = btoa(JSON.stringify(body.user));
  // 	cookies.set('jwt', value, { path: '/' });
  // 	locals.user = body.user;
  // }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-f20c945b.js')).default;
const server_id = "src/routes/auth/+page.server.js";
const imports = ["_app/immutable/nodes/5.c26671ed.js","_app/immutable/chunks/index.fe0a1c86.js","_app/immutable/chunks/Button.54000be3.js","_app/immutable/chunks/classAdderBuilder.3bb4970d.js","_app/immutable/chunks/Ripple.f4cb968a.js","_app/immutable/chunks/Set.0ca803c6.js","_app/immutable/chunks/index.f4007c38.js","_app/immutable/chunks/keyboard.d29cf581.js","_app/immutable/chunks/ContextFragment.0405af55.js","_app/immutable/chunks/Text.dd5b60c0.js","_app/immutable/chunks/ActionIcons.2788abc4.js","_app/immutable/chunks/Actions.a7c78e01.js","_app/immutable/chunks/Textfield.505bfc91.js","_app/immutable/chunks/prefixFilter.9aa1f37f.js","_app/immutable/chunks/Suffix.5f2f5063.js","_app/immutable/chunks/Input.b0792bb4.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.87448716.js","_app/immutable/chunks/paths.bfc41388.js","_app/immutable/chunks/navigation.186fefac.js","_app/immutable/chunks/stores.d0fe406c.js","_app/immutable/chunks/stores.69f96dac.js"];
const stylesheets = ["_app/immutable/assets/5.a7b60ba5.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-ab043b63.js.map
