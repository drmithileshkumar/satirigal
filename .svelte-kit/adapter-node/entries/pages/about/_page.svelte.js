import { c as create_ssr_component, k as subscribe, p as set_store_value, l as escape, f as add_attribute, v as validate_component } from "../../../chunks/index3.js";
import { C as Card } from "../../../chunks/Card.js";
import { C as Content } from "../../../chunks/ActionIcons.js";
import { c as currentPath } from "../../../chunks/stores.js";
let title = "About Satirigal | Online Math Practice Platform for All Ages";
let description = "Satirigal is an online mathematics practice platform designed for learners of all ages following the Indian education system. Enhance your understanding, accuracy, and speed with our extensive collection of template-based math problems.";
let keywords = "Satirigal, online math practice, Indian education system, mathematics, all ages, math problems, practice problems, understanding, accuracy, speed";
let canonical = "https://satirigal.com/about";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "About", $currentPath);
  $$unsubscribe_currentPath();
  return `${$$result.head += `<!-- HEAD_svelte-7s9pd3_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="description"${add_attribute("content", description, 0)}><meta name="keywords"${add_attribute("content", keywords, 0)}><link rel="canonical"${add_attribute("href", canonical, 0)}><!-- HEAD_svelte-7s9pd3_END -->`, ""}
  
  <main class="mdc-typography--body1">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h1 class="mdc-typography--headline4">Welcome to Satirigal</h1>
        <div><div style="display:flex; flex-direction:row; align-items:center;justify-content:center; gap: 0.5em;">
            <div><p>The goal of satirigal is to make light-hearted fun-intended take on world events and try to be as impartial as possible when it comes to satirical treatment. The users are requested to take it in good spirit and live a happy life.
              </p>
              </div></div>
          </div>`;
        }
      })}`;
    }
  })}</main>`;
});
export {
  Page as default
};
