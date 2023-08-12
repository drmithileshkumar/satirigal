import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'fs';
import { e as error } from './index-9b9a1ed0.js';

async function GET({ request, url }) {
  const path = url.searchparams.get("path");
  const imageData = readFileSync(path, { encoding: "utf8", flag: "r" });
  return new Response(JSON.stringify({ imageData }), {
    headers: {
      "Content-Type": "image/svg"
    }
  });
}
async function POST({ locals, request }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  const publicID = locals.user.publicID;
  try {
    const data = await request.json();
    const name = data["name"];
    const file = data["image"];
    const folder = data["folder"];
    const encoding = data["encoding"];
    let dir = folder + "/" + publicID;
    if (!existsSync(dir)) {
      mkdirSync(dir);
    }
    writeFileSync(dir + `/${name}`, file, encoding);
    return new Response("Uploaded", { status: 200 });
  } catch (err) {
    return error(500, "Failed");
  }
}

export { GET, POST };
//# sourceMappingURL=_server-9689e172.js.map
