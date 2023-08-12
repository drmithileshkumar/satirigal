import { c as create_ssr_component, k as subscribe, v as validate_component, f as add_attribute, l as escape, q as each } from "./index3.js";
import { C as Card } from "./Card.js";
import { C as Content } from "./ActionIcons.js";
import { A as Actions } from "./Actions.js";
import { B as Button, C as CommonLabel } from "./Button.js";
import "./Subheader.js";
import { p as page } from "./stores2.js";
const Comment_svelte_svelte_type_style_lang = "";
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
const Comments_svelte_svelte_type_style_lang = "";
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
const ComposeComment_svelte_svelte_type_style_lang = "";
export {
  Comments as C
};
