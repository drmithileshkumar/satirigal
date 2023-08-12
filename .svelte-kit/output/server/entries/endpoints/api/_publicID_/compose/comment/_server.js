import { g as getDBCollection } from "../../../../../../chunks/mongo.js";
import { i as initializeNewComment } from "../../../../../../chunks/comment.js";
import "mongodb";
import { e as error } from "../../../../../../chunks/index.js";
async function GET({ request, params, url, locals }) {
  let id = params.publicID;
  const usersCollection = await getDBCollection("users");
  let userData = await usersCollection.findOne({ publicID: id });
  if (!userData) {
    return error(404, "User not found");
  }
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
  const { parentID, name, publicID, profileImage, content, comments, images } = await request.json();
  const commentsCollection = await getDBCollection("comments");
  let newComment = initializeNewComment(parentID, name, publicID, profileImage, content, comments, images);
  commentsCollection.insertOne(newComment);
  if (parentID.includes("Comment")) {
    let updateComment = await commentsCollection.updateOne({ commentID: parentID }, { $push: { comments: newComment.commentID } });
    if (!updateComment.acknowledged) {
      return "Failed to add to comments";
    }
  } else {
    let postsCollection = await getDBCollection("posts");
    let updatePost = await postsCollection.updateOne({ postID: parentID }, { $push: { comments: newComment.commentID } });
    if (!updatePost.acknowledged) {
      return "Failed to add to comments";
    }
  }
  return new Response("Success", { status: 200 });
}
async function PUT({ params, request, locals }) {
  if (locals.user)
    ;
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  const { commentID, parentID, name, publicID, profileImage, content, comments, images } = await request.json();
  const commentsCollection = await getDBCollection("comments");
  const confirm = await commentsCollection.updateOne({ commentID }, { $set: { content } });
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
