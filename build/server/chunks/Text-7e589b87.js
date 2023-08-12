import { c as create_ssr_component, f as compute_rest_props, g as get_current_component, p as getContext, b as subscribe, v as validate_component, k as add_attribute, h as spread, i as escape_attribute_value, j as escape_object, w as tick } from './index3-f1aa5d16.js';
import { f as forwardEventsBuilder, a as classMap } from './classAdderBuilder-fb2d293a.js';

const Checkmark = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "getElement"]);
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<span${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-chip__checkmark": true
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}><svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30"><path class="mdc-chip__checkmark-path" fill="none" stroke="black" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg>
</span>`;
});
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let roleProps;
  let $$restProps = compute_rest_props($$props, ["use", "class", "tabindex", "focus", "getInput", "getElement"]);
  let $choice, $$unsubscribe_choice;
  let $filter, $$unsubscribe_filter;
  let $nonInteractive, $$unsubscribe_nonInteractive;
  let $isSelected, $$unsubscribe_isSelected;
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { tabindex = getContext("SMUI:chips:chip:focusable") ? 0 : -1 } = $$props;
  let element;
  let input = void 0;
  let primaryAction = void 0;
  let internalAttrs = {};
  const nonInteractive = getContext("SMUI:chips:nonInteractive");
  $$unsubscribe_nonInteractive = subscribe(nonInteractive, (value) => $nonInteractive = value);
  const choice = getContext("SMUI:chips:choice");
  $$unsubscribe_choice = subscribe(choice, (value) => $choice = value);
  const filter = getContext("SMUI:chips:filter");
  $$unsubscribe_filter = subscribe(filter, (value) => $filter = value);
  const isSelected = getContext("SMUI:chips:chip:isSelected");
  $$unsubscribe_isSelected = subscribe(isSelected, (value) => $isSelected = value);
  function waitForTabindex(fn) {
    if (internalAttrs["tabindex"] !== element.getAttribute("tabindex")) {
      tick().then(fn);
    } else {
      fn();
    }
  }
  function focus() {
    waitForTabindex(() => {
    });
  }
  function getInput() {
    return input && input.getElement();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.getInput === void 0 && $$bindings.getInput && getInput !== void 0)
    $$bindings.getInput(getInput);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    roleProps = {
      role: $filter ? "checkbox" : $choice ? "radio" : "button",
      tabindex
    };
    $$rendered = `${$filter ? `${validate_component(Checkmark, "Checkmark").$$render(
      $$result,
      { this: input },
      {
        this: ($$value) => {
          input = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}
<span role="gridcell"${add_attribute("this", element, 0)}>${$nonInteractive ? `<span class="mdc-chip__text">${slots.default ? slots.default({}) : ``}</span>` : `<span${spread(
      [
        {
          class: escape_attribute_value(classMap({
            [className]: true,
            "mdc-chip__primary-action": true
          }))
        },
        escape_object($filter || $choice ? {
          "aria-selected": $isSelected ? "true" : "false"
        } : {}),
        escape_object(roleProps),
        escape_object(internalAttrs),
        escape_object($$restProps)
      ],
      {}
    )}${add_attribute("this", primaryAction, 0)}><span class="mdc-chip__text">${slots.default ? slots.default({}) : ``}</span></span>`}
</span>`;
  } while (!$$settled);
  $$unsubscribe_choice();
  $$unsubscribe_filter();
  $$unsubscribe_nonInteractive();
  $$unsubscribe_isSelected();
  return $$rendered;
});

export { Text as T };
//# sourceMappingURL=Text-7e589b87.js.map
