import { r as redirect } from "../../../../chunks/index.js";
async function load({ parent, fetch, params, url }) {
  if (!(url.host === "satirigal.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3000")) {
    throw redirect(301, `https://satirigal.com`);
  }
  let commentID = params.commentID;
  let urlink = `/api/comment/${commentID}`;
  let res = await fetch(urlink);
  if (!res.ok) {
    console.log("redirected...");
    throw redirect(301, `/`);
  }
  let comment = await res.json();
  return {
    comment
  };
}
export {
  load
};
