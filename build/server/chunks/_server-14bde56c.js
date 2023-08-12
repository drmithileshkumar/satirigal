import { s as signJwt } from './jwt-9769a5f5.js';
import { g as getDBCollection } from './mongo-46929b2f.js';
import { i as initializeNewUser } from './user-7fc5b247.js';
import qrcode from 'qrcode-generator';
import './index-9b9a1ed0.js';
import 'jsonwebtoken';
import 'mongodb';
import './stores-ac084a5d.js';
import './index2-56d214e2.js';
import './index3-f1aa5d16.js';
import 'uuid';

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

export { POST };
//# sourceMappingURL=_server-14bde56c.js.map
