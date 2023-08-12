import { c as create_ssr_component, k as subscribe, v as validate_component, f as add_attribute, l as escape } from "../../../../../chunks/index3.js";
import { C as Card } from "../../../../../chunks/Card.js";
import { C as Content } from "../../../../../chunks/ActionIcons.js";
import { A as Actions } from "../../../../../chunks/Actions.js";
import { B as Button, C as CommonLabel } from "../../../../../chunks/Button.js";
/* empty css                                                                 */import { p as profileImage } from "../../../../../chunks/stores.js";
import { p as page } from "../../../../../chunks/stores2.js";
const EditComment_svelte_svelte_type_style_lang = "";
const css = {
  code: ".commentcontainer.svelte-oaen12.svelte-oaen12{display:grid;grid-template-columns:50px auto;gap:0.5em}.image.svelte-oaen12.svelte-oaen12{border-radius:50%;overflow:hidden;width:50px;height:50px}.image.svelte-oaen12 img.svelte-oaen12{width:100%;height:100%}.header.svelte-oaen12.svelte-oaen12{display:flex;flex-direction:row;align-items:center;gap:0.5em}.header.svelte-oaen12 .primary.svelte-oaen12{font-weight:bold}.header.svelte-oaen12 .secondary.svelte-oaen12{color:gray;font-size:0.9em}.commentcontent.svelte-oaen12.svelte-oaen12{border:none;outline:none}[contenteditable].svelte-oaen12.svelte-oaen12:empty:before{content:attr(placeholder);display:block;color:gray}",
  map: null
};
const EditComment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $profileImage, $$unsubscribe_profileImage;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_profileImage = subscribe(profileImage, (value) => $profileImage = value);
  let { parentID } = $$props;
  let { comment = {
    parentID,
    name: $page.data.user.name,
    publicID: $page.data.user.publicID,
    //public
    profileImage: $page.data.user.profile,
    content: "",
    comments: [],
    images: [],
    creationTimeStamp: Date.now()
  } } = $$props;
  if ($$props.parentID === void 0 && $$bindings.parentID && parentID !== void 0)
    $$bindings.parentID(parentID);
  if ($$props.comment === void 0 && $$bindings.comment && comment !== void 0)
    $$bindings.comment(comment);
  $$result.css.add(css);
  $$unsubscribe_page();
  $$unsubscribe_profileImage();
  return `



${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
        default: () => {
          return `<div class="commentcontainer svelte-oaen12"><div class="image svelte-oaen12"><img${add_attribute("src", $profileImage, 0)}${add_attribute("alt", comment.name, 0)} class="svelte-oaen12"></div>
            <div class="body"><div class="header svelte-oaen12"><span class="primary svelte-oaen12">${escape(comment.name)}</span>
                    <span class="secondary svelte-oaen12"><span>${escape(comment.publicID)}</span>
                        <span>${escape(new Date(comment.creationTimeStamp).toLocaleString())}</span></span></div>
                <div class="commentcontent svelte-oaen12" contenteditable="true" placeholder="Type content here...">${(($$value) => $$value === void 0 ? `` : $$value)(comment.content)}</div></div></div>`;
        }
      })}
    ${validate_component(Actions, "Actions").$$render($$result, { fullBleed: true }, {}, {
        default: () => {
          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `Update Comment`;
                }
              })}
            <i class="material-icons" aria-hidden="true">arrow_forward</i>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1p8nxr8_START -->${$$result.title = `<title>Edit comment</title>`, ""}<link rel="canonical" href="https://satirigal.com/edit/comment"><meta name="description" content="Trending Comment."><!-- HEAD_svelte-1p8nxr8_END -->`, ""}
<article>${validate_component(EditComment, "EditComment").$$render($$result, { comment: data.comment }, {}, {})}</article>`;
});
export {
  Page as default
};
