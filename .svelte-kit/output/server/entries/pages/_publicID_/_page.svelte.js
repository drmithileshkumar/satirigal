import { c as create_ssr_component, a as compute_rest_props, g as get_current_component, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute, h as getContext, i as setContext, v as validate_component, m as missing_component, j as globals, q as each, k as subscribe, l as escape, p as set_store_value, x as is_promise, n as noop } from "../../../chunks/index3.js";
import { C as Card } from "../../../chunks/Card.js";
import { C as Content } from "../../../chunks/ActionIcons.js";
import { B as Button, C as CommonLabel } from "../../../chunks/Button.js";
import { f as forwardEventsBuilder, c as classMap, S as SmuiElement } from "../../../chunks/classAdderBuilder.js";
import { e as exclude, p as prefixFilter } from "../../../chunks/prefixFilter.js";
import { R as Ripple } from "../../../chunks/Ripple.js";
import { MDCFadingTabIndicatorFoundation, MDCSlidingTabIndicatorFoundation } from "@material/tab-indicator";
import { p as page } from "../../../chunks/stores2.js";
import { T as Text, P as PrimaryText, S as SecondaryText, M as Meta } from "../../../chunks/Subheader.js";
import { A as Actions } from "../../../chunks/Actions.js";
import { I as IconButton } from "../../../chunks/IconButton.js";
import { C as CommonIcon } from "../../../chunks/Svg.js";
/* empty css                                                           */import { c as currentPath } from "../../../chunks/stores.js";
import { S as Set_1, C as Chip } from "../../../chunks/Set.js";
import { C as Comments } from "../../../chunks/ComposeComment.svelte_svelte_type_style_lang.js";
import { L as List, I as Item, G as Graphic } from "../../../chunks/Graphic.js";
const TabIndicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "active",
    "type",
    "transition",
    "content$use",
    "content$class",
    "activate",
    "deactivate",
    "computeContentClientRect",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { active = false } = $$props;
  let { type = "underline" } = $$props;
  let { transition = "slide" } = $$props;
  let { content$use = [] } = $$props;
  let { content$class = "" } = $$props;
  let element;
  let instance;
  let content;
  let internalClasses = {};
  let contentStyles = {};
  let changeSets = [];
  let oldTransition = transition;
  function getInstance() {
    const Foundation = {
      fade: MDCFadingTabIndicatorFoundation,
      slide: MDCSlidingTabIndicatorFoundation
    }[transition] || MDCSlidingTabIndicatorFoundation;
    return new Foundation({
      addClass: (...props) => doChange(() => addClass(...props)),
      removeClass: (...props) => doChange(() => removeClass(...props)),
      computeContentClientRect,
      setContentStyleProperty: (...props) => doChange(() => addContentStyle(...props))
    });
  }
  function doChange(fn) {
    if (changeSets.length) {
      changeSets[changeSets.length - 1].push(fn);
    } else {
      fn();
    }
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
  function addContentStyle(name, value) {
    if (contentStyles[name] != value) {
      if (value === "" || value == null) {
        delete contentStyles[name];
        contentStyles = contentStyles;
      } else {
        contentStyles[name] = value;
      }
    }
  }
  function activate(previousIndicatorClientRect) {
    active = true;
    instance.activate(previousIndicatorClientRect);
  }
  function deactivate() {
    active = false;
    instance.deactivate();
  }
  function computeContentClientRect() {
    changeSets.push([]);
    changeSets = changeSets;
    return content.getBoundingClientRect();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.content$use === void 0 && $$bindings.content$use && content$use !== void 0)
    $$bindings.content$use(content$use);
  if ($$props.content$class === void 0 && $$bindings.content$class && content$class !== void 0)
    $$bindings.content$class(content$class);
  if ($$props.activate === void 0 && $$bindings.activate && activate !== void 0)
    $$bindings.activate(activate);
  if ($$props.deactivate === void 0 && $$bindings.deactivate && deactivate !== void 0)
    $$bindings.deactivate(deactivate);
  if ($$props.computeContentClientRect === void 0 && $$bindings.computeContentClientRect && computeContentClientRect !== void 0)
    $$bindings.computeContentClientRect(computeContentClientRect);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    if (oldTransition !== transition) {
      oldTransition = transition;
      instance && instance.destroy();
      internalClasses = {};
      contentStyles = {};
      instance = getInstance();
      instance.init();
    }
  }
  {
    if (changeSets.length) {
      requestAnimationFrame(() => {
        var _a;
        const changeSet = (_a = changeSets.shift()) !== null && _a !== void 0 ? _a : [];
        changeSets = changeSets;
        for (const fn of changeSet) {
          fn();
        }
      });
    }
  }
  return `<span${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-tab-indicator": true,
          "mdc-tab-indicator--active": active,
          "mdc-tab-indicator--fade": transition === "fade",
          ...internalClasses
        }))
      },
      escape_object(exclude($$restProps, ["content$"]))
    ],
    {}
  )}${add_attribute("this", element, 0)}><span${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [content$class]: true,
          "mdc-tab-indicator__content": true,
          "mdc-tab-indicator__content--underline": type === "underline",
          "mdc-tab-indicator__content--icon": type === "icon"
        }))
      },
      {
        style: escape_attribute_value(Object.entries(contentStyles).map(([name, value]) => `${name}: ${value};`).join(" "))
      },
      {
        "aria-hidden": escape_attribute_value(type === "icon" ? "true" : void 0)
      },
      escape_object(prefixFilter($$restProps, "content$"))
    ],
    {}
  )}${add_attribute("this", content, 0)}>${slots.default ? slots.default({}) : ``}</span>
</span>`;
});
const { Object: Object_1$1 } = globals;
const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "tab",
    "ripple",
    "stacked",
    "minWidth",
    "indicatorSpanOnlyContent",
    "href",
    "content$use",
    "content$class",
    "component",
    "tag",
    "activate",
    "deactivate",
    "focus",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { tab: tabId } = $$props;
  let { ripple = true } = $$props;
  let { stacked = false } = $$props;
  let { minWidth = false } = $$props;
  let { indicatorSpanOnlyContent = false } = $$props;
  let { href = void 0 } = $$props;
  let { content$use = [] } = $$props;
  let { content$class = "" } = $$props;
  let element;
  let instance;
  let content;
  let tabIndicator;
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  let focusOnActivate = getContext("SMUI:tab:focusOnActivate");
  let active = tabId === getContext("SMUI:tab:initialActive");
  let forceAccessible = false;
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? href == null ? "button" : "a" : void 0 } = $$props;
  setContext("SMUI:label:context", "tab");
  setContext("SMUI:icon:context", "tab");
  if (!tabId) {
    throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");
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
  function activate(previousIndicatorClientRect, skipFocus) {
    active = true;
    if (skipFocus) {
      instance.setFocusOnActivate(false);
    }
    instance.activate(previousIndicatorClientRect);
    if (skipFocus) {
      instance.setFocusOnActivate(focusOnActivate);
    }
  }
  function deactivate() {
    active = false;
    instance.deactivate();
  }
  function focus() {
    getElement().focus();
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
  if ($$props.tab === void 0 && $$bindings.tab && tabId !== void 0)
    $$bindings.tab(tabId);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.stacked === void 0 && $$bindings.stacked && stacked !== void 0)
    $$bindings.stacked(stacked);
  if ($$props.minWidth === void 0 && $$bindings.minWidth && minWidth !== void 0)
    $$bindings.minWidth(minWidth);
  if ($$props.indicatorSpanOnlyContent === void 0 && $$bindings.indicatorSpanOnlyContent && indicatorSpanOnlyContent !== void 0)
    $$bindings.indicatorSpanOnlyContent(indicatorSpanOnlyContent);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.content$use === void 0 && $$bindings.content$use && content$use !== void 0)
    $$bindings.content$use(content$use);
  if ($$props.content$class === void 0 && $$bindings.content$class && content$class !== void 0)
    $$bindings.content$class(content$class);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.activate === void 0 && $$bindings.activate && activate !== void 0)
    $$bindings.activate(activate);
  if ($$props.deactivate === void 0 && $$bindings.deactivate && deactivate !== void 0)
    $$bindings.deactivate(deactivate);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object_1$1.assign(
        {},
        { tag },
        {
          use: [
            [
              Ripple,
              {
                ripple,
                unbounded: false,
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
            "mdc-tab": true,
            "mdc-tab--active": active,
            "mdc-tab--stacked": stacked,
            "mdc-tab--min-width": minWidth,
            ...internalClasses
          })
        },
        {
          style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
        },
        { role: "tab" },
        {
          "aria-selected": active ? "true" : "false"
        },
        {
          tabindex: active || forceAccessible ? "0" : "-1"
        },
        { href },
        internalAttrs,
        exclude($$restProps, ["content$", "tabIndicator$"]),
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
          return `<span${spread(
            [
              {
                class: escape_attribute_value(classMap({
                  [content$class]: true,
                  "mdc-tab__content": true
                }))
              },
              escape_object(prefixFilter($$restProps, "content$"))
            ],
            {}
          )}${add_attribute("this", content, 0)}>${slots.default ? slots.default({}) : ``}
    ${indicatorSpanOnlyContent ? `${validate_component(TabIndicator, "TabIndicator").$$render(
            $$result,
            Object_1$1.assign({}, { active }, prefixFilter($$restProps, "tabIndicator$"), { this: tabIndicator }),
            {
              this: ($$value) => {
                tabIndicator = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${slots["tab-indicator"] ? slots["tab-indicator"]({}) : ``}`;
              }
            }
          )}` : ``}</span>
  ${!indicatorSpanOnlyContent ? `${validate_component(TabIndicator, "TabIndicator").$$render(
            $$result,
            Object_1$1.assign({}, { active }, prefixFilter($$restProps, "tabIndicator$"), { this: tabIndicator }),
            {
              this: ($$value) => {
                tabIndicator = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${slots["tab-indicator"] ? slots["tab-indicator"]({}) : ``}`;
              }
            }
          )}` : ``}
  <span class="mdc-tab__ripple"></span>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const TabScroller = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "align",
    "scrollArea$use",
    "scrollArea$class",
    "scrollContent$use",
    "scrollContent$class",
    "getScrollPosition",
    "getScrollContentWidth",
    "incrementScroll",
    "scrollTo",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { align = void 0 } = $$props;
  let { scrollArea$use = [] } = $$props;
  let { scrollArea$class = "" } = $$props;
  let { scrollContent$use = [] } = $$props;
  let { scrollContent$class = "" } = $$props;
  let element;
  let instance;
  let scrollArea;
  let scrollContent;
  let internalClasses = {};
  let scrollAreaClasses = {};
  let scrollAreaStyles = {};
  let scrollContentStyles = {};
  function getScrollPosition() {
    return instance.getScrollPosition();
  }
  function getScrollContentWidth() {
    return scrollContent.offsetWidth;
  }
  function incrementScroll(scrollXIncrement) {
    instance.incrementScroll(scrollXIncrement);
  }
  function scrollTo(scrollX) {
    instance.scrollTo(scrollX);
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.scrollArea$use === void 0 && $$bindings.scrollArea$use && scrollArea$use !== void 0)
    $$bindings.scrollArea$use(scrollArea$use);
  if ($$props.scrollArea$class === void 0 && $$bindings.scrollArea$class && scrollArea$class !== void 0)
    $$bindings.scrollArea$class(scrollArea$class);
  if ($$props.scrollContent$use === void 0 && $$bindings.scrollContent$use && scrollContent$use !== void 0)
    $$bindings.scrollContent$use(scrollContent$use);
  if ($$props.scrollContent$class === void 0 && $$bindings.scrollContent$class && scrollContent$class !== void 0)
    $$bindings.scrollContent$class(scrollContent$class);
  if ($$props.getScrollPosition === void 0 && $$bindings.getScrollPosition && getScrollPosition !== void 0)
    $$bindings.getScrollPosition(getScrollPosition);
  if ($$props.getScrollContentWidth === void 0 && $$bindings.getScrollContentWidth && getScrollContentWidth !== void 0)
    $$bindings.getScrollContentWidth(getScrollContentWidth);
  if ($$props.incrementScroll === void 0 && $$bindings.incrementScroll && incrementScroll !== void 0)
    $$bindings.incrementScroll(incrementScroll);
  if ($$props.scrollTo === void 0 && $$bindings.scrollTo && scrollTo !== void 0)
    $$bindings.scrollTo(scrollTo);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-tab-scroller": true,
          "mdc-tab-scroller--align-start": align === "start",
          "mdc-tab-scroller--align-end": align === "end",
          "mdc-tab-scroller--align-center": align === "center",
          ...internalClasses
        }))
      },
      escape_object(exclude($$restProps, ["scrollArea$", "scrollContent$"]))
    ],
    {}
  )}${add_attribute("this", element, 0)}><div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [scrollArea$class]: true,
          "mdc-tab-scroller__scroll-area": true,
          ...scrollAreaClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(scrollAreaStyles).map(([name, value]) => `${name}: ${value};`).join(" "))
      },
      escape_object(prefixFilter($$restProps, "scrollArea$"))
    ],
    {}
  )}${add_attribute("this", scrollArea, 0)}><div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [scrollContent$class]: true,
          "mdc-tab-scroller__scroll-content": true
        }))
      },
      {
        style: escape_attribute_value(Object.entries(scrollContentStyles).map(([name, value]) => `${name}: ${value};`).join(" "))
      },
      escape_object(prefixFilter($$restProps, "scrollContent$"))
    ],
    {}
  )}${add_attribute("this", scrollContent, 0)}>${slots.default ? slots.default({}) : ``}</div></div>
</div>`;
});
const { Object: Object_1 } = globals;
const TabBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "tabs",
    "key",
    "focusOnActivate",
    "focusOnProgrammatic",
    "useAutomaticActivation",
    "active",
    "tabindex",
    "scrollIntoView",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { tabs = [] } = $$props;
  let { key = (tab) => tab } = $$props;
  let { focusOnActivate = true } = $$props;
  let { focusOnProgrammatic = false } = $$props;
  let { useAutomaticActivation = true } = $$props;
  let { active = void 0 } = $$props;
  let { tabindex = 0 } = $$props;
  let element;
  let instance;
  let tabScroller;
  let activeIndex = tabs.indexOf(active);
  let tabAccessorMap = {};
  let tabAccessorWeakMap = /* @__PURE__ */ new WeakMap();
  setContext("SMUI:tab:focusOnActivate", focusOnActivate);
  setContext("SMUI:tab:initialActive", active);
  function scrollIntoView(index) {
    instance.scrollIntoView(index);
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs !== void 0)
    $$bindings.tabs(tabs);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.focusOnActivate === void 0 && $$bindings.focusOnActivate && focusOnActivate !== void 0)
    $$bindings.focusOnActivate(focusOnActivate);
  if ($$props.focusOnProgrammatic === void 0 && $$bindings.focusOnProgrammatic && focusOnProgrammatic !== void 0)
    $$bindings.focusOnProgrammatic(focusOnProgrammatic);
  if ($$props.useAutomaticActivation === void 0 && $$bindings.useAutomaticActivation && useAutomaticActivation !== void 0)
    $$bindings.useAutomaticActivation(useAutomaticActivation);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.scrollIntoView === void 0 && $$bindings.scrollIntoView && scrollIntoView !== void 0)
    $$bindings.scrollIntoView(scrollIntoView);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (active !== tabs[activeIndex]) {
        activeIndex = tabs.indexOf(active);
      }
    }
    {
      if (tabs.length) {
        const accessor = tabs[0] instanceof Object ? tabAccessorWeakMap.get(tabs[0]) : tabAccessorMap[tabs[0]];
        if (accessor) {
          accessor.forceAccessible(activeIndex === -1);
        }
      }
    }
    $$rendered = `<div${spread(
      [
        {
          class: escape_attribute_value(classMap({ [className]: true, "mdc-tab-bar": true }))
        },
        { role: "tablist" },
        {
          tabindex: escape_attribute_value(tabindex)
        },
        escape_object(exclude($$restProps, ["tabScroller$"]))
      ],
      {}
    )}${add_attribute("this", element, 0)}>${validate_component(TabScroller, "TabScroller").$$render(
      $$result,
      Object_1.assign({}, prefixFilter($$restProps, "tabScroller$"), { this: tabScroller }),
      {
        this: ($$value) => {
          tabScroller = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(tabs, (tab) => {
            return `${slots.default ? slots.default({ tab }) : ``}`;
          })}`;
        }
      }
    )}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
