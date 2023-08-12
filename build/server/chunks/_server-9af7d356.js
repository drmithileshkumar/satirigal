import { g as getDBCollection } from './mongo-46929b2f.js';
import { i as initializeNewPost } from './post-895b58dc.js';
import 'mongodb';
import { e as error } from './index-9b9a1ed0.js';

async function GET({ request, params, url, locals }) {
  let postsCollection = await getDBCollection("posts");
  let posts = await postsCollection.find({}).toArray();
  if (!posts)
    posts = [];
  return new Response(JSON.stringify(posts), { status: 200 });
}
async function POST({ params, request, locals }) {
  if (locals.user)
    ;
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  const { name, publicID, profileImage, summary, content, title, subtitle, media, comments, shares, likes, images } = await request.json();
  const postsCollection = await getDBCollection("posts");
  let newPost = initializeNewPost(name, publicID, profileImage, summary, content, title, subtitle, media, comments, shares, likes, images);
  postsCollection.insertOne(newPost);
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
//# sourceMappingURL=_server-9af7d356.js.map
