import { g as getDBCollection } from './mongo-46929b2f.js';
import 'mongodb';
import { e as error } from './index-9b9a1ed0.js';

async function GET({ request, params, url, locals }) {
  let id = params.publicID;
  const usersCollection = await getDBCollection("users");
  let userData = await usersCollection.findOne({ publicID: id });
  if (!userData) {
    return error(404, "User not found");
  }
  let likesCollection = await getDBCollection("likes");
  let postsCollection = await getDBCollection("posts");
  let likesData = await likesCollection.find({ publicID: id }).toArray();
  console.log(id, likesData);
  let likes = [];
  if (!likesData)
    likes = [];
  for (let i = 0; i < likesData.length; i++) {
    let newLikedPost = await postsCollection.findOne({ postID: likesData[i].postID });
    if (newLikedPost) {
      likes.push(newLikedPost);
    }
  }
  console.log(likes);
  return new Response(JSON.stringify(likes), { status: 200 });
}

export { GET };
//# sourceMappingURL=_server-48f20967.js.map
