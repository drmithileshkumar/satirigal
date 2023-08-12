import { s as signJwt } from './jwt-9769a5f5.js';
import { a as getUsersCollection, g as getDBCollection } from './mongo-46929b2f.js';
import { i as initializeNewUser } from './user-7fc5b247.js';
import { i as initializeNewUserDetail } from './userDetail-531642f1.js';
import { e as error } from './index-9b9a1ed0.js';
import './stores-ac084a5d.js';
import 'jsonwebtoken';
import 'mongodb';
import 'uuid';
import './index2-56d214e2.js';
import './index3-f1aa5d16.js';

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

export { POST };
//# sourceMappingURL=_server-769c8bb4.js.map
