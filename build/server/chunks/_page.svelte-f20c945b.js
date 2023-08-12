import { c as create_ssr_component, b as subscribe, t as set_store_value, v as validate_component, e as escape, u as createEventDispatcher, k as add_attribute } from './index3-f1aa5d16.js';
import { B as Button, C as CommonLabel } from './Button-1a2ee9a9.js';
import { S as Set_1, C as Chip } from './Set-e0487e0b.js';
import { T as Text } from './Text-7e589b87.js';
import { C as Card } from './Card-283e413e.js';
import { C as Content } from './ActionIcons-2731c9e8.js';
import { A as Actions } from './Actions-98872594.js';
import { T as Textfield } from './Textfield-ba2092bc.js';
import './Suffix-c76db287.js';
import { p as page } from './stores2-0f38eae5.js';
import { c as currentPath, a as scannedQR } from './stores-ac084a5d.js';
import 'html5-qrcode';
import 'qrcode-generator';
import './classAdderBuilder-fb2d293a.js';
import './Ripple-12cc12b5.js';
import './index2-56d214e2.js';
import './ContextFragment-4a3c18d4.js';
import './prefixFilter-91e99fbd.js';
import './Input-a549abd4.js';

const css$2 = {
  code: "#reader.svelte-17pu3xa{background:#888;width:200px;height:200px;display:flex;justify-content:center;align-items:center;margin-top:0.5em;margin-bottom:0.5em}",
  map: null
};
const ScanQR = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_scannedQR;
  $$unsubscribe_scannedQR = subscribe(scannedQR, (value) => value);
  let qrContainer;
  createEventDispatcher();
  $$result.css.add(css$2);
  $$unsubscribe_scannedQR();
  return `<div id="reader" width="200px" height="200px" class="svelte-17pu3xa"${add_attribute("this", qrContainer, 0)}></div>
${validate_component(Button, "Button").$$render($$result, { class: "upload" }, {}, {
    default: () => {
      return `<span class="material-icons">qr_code_2</span>
    <span class="label">Upload Secret QR code</span>`;
    }
  })}
<input style="display: none;" type="file" accept="image/*" id="input-file" name="input-file">`;
});
const css$1 = {
  code: "#generatedQRCode.svelte-o78zgt img.svelte-o78zgt{width:200px;height:200px}",
  map: null
};
const GenerateQR = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { filename } = $$props;
  let { autoDownload = true } = $$props;
  createEventDispatcher();
  let qrlink;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.filename === void 0 && $$bindings.filename && filename !== void 0)
    $$bindings.filename(filename);
  if ($$props.autoDownload === void 0 && $$bindings.autoDownload && autoDownload !== void 0)
    $$bindings.autoDownload(autoDownload);
  $$result.css.add(css$1);
  return `<span id="generatedQRCode" class="svelte-o78zgt"><img${add_attribute("src", qrlink, 0)} alt="" class="svelte-o78zgt"></span>
    ${``}`;
});
const css = {
  code: "article.svelte-1vu14hf{width:100%}.authQR.svelte-1vu14hf{display:flex;flex-direction:column}.details.svelte-1vu14hf{display:flex;flex-direction:column;gap:1.5em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Authentication", $currentPath);
  let choices = ["Log in", "Sign up"];
  let selected = "Log in";
  let phone = null, name = null;
  let generateQR = false;
  let privateID, otpID, publicID;
  let scanned = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-pg3aen_START -->${$$result.title = `<title>Authentication</title>`, ""}<link rel="canonical" href="https://satirigal.com/auth"><meta name="description" content="Mathematics for all"><!-- HEAD_svelte-pg3aen_END -->`, ""}
<article class="svelte-1vu14hf">${$page.data.user || generateQR ? `${validate_component(Card, "Card").$$render(
      $$result,
      {
        style: "display:flex;align-items:center;justify-content:center;"
      },
      {},
      {
        default: () => {
          return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="authQR svelte-1vu14hf">${validate_component(GenerateQR, "GenerateQR").$$render(
                $$result,
                {
                  data: privateID + " " + otpID,
                  filename: publicID,
                  autoDownload: false
                },
                {},
                {}
              )}</div>`;
            }
          })}
            ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
            default: () => {
              return `<form method="POST" action="?/logout">
                    ${validate_component(Button, "Button").$$render($$result, { class: "logout" }, {}, {
                default: () => {
                  return `Log out`;
                }
              })}</form>`;
            }
          })}`;
        }
      }
    )}` : `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="choices">${validate_component(Set_1, "Set").$$render(
              $$result,
              { chips: choices, choice: true, selected },
              {
                selected: ($$value) => {
                  selected = $$value;
                  $$settled = false;
                }
              },
              {
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
              }
            )}</div>
                ${selected === "Log in" ? `<div class="details svelte-1vu14hf">${validate_component(Textfield, "Textfield").$$render(
              $$result,
              {
                variant: "filled",
                label: "Phone",
                placeholder: "0123456789",
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

                        ${phone ? `${validate_component(ScanQR, "ScanQR").$$render($$result, {}, {}, {})}` : ``}</div>` : `<div class="details svelte-1vu14hf">${validate_component(Textfield, "Textfield").$$render(
              $$result,
              {
                variant: "filled",
                label: "Name",
                placeholder: "Firstname Surname",
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
                        ${name ? `${validate_component(Textfield, "Textfield").$$render(
              $$result,
              {
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
            )}` : ``}</div>`}`;
          }
        })}
            ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
          default: () => {
            return `${selected === "Log in" && scanned ? `${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                  default: () => {
                    return `Login`;
                  }
                })}`;
              }
            })}` : `${selected === "Sign up" && phone ? `${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                  default: () => {
                    return `Sign up`;
                  }
                })}`;
              }
            })}` : ``}`}`;
          }
        })}`;
      }
    })}
`}
</article>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_currentPath();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f20c945b.js.map
