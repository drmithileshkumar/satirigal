import { g as getDBCollection } from './mongo-46929b2f.js';
import 'mongodb';
import { e as error } from './index-9b9a1ed0.js';

const initializeNewLike = (publicID, postID) => {
  let newLike = {
    publicID,
    //public
    postID,
    //array of post ids
    creationTimeStamp: Date.now()
  };
  return newLike;
};
async function GET({ request, params, url, locals }) {
  let publicID = params.publicID;
  let postID = params.postID;
  let postsCollection = await getDBCollection("likes");
  let postLike = await postsCollection.findOne({ publicID, postID });
  let liked = postLike ? true : false;
  return new Response(JSON.stringify(liked), { status: 200 });
}
async function POST({ request, params, url, locals }) {
  if (!locals.user) {
    return error(409, "Permission Denied");
  }
  let id = locals.user.publicID;
  let { postID, liked } = await request.json();
  let likesCollection = await getDBCollection("likes");
  let postsCollection = await getDBCollection("posts");
  if (liked) {
    let newLike = initializeNewLike(id, postID);
    let confirmLike = await likesCollection.insertOne(newLike);
    if (!confirmLike.acknowledged) {
      return error(411, "Unable to save to likes");
    }
    let confirmPost = await postsCollection.updateOne({ postID }, { $addToSet: { likes: id } });
    if (!confirmPost.acknowledged) {
      return error(411, "Unable to add to post likes");
    }
  } else {
    let confirmLike = await likesCollection.deleteOne({ publicID: id, postID });
    if (!confirmLike.acknowledged) {
      return error(411, "Unable to delete from likes");
    }
    let confirmPost = await postsCollection.updateOne({ postID }, { $pull: { likes: id } });
    if (!confirmPost.acknowledged) {
      return error(411, "Unable to remove from post likes");
    }
  }
  return new Response("Success", { status: 200 });
}
async function PUT({ request, params, url, locals }) {
  if (!locals.user) {
    return error(409, "Permission Denied");
  }
  let id = locals.user.publicID;
  let { postID } = await request.json();
  let likesCollection = await getDBCollection("likes");
  let newLike = initializeNewLike(id, postID);
  let confirmLike = await likesCollection.insertOne(newLike);
  if (!confirmLike.acknowledged) {
    return error(411, "Unable to save to likes");
  }
  let postsCollection = await getDBCollection("posts");
  let confirmPost = await postsCollection.updateOne({ postID }, { $pull: { likes: id } });
  if (!confirmPost.acknowledged) {
    return error(411, "Unable to add to post likes");
  }
  return new Response("Success", { status: 200 });
}

export { GET, POST, PUT };
//# sourceMappingURL=_server-bee93360.js.map
