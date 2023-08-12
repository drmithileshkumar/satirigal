import { c as create_ssr_component, a as compute_rest_props, g as get_current_component, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute, r as createEventDispatcher } from "./index3.js";
import { f as forwardEventsBuilder, c as classMap } from "./classAdderBuilder.js";
/* empty css                                             */const Media = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "aspectRatio", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { aspectRatio = void 0 } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.aspectRatio === void 0 && $$bindings.aspectRatio && aspectRatio !== void 0)
    $$bindings.aspectRatio(aspectRatio);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-card__media": true,
          "mdc-card__media--square": aspectRatio === "square",
          "mdc-card__media--16-9": aspectRatio === "16x9"
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const css = {
  code: ".hidden.svelte-17nkj1a{display:none}",
  map: null
};
const ImageUploader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { media } = $$props;
  let { url } = $$props;
  let { isClicked = false } = $$props;
  createEventDispatcher();
  let mediaInput;
  const getImage = () => {
    mediaInput.click();
  };
  if ($$props.media === void 0 && $$bindings.media && media !== void 0)
    $$bindings.media(media);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.isClicked === void 0 && $$bindings.isClicked && isClicked !== void 0)
    $$bindings.isClicked(isClicked);
  $$result.css.add(css);
  {
    if (isClicked)
      getImage();
  }
  return `<input class="hidden svelte-17nkj1a" id="file-to-upload" type="file" accept="image/*">`;
});
export {
  ImageUploader as I,
  Media as M
};
