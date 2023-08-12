import { a as getUsersCollection } from './mongo-46929b2f.js';
import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'fs';
import { e as error } from './index-9b9a1ed0.js';
import 'mongodb';

async function GET({ locals, request, params, url }) {
  const media = url.searchParams.get("media");
  let path = media;
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
    imageData = readFileSync("./media" + path);
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
  let name = data["name"];
  const file = data["image"];
  await getUsersCollection();
  let dir = "media/" + publicID;
  try {
    if (!existsSync(dir))
      mkdirSync(dir);
    writeFileSync(dir + `/${name}`, file, "base64");
    let mediaPath = "/" + publicID + `/${name}`;
    let status, message;
    status = 200;
    message = "Uploaded";
    return new Response(mediaPath, { status });
  } catch (err) {
    return error(500, "Failed");
  }
}

export { GET, POST };
//# sourceMappingURL=_server-9f9f2dfc.js.map
