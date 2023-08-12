import { c as create_ssr_component, a as compute_rest_props, g as get_current_component, i as setContext, o as onDestroy, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute, v as validate_component, m as missing_component, h as getContext, k as subscribe, l as escape, q as each, y as null_to_empty } from "../../chunks/index3.js";
import { MDCDismissibleDrawerFoundation, MDCModalDrawerFoundation } from "@material/drawer";
import { f as forwardEventsBuilder, c as classMap, a as classAdderBuilder, S as SmuiElement } from "../../chunks/classAdderBuilder.js";
import { d as dispatch, T as Text, P as PrimaryText, S as SecondaryText } from "../../chunks/Subheader.js";
import { C as CommonIcon } from "../../chunks/Svg.js";
import { L as List, I as Item, G as Graphic } from "../../chunks/Graphic.js";
import { B as Button, C as CommonLabel } from "../../chunks/Button.js";
import { p as page } from "../../chunks/stores2.js";
import { p as profileImage, s as showLeft, n as navList, r as refreshApp, d as darkMode, c as currentPath } from "../../chunks/stores.js";
import { C as Card } from "../../chunks/Card.js";
import { C as Content$1 } from "../../chunks/ActionIcons.js";
import { T as TopAppBar } from "../../chunks/TopAppBar.js";
import { R as Row, S as Section } from "../../chunks/Title.js";
import { I as IconButton } from "../../chunks/IconButton.js";
import { w as writable } from "../../chunks/index2.js";
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "variant", "open", "fixed", "setOpen", "isOpen", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = void 0 } = $$props;
  let { open = false } = $$props;
  let { fixed = true } = $$props;
  let element;
  let instance = void 0;
  let internalClasses = {};
  let previousFocus = null;
  let focusTrap;
  let scrim = false;
  setContext("SMUI:list:nav", true);
  setContext("SMUI:list:item:nav", true);
  setContext("SMUI:list:wrapFocus", true);
  let oldVariant = variant;
  onDestroy(() => {
    instance && instance.destroy();
    scrim && scrim.removeEventListener("SMUIDrawerScrim:click", handleScrimClick);
  });
  function getInstance() {
    var _a, _b;
    if (scrim) {
      scrim.removeEventListener("SMUIDrawerScrim:click", handleScrimClick);
    }
    if (variant === "modal") {
      scrim = (_b = (_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.querySelector(".mdc-drawer-scrim")) !== null && _b !== void 0 ? _b : false;
      if (scrim) {
        scrim.addEventListener("SMUIDrawerScrim:click", handleScrimClick);
      }
    }
    const Foundation = variant === "dismissible" ? MDCDismissibleDrawerFoundation : variant === "modal" ? MDCModalDrawerFoundation : void 0;
    return Foundation ? new Foundation({
      addClass,
      removeClass,
      hasClass,
      elementHasClass: (element2, className2) => element2.classList.contains(className2),
      saveFocus: () => previousFocus = document.activeElement,
      restoreFocus: () => {
        if (previousFocus && "focus" in previousFocus && element.contains(document.activeElement)) {
          previousFocus.focus();
        }
      },
      focusActiveNavigationItem: () => {
        const activeNavItemEl = element.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");
        if (activeNavItemEl) {
          activeNavItemEl.focus();
        }
      },
      notifyClose: () => {
        open = false;
        dispatch(element, "SMUIDrawer:closed", void 0, void 0, true);
      },
      notifyOpen: () => {
        open = true;
        dispatch(element, "SMUIDrawer:opened", void 0, void 0, true);
      },
      trapFocus: () => focusTrap.trapFocus(),
      releaseFocus: () => focusTrap.releaseFocus()
    }) : void 0;
  }
  function hasClass(className2) {
    return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
  }
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function handleScrimClick() {
    instance && "handleScrimClick" in instance && instance.handleScrimClick();
  }
  function setOpen(value) {
    open = value;
  }
  function isOpen() {
    return open;
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.setOpen === void 0 && $$bindings.setOpen && setOpen !== void 0)
    $$bindings.setOpen(setOpen);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    if (oldVariant !== variant) {
      oldVariant = variant;
      instance && instance.destroy();
      internalClasses = {};
      instance = getInstance();
      instance && instance.init();
    }
  }
  {
    if (instance && instance.isOpen() !== open) {
      if (open) {
        instance.open();
      } else {
        instance.close();
      }
    }
  }
  return `<aside${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-drawer": true,
          "mdc-drawer--dismissible": variant === "dismissible",
          "mdc-drawer--modal": variant === "modal",
          "smui-drawer__absolute": variant === "modal" && !fixed,
          ...internalClasses
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</aside>`;
});
const AppContent = classAdderBuilder({
  class: "mdc-drawer-app-content",
  tag: "div"
});
const Content = classAdderBuilder({
  class: "mdc-drawer__content",
  tag: "div"
});
classAdderBuilder({
  class: "mdc-drawer__header",
  tag: "div"
});
classAdderBuilder({
  class: "mdc-drawer__title",
  tag: "h1"
});
classAdderBuilder({
  class: "mdc-drawer__subtitle",
  tag: "h2"
});
const Scrim = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "fixed", "component", "tag", "getElement"]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { fixed = true } = $$props;
  let element;
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? "div" : void 0 } = $$props;
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        { tag },
        { use: [forwardEvents, ...use] },
        {
          class: classMap({
            [className]: true,
            "mdc-drawer-scrim": true,
            "smui-drawer-scrim__absolute": !fixed
          })
        },
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Separator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "padded",
    "inset",
    "insetLeading",
    "insetTrailing",
    "insetPadding",
    "component",
    "tag",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { padded = false } = $$props;
  let { inset = false } = $$props;
  let { insetLeading = false } = $$props;
  let { insetTrailing = false } = $$props;
  let { insetPadding = false } = $$props;
  let element;
  let nav = getContext("SMUI:list:item:nav");
  let context = getContext("SMUI:separator:context");
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? nav || context !== "list" ? "hr" : "li" : void 0 } = $$props;
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.padded === void 0 && $$bindings.padded && padded !== void 0)
    $$bindings.padded(padded);
  if ($$props.inset === void 0 && $$bindings.inset && inset !== void 0)
    $$bindings.inset(inset);
  if ($$props.insetLeading === void 0 && $$bindings.insetLeading && insetLeading !== void 0)
    $$bindings.insetLeading(insetLeading);
  if ($$props.insetTrailing === void 0 && $$bindings.insetTrailing && insetTrailing !== void 0)
    $$bindings.insetTrailing(insetTrailing);
  if ($$props.insetPadding === void 0 && $$bindings.insetPadding && insetPadding !== void 0)
    $$bindings.insetPadding(insetPadding);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        { tag },
        { use: [forwardEvents, ...use] },
        {
          class: classMap({
            [className]: true,
            "mdc-deprecated-list-divider": true,
            "mdc-deprecated-list-divider--padded": padded,
            "mdc-deprecated-list-divider--inset": inset,
            "mdc-deprecated-list-divider--inset-leading": insetLeading,
            "mdc-deprecated-list-divider--inset-trailing": insetTrailing,
            "mdc-deprecated-list-divider--inset-padding": insetPadding
          })
        },
        { role: "separator" },
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Nav_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "nav.svelte-l592xr{overflow-y:auto;display:flex;justify-content:start;flex-direction:column;padding-bottom:5em}.round.svelte-l592xr{border-radius:50%}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isAuth;
  let $page, $$unsubscribe_page;
  let $profileImage, $$unsubscribe_profileImage;
  let $$unsubscribe_showLeft;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_profileImage = subscribe(profileImage, (value) => $profileImage = value);
  $$unsubscribe_showLeft = subscribe(showLeft, (value) => value);
  $$result.css.add(css$6);
  isAuth = $page.data.user;
  $$unsubscribe_page();
  $$unsubscribe_profileImage();
  $$unsubscribe_showLeft();
  return `<nav class="noScrollbar svelte-l592xr"><div class="top">${isAuth ? `${validate_component(List, "List").$$render($$result, { twoLine: true, avatarList: true }, {}, {
    default: () => {
      return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, {}, {}, {
            default: () => {
              return `<img class="round svelte-l592xr" width="40px" height="40px"${add_attribute("src", $profileImage, 0)} alt="Profile" style="margin-right: 10px;">`;
            }
          })}
                
                ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(PrimaryText, "PrimaryText").$$render($$result, {}, {}, {
                default: () => {
                  return `${escape(isAuth.name)}`;
                }
              })}
                    ${validate_component(SecondaryText, "SecondaryText").$$render($$result, {}, {}, {
                default: () => {
                  return `${escape(isAuth.publicID)}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}` : `${validate_component(List, "List").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-symbols-outlined" }, {}, {
            default: () => {
              return `login`;
            }
          })}
                ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `Log in / Sign up`;
            }
          })}`;
        }
      })}
            `;
    }
  })}`}
        ${validate_component(List, "List").$$render($$result, {}, {}, {
    default: () => {
      return `${isAuth ? `${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `person`;
            }
          })}
                    ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `Profile`;
            }
          })}`;
        }
      })}
                
                
                
                ${validate_component(Separator, "Separator").$$render($$result, {}, {}, {})}` : ``}
            
            `;
    }
  })}
        ${validate_component(List, "List").$$render($$result, {}, {}, {
    default: () => {
      return `
            
            
            `;
    }
  })}
        ${validate_component(Separator, "Separator").$$render($$result, {}, {}, {})}
        ${isAuth ? `<div class="post">${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
        default: () => {
          return `Create Post`;
        }
      })}`;
    }
  })}</div>` : ``}</div>
    <div class="bottom"></div>
