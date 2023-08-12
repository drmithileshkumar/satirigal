import { r as redirect } from "../../../../../chunks/index.js";
async function load({ fetch, params, url }) {
  if (!(url.host === "satirigal.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    throw redirect(301, `https://satirigal.com`);
  }
  let commentID = url.searchParams.get("commentID");
  let res = await fetch(`/api/comment/${commentID}`);
  let comment = await res.json();
  return {
    comment
  };
}
export {
  load
};
