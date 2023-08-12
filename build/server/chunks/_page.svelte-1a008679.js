import { c as create_ssr_component, b as subscribe, t as set_store_value, v as validate_component, l as each, e as escape } from './index3-f1aa5d16.js';
import './Suffix-c76db287.js';
import { T as TopAppBar } from './TopAppBar-a6776142.js';
import { R as Row, S as Section } from './Title-2f486673.js';
import { I as IconButton } from './IconButton-41ffff60.js';
import { L as List, I as Item, G as Graphic } from './Graphic-a5e31e7e.js';
import { T as Text, P as PrimaryText, S as SecondaryText, M as Meta } from './Subheader-2430c256.js';
import { c as currentPath, s as showLeft } from './stores-ac084a5d.js';
import './classAdderBuilder-fb2d293a.js';
import './index2-56d214e2.js';
import './Ripple-12cc12b5.js';

const css = {
  code: "article.svelte-18id17l{width:100%}header.svelte-18id17l{margin-bottom:1.5em}.messages.svelte-18id17l{display:flex;flex-direction:column;gap:1.5em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  let $$unsubscribe_showLeft;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_showLeft = subscribe(showLeft, (value) => value);
  set_store_value(currentPath, $currentPath = "Settings", $currentPath);
  let options = [
    {
      name: "Bruce Willis",
      description: "Actor",
      disabled: false
    },
    {
      name: "Austin Powers",
      description: "Fictional Character",
      disabled: true
    },
    {
      name: "Thomas Edison",
      description: "Inventor",
      disabled: false
    },
    {
      name: "Stephen Hawking",
      description: "Scientist",
      disabled: false
    }
  ];
  let selection = "Stephen Hawking";
  let selectionIndex = void 0;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1ou5plu_START -->${$$result.title = `<title>Settings</title>`, ""}<link rel="canonical" href="https://satirigal.com/settings"><meta name="description" content="Settings"><!-- HEAD_svelte-1ou5plu_END -->`, ""}
<article class="svelte-18id17l"><header class="svelte-18id17l">${validate_component(TopAppBar, "TopAppBar").$$render($$result, { variant: "static", color: "secondary" }, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Section, "Section").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                  default: () => {
                    return `menu`;
                  }
                })}`;
              }
            })}
                ${validate_component(Section, "Section").$$render($$result, { align: "end", toolbar: true }, {}, {
              default: () => {
                return `${validate_component(IconButton, "IconButton").$$render(
                  $$result,
                  {
                    class: "material-icons",
                    "aria-label": "Settings"
                  },
                  {},
                  {
                    default: () => {
                      return `settings`;
                    }
                  }
                )}
                    ${validate_component(IconButton, "IconButton").$$render(
                  $$result,
                  {
                    class: "material-icons",
                    "aria-label": "Cancel"
                  },
                  {},
                  {
                    default: () => {
                      return `close`;
                    }
                  }
                )}`;
              }
            })}`;
          }
        })}`;
      }
    })}</header>
    <div class="photos"><div class="banner"></div>
        <div class="profile"></div></div>
    <div class="messages svelte-18id17l">${validate_component(List, "List").$$render(
      $$result,
      {
        class: "demo-list",
        twoLine: true,
        avatarList: true,
        singleSelection: true,
        selectedIndex: selectionIndex
      },
      {
        selectedIndex: ($$value) => {
          selectionIndex = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(options, (item) => {
            return `${validate_component(Item, "Item").$$render(
              $$result,
              {
                disabled: item.disabled,
                selected: selection === item.name
              },
              {},
              {
                default: () => {
                  return `${validate_component(Graphic, "Graphic").$$render(
                    $$result,
                    {
                      style: "background-image: url(https://place-hold.it/40x40?text=" + item.name.split(" ").map((val) => val.substring(0, 1)).join("") + "&fontsize=16);"
                    },
                    {},
                    {}
                  )}
                    ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(PrimaryText, "PrimaryText").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(item.name)}`;
                        }
                      })}
                        ${validate_component(SecondaryText, "SecondaryText").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(item.description)}`;
                        }
                      })}
                    `;
                    }
                  })}
                    ${validate_component(Meta, "Meta").$$render($$result, { class: "material-icons" }, {}, {
                    default: () => {
                      return `info`;
                    }
                  })}
                `;
                }
              }
            )}`;
          })}`;
        }
      }
    )}</div>
</article>`;
  } while (!$$settled);
  $$unsubscribe_currentPath();
  $$unsubscribe_showLeft();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-1a008679.js.map