</nav>`;
});
const Contact_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".title.svelte-y40hrq{font-size:1.2em}p.svelte-y40hrq{display:flex;align-items:center;gap:1em;font-size:0.8em;margin:0.5em 0}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<article><p class="title svelte-y40hrq">Contact Us</p>
    <p class="svelte-y40hrq"><span class="material-icons">email</span> <span><strong>satirigal</strong>@gmail.com</span></p></article>`;
});
const Copyright_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "p.svelte-a6gmw5{font-size:0.8em;font-weight:300}",
  map: null
};
const Copyright = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<article><p class="svelte-a6gmw5">Copyright © 2023 satirigal.com All Rights Reserved</p></article>`;
});
const Social_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "nav.svelte-svkd07{display:flex;flex-direction:row;flex-wrap:wrap;gap:1em;align-items:center}",
  map: null
};
const Social = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<nav class="svelte-svkd07">
    <a href="https://twitter.com/satirigal"><img width="23px" height="23px" src="/twitter.png" alt="twitter"></a>
    <a href="https://www.youtube.com/@satirigal"><img width="23px" height="23px" src="/youtube.svg" alt="youtube"></a>
    <a href="https://www.instagram.com/satirigal_official/" style="font-size: 0.8em;"><img width="23px" height="23px" src="/instagram.svg" alt="instagram"></a></nav>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "footer.svelte-1juizb1{padding-top:1em;font-family:roboto;padding-bottom:4em}nav.svelte-1juizb1{display:flex;gap:0.5em;align-items:center;flex-wrap:wrap;margin-top:1em}a.svelte-1juizb1{font-size:0.8em}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<footer class="svelte-1juizb1">
    ${validate_component(Social, "Social").$$render($$result, {}, {}, {})}
    ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}
    <nav class="svelte-1juizb1"><ul><li><a href="/about" class="svelte-1juizb1">About Us</a></li>
            
            <li><a href="/legal/privacy" class="svelte-1juizb1">Privacy Policy</a></li>
            <li><a href="/legal/refund" class="svelte-1juizb1">Refund Policy</a></li>
            <li><a href="/legal/terms" class="svelte-1juizb1">Terms and Conditions</a></li>
            <li><a href="/shipping" class="svelte-1juizb1">Shipping</a></li></ul></nav>
    ${validate_component(Copyright, "Copyright").$$render($$result, {}, {}, {})}
</footer>`;
});
const Sidebar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "aside.svelte-kpoyhe{position:relative;display:flex;flex-direction:column;gap:0.5em;overflow-y:auto}",
  map: null
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isAuth;
  let $page, $$unsubscribe_page;
  let $navList, $$unsubscribe_navList;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  $$result.css.add(css$1);
  isAuth = $page.data.user;
  $$unsubscribe_page();
  $$unsubscribe_navList();
  return `<aside class="svelte-kpoyhe">
    ${isAuth ? `${$navList.length > 0 ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `

                ${validate_component(List, "List").$$render($$result, {}, {}, {
        default: () => {
          return `${isAuth ? `${each($navList, (link) => {
            return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
                  default: () => {
                    return `menu_book`;
                  }
                })}
                                ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(link.name)}`;
                  }
                })}
                            `;
              }
            })}`;
          })}` : `${each($navList, (link) => {
            return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
                  default: () => {
                    return `menu_book`;
                  }
                })}
                                ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(link.name)}`;
                  }
                })}
                            `;
              }
            })}`;
          })}`}`;
        }
      })}

                `;
    }
  })}` : ``}` : ``}
    
    ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content$1, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })}
