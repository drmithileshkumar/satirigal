import { c as create_ssr_component, l as escape, f as add_attribute } from "../../../chunks/index3.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".image.svelte-hnorh2{display:flex;flex-direction:column;max-width:300px}.caption.svelte-hnorh2{font-size:1.2em;margin:0.5em;line-height:1.2;font-weight:300}",
  map: null
};
let keywords = "Satires, Joke, Fun";
let title = "Install Android | Satirigal";
let description = "Your regular dose of satires";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-x09e8n_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<link rel="canonical" href="https://satirigal.com/android"><meta name="description"${add_attribute("content", description, 0)}><meta name="keywords"${add_attribute("content", keywords, 0)}><!-- HEAD_svelte-x09e8n_END -->`, ""}
<article><h1 class="mdc-typography--headline4">Install Satirigal to Android</h1>
    <figure style="display:flex;flex-wrap: wrap;gap:0.5em;"><div class="image svelte-hnorh2"><h4 class="caption svelte-hnorh2">Step 1: Click on the three dots in the browser bar.</h4>
            <img width="300px" src="/android/menu.jpg" alt="Step 1: Click on the three dots in the browser bar."></div>
        <div class="image svelte-hnorh2"><h4 class="caption svelte-hnorh2">Step 2: Click on Add to Home screen.</h4>
            <img width="300px" src="/android/add.jpg" alt="Step 2: Click on Add to Home screen."></div>
        <div class="image svelte-hnorh2"><h4 class="caption svelte-hnorh2">Step 3: Click on Add in the pop up.</h4>
            <img width="300px" src="/android/add2.jpg" alt="Step 3: Click on Add in the pop up."></div>
        <div class="image svelte-hnorh2"><h4 class="caption svelte-hnorh2">Step 4: Installed Satirigal app is installed.</h4>
            <img width="300px" src="/android/app.jpg" alt="Step 4: Installed Satirigal app is installed."></div>
        <div class="image svelte-hnorh2"><h4 class="caption svelte-hnorh2">Step 5: Click on the app icon to open the Satirigal app.</h4>
            <img width="300px" src="/android/appview.jpg" alt="Step 5: Click on the app icon to open the Satirigal app."></div></figure>
</article>`;
});
export {
  Page as default
};
