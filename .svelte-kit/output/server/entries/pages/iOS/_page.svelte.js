import { c as create_ssr_component, l as escape, f as add_attribute } from "../../../chunks/index3.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".image.svelte-hnorh2{display:flex;flex-direction:column;max-width:300px}.caption.svelte-hnorh2{font-size:1.2em;margin:0.5em;line-height:1.2;font-weight:300}",
  map: null
};
let keywords = "Satires, fun, joke";
let title = "Install iOS | Satirigal";
let description = "Your regular dose of satires";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-14k6zj5_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<link rel="canonical" href="https://satirigal.com/iOS"><meta name="description"${add_attribute("content", description, 0)}><meta name="keywords"${add_attribute("content", keywords, 0)}><!-- HEAD_svelte-14k6zj5_END -->`, ""}
<article><h1 class="mdc-typography--headline4">Install Satirigal to iOS</h1>
    <figure style="display:flex;flex-wrap: wrap;gap:0.5em;"><div class="image svelte-hnorh2"><h4 class="caption svelte-hnorh2">Step 1: Click on the share button.</h4>
            <img width="300px" src="/iOS/share.jpg" alt="Step 1: Click on the share button."></div>
        <div class="image svelte-hnorh2"><h4 class="caption svelte-hnorh2">Step 2: Click on Add to Home Screen.</h4>
            <img width="300px" src="/iOS/add.jpg" alt="Step 2: Click on Add to Home Screen."></div>
        <div class="image svelte-hnorh2"><h4 class="caption svelte-hnorh2">Step 3: Click on Add in the pop up.</h4>
            <img width="300px" src="/iOS/add2.jpg" alt="Step 3: Click on Add in the pop up."></div>
        <div class="image svelte-hnorh2"><h4 class="caption svelte-hnorh2">Step 4: Installed Satirigal app is installed.</h4>
            <img width="300px" src="/iOS/app.jpg" alt="Step 4: Installed Satirigal app is installed."></div></figure>
</article>`;
});
export {
  Page as default
};
