import { c as create_ssr_component, a as compute_rest_props, g as get_current_component, i as setContext, v as validate_component, m as missing_component, j as globals, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute, l as escape } from "../../../chunks/index3.js";
import "../../../chunks/ActionIcons.js";
import { B as Button, C as CommonLabel } from "../../../chunks/Button.js";
import { f as forwardEventsBuilder, c as classMap, S as SmuiElement, a as classAdderBuilder } from "../../../chunks/classAdderBuilder.js";
import { C as CommonIcon } from "../../../chunks/Svg.js";
import { M as Menu } from "../../../chunks/SelectionGroupIcon.js";
import { L as List, I as Item } from "../../../chunks/Graphic.js";
import { T as Text } from "../../../chunks/Subheader.js";
import "../../../chunks/Suffix.js";
import { I as Input } from "../../../chunks/Input.js";
import { R as Ripple } from "../../../chunks/Ripple.js";
const { Object: Object_1 } = globals;
const Fab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "ripple",
    "focusRing",
    "color",
    "mini",
    "exited",
    "extended",
    "touch",
    "href",
    "component",
    "tag",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { focusRing = false } = $$props;
  let { color = "secondary" } = $$props;
  let { mini = false } = $$props;
  let { exited = false } = $$props;
  let { extended = false } = $$props;
  let { touch = false } = $$props;
  let { href = void 0 } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? href == null ? "button" : "a" : void 0 } = $$props;
  setContext("SMUI:label:context", "fab");
  setContext("SMUI:icon:context", "fab");
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
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.focusRing === void 0 && $$bindings.focusRing && focusRing !== void 0)
    $$bindings.focusRing(focusRing);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.mini === void 0 && $$bindings.mini && mini !== void 0)
    $$bindings.mini(mini);
  if ($$props.exited === void 0 && $$bindings.exited && exited !== void 0)
    $$bindings.exited(exited);
  if ($$props.extended === void 0 && $$bindings.extended && extended !== void 0)
    $$bindings.extended(extended);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
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
      Object_1.assign(
        {},
        { tag },
        {
          use: [
            [
              Ripple,
              {
                ripple,
                unbounded: false,
                color,
                disabled: !!$$restProps.disabled,
                addClass,
                removeClass,
                addStyle
              }
            ],
            forwardEvents,
            ...use
          ]
        },
        {
          class: classMap({
            [className]: true,
            "mdc-fab": true,
            "mdc-fab--mini": mini,
            "mdc-fab--exited": exited,
            "mdc-fab--extended": extended,
            "smui-fab--color-primary": color === "primary",
            "mdc-fab--touch": touch,
            ...internalClasses
          })
        },
        {
          style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
        },
        { href },
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
          return `<div class="mdc-fab__ripple"></div>
  ${focusRing ? `<div class="mdc-fab__focus-ring"></div>` : ``}
  ${slots.default ? slots.default({}) : ``}${touch ? `<div class="mdc-fab__touch"></div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Group = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "variant", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = "text" } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "smui-button__group": true,
          "smui-button__group--raised": variant === "raised"
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const Paper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "variant", "square", "color", "elevation", "transition", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = "raised" } = $$props;
  let { square = false } = $$props;
  let { color = "default" } = $$props;
  let { elevation = 1 } = $$props;
  let { transition = false } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.square === void 0 && $$bindings.square && square !== void 0)
    $$bindings.square(square);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.elevation === void 0 && $$bindings.elevation && elevation !== void 0)
    $$bindings.elevation(elevation);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "smui-paper": true,
          "smui-paper--raised": variant === "raised",
          "smui-paper--unelevated": variant === "unelevated",
          "smui-paper--outlined": variant === "outlined",
          ["smui-paper--elevation-z" + elevation]: elevation !== 0 && variant === "raised",
          "smui-paper--rounded": !square,
          ["smui-paper--color-" + color]: color !== "default",
          "smui-paper-transition": transition
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
classAdderBuilder({
  class: "smui-paper__content",
  tag: "div"
});
classAdderBuilder({
  class: "smui-paper__title",
  tag: "h5"
});
classAdderBuilder({
  class: "smui-paper__subtitle",
  tag: "h6"
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-rhxy8{display:flex;flex-direction:column;gap:0.5em}.solo-demo-container.svelte-rhxy8{padding:36px 18px;border:1px solid var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1))}.solo-container.svelte-rhxy8{display:flex;justify-content:center;align-items:center}.svelte-rhxy8 .solo-paper{display:flex;align-items:center;flex-grow:1;max-width:600px;margin:0 12px;padding:0 12px;height:48px}.svelte-rhxy8 .solo-paper > *{display:inline-block;margin:0 12px}.svelte-rhxy8 .solo-input{flex-grow:1;color:currentColor}.svelte-rhxy8 .solo-input::placeholder{opacity:0.6}.svelte-rhxy8 .solo-fab{flex-shrink:0}img.svelte-rhxy8{width:100%;height:100%;border-radius:50%;overflow:hidden}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let menu;
  let searchKey = "name", value;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<article class="svelte-rhxy8"><div class="solo-demo-container solo-container svelte-rhxy8">${validate_component(Group, "Group").$$render($$result, { variant: "raised" }, {}, {
      default: () => {
        return `${validate_component(Button, "Button").$$render($$result, { variant: "raised" }, {}, {
          default: () => {
            return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
              default: () => {
                return `${escape(searchKey.toUpperCase())}`;
              }
            })}`;
          }
        })}
            <div class="svelte-rhxy8">${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "raised",
            style: "padding: 0; min-width: 36px;"
          },
          {},
          {
            default: () => {
              return `${validate_component(CommonIcon, "Icon").$$render(
                $$result,
                {
                  class: "material-icons",
                  style: "margin: 0;"
                },
                {},
                {
                  default: () => {
                    return `arrow_drop_down`;
                  }
                }
              )}`;
            }
          }
        )}
                ${validate_component(Menu, "Menu").$$render(
          $$result,
          { anchorCorner: "TOP_LEFT", this: menu },
          {
            this: ($$value) => {
              menu = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `${validate_component(List, "List").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                        default: () => {
                          return `Name`;
                        }
                      })}`;
                    }
                  })}
                        ${validate_component(Item, "Item").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                        default: () => {
                          return `Public ID`;
                        }
                      })}`;
                    }
                  })}
                        ${validate_component(Item, "Item").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                        default: () => {
                          return `City`;
                        }
                      })}`;
                    }
                  })}
                        `;
                }
              })}`;
            }
          }
        )}</div>`;
      }
    })}
        ${validate_component(Paper, "Paper").$$render($$result, { class: "solo-paper", elevation: 6 }, {}, {
      default: () => {
        return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
          default: () => {
            return `search`;
          }
        })}
            ${validate_component(Input, "Input").$$render(
          $$result,
          {
            placeholder: "Enter " + searchKey,
            class: "solo-input",
            value
          },
          {
            value: ($$value) => {
              value = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}
        ${validate_component(Fab, "Fab").$$render(
      $$result,
      {
        disabled: value === "",
        color: "primary",
        mini: true,
        class: "solo-fab"
      },
      {},
      {
        default: () => {
          return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `arrow_forward`;
            }
          })}`;
        }
      }
    )}</div>
    ${``}
</article>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
