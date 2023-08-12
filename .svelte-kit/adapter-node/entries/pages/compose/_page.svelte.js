import { c as create_ssr_component, k as subscribe, v as validate_component, f as add_attribute, l as escape } from "../../../chunks/index3.js";
import { C as Card } from "../../../chunks/Card.js";
import { M as MediaContent, C as Content } from "../../../chunks/ActionIcons.js";
import { I as ImageUploader, M as Media } from "../../../chunks/ImageUploader.js";
import { A as Actions } from "../../../chunks/Actions.js";
import { B as Button, C as CommonLabel } from "../../../chunks/Button.js";
import { p as profileImage } from "../../../chunks/stores.js";
import { p as page } from "../../../chunks/stores2.js";
import { S as Set_1, C as Chip } from "../../../chunks/Set.js";
import { T as Text } from "../../../chunks/Text.js";
const ComposePost_svelte_svelte_type_style_lang = "";
const css = {
  code: ".postcontainer.svelte-6ysa8b.svelte-6ysa8b{display:grid;grid-template-columns:50px auto;gap:0.5em}.image.svelte-6ysa8b.svelte-6ysa8b{border-radius:50%;overflow:hidden;width:50px;height:50px}.image.svelte-6ysa8b img.svelte-6ysa8b{width:100%;height:100%}.header.svelte-6ysa8b.svelte-6ysa8b{display:flex;flex-direction:row;align-items:center;gap:0.5em}.header.svelte-6ysa8b .primary.svelte-6ysa8b{font-weight:bold}.header.svelte-6ysa8b .secondary.svelte-6ysa8b{color:gray;font-size:0.9em}.postcontent.svelte-6ysa8b.svelte-6ysa8b,.postSummary.svelte-6ysa8b.svelte-6ysa8b,.title.svelte-6ysa8b.svelte-6ysa8b,.subtitle.svelte-6ysa8b.svelte-6ysa8b{border:none;outline:none}[contenteditable].svelte-6ysa8b.svelte-6ysa8b:empty:before{content:attr(placeholder);display:block;color:gray}.addphoto.svelte-6ysa8b.svelte-6ysa8b{cursor:pointer}",
  map: null
};
const ComposePost = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $profileImage, $$unsubscribe_profileImage;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_profileImage = subscribe(profileImage, (value) => $profileImage = value);
  let choices = [
    "Mathematics",
    "Physics",
    "Politics",
    "Technology",
    "Sports",
    "Health",
    "Science",
    "Economics",
    "Arts"
  ];
  let selected = [];
  let { post = {
    name: $page.data.user.name,
    publicID: $page.data.user.publicID,
    //public
    media: "",
    profileImage: $page.data.user.profile,
    title: "",
    subtitle: "",
    content: "",
    summary: "",
    comments: [],
    //count
    shares: [],
    //count
    likes: [],
    //count
    tags: [],
    images: [],
    creationTimeStamp: Date.now()
  } } = $$props;
  let isClicked = false;
  let media;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `



${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `
    ${validate_component(ImageUploader, "ImageUploader").$$render(
          $$result,
          {
            url: "/api/" + post.publicID + "/media",
            media,
            isClicked
          },
          {
            media: ($$value) => {
              media = $$value;
              $$settled = false;
            },
            isClicked: ($$value) => {
              isClicked = $$value;
              $$settled = false;
            }
          },
          {}
        )}
    ${validate_component(Media, "Media").$$render(
          $$result,
          {
            style: "display:flex; align-items:center; justify-content:center; min-height: 100px; max-height: 300px;background:white;"
          },
          {},
          {
            default: () => {
              return `<img style="max-height:300px;"${add_attribute("src", media, 0)} alt="img">
        ${validate_component(MediaContent, "MediaContent").$$render($$result, {}, {}, {
                default: () => {
                  return `<div style="color: gray; position: absolute; bottom: 16px; left: 16px;"><span class="addphoto material-icons svelte-6ysa8b">add_a_photo</span></div>`;
                }
              })}`;
            }
          }
        )}
    
    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
          default: () => {
            return `<div class="tagsInput">${validate_component(Set_1, "Set").$$render(
              $$result,
              { chips: choices, filter: true, selected },
              {
                selected: ($$value) => {
                  selected = $$value;
                  $$settled = false;
                }
              },
              {
                default: ({ chip }) => {
                  return `${validate_component(Chip, "Chip").$$render($$result, { chip, touch: true }, {}, {
                    default: () => {
                      return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(chip)}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              }
            )}</div>
        <h2 class="title mdc-typography--headline6 svelte-6ysa8b" style="margin: 0;" contenteditable="true" placeholder="Title here...">${(($$value) => $$value === void 0 ? `` : $$value)(post.title)}</h2>
        <h3 class="subtitle mdc-typography--subtitle2 svelte-6ysa8b" style="margin: 0.5em 0" contenteditable="true" placeholder="Subtitle here...">${(($$value) => $$value === void 0 ? `` : $$value)(post.subtitle)}</h3>
        <div class="postcontainer svelte-6ysa8b"><div class="image svelte-6ysa8b"><img${add_attribute("src", $profileImage, 0)}${add_attribute("alt", post.name, 0)} class="svelte-6ysa8b"></div>
            <div class="body"><div class="header svelte-6ysa8b"><span class="primary svelte-6ysa8b">${escape(post.name)}</span>
                    <span class="secondary svelte-6ysa8b"><span>${escape(post.publicID)}</span>
                        <span>${escape(new Date(post.creationTimeStamp).toLocaleString())}</span></span></div>
                <div class="postSummary svelte-6ysa8b" contenteditable="true" placeholder="Type summary here...">${(($$value) => $$value === void 0 ? `` : $$value)(post.summary)}</div>
                <br>
                <div class="postcontent svelte-6ysa8b" contenteditable="true" placeholder="Type content here...">${(($$value) => $$value === void 0 ? `` : $$value)(post.content)}</div></div></div>`;
          }
        })}
    ${validate_component(Actions, "Actions").$$render($$result, { fullBleed: true }, {}, {
          default: () => {
            return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                  default: () => {
                    return `Create Post`;
                  }
                })}
            <i class="material-icons" aria-hidden="true">arrow_forward</i>`;
              }
            })}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_profileImage();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-5r1qxw_START -->${$$result.title = `<title>New post</title>`, ""}<link rel="canonical" href="https://satirigal.com/compose"><meta name="description" content="Satirical posts"><!-- HEAD_svelte-5r1qxw_END -->`, ""}
${validate_component(ComposePost, "ComposePost").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
