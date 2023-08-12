import { s as signJwt } from "../../../../chunks/jwt.js";
import { g as getDBCollection } from "../../../../chunks/mongo.js";
import { i as initializeNewUser } from "../../../../chunks/user.js";
import qrcode from "qrcode-generator";
import "../../../../chunks/index.js";
async function POST({ params, request }) {
  const { waName, waNumber } = await request.json();
  const query = { phone: String(waNumber) };
  let existingUser;
  const usersCollection = await getDBCollection("users");
  existingUser = await usersCollection.findOne(query);
  let qrlink = false;
  if (!existingUser) {
    let newUser = initializeNewUser(waName, String(waNumber), 0);
    existingUser = newUser;
    usersCollection.insertOne(newUser);
    let qr = qrcode(10, "H");
    qr.addData(newUser.privateID + " " + newUser.otpID);
    qr.make();
    qrlink = qr.createDataURL();
  }
  const user = {
    publicID: existingUser.publicID,
    name: existingUser.name,
    phone: String(existingUser.phone),
    profile: existingUser.profile,
    likes: existingUser.likes,
    qrlink
  };
  const jwt = signJwt(user);
  const headers = new Headers();
  headers.append("set-cookie", [`jwt=${jwt}; Max-Age=${7 * 24 * 60 * 60}; Path=/;`]);
  return new Response(JSON.stringify(user), { headers });
}
export {
  POST
};
