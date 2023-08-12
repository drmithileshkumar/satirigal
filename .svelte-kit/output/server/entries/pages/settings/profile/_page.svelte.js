import { c as create_ssr_component, a as compute_rest_props, g as get_current_component, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute, v as validate_component, q as each, l as escape, k as subscribe, h as getContext, i as setContext, o as onDestroy, p as set_store_value } from "../../../../chunks/index3.js";
import { T as Textfield } from "../../../../chunks/Textfield.js";
import "../../../../chunks/Suffix.js";
import { T as Title, S as Section } from "../../../../chunks/Title.js";
import { B as Button, C as CommonLabel } from "../../../../chunks/Button.js";
import { I as IconButton } from "../../../../chunks/IconButton.js";
import { f as forwardEventsBuilder, c as classMap, a as classAdderBuilder } from "../../../../chunks/classAdderBuilder.js";
import { T as Text, d as dispatch } from "../../../../chunks/Subheader.js";
import { e as exclude, p as prefixFilter } from "../../../../chunks/prefixFilter.js";
import { M as Menu } from "../../../../chunks/SelectionGroupIcon.js";
import { L as List, I as Item } from "../../../../chunks/Graphic.js";
import { w as writable } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/stores2.js";
import { b as bannerImage, c as currentPath, p as profileImage } from "../../../../chunks/stores.js";
const Autocomplete = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "options",
    "value",
    "getOptionDisabled",
    "getOptionLabel",
    "text",
    "label",
    "disabled",
    "toggle",
    "combobox",
    "clearOnBlur",
    "selectOnExactMatch",
    "showMenuWithNoInput",
    "noMatchesActionDisabled",
    "search",
    "menu$class",
    "menu$anchor",
    "menu$anchorCorner",
    "focus",
    "blur",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { options = [] } = $$props;
  let { value = void 0 } = $$props;
  let { getOptionDisabled = () => false } = $$props;
  let { getOptionLabel = (option) => option == null ? "" : `${option}` } = $$props;
  let { text = getOptionLabel(value) } = $$props;
  let { label = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { toggle = false } = $$props;
  let { combobox = false } = $$props;
  let { clearOnBlur = !combobox } = $$props;
  let { selectOnExactMatch = true } = $$props;
  let { showMenuWithNoInput = true } = $$props;
  let { noMatchesActionDisabled = true } = $$props;
  let { search = async (input) => {
    const linput = input.toLowerCase();
    const fullOptions = typeof options == "function" ? await options() : options || [];
    if (linput === "") {
      return fullOptions;
    }
    const result = fullOptions.filter((item) => getOptionLabel(item).toLowerCase().includes(linput));
    result.sort((a, b) => {
      const aString = getOptionLabel(a).toLowerCase();
      const bString = getOptionLabel(b).toLowerCase();
      if (aString.startsWith(linput) && !bString.startsWith(linput)) {
        return -1;
      } else if (bString.startsWith(linput) && !aString.startsWith(linput)) {
        return 1;
      }
      return 0;
    });
    return result;
  } } = $$props;
  let { menu$class = "" } = $$props;
  let { menu$anchor = false } = $$props;
  let { menu$anchorCorner = "BOTTOM_START" } = $$props;
  let element;
  let inputContainer;
  let loading = false;
  let error = false;
  let focused = false;
  let matches = [];
  let focusedIndex = -1;
  let previousText = text;
  let previousValue = value;
  let previousFocusedIndex = void 0;
  async function performSearch() {
    loading = true;
    error = false;
    try {
      const searchResult = await search(text);
      if (searchResult !== false) {
        matches = searchResult;
        if (selectOnExactMatch) {
          const exactMatch = matches.find((match) => getOptionLabel(match) === text);
          if (exactMatch && value !== exactMatch) {
            selectOption(exactMatch);
          }
        }
      }
    } catch (e) {
      error = true;
    }
    loading = false;
  }
  function selectOption(option, setText = true) {
    const event = dispatch(element, "SMUIAutocomplete:selected", option, { bubbles: true, cancelable: true });
    if (event.defaultPrevented) {
      return;
    }
    if (setText) {
      text = getOptionLabel(option);
    }
    value = option;
    if (!setText) {
      previousValue = option;
    }
  }
  function deselectOption(option, setText = true) {
    const event = dispatch(element, "SMUIAutocomplete:deselected", option, { bubbles: true, cancelable: true });
    if (event.defaultPrevented) {
      return;
    }
    if (setText) {
      text = "";
    }
    value = void 0;
    if (!setText) {
      previousValue = void 0;
    }
  }
  function getActiveMenuItems() {
    {
      return [];
    }
  }
  function focus() {
  }
  function blur() {
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.getOptionDisabled === void 0 && $$bindings.getOptionDisabled && getOptionDisabled !== void 0)
    $$bindings.getOptionDisabled(getOptionDisabled);
  if ($$props.getOptionLabel === void 0 && $$bindings.getOptionLabel && getOptionLabel !== void 0)
    $$bindings.getOptionLabel(getOptionLabel);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.combobox === void 0 && $$bindings.combobox && combobox !== void 0)
    $$bindings.combobox(combobox);
  if ($$props.clearOnBlur === void 0 && $$bindings.clearOnBlur && clearOnBlur !== void 0)
    $$bindings.clearOnBlur(clearOnBlur);
  if ($$props.selectOnExactMatch === void 0 && $$bindings.selectOnExactMatch && selectOnExactMatch !== void 0)
    $$bindings.selectOnExactMatch(selectOnExactMatch);
  if ($$props.showMenuWithNoInput === void 0 && $$bindings.showMenuWithNoInput && showMenuWithNoInput !== void 0)
    $$bindings.showMenuWithNoInput(showMenuWithNoInput);
  if ($$props.noMatchesActionDisabled === void 0 && $$bindings.noMatchesActionDisabled && noMatchesActionDisabled !== void 0)
    $$bindings.noMatchesActionDisabled(noMatchesActionDisabled);
  if ($$props.search === void 0 && $$bindings.search && search !== void 0)
    $$bindings.search(search);
  if ($$props.menu$class === void 0 && $$bindings.menu$class && menu$class !== void 0)
    $$bindings.menu$class(menu$class);
  if ($$props.menu$anchor === void 0 && $$bindings.menu$anchor && menu$anchor !== void 0)
    $$bindings.menu$anchor(menu$anchor);
  if ($$props.menu$anchorCorner === void 0 && $$bindings.menu$anchorCorner && menu$anchorCorner !== void 0)
    $$bindings.menu$anchorCorner(menu$anchorCorner);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0)
    $$bindings.blur(blur);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (previousValue !== value) {
        text = getOptionLabel(value);
        previousValue = value;
      } else if (combobox && value !== text) {
        value = text;
        previousValue = value;
      }
    }
    {
      if (previousText !== text) {
        if (!combobox && value != null && getOptionLabel(value) !== text) {
          deselectOption(value, false);
        }
      }
    }
    {
      if (options) {
        performSearch();
      }
    }
    {
      if (previousFocusedIndex !== focusedIndex) {
        const activeItems = getActiveMenuItems();
        activeItems.forEach((item, i) => {
          if (i !== focusedIndex) {
            item.activated = false;
          }
        });
        previousFocusedIndex = focusedIndex;
      }
    }
    $$rendered = `<div${spread(
      [
        {
          class: escape_attribute_value(classMap({
            [className]: true,
            "smui-autocomplete": true
          }))
        },
        escape_object(exclude($$restProps, ["menu$", "textfield$", "list$"]))
      ],
      {}
    )}${add_attribute("this", element, 0)}><div${add_attribute("this", inputContainer, 0)}>${slots.default ? slots.default({}) : `
      ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      Object.assign({}, { label }, { disabled }, prefixFilter($$restProps, "textfield$"), { value: text }),
      {
        value: ($$value) => {
          text = $$value;
          $$settled = false;
        }
      },
      {}
    )}
    `}</div>
  ${validate_component(Menu, "Menu").$$render(
      $$result,
      Object.assign(
        {},
        {
          class: classMap({
            [menu$class]: true,
            "smui-autocomplete__menu": true
          })
        },
        { managed: true },
        { neverRestoreFocus: true },
        {
          open: focused
        },
        { anchor: menu$anchor },
        { anchorCorner: menu$anchorCorner },
        prefixFilter($$restProps, "menu$"),
        { anchorElement: element }
      ),
      {
        anchorElement: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(List, "List").$$render($$result, Object.assign({}, prefixFilter($$restProps, "list$")), {}, {
            default: () => {
              return `${loading ? `${validate_component(Item, "Item").$$render($$result, { disabled: true }, {}, {
                default: () => {
                  return `${slots.loading ? slots.loading({}) : `
            ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `Loading...`;
                    }
                  })}
          `}`;
                }
              })}` : `${error ? `${validate_component(Item, "Item").$$render($$result, { disabled: true }, {}, {
                default: () => {
                  return `${slots.error ? slots.error({}) : `
            ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `Error while fetching suggestions.`;
                    }
                  })}
          `}`;
                }
              })}` : `${matches.length ? each(matches, (match, i) => {
                return `${validate_component(Item, "Item").$$render(
                  $$result,
                  {
                    disabled: getOptionDisabled(match),
                    selected: match === value
                  },
                  {},
                  {
                    default: () => {
                      return `${slots.match ? slots.match({ match }) : `
              ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(getOptionLabel(match))}`;
                        }
                      })}
            `}
          `;
                    }
                  }
                )}`;
              }) : `${validate_component(Item, "Item").$$render($$result, { disabled: noMatchesActionDisabled }, {}, {
                default: () => {
                  return `${slots["no-matches"] ? slots["no-matches"]({}) : `
              ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `No matches found.`;
                    }
                  })}
            `}
          `;
                }
              })}`}`}`}`;
            }
          })}`;
        }
      }
    )}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Dialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "open",
    "selection",
    "escapeKeyAction",
    "scrimClickAction",
    "autoStackButtons",
    "fullscreen",
    "sheet",
    "noContentPadding",
    "container$class",
    "surface$class",
    "isOpen",
    "setOpen",
    "layout",
    "getElement"
  ]);
  let $aboveFullscreenShown, $$unsubscribe_aboveFullscreenShown;
  let $actionButtonsReversed, $$unsubscribe_actionButtonsReversed;
  var _a;
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { open = false } = $$props;
  let { selection = false } = $$props;
  let { escapeKeyAction = "close" } = $$props;
  let { scrimClickAction = "close" } = $$props;
  let { autoStackButtons = true } = $$props;
  let { fullscreen = false } = $$props;
  let { sheet = false } = $$props;
  let { noContentPadding = false } = $$props;
  let { container$class = "" } = $$props;
  let { surface$class = "" } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let actionButtonsReversed = writable(false);
  $$unsubscribe_actionButtonsReversed = subscribe(actionButtonsReversed, (value) => $actionButtonsReversed = value);
  let aboveFullscreen = getContext("SMUI:dialog:aboveFullscreen");
  let aboveFullscreenShown = (_a = getContext("SMUI:dialog:aboveFullscreenShown")) !== null && _a !== void 0 ? _a : writable(false);
  $$unsubscribe_aboveFullscreenShown = subscribe(aboveFullscreenShown, (value) => $aboveFullscreenShown = value);
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let addLayoutListenerFn = (listener) => {
    return () => {
    };
  };
  setContext("SMUI:dialog:actions:reversed", actionButtonsReversed);
  setContext("SMUI:addLayoutListener", addLayoutListenerFn);
  setContext("SMUI:dialog:selection", selection);
  setContext("SMUI:dialog:aboveFullscreen", aboveFullscreen || fullscreen);
  setContext("SMUI:dialog:aboveFullscreenShown", aboveFullscreenShown);
  if (sheet) {
    setContext("SMUI:icon-button:context", "dialog:sheet");
  }
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  let previousAboveFullscreenShown = $aboveFullscreenShown;
  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });
  function isOpen() {
    return open;
  }
  function setOpen(value) {
    open = value;
  }
  function layout() {
    return instance.layout();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.selection === void 0 && $$bindings.selection && selection !== void 0)
    $$bindings.selection(selection);
  if ($$props.escapeKeyAction === void 0 && $$bindings.escapeKeyAction && escapeKeyAction !== void 0)
    $$bindings.escapeKeyAction(escapeKeyAction);
  if ($$props.scrimClickAction === void 0 && $$bindings.scrimClickAction && scrimClickAction !== void 0)
    $$bindings.scrimClickAction(scrimClickAction);
  if ($$props.autoStackButtons === void 0 && $$bindings.autoStackButtons && autoStackButtons !== void 0)
    $$bindings.autoStackButtons(autoStackButtons);
  if ($$props.fullscreen === void 0 && $$bindings.fullscreen && fullscreen !== void 0)
    $$bindings.fullscreen(fullscreen);
  if ($$props.sheet === void 0 && $$bindings.sheet && sheet !== void 0)
    $$bindings.sheet(sheet);
  if ($$props.noContentPadding === void 0 && $$bindings.noContentPadding && noContentPadding !== void 0)
    $$bindings.noContentPadding(noContentPadding);
  if ($$props.container$class === void 0 && $$bindings.container$class && container$class !== void 0)
    $$bindings.container$class(container$class);
  if ($$props.surface$class === void 0 && $$bindings.surface$class && surface$class !== void 0)
    $$bindings.surface$class(surface$class);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.setOpen === void 0 && $$bindings.setOpen && setOpen !== void 0)
    $$bindings.setOpen(setOpen);
  if ($$props.layout === void 0 && $$bindings.layout && layout !== void 0)
    $$bindings.layout(layout);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    if (!autoStackButtons) {
      set_store_value(actionButtonsReversed, $actionButtonsReversed = true, $actionButtonsReversed);
    }
  }
  {
    if (fullscreen && instance && previousAboveFullscreenShown !== $aboveFullscreenShown) {
      previousAboveFullscreenShown = $aboveFullscreenShown;
      if ($aboveFullscreenShown) {
        instance.showSurfaceScrim();
      } else {
        instance.hideSurfaceScrim();
      }
    }
  }
  $$unsubscribe_aboveFullscreenShown();
  $$unsubscribe_actionButtonsReversed();
  return `