</aside>`;
});
const Analytics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  {
    {
      if (typeof gtag !== "undefined") {
        gtag("config", "G-3NLE1LY8XY", {
          page_title: document.title,
          page_path: $page.url.pathname
        });
      }
    }
  }
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-ga4cyn_START --><script async src="https://www.googletagmanager.com/gtag/js?id=G-3NLE1LY8XY"><\/script><script>window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag("js", new Date());

        gtag("config", "G-3NLE1LY8XY");
    <\/script><!-- HEAD_svelte-ga4cyn_END -->`, ""}`;
});
const presentationMode = writable(false);
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-x2t2l9{box-sizing:border-box}.container.svelte-x2t2l9{width:100%}header.svelte-x2t2l9{min-width:100%;z-index:200}.navback.svelte-x2t2l9{min-height:4em}.nav.svelte-x2t2l9{max-width:150px}.grid.svelte-x2t2l9{display:grid;grid-template-columns:calc(100% - 256px) 256px}.center.svelte-x2t2l9{display:flex;flex-direction:column;width:auto;flex-grow:1;padding:0.5em}.side.svelte-x2t2l9{min-width:250px;position:sticky;top:4em;height:100vh;overflow-y:auto}@media only screen and (max-width: 600px){main.svelte-x2t2l9{display:flex;flex-direction:column;gap:1em;width:100%;flex:1;min-width:300px}.side.svelte-x2t2l9{width:100%;position:relative;height:fit-content}.navback.svelte-x2t2l9{min-height:3.5em}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fixed;
  let $$unsubscribe_refreshApp;
  let $darkMode, $$unsubscribe_darkMode;
  let $showLeft, $$unsubscribe_showLeft;
  let $currentPath, $$unsubscribe_currentPath;
  let $presentationMode, $$unsubscribe_presentationMode;
  $$unsubscribe_refreshApp = subscribe(refreshApp, (value) => value);
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_showLeft = subscribe(showLeft, (value) => $showLeft = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  let W;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    fixed = W < 600;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-191nvh5_START --><link rel="stylesheet" id="theme" href="${"/smui" + escape($darkMode ? "-dark" : "", true) + ".css"}" class="svelte-x2t2l9"><!-- HEAD_svelte-191nvh5_END -->`, ""}
<div class="svelte-x2t2l9">${validate_component(Analytics, "Analytics").$$render($$result, {}, {}, {})}
    <header style="position: relative;" class="svelte-x2t2l9">${validate_component(TopAppBar, "TopAppBar").$$render($$result, { variant: "fixed", color: "secondary" }, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Section, "Section").$$render($$result, { style: "align-items:center;" }, {}, {
              default: () => {
                return `<div class="logo svelte-x2t2l9"><a data-sveltekit-reload href="/" class="svelte-x2t2l9">${validate_component(CommonIcon, "Icon").$$render($$result, {}, {}, {
                  default: () => {
                    return `<img width="40px" height="40px" style="background:white; border-radius:50%;" src="/favicon.png" alt="1" class="svelte-x2t2l9">`;
                  }
                })}</a></div>
                    ${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                  default: () => {
                    return `menu`;
                  }
                })}
                    <span class="svelte-x2t2l9">${escape($currentPath)}</span>`;
              }
            })}
                ${validate_component(Section, "Section").$$render($$result, { align: "end", toolbar: true }, {}, {
              default: () => {
                return `${validate_component(IconButton, "IconButton").$$render(
                  $$result,
                  {
                    class: "material-icons",
                    "aria-label": "Search"
                  },
                  {},
                  {
                    default: () => {
                      return `search`;
                    }
                  }
                )}
                    ${validate_component(IconButton, "IconButton").$$render(
                  $$result,
                  {
                    class: "material-icons",
                    "aria-label": "Search"
                  },
                  {},
                  {
                    default: () => {
                      return `refresh`;
                    }
                  }
                )}
                    
                    ${validate_component(IconButton, "IconButton").$$render(
                  $$result,
                  { toggle: true, pressed: $darkMode },
                  {
                    pressed: ($$value) => {
                      $darkMode = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons", on: true }, {}, {
                        default: () => {
                          return `dark_mode`;
                        }
                      })}
                        ${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
                        default: () => {
                          return `light_mode`;
                        }
                      })}`;
                    }
                  }
                )}`;
              }
            })}`;
          }
        })}`;
      }
    })}
        <div class="navback svelte-x2t2l9"></div></header>

    <div class="container svelte-x2t2l9">${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { variant: "modal", open: $showLeft },
      {
        open: ($$value) => {
          $showLeft = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
            default: () => {
              return `<header class="nav svelte-x2t2l9">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}</header>`;
            }
          })}`;
        }
      }
    )}
        
        ${fixed ? `${validate_component(Scrim, "Scrim").$$render($$result, {}, {}, {})}` : ``}
        ${validate_component(AppContent, "AppContent").$$render($$result, {}, {}, {
      default: () => {
        return `<main class="${escape(null_to_empty($presentationMode || fixed ? "flex" : "grid"), true) + " svelte-x2t2l9"}"><div class="center svelte-x2t2l9">${slots.default ? slots.default({}) : ``}</div>
                ${!$presentationMode ? `<div class="side svelte-x2t2l9">${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}</div>` : ``}</main>`;
      }
    })}</div>
</div>`;
  } while (!$$settled);
  $$unsubscribe_refreshApp();
  $$unsubscribe_darkMode();
  $$unsubscribe_showLeft();
  $$unsubscribe_currentPath();
  $$unsubscribe_presentationMode();
  return $$rendered;
});
export {
  Layout as default
};
