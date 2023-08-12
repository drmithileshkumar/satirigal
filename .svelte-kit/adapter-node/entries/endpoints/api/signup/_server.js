import { s as signJwt } from "../../../../chunks/jwt.js";
import { a as getUsersCollection, g as getDBCollection } from "../../../../chunks/mongo.js";
import { i as initializeNewUser } from "../../../../chunks/user.js";
import { i as initializeNewUserDetail } from "../../../../chunks/userDetail.js";
import { e as error } from "../../../../chunks/index.js";
import "../../../../chunks/stores.js";
const validateName = (name) => {
  let nameAntiPattern = /[^a-zA-Z ]/g;
  return !nameAntiPattern.test(name);
};
const validatePhone = (phone) => {
  const length = phone.length === 10;
  const phoneAntiPattern = /[^\d]/g;
  return length && !phoneAntiPattern.test(phone);
};
async function POST({ params, request }) {
  const { name, phone } = await request.json();
  if (!validateName(name))
    return error(410, "Invalid name");
  if (!validatePhone(String(phone)))
    return error(410, "Invalid phone");
  const usersCollection = await getUsersCollection();
  const existingUser = await usersCollection.findOne({ name, phone: String(phone) });
  if (existingUser) {
    return error(403, "User already exists!");
  }
  const count = await usersCollection.countDocuments({ name });
  let newUser = initializeNewUser(name, String(phone), count);
  usersCollection.insertOne(newUser);
  const userDetailsCollection = await getDBCollection("userDetails");
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
  let newUserDetail = initializeNewUserDetail(newUser.publicID, type, details, common);
  await userDetailsCollection.insertOne(newUserDetail);
  const user = {
    publicID: newUser.publicID,
    name: newUser.name,
    phone: String(newUser.phone),
    profile: newUser.profile,
    banner: newUser.banner
  };
  const jwt = signJwt(user);
  const headers = new Headers();
  headers.append("set-cookie", [`jwt=${jwt}; Max-Age=${7 * 24 * 60 * 60}; Path=/;`]);
  return new Response(JSON.stringify(
    { privateID: newUser.privateID, publicID: newUser.publicID, otpID: newUser.otpID }
  ), { headers });
}
export {
  POST
};
