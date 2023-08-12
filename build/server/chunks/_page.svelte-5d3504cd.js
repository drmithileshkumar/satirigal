import { c as create_ssr_component, v as validate_component, b as subscribe, t as set_store_value, e as escape, k as add_attribute } from './index3-f1aa5d16.js';
import { c as currentPath } from './stores-ac084a5d.js';
import './index2-56d214e2.js';

let title = "Refund Policy | satirigal";
let description = "Read the refund policy for satirigal, an online mathematics practice platform. Learn about our subscription services and the conditions for refunds.";
let keywords = "satirigal, refund policy, subscription, practice material, online math practice";
let canonical = "https://www.satirigal.com/legal/refund";
const Refund = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Refund policy", $currentPath);
  $$unsubscribe_currentPath();
  return `${$$result.head += `<!-- HEAD_svelte-7s9pd3_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="description"${add_attribute("content", description, 0)}><meta name="keywords"${add_attribute("content", keywords, 0)}><link rel="canonical"${add_attribute("href", canonical, 0)}><!-- HEAD_svelte-7s9pd3_END -->`, ""}
  
  <main class="mdc-typography--body2"><h1 class="mdc-typography--headline4">Refund Policy</h1>
    <p>Last updated: 5 May 2023</p>
  
    <p>At satirigal, we strive to provide a valuable and satisfactory experience to our users. Our refund policy outlines the conditions under which refunds may be granted for subscription services. Please read this policy carefully before making any purchase.</p>
  
    <h2 class="mdc-typography--headline6">Subscription Services</h2>
    <p>satirigal offers subscription services to access premium practice materials and features on our website. By purchasing a subscription, you agree to the terms of the subscription plan, including the billing cycle, fees, and any other terms specified during the purchase process.</p>
  
    <h2 class="mdc-typography--headline6">Refund Conditions</h2>
    <p>We provide refunds for subscription services under the following conditions:</p>
    <ul><li><strong>Within 7 days of purchase:</strong> If you are not satisfied with our subscription services, you may request a full refund within 7 days of the purchase date. To request a refund, please contact our support team at support@satirigal.com with your order details and the reason for the refund request.</li>
      <li><strong>Technical issues:</strong> If you experience technical issues that prevent you from accessing or using our subscription services, we will first attempt to resolve the issue. If we are unable to resolve the issue within a reasonable time, we may offer a partial or full refund at our discretion. Refund eligibility will be determined on a case-by-case basis.</li></ul>
  
    <p>Please note that refunds are not available for any other reasons or after the specified timeframes above.</p>
  
    <h2 class="mdc-typography--headline6">Refund Process</h2>
    <p>Once your refund request is received and reviewed, we will notify you of the approval or rejection of your refund. If your refund is approved, it will be processed, and a credit will be applied to your original method of payment within a certain number of days, depending on your payment provider&#39;s policies.</p>
  
    <h2 class="mdc-typography--headline6">Contact Us</h2>
    <p>If you have any questions or concerns about our Refund Policy, please contact us at satirigal@gmail.com.</p></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Refund, "Refund").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-5d3504cd.js.map