const User_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".photos.svelte-c62z4e.svelte-c62z4e{position:relative}.banner.svelte-c62z4e.svelte-c62z4e{width:100%;height:170px;background-color:rgba(0, 247, 255, 0.919)}.profile.svelte-c62z4e.svelte-c62z4e{position:absolute;bottom:-50px;left:10px;width:120px;height:120px;border-radius:50%;background-color:white;border-width:2px;overflow:hidden}.banner.svelte-c62z4e img.svelte-c62z4e,.profile.svelte-c62z4e img.svelte-c62z4e{width:100%;height:100%}.action.svelte-c62z4e.svelte-c62z4e{display:flex;align-items:center;justify-content:end}.details.svelte-c62z4e.svelte-c62z4e{margin-left:1em}.name.svelte-c62z4e.svelte-c62z4e{display:flex;gap:0.3em;font-weight:bold;font-size:1.1em;margin-top:1em;align-items:center}.publicID.svelte-c62z4e.svelte-c62z4e{font-size:0.9em}.aboutme.svelte-c62z4e p.svelte-c62z4e{margin-bottom:0}.aboutme.svelte-c62z4e.svelte-c62z4e,.summary.svelte-c62z4e.svelte-c62z4e{font-size:0.8em}.summary.svelte-c62z4e.svelte-c62z4e{display:flex;flex-direction:row;align-items:center;gap:1em}.prop.svelte-c62z4e.svelte-c62z4e{display:flex;align-items:center;gap:0.3em}.bullet.svelte-c62z4e.svelte-c62z4e{display:flex;width:7px;height:7px;border-radius:50%;background:currentColor}",
  map: null
};
const User = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tabs;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { banner } = $$props;
  let { profile } = $$props;
  let { currentUser } = $$props;
  let { currentUserDetail } = $$props;
  let { active } = $$props;
  if ($$props.banner === void 0 && $$bindings.banner && banner !== void 0)
    $$bindings.banner(banner);
  if ($$props.profile === void 0 && $$bindings.profile && profile !== void 0)
    $$bindings.profile(profile);
  if ($$props.currentUser === void 0 && $$bindings.currentUser && currentUser !== void 0)
    $$bindings.currentUser(currentUser);
  if ($$props.currentUserDetail === void 0 && $$bindings.currentUserDetail && currentUserDetail !== void 0)
    $$bindings.currentUserDetail(currentUserDetail);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  $$result.css.add(css$6);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (profile === "data:")
        profile = "/avatar.svg";
    }
    {
      if (banner === "data:")
        banner = "/landing/banner.svg";
    }
    tabs = [
      `${currentUserDetail.common.following} Following`,
      `${currentUserDetail.common.followers} Followers`,
      "Posts",
      "Comments",
      "Likes"
    ];
    $$rendered = `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="photos svelte-c62z4e"><div class="banner svelte-c62z4e"><img${add_attribute("src", banner, 0)} alt="banner" class="svelte-c62z4e"></div>
        <div class="profile svelte-c62z4e"><img src="user.svg" alt="" class="svelte-c62z4e"></div></div>
    <div class="action svelte-c62z4e">${$page.data.user && $page.data.user.publicID === currentUser.publicID ? `${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Edit Profile`;
          }
        })}` : `${currentUserDetail.isFollowing ? `${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Following`;
          }
        })}` : `${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Follow`;
          }
        })}`}`}</div>
    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
          default: () => {
            return `<div class="details svelte-c62z4e"><div class="userInfo"><div class="name svelte-c62z4e"><span class="mdc-typography--headline5">${escape(currentUser.name)}</span>
                    <span class="material-icons">verified</span></div>
                <div class="publicID svelte-c62z4e">${escape(currentUser.publicID)}</div></div>
            <div class="aboutme svelte-c62z4e"><p class="svelte-c62z4e">${escape(currentUserDetail.common.bio)}</p></div>
            <div class="summary svelte-c62z4e"><span class="prop svelte-c62z4e"><span class="icon material-icons">stars</span>
                    <span class="propName">${escape(currentUserDetail.details.rank.label)}</span></span>
                <span class="bullet svelte-c62z4e"></span>
                <span class="prop svelte-c62z4e"><span class="icon material-icons">link</span>
                    <span class="propName">${escape(currentUserDetail.common.website)}</span></span></div>
            </div>`;
          }
        })}

    ${validate_component(TabBar, "TabBar").$$render(
          $$result,
          { tabs, active },
          {
            active: ($$value) => {
              active = $$value;
              $$settled = false;
            }
          },
          {
            default: ({ tab }) => {
              return `${validate_component(Tab, "Tab").$$render($$result, { tab }, {}, {
                default: () => {
                  return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(tab)}`;
                    }
                  })}`;
                }
              })}`;
            }
          }
        )}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const Post_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".postcontainer.svelte-u73mm1.svelte-u73mm1{display:grid;grid-template-columns:50px auto;gap:0.5em}.image.svelte-u73mm1.svelte-u73mm1{width:50px;height:50px;border-radius:50%;overflow:hidden}.image.svelte-u73mm1 img.svelte-u73mm1{width:50px;height:50px}.header.svelte-u73mm1.svelte-u73mm1{display:flex;flex-direction:row;align-items:center;gap:0.5em}.header.svelte-u73mm1 .primary.svelte-u73mm1{font-weight:bold}.header.svelte-u73mm1 .secondary.svelte-u73mm1{color:gray;font-size:0.9em}.primary.svelte-u73mm1.svelte-u73mm1{cursor:pointer}.postcontent.svelte-u73mm1.svelte-u73mm1{text-overflow:ellipsis;overflow:hidden}",
  map: null
};
const Post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let profile = "";
  let isPostLiked = false;
  let { post = {
    name: "",
    publicID: "",
    //public
    media: "",
    profileImage: "",
    title: "",
    subtitle: "",
    summary: "",
    content: "",
    comments: [],
    shares: [],
    likes: [],
    creationTimeStamp: Date.now()
  } } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css$5);
  $$unsubscribe_page();
  return `


${validate_component(Card, "Card").$$render($$result, {}, {}, {
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
        <div class="postcontainer svelte-u73mm1"><div class="image svelte-u73mm1"><img${add_attribute("src", profile, 0)}${add_attribute("alt", post.name, 0)} class="svelte-u73mm1"></div>
            <div class="body"><div class="header svelte-u73mm1"><span class="primary svelte-u73mm1">${escape(post.name)}</span>
                    <span class="secondary svelte-u73mm1"><span>${escape(post.publicID)}</span>
                        <span>${escape(new Date(post.creationTimeStamp).toLocaleString())}</span></span></div>
                <div class="postcontent svelte-u73mm1"><!-- HTML_TAG_START -->${post.summary || post.content}<!-- HTML_TAG_END --></div></div></div>`;
        }
      })}
    ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `
            ${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `Show more`;
                }
              })}`;
            }
          })}
        ${validate_component(Button, "Button").$$render($$result, {}, {}, {
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
${``}`;
});
const Posts_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".posts.svelte-19oat9w{display:flex;flex-direction:column;gap:1em}",
  map: null
};
const Posts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts = [] } = $$props;
  let { profile = "" } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  if ($$props.profile === void 0 && $$bindings.profile && profile !== void 0)
    $$bindings.profile(profile);
  $$result.css.add(css$4);
  return `<div class="posts svelte-19oat9w">${posts.length ? each(posts, (post) => {
    return `${validate_component(Post, "Post").$$render($$result, { post, profile }, {}, {})}`;
  }) : `<p>Your posts here.</p>`}
</div>`;
});
const Likes_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".likes.svelte-9j6vnp{display:flex;flex-direction:column;gap:1em}",
  map: null
};
const Likes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let likes = [];
  $$result.css.add(css$3);
  $$unsubscribe_page();
  return `<div class="likes svelte-9j6vnp">${likes.length ? each(likes, (like) => {
    return `${validate_component(Post, "Post").$$render($$result, { post: like }, {}, {})}`;
  }) : `<p>Your liked posts here.</p>`}
</div>`;
});
const Followers_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "img.svelte-1le426r{width:100%;height:100%;overflow:hidden;border-radius:50%}.following.svelte-1le426r{white-space:nowrap;color:red}",
  map: null
};
const Followers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let followers = [];
  let list, selectionIndex, followerProfiles = {};
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(List, "List").$$render(
          $$result,
          {
            class: "demo-list",
            twoLine: true,
            avatarList: true,
            singleSelection: true,
            selectedIndex: selectionIndex,
            this: list
          },
          {
            this: ($$value) => {
              list = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `${each(followers, (follower, i) => {
                return `${validate_component(Item, "Item").$$render($$result, { selected: selectionIndex === i }, {}, {
                  default: () => {
                    return `${validate_component(Graphic, "Graphic").$$render($$result, {}, {}, {
                      default: () => {
                        return `<img width="100%" height="100%"${add_attribute("src", followerProfiles[follower.publicID], 0)} alt="profile" class="svelte-1le426r">
        `;
                      }
                    })}
          
        ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(PrimaryText, "PrimaryText").$$render($$result, {}, {}, {
                          default: () => {
                            return `${escape(follower.name)}`;
                          }
                        })}
          ${validate_component(SecondaryText, "SecondaryText").$$render($$result, {}, {}, {
                          default: () => {
                            return `${escape(follower?.bio)}`;
                          }
                        })}
        `;
                      }
                    })}
        ${validate_component(Meta, "Meta").$$render($$result, {}, {}, {
                      default: () => {
                        return `<span class="following svelte-1le426r">${escape(follower.isFollow ? "" : "Not")} Following</span>
        `;
                      }
                    })}
      `;
                  }
                })}`;
              })}`;
            }
          }
        )}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const Followings_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "img.svelte-1le426r{width:100%;height:100%;overflow:hidden;border-radius:50%}.following.svelte-1le426r{white-space:nowrap;color:red}",
  map: null
};
const Followings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let followings = [];
  let list, selectionIndex, followingProfiles = {};
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(List, "List").$$render(
          $$result,
          {
            class: "demo-list",
            twoLine: true,
            avatarList: true,
            singleSelection: true,
            selectedIndex: selectionIndex,
            this: list
          },
          {
            this: ($$value) => {
              list = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `${each(followings, (following, i) => {
                return `${validate_component(Item, "Item").$$render($$result, { selected: selectionIndex === i }, {}, {
                  default: () => {
                    return `${validate_component(Graphic, "Graphic").$$render($$result, {}, {}, {
                      default: () => {
                        return `<img width="100%" height="100%"${add_attribute("src", followingProfiles[following.publicID], 0)} alt="profile" class="svelte-1le426r">
        `;
                      }
                    })}
          
        ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(PrimaryText, "PrimaryText").$$render($$result, {}, {}, {
                          default: () => {
                            return `${escape(following.name)}`;
                          }
                        })}
          ${validate_component(SecondaryText, "SecondaryText").$$render($$result, {}, {}, {
                          default: () => {
                            return `${escape(following?.bio)}`;
                          }
                        })}
        `;
                      }
                    })}
        ${validate_component(Meta, "Meta").$$render($$result, {}, {}, {
                      default: () => {
                        return `<span class="following svelte-1le426r">${escape(following.isFollow ? "" : "Not")} Following</span>
        `;
                      }
                    })}
      `;
                  }
                })}`;
              })}`;
            }
          }
        )}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-c1kt0g{width:100%;display:flex;flex-direction:column;gap:0.5em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  let { data } = $$props;
  let profile = "", banner;
  const getPosts = async () => {
    const resPosts = await fetch(`/api/${$page.params.publicID}/posts`);
    if (!resPosts.ok)
      return [];
    else {
      return await resPosts.json();
    }
  };
  const getComments = async () => {
    const resComments = await fetch(`/api/${$page.params.publicID}/comments`);
    if (!resComments.ok)
      return [];
    else {
      return await resComments.json();
    }
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    set_store_value(currentPath, $currentPath = `${$page.params.publicID}`, $currentPath);
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1yfmb0p_START -->${$$result.title = `<title>Satirigal</title>`, ""}<meta name="description" content="Mathematics workout for all."><meta name="keywords" content="satirigal.com, mathematics"><link rel="canonical" href="${"https://satirigal.com/$" + escape(data.currentUser.publicID, true)}"><!-- HEAD_svelte-1yfmb0p_END -->`, ""}
<article class="svelte-c1kt0g">${validate_component(User, "User").$$render(
      $$result,
      {
        banner,
        profile,
        currentUser: data.currentUser,
        currentUserDetail: data.currentUserDetail,
        active: data.active
      },
      {
        active: ($$value) => {
          data.active = $$value;
          $$settled = false;
        }
      },
      {}
    )}
    
    ${$page.data.user && $page.data.user.publicID === data.currentUser.publicID ? `` : ``}
    
    ${data.active === "Posts" ? `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ``;
      }
      return function(posts) {
        return `
            ${validate_component(Posts, "Posts").$$render($$result, { posts, profile }, {}, {})}
        `;
      }(__value);
    }(getPosts())}` : `${data.active === "Comments" ? `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ``;
      }
      return function(comments) {
        return `
            ${validate_component(Comments, "Comments").$$render($$result, { comments, profile }, {}, {})}
        `;
      }(__value);
    }(getComments())}` : `${data.active === "Likes" ? `${validate_component(Likes, "Likes").$$render($$result, { profile }, {}, {})}` : `${data.active?.includes("Following") ? `${validate_component(Followings, "Followings").$$render($$result, { profile }, {}, {})}` : `${data.active?.includes("Followers") ? `${validate_component(Followers, "Followers").$$render($$result, { profile }, {}, {})}` : ``}`}`}`}`}

</article>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_currentPath();
  return $$rendered;
});
export {
  Page as default
};
