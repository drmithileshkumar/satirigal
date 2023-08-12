import { r as redirect } from "../../../../chunks/index.js";
const ssr = false;
async function load({ parent, fetch, params, url }) {
  if (!(url.host === "satirigal.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    throw redirect(301, `https://satirigal.com`);
  }
  const { user } = await parent();
  if (!user) {
    throw redirect(301, `/`);
  }
  let res = await fetch(`/api/userDetail`);
  let userDetail = await res.json();
  return {
    userDetail
  };
}
export {
  load,
  ssr
};
