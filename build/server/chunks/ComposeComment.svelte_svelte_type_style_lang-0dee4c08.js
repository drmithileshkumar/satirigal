import { c as create_ssr_component, l as each, v as validate_component, b as subscribe, k as add_attribute, e as escape } from './index3-f1aa5d16.js';
import { C as Card } from './Card-283e413e.js';
import { C as Content } from './ActionIcons-2731c9e8.js';
import { A as Actions } from './Actions-98872594.js';
import { B as Button, C as CommonLabel } from './Button-1a2ee9a9.js';
import './Subheader-2430c256.js';
import { p as page } from './stores2-0f38eae5.js';

const css$1 = {
  code: ".commentcontainer.svelte-1cs108n.svelte-1cs108n{display:grid;grid-template-columns:50px auto;gap:0.5em}.image.svelte-1cs108n.svelte-1cs108n{width:50px;height:50px;border-radius:50%;overflow:hidden}.image.svelte-1cs108n img.svelte-1cs108n{width:50px;height:50px}.header.svelte-1cs108n.svelte-1cs108n{display:flex;flex-direction:row;align-items:center;gap:0.5em}.header.svelte-1cs108n .primary.svelte-1cs108n{font-weight:bold}.header.svelte-1cs108n .secondary.svelte-1cs108n{color:gray;font-size:0.9em}.primary.svelte-1cs108n.svelte-1cs108n{cursor:pointer}.commentcontent.svelte-1cs108n.svelte-1cs108n{text-overflow:ellipsis;overflow:hidden}",
  map: null
};
const Comment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let profile = "";
  let { comment = {
    parentID: "",
    name: "",
    publicID: "",
    //public
    profileImage: "",
    content: "",
    comments: [],
    creationTimeStamp: Date.now()
  } } = $$props;
  if ($$props.comment === void 0 && $$bindings.comment && comment !== void 0)
    $$bindings.comment(comment);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `


${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `
    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
        default: () => {
          return `<div class="commentcontainer svelte-1cs108n"><div class="image svelte-1cs108n"><img${add_attribute("src", profile, 0)}${add_attribute("alt", comment.name, 0)} class="svelte-1cs108n"></div>
            <div class="body"><div class="header svelte-1cs108n"><span class="primary svelte-1cs108n">${escape(comment.name)}</span>
                    <span class="secondary svelte-1cs108n"><span>${escape(comment.publicID)}</span>
                        <span>${escape(new Date(comment.creationTimeStamp).toLocaleString())}</span></span></div>
                <div class="commentcontent svelte-1cs108n"><!-- HTML_TAG_START -->${comment.content}<!-- HTML_TAG_END --></div></div></div>`;
        }
      })}
    ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `Parent`;
            }
          })}
        
            
        ${$page.data.user && $page.data.user.publicID === comment.publicID ? `${validate_component(Button, "Button").$$render($$result, {}, {}, {
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
  })}`;
});
const css = {
  code: ".comments.svelte-zbkuql{display:flex;flex-direction:column;gap:1em}",
  map: null
};
const Comments = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { comments = [] } = $$props;
  let { profile = "" } = $$props;
  if ($$props.comments === void 0 && $$bindings.comments && comments !== void 0)
    $$bindings.comments(comments);
  if ($$props.profile === void 0 && $$bindings.profile && profile !== void 0)
    $$bindings.profile(profile);
  $$result.css.add(css);
  return `<div class="comments svelte-zbkuql">${comments.length ? each(comments, (comment) => {
    return `${validate_component(Comment, "Comment").$$render($$result, { comment, profile }, {}, {})}`;
  }) : `<p>Your comments here.</p>`}
</div>`;
});

export { Comments as C };
//# sourceMappingURL=ComposeComment.svelte_svelte_type_style_lang-0dee4c08.js.map