<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-dialog": true,
          "mdc-dialog--stacked": !autoStackButtons,
          "mdc-dialog--fullscreen": fullscreen,
          "mdc-dialog--sheet": sheet,
          "mdc-dialog--no-content-padding": noContentPadding,
          "smui-dialog--selection": selection,
          ...internalClasses
        }))
      },
      { role: "alertdialog" },
      { "aria-modal": "true" },
      escape_object(exclude($$restProps, ["container$", "surface$"]))
    ],
    {}
  )}${add_attribute("this", element, 0)}><div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [container$class]: true,
          "mdc-dialog__container": true
        }))
      },
      escape_object(prefixFilter($$restProps, "container$"))
    ],
    {}
  )}><div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [surface$class]: true,
          "mdc-dialog__surface": true
        }))
      },
      { role: "alertdialog" },
      { "aria-modal": "true" },
      escape_object(prefixFilter($$restProps, "surface$"))
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}
      ${fullscreen ? `<div class="mdc-dialog__surface-scrim"></div>` : ``}</div></div>
  <div class="mdc-dialog__scrim"></div></div>

${slots.over ? slots.over({}) : ``}`;
});
classAdderBuilder({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
classAdderBuilder({
  class: "mdc-dialog__title",
  tag: "h2"
});
const Content = classAdderBuilder({
  class: "mdc-dialog__content",
  tag: "div"
});
const Actions = classAdderBuilder({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
});
const Radio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "disabled",
    "touch",
    "group",
    "value",
    "valueKey",
    "input$use",
    "input$class",
    "getId",
    "getElement"
  ]);
  var _a;
  forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value2) {
    return value2 === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { disabled = false } = $$props;
  let { touch = false } = $$props;
  let { group = void 0 } = $$props;
  let { value = null } = $$props;
  let { valueKey = uninitializedValue } = $$props;
  let { input$use = [] } = $$props;
  let { input$class = "" } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let inputProps = (_a = getContext("SMUI:generic:input:props")) !== null && _a !== void 0 ? _a : {};
  function getId() {
    return inputProps && inputProps.id;
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.valueKey === void 0 && $$bindings.valueKey && valueKey !== void 0)
    $$bindings.valueKey(valueKey);
  if ($$props.input$use === void 0 && $$bindings.input$use && input$use !== void 0)
    $$bindings.input$use(input$use);
  if ($$props.input$class === void 0 && $$bindings.input$class && input$class !== void 0)
    $$bindings.input$class(input$class);
  if ($$props.getId === void 0 && $$bindings.getId && getId !== void 0)
    $$bindings.getId(getId);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-radio": true,
          "mdc-radio--disabled": disabled,
          "mdc-radio--touch": touch,
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value2]) => `${name}: ${value2};`).concat([style]).join(" "))
      },
      escape_object(exclude($$restProps, ["input$"]))
    ],
    {}
  )}${add_attribute("this", element, 0)}><input${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [input$class]: true,
          "mdc-radio__native-control": true
        }))
      },
      { type: "radio" },
      escape_object(inputProps),
      { disabled: disabled || null },
      {
        value: escape_attribute_value(isUninitializedValue(valueKey) ? value : valueKey)
      },
      escape_object(prefixFilter($$restProps, "input$"))
    ],
    {}
  )}${(isUninitializedValue(valueKey) ? value : valueKey) === group ? add_attribute("checked", true, 1) : ""}>
  <div class="mdc-radio__background"><div class="mdc-radio__outer-circle"></div>
    <div class="mdc-radio__inner-circle"></div></div>
  <div class="mdc-radio__ripple"></div>
</div>`;
});
let counter = 0;
const FormField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "align", "noWrap", "inputId", "label$use", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { align = "start" } = $$props;
  let { noWrap = false } = $$props;
  let { inputId = "SMUI-form-field-" + counter++ } = $$props;
  let { label$use = [] } = $$props;
  let element;
  let label;
  setContext("SMUI:generic:input:props", { id: inputId });
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.noWrap === void 0 && $$bindings.noWrap && noWrap !== void 0)
    $$bindings.noWrap(noWrap);
  if ($$props.inputId === void 0 && $$bindings.inputId && inputId !== void 0)
    $$bindings.inputId(inputId);
  if ($$props.label$use === void 0 && $$bindings.label$use && label$use !== void 0)
    $$bindings.label$use(label$use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-form-field": true,
          "mdc-form-field--align-end": align === "end",
          "mdc-form-field--nowrap": noWrap
        }))
      },
      escape_object(exclude($$restProps, ["label$"]))
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
  <label${spread(
    [
      { for: escape_attribute_value(inputId) },
      escape_object(prefixFilter($$restProps, "label$"))
    ],
    {}
  )}${add_attribute("this", label, 0)}>${slots.label ? slots.label({}) : ``}</label>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-1oqgc0g.svelte-1oqgc0g{width:100%}.display.svelte-1oqgc0g.svelte-1oqgc0g{margin-bottom:60px}.photos.svelte-1oqgc0g.svelte-1oqgc0g{position:relative}.banner.svelte-1oqgc0g.svelte-1oqgc0g{width:100%;height:170px;background-color:rgba(0, 247, 255, 0.919);cursor:pointer}.banner.svelte-1oqgc0g.svelte-1oqgc0g:hover{background-color:rgba(0, 247, 255, 0.519)}.profile.svelte-1oqgc0g.svelte-1oqgc0g{position:absolute;bottom:-50px;left:10px;width:120px;height:120px;border-radius:50%;border-width:2px;background:#888;cursor:pointer;overflow:hidden}.details.svelte-1oqgc0g.svelte-1oqgc0g{display:flex;flex-direction:column;gap:1.5em;padding:0 1em}.profile.svelte-1oqgc0g.svelte-1oqgc0g:hover{background-color:rgb(100, 100, 100)}.profile.svelte-1oqgc0g img.svelte-1oqgc0g{width:100%;height:100%}.hidden.svelte-1oqgc0g.svelte-1oqgc0g{display:none}",
  map: null
};
let title = "User Profile | Mathril - Personalize Your Math Learning Experience";
let description = "Access your Mathril user profile to customize your math learning journey, track your progress, and review your performance across various topics and difficulty levels.";
let keywords = "Mathril, user profile, math learning, progress tracking, performance review, personalized experience";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  let $bannerImage, $$unsubscribe_bannerImage;
  let $currentPath, $$unsubscribe_currentPath;
  let $profileImage, $$unsubscribe_profileImage;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_bannerImage = subscribe(bannerImage, (value) => $bannerImage = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_profileImage = subscribe(profileImage, (value) => $profileImage = value);
  set_store_value(currentPath, $currentPath = "Profile", $currentPath);
  let { data } = $$props;
  let type = "";
  let detailsPersonal = {
    gender: "",
    dob: "",
    rank: { id: 0, label: "" },
    experience: 0
  };
  let common = {
    bio: "",
    email: "",
    zip: "",
    city: "",
    country: "",
    website: "",
    followers: 0,
    following: 0,
    replies: 0,
    shares: 0
  };
  let name = "", phone = "";
  let newLabel = "";
  let text = "";
  let accountTypes = ["Personal", "Other"];
  let genders = ["Male", "Female", "Other"];
  let dialogOpen = false;
  let ranks = [
    { id: 0, label: "Student" },
    { id: 1, label: "Teacher" },
    { id: 2, label: "Professional" }
  ];
  let imageNode, bannerNode;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-11myr42_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<link rel="canonical" href="https://satirigal.com/settings/profile"><meta name="description"${add_attribute("content", description, 0)}><meta name="keywords"${add_attribute("content", keywords, 0)}><!-- HEAD_svelte-11myr42_END -->`, ""}
<article class="svelte-1oqgc0g"><div class="display svelte-1oqgc0g"><div class="photos svelte-1oqgc0g"><div class="banner svelte-1oqgc0g"><input class="hidden svelte-1oqgc0g" id="file-to-upload" type="file" accept="image/*">
                <img${add_attribute("src", $bannerImage, 0)} alt="Image" width="100%" height="100%"${add_attribute("this", bannerNode, 0)}></div>
            <div class="profile svelte-1oqgc0g"><input class="hidden svelte-1oqgc0g" id="file-to-upload" type="file" accept="image/*">
                <img${add_attribute("src", $profileImage, 0)} alt="Image" width="100" height="100" class="svelte-1oqgc0g"${add_attribute("this", imageNode, 0)}></div></div></div>
    <div class="details svelte-1oqgc0g"><div class="accountType"><span class="label">Account Type</span>
            ${each(accountTypes, (accountType) => {
      return `${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
        label: () => {
          return `<span slot="label">${escape(accountType)}
                    </span>`;
        },
        default: () => {
          return `${validate_component(Radio, "Radio").$$render(
            $$result,
            { value: accountType, group: type },
            {
              group: ($$value) => {
                type = $$value;
                $$settled = false;
              }
            },
            {}
          )}
                    
                `;
        }
      })}`;
    })}</div>
        ${type === "Personal" ? `<div class="gender"><span class="label">Gender</span>
                ${each(genders, (gender) => {
      return `${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
        label: () => {
          return `<span slot="label">${escape(gender)}
                        </span>`;
        },
        default: () => {
          return `${validate_component(Radio, "Radio").$$render(
            $$result,
            {
              value: gender,
              group: detailsPersonal.gender
            },
            {
              group: ($$value) => {
                detailsPersonal.gender = $$value;
                $$settled = false;
              }
            },
            {}
          )}
                        
                    `;
        }
      })}`;
    })}</div>` : `${``}`}
        ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        variant: "filled",
        disabled: true,
        label: "Name",
        value: name
      },
      {
        value: ($$value) => {
          name = $$value;
          $$settled = false;
        }
      },
      {}
    )}
        ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        disabled: true,
        variant: "filled",
        label: "Phone",
        value: phone
      },
      {
        value: ($$value) => {
          phone = $$value;
          $$settled = false;
        }
      },
      {}
    )}
        ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        type: "email",
        variant: "filled",
        label: "Email",
        value: common.email
      },
      {
        value: ($$value) => {
          common.email = $$value;
          $$settled = false;
        }
      },
      {}
    )}
        ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        variant: "filled",
        label: "Bio",
        value: common.bio
      },
      {
        value: ($$value) => {
          common.bio = $$value;
          $$settled = false;
        }
      },
      {}
    )}
        ${type === "Personal" ? `${validate_component(Autocomplete, "Autocomplete").$$render(
      $$result,
      {
        options: ranks,
        getOptionLabel: (option) => option ? `${option.label}` : "",
        noMatchesActionDisabled: false,
        label: "Rank",
        style: "width: 100%;",
        textfield$style: "width: 100%;",
        textfield$variant: "filled",
        value: detailsPersonal.rank,
        text
      },
      {
        value: ($$value) => {
          detailsPersonal.rank = $$value;
          $$settled = false;
        },
        text: ($$value) => {
          text = $$value;
          $$settled = false;
        }
      },
      {
        "no-matches": () => {
          return `<div slot="no-matches">${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `Add rank`;
            }
          })}</div>`;
        }
      }
    )}
            ${validate_component(Dialog, "Dialog").$$render(
      $$result,
      {
        "aria-labelledby": "autocomplete-dialog-title",
        "aria-describedby": "autocomplete-dialog-content",
        open: dialogOpen
      },
      {
        open: ($$value) => {
          dialogOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `
                ${validate_component(Title, "Title").$$render($$result, { id: "autocomplete-dialog-title" }, {}, {
            default: () => {
              return `New Rank`;
            }
          })}
                ${validate_component(Content, "Content").$$render($$result, { id: "autocomplete-dialog-content" }, {}, {
            default: () => {
              return `${validate_component(Textfield, "Textfield").$$render(
                $$result,
                { label: "Rank", value: newLabel },
                {
                  value: ($$value) => {
                    newLabel = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })}
                ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                    default: () => {
                      return `Cancel`;
                    }
                  })}`;
                }
              })}
                    ${validate_component(Button, "Button").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                    default: () => {
                      return `Add`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}
            ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        variant: "filled",
        label: "Experience",
        suffix: "years",
        input$pattern: "\\d+",
        value: detailsPersonal.experience
      },
      {
        value: ($$value) => {
          detailsPersonal.experience = $$value;
          $$settled = false;
        }
      },
      {}
    )}
            
            ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        type: "date",
        variant: "filled",
        label: "Date of Birth",
        value: detailsPersonal.dob
      },
      {
        value: ($$value) => {
          detailsPersonal.dob = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}

        
        ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        variant: "filled",
        label: "Zip Code",
        value: common.zip
      },
      {
        value: ($$value) => {
          common.zip = $$value;
          $$settled = false;
        }
      },
      {}
    )}
        ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        variant: "filled",
        label: "City",
        value: common.city
      },
      {
        value: ($$value) => {
          common.city = $$value;
          $$settled = false;
        }
      },
      {}
    )}
        ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        variant: "filled",
        label: "Country",
        value: common.country
      },
      {
        value: ($$value) => {
          common.country = $$value;
          $$settled = false;
        }
      },
      {}
    )}
        ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        variant: "filled",
        label: "Website",
        value: common.website
      },
      {
        value: ($$value) => {
          common.website = $$value;
          $$settled = false;
        }
      },
      {}
    )}
        ${validate_component(Section, "Section").$$render($$result, { align: "end", toolbar: true }, {}, {
      default: () => {
        return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `save`;
          }
        })}
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
    })}</div>
</article>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_bannerImage();
  $$unsubscribe_currentPath();
  $$unsubscribe_profileImage();
  return $$rendered;
});
export {
  Page as default
};
