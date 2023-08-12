import { g as getDBCollection } from "../../../../../chunks/mongo.js";
import "mongodb";
import { e as error } from "../../../../../chunks/index.js";
async function GET({ request, params, url, locals }) {
  let id = params.publicID;
  const usersCollection = await getDBCollection("users");
  const userDetailsCollection = await getDBCollection("userDetails");
  let userData = await usersCollection.findOne({ publicID: id });
  if (!userData) {
    return error(404, "User not found");
  }
  let followersCollection = await getDBCollection("followers");
  let followingsCollection = await getDBCollection("followings");
  let followerData = await followersCollection.findOne({ publicID: id });
  let followingData = await followingsCollection.findOne({ publicID: id });
  let followers = [];
  if (!followerData) {
    followers = [];
  } else {
    for (let i = 0; i < followerData.followers.length; i++) {
      let newFollower = await usersCollection.findOne({ publicID: followerData.followers[i] });
      let newFollowerDetail = await userDetailsCollection.findOne({ publicID: followerData.followers[i] });
      if (newFollower && newFollowerDetail) {
        followers.push(
          {
            name: newFollower.name,
            publicID: newFollower.publicID,
            profile: newFollower.profile,
            banner: newFollower.banner,
            bio: newFollowerDetail.common.bio,
            isFollow: followingData && followingData.followings.indexOf(followerData.followers[i]) !== -1
          }
        );
      }
    }
  }
  return new Response(JSON.stringify(followers), { status: 200 });
}
async function POST({ params, request, locals }) {
  if (locals.user)
    ;
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  let publicID = params.publicID;
  console.log("Following...", locals.user.publicID, publicID);
  const followingsCollection = await getDBCollection("followings");
  const followersCollection = await getDBCollection("followers");
  const confirm = await followingsCollection.updateOne({ publicID: locals.user.publicID }, { $addToSet: { following: publicID } }, { upsert: true });
  const confirm1 = await followersCollection.updateOne({ publicID }, { $addToSet: { followers: locals.user.publicID } }, { upsert: true });
  if (!confirm.acknowledged || !confirm1.acknowledged) {
    return error(400, "Failed!");
  }
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
  const confirm = await followingsCollection.updateOne({ publicID: locals.user.publicID }, { $pull: { following: publicID } }, { upsert: true });
  const confirm1 = await followersCollection.updateOne({ publicID }, { $pull: { followers: locals.user.publicID } }, { upsert: true });
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
