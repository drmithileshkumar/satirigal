import { c as classAdderBuilder } from './classAdderBuilder-fb2d293a.js';

function dispatch(element, eventType, detail, eventInit = { bubbles: true }, duplicateEventForMDC = false) {
  if (typeof Event === "undefined") {
    throw new Error("Event not defined.");
  }
  if (!element) {
    throw new Error("Tried to dipatch event without element.");
  }
  const event = new CustomEvent(eventType, Object.assign(Object.assign({}, eventInit), { detail }));
  element === null || element === void 0 ? void 0 : element.dispatchEvent(event);
  if (duplicateEventForMDC && eventType.startsWith("SMUI")) {
    const duplicateEvent = new CustomEvent(eventType.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, eventInit), { detail }));
    element === null || element === void 0 ? void 0 : element.dispatchEvent(duplicateEvent);
    if (duplicateEvent.defaultPrevented) {
      event.preventDefault();
    }
  }
  return event;
}
const Text = classAdderBuilder({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
const PrimaryText = classAdderBuilder({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
const SecondaryText = classAdderBuilder({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
const Meta = classAdderBuilder({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
classAdderBuilder({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
classAdderBuilder({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});

export { Meta as M, PrimaryText as P, SecondaryText as S, Text as T, dispatch as d };
//# sourceMappingURL=Subheader-2430c256.js.map
