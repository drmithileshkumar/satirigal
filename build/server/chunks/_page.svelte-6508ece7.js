import { c as create_ssr_component, b as subscribe, t as set_store_value, e as escape, v as validate_component } from './index3-f1aa5d16.js';
import { F as FullPost } from './FullPost-c0ad393c.js';
import { c as currentPath } from './stores-ac084a5d.js';
import './Card-283e413e.js';
import './classAdderBuilder-fb2d293a.js';
import './ActionIcons-2731c9e8.js';
import './Actions-98872594.js';
import './IconButton-41ffff60.js';
import './Subheader-2430c256.js';
import './Ripple-12cc12b5.js';
import './Button-1a2ee9a9.js';
import './Svg-a665053c.js';
import './stores2-0f38eae5.js';
import './Set-e0487e0b.js';
import './index2-56d214e2.js';
import './ContextFragment-4a3c18d4.js';
import './ComposeComment.svelte_svelte_type_style_lang-0dee4c08.js';

let profile = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Post", $currentPath);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_currentPath();
  return `${$$result.head += `<!-- HEAD_svelte-puw1mw_START -->${$$result.title = `<title>${escape(data.post.title)}</title>`, ""}<link rel="canonical" href="${"https://satirigal.com/post/$" + escape(data.post.postID, true)}"><meta name="description" content="satirigal.com"><!-- HEAD_svelte-puw1mw_END -->`, ""}
${validate_component(FullPost, "FullPost").$$render($$result, { post: data.post, profile }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-6508ece7.js.map
