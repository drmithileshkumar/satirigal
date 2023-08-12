import { g as getDBCollection } from "../../../../../chunks/mongo.js";
import { i as initializeNewPost } from "../../../../../chunks/post.js";
import "mongodb";
import { e as error } from "../../../../../chunks/index.js";
async function GET({ request, params, url, locals }) {
  let id = params.publicID;
  const usersCollection = await getDBCollection("users");
  let userData = await usersCollection.findOne({ publicID: id });
  if (!userData) {
    return error(404, "User not found");
  }
  let postsCollection = await getDBCollection("posts");
  let posts = await postsCollection.find({ publicID }).toArray();
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
  const { name, publicID: publicID2, profileImage, summary, content, title, subtitle, media, replies, shares, likes, tags, images } = await request.json();
  const postsCollection = await getDBCollection("posts");
  let newPost = initializeNewPost(name, publicID2, profileImage, summary, content, title, subtitle, media, replies, shares, likes, tags, images);
  postsCollection.insertOne(newPost);
  return new Response("Success", { status: 200 });
}
async function PUT({ params, request, locals }) {
  if (locals.user)
    ;
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  const { postID, name, publicID: publicID2, profileImage, summary, content, title, subtitle, media, comments, shares, likes, tags, images } = await request.json();
  const postsCollection = await getDBCollection("posts");
  const confirm = await postsCollection.updateOne({ postID }, { $set: { summary, content, title, subtitle, media, tags, images } });
  if (!confirm.acknowledged) {
    return error(400, "Failed!");
  }
  return new Response("Success", { status: 200 });
}
export {
  GET,
  POST,
  PUT
};
