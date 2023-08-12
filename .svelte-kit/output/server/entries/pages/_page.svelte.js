import { c as create_ssr_component, k as subscribe, p as set_store_value, o as onDestroy, l as escape, f as add_attribute, v as validate_component } from "../../chunks/index3.js";
import { C as Card } from "../../chunks/Card.js";
import { C as Content } from "../../chunks/ActionIcons.js";
import { c as currentPath } from "../../chunks/stores.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-1hek5uo{display:flex;flex-direction:column;gap:0.5em}",
  map: null
};
let keywords = "Politics, Economics, Satire, Satirical, Geo-politics";
let title = "Satirigal: Satirical Girl";
let description = "Your regular dose of satires";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Satirigal", $currentPath);
  let tagTimer;
  onDestroy(() => clearInterval(tagTimer));
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  return `${$$result.head += `<!-- HEAD_svelte-56e86n_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<link rel="canonical" href="https://satirigal.com"><meta name="description"${add_attribute("content", description, 0)}><meta name="keywords"${add_attribute("content", keywords, 0)}><!-- HEAD_svelte-56e86n_END -->`, ""}

<article class="container svelte-1hek5uo">
    
    ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render(
        $$result,
        {
          style: "display:flex; align-items:center; justify-content:center;"
        },
        {},
        {
          default: () => {
            return `<h1>Your regular dose of satires coming soon...</h1>`;
          }
        }
      )}
        `;
    }
  })}
    
</article>`;
});
export {
  Page as default
};
