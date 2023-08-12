import { c as create_ssr_component, f as compute_rest_props, g as get_current_component, s as setContext, h as spread, i as escape_attribute_value, j as escape_object, k as add_attribute } from './index3-f1aa5d16.js';
import { f as forwardEventsBuilder, a as classMap } from './classAdderBuilder-fb2d293a.js';

const Actions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "fullBleed", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { fullBleed = false } = $$props;
  let element;
  setContext("SMUI:button:context", "card:action");
  setContext("SMUI:icon-button:context", "card:action");
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.fullBleed === void 0 && $$bindings.fullBleed && fullBleed !== void 0)
    $$bindings.fullBleed(fullBleed);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-card__actions": true,
          "mdc-card__actions--full-bleed": fullBleed
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});

export { Actions as A };
//# sourceMappingURL=Actions-98872594.js.map
