import { g as getDBCollection } from './mongo-46929b2f.js';
import { i as initializeNewComment } from './comment-408249df.js';
import 'mongodb';
import { e as error } from './index-9b9a1ed0.js';

async function GET({ request, params, url, locals }) {
  let id = params.publicID;
  let commentsCollection = await getDBCollection("comments");
  let comments = await commentsCollection.find({ publicID: id }).toArray();
  if (!comments)
    comments = [];
  return new Response(JSON.stringify(comments), { status: 200 });
}
async function POST({ params, request, locals }) {
  if (locals.user)
    ;
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  const { parentID, name, publicID, profileImage, content, media, comments, images } = await request.json();
  const commentsCollection = await getDBCollection("comments");
  let newComment = initializeNewComment(parentID, name, publicID, profileImage, content, media, comments);
  commentsCollection.insertOne(newComment);
  return new Response("Success", { status: 200 });
}
async function PUT({ params, request, locals }) {
  if (locals.user)
    ;
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  let publicID = params.publicID;
  const followingsCollection = await getDBCollection("followings");
  const followersCollection = await getDBCollection("followers");
  const confirm = await followingsCollection.updateOne({ publicID }, { $pull: { following: locals.user.publicID } }, { upsert: true });
  const confirm1 = await followersCollection.updateOne({ publicID: locals.user.publicID }, { $pull: { followers: publicID } }, { upsert: true });
  if (!confirm.acknowledged || !confirm1.acknowledged) {
    return error(400, "Failed!");
  }
  return new Response("Success", { status: 200 });
}

export { GET, POST, PUT };
//# sourceMappingURL=_server-525f29bf.js.map
