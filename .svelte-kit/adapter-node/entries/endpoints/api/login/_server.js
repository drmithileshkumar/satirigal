import { s as signJwt } from "../../../../chunks/jwt.js";
import { a as getUsersCollection, g as getDBCollection } from "../../../../chunks/mongo.js";
import { i as initializeNewUserDetail } from "../../../../chunks/userDetail.js";
import { e as error } from "../../../../chunks/index.js";
async function POST({ locals, params, request }) {
  const { phone, publicID, privateID, otpID } = await request.json();
  const query = { publicID, privateID, otpID, phone: String(phone) };
  let existingUser;
  const usersCollection = await getUsersCollection();
  existingUser = await usersCollection.findOne(query);
  if (!existingUser) {
    return error(400, "User does not exist!");
  }
  const user = {
    publicID: existingUser.publicID,
    name: existingUser.name,
    phone: String(existingUser.phone),
    profile: existingUser.profile,
    banner: existingUser.banner
  };
  const userDetailsCollection = await getDBCollection("userDetails");
  let userDetail = await userDetailsCollection.findOne({ publicID });
  if (!userDetail) {
    let type = "";
    let details = {
      gender: "",
      dob: "",
      rank: "",
      experience: 0,
      established: ""
    };
    let common = {
      bio: "",
      email: "",
      zip: "",
      city: "",
      country: "",
      website: "",
      followers: 0,
      following: 0,
      replies: 0,
      shares: 0
    };
    let newUserDetail = initializeNewUserDetail(publicID, type, details, common);
    await userDetailsCollection.insertOne(newUserDetail);
    userDetail = newUserDetail;
  }
  const jwt = signJwt(user);
  const headers = new Headers();
  headers.append("set-cookie", [`jwt=${jwt}; Max-Age=${7 * 24 * 60 * 60}; Path=/;`]);
  return new Response("Success", { headers });
}
export {
  POST
};
