import { r as redirect } from "../../chunks/index.js";
async function load({ fetch, params, url }) {
  if (!(url.host === "mathril.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    throw redirect(301, `https://mathril.com`);
  }
  return {};
}
export {
  load
};
