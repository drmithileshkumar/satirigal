import { c as create_ssr_component, v as validate_component, b as subscribe, t as set_store_value, e as escape, k as add_attribute } from './index3-f1aa5d16.js';
import { c as currentPath } from './stores-ac084a5d.js';
import './index2-56d214e2.js';

let title = "Privacy Policy | Satirigal";
let description = "Read the privacy policy for Satirigal, an online mathematics practice platform. Learn about how we collect, use, and protect your personal information.";
let keywords = "Satirigal, privacy policy, personal information, data protection";
let canonical = "https://www.satirigal.com/legal/privacy";
const Privacy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Privacy", $currentPath);
  $$unsubscribe_currentPath();
  return `${$$result.head += `<!-- HEAD_svelte-7s9pd3_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="description"${add_attribute("content", description, 0)}><meta name="keywords"${add_attribute("content", keywords, 0)}><link rel="canonical"${add_attribute("href", canonical, 0)}><!-- HEAD_svelte-7s9pd3_END -->`, ""}
  
  <main class="mdc-typography--body2"><h1 class="mdc-typography--headline4">Privacy Policy</h1>
    <p>Last updated: 5 May 2023</p>
  
    <p>At Satirigal, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services.</p>
  
    <h2 class="mdc-typography--headline6">Information Collection and Use</h2>
    <p>When you register on our website or use our services, we may collect personal information such as your name, email address, and other relevant details. We use this information to provide and improve our services, personalize your experience, and communicate with you about updates, promotions, and other relevant information.</p>
  
    <p>Non-personal information, such as browser type, operating system, and IP address, may also be collected to help us understand user behavior and improve the performance of our website.</p>
  
    <h2 class="mdc-typography--headline6">Cookies</h2>
    <p>Our website uses cookies to enhance your experience and track usage patterns. You can control the use of cookies through your browser settings. However, disabling cookies may affect the functionality of certain features on our website.</p>
  
    <h2 class="mdc-typography--headline6">Data Security</h2>
    <p>We take the security of your personal information seriously and implement appropriate measures to protect it from unauthorized access, disclosure, or alteration. While no method of data transmission or storage is 100% secure, we strive to maintain the highest standards of data protection.</p>
  
    <h2 class="mdc-typography--headline6">Third-Party Services</h2>
    <p>Our website may contain links to third-party websites or services that are not operated by us. We have no control over the content, privacy policies, or practices of these sites and assume no responsibility for their actions. We encourage you to review the privacy policies of any third-party sites you visit.</p>
  
    <h2 class="mdc-typography--headline6">Changes to This Privacy Policy</h2>
    <p>We may update our Privacy Policy from time to time to reflect changes in our practices, legal requirements, or other factors. We will notify you of any changes by posting the updated policy on this page, and your continued use of our website and services constitutes your acceptance of these changes.</p>
  
    <h2 class="mdc-typography--headline6">Contact Us</h2>
    <p>If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at satirigal@gmail.com</p></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Privacy, "Privacy").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2ed93a4b.js.map
