import { g as getDBCollection } from "../../../../../chunks/mongo.js";
import { i as initializeNewPost } from "../../../../../chunks/post.js";
import "mongodb";
import { e as error } from "../../../../../chunks/index.js";
async function GET({ request, params, url, locals }) {
  let postID = params.postID;
  await getDBCollection("users");
  let postsCollection = await getDBCollection("posts");
  let post = await postsCollection.findOne({ postID });
  if (!post)
    return error(404, "Not found");
  return new Response(JSON.stringify(post), { status: 200 });
}
async function POST({ params, request, locals }) {
  if (locals.user)
    ;
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  const { name, publicID, profileImage, summary, content, title, subtitle, media, comments, shares, likes, tags, images } = await request.json();
  const postsCollection = await getDBCollection("posts");
  let newPost = initializeNewPost(name, publicID, profileImage, summary, content, title, subtitle, media, comments, shares, likes, tags, images);
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
export {
  GET,
  POST,
  PUT
};
