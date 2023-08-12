import { g as getDBCollection } from "../../../../../../chunks/mongo.js";
import "mongodb";
import "../../../../../../chunks/index.js";
async function GET({ request, params, url, locals }) {
  let postID = params.postID;
  let commentsCollection = await getDBCollection("comments");
  let comments = await commentsCollection.find({ parentID: postID }).toArray();
  if (!comments)
    comments = [];
  return new Response(JSON.stringify(comments), { status: 200 });
}
export {
  GET
};
