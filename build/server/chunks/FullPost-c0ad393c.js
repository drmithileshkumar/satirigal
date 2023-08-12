import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, k as add_attribute } from './index3-f1aa5d16.js';
import { C as Card } from './Card-283e413e.js';
import { C as Content } from './ActionIcons-2731c9e8.js';
import { A as Actions } from './Actions-98872594.js';
import { I as IconButton } from './IconButton-41ffff60.js';
import { B as Button, C as CommonLabel } from './Button-1a2ee9a9.js';
import { C as CommonIcon } from './Svg-a665053c.js';
import { T as Text } from './Subheader-2430c256.js';
import { p as page } from './stores2-0f38eae5.js';
import { S as Set_1, C as Chip } from './Set-e0487e0b.js';
import { C as Comments } from './ComposeComment.svelte_svelte_type_style_lang-0dee4c08.js';
import './stores-ac084a5d.js';

const css = {
  code: "article.svelte-1r9o218.svelte-1r9o218{display:flex;flex-direction:column;gap:0.5em}.postcontainer.svelte-1r9o218.svelte-1r9o218{display:grid;grid-template-columns:50px auto;gap:0.5em}.image.svelte-1r9o218.svelte-1r9o218{width:50px;height:50px;border-radius:50%;overflow:hidden}.image.svelte-1r9o218 img.svelte-1r9o218{width:50px;height:50px}.header.svelte-1r9o218.svelte-1r9o218{display:flex;flex-direction:row;align-items:center;gap:0.5em}.header.svelte-1r9o218 .primary.svelte-1r9o218{font-weight:bold}.header.svelte-1r9o218 .secondary.svelte-1r9o218{color:gray;font-size:0.9em}.primary.svelte-1r9o218.svelte-1r9o218{cursor:pointer}",
  map: null
};
const FullPost = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { profile = "" } = $$props;
  let isPostLiked = false;
  let { post = {
    name: "",
    publicID: "",
    //public
    media: "",
    profileImage: "",
    title: "",
    subtitle: "",
    content: "",
    comments: [],
    //count
    shares: [],
    //count
    likes: [],
    //count
    creationTimeStamp: Date.now()
  } } = $$props;
  let comments = [];
  if ($$props.profile === void 0 && $$bindings.profile && profile !== void 0)
    $$bindings.profile(profile);
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `

<article class="svelte-1r9o218">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${``}
        
        ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
        default: () => {
          return `<h2 class="mdc-typography--headline6" style="margin: 0;">${escape(post.title)}</h2>
            <h3 class="mdc-typography--subtitle2" style="margin: 0; color: #888;">${escape(post.subtitle)}</h3>
            <div class="tagsInput">${validate_component(Set_1, "Set").$$render($$result, { chips: post.tags, nonInteractive: true }, {}, {
            default: ({ chip }) => {
              return `${validate_component(Chip, "Chip").$$render($$result, { chip }, {}, {
                default: () => {
                  return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(chip)}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}</div>
            <div class="postcontainer svelte-1r9o218"><div class="image svelte-1r9o218"><img${add_attribute("src", profile, 0)}${add_attribute("alt", post.name, 0)} class="svelte-1r9o218"></div>
                <div class="body"><div class="header svelte-1r9o218"><span class="primary svelte-1r9o218">${escape(post.name)}</span>
                        <span class="secondary svelte-1r9o218"><span>${escape(post.publicID)}</span>
                            <span>${escape(new Date(post.creationTimeStamp).toLocaleString())}</span></span></div>
                    <div class="postcontent"><!-- HTML_TAG_START -->${post.content}<!-- HTML_TAG_END --></div></div></div>`;
        }
      })}
        ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
                default: () => {
                  return `chat_bubble_outline`;
                }
              })}
                ${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `Comment`;
                }
              })}`;
            }
          })}
            
            ${validate_component(IconButton, "IconButton").$$render($$result, { toggle: true, pressed: isPostLiked }, {}, {
            default: () => {
              return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons", on: true }, {}, {
                default: () => {
                  return `favorite`;
                }
              })}
                ${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-symbols-outlined" }, {}, {
                default: () => {
                  return `favorite_border`;
                }
              })}`;
            }
          })}
            
            ${$page.data.user && $page.data.user.publicID === post.publicID ? `${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `
                    ${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `Edit`;
                }
              })}`;
            }
          })}` : ``}`;
        }
      })}`;
    }
  })}
    
    ${validate_component(Comments, "Comments").$$render($$result, { comments }, {}, {})}
</article>`;
});

export { FullPost as F };
//# sourceMappingURL=FullPost-c0ad393c.js.map
