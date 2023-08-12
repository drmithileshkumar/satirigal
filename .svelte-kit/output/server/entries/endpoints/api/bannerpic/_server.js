import { a as getUsersCollection } from "../../../../chunks/mongo.js";
import { readFileSync, existsSync, mkdirSync, writeFileSync } from "fs";
import { e as error } from "../../../../chunks/index.js";
async function GET({ locals, request }) {
  const publicID = locals.user.publicID;
  const usersCollection = await getUsersCollection();
  const user = await usersCollection.findOne({ publicID });
  let path = user.banner;
  let imageData = "";
  if (!path || path.length === 0) {
    return new Response(imageData, {
      headers: {
        "Content-Type": `image/png`
        // "cache-control": "public, max-age=31557600"
      }
    });
  }
  const ext = path.split(".").slice(-1);
  try {
    imageData = readFileSync("./banner" + path);
    return new Response(imageData, {
      headers: {
        "Content-Type": `image/${ext}`,
        "cache-control": "public, max-age=3000"
      }
    });
  } catch (err) {
    return new Response(imageData, {
      headers: {
        "Content-Type": `image/${ext}`,
        "cache-control": "public, max-age=3000"
      }
    });
  }
}
async function POST({ locals, request }) {
  const publicID = locals.user.publicID;
  const data = await request.json();
  let [part1, ext] = data["name"].split(".");
  let name = "avatar." + ext;
  const file = data["image"];
  const usersCollection = await getUsersCollection();
  let dir = "banner/" + publicID;
  try {
    if (!existsSync(dir))
      mkdirSync(dir);
    writeFileSync(dir + `/${name}`, file, "base64");
    let banner = "/" + publicID + `/${name}`;
    const confirm = await usersCollection.updateOne({ publicID }, { $set: { banner } }, { upsert: true });
    let status, message;
    if (!confirm.acknowledged) {
      status = 500;
      message = "Failed to update banner";
    }
    status = 200;
    message = "Uploaded";
    return new Response(message, { status });
  } catch (err) {
    return error(500, "Failed");
  }
}
export {
  GET,
  POST
};
