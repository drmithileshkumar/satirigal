import { g as getDBCollection } from './mongo-46929b2f.js';
import 'mongodb';
import './index-9b9a1ed0.js';

async function GET({ request, params, url, locals }) {
  let postID = params.postID;
  let commentsCollection = await getDBCollection("comments");
  let comments = await commentsCollection.find({ parentID: postID }).toArray();
  if (!comments)
    comments = [];
  return new Response(JSON.stringify(comments), { status: 200 });
}

export { GET };
//# sourceMappingURL=_server-7ee2e65c.js.map
