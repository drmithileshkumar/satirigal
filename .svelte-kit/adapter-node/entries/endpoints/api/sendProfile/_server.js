import { readFileSync } from "fs";
async function POST({ locals, request }) {
  const { path } = await request.json();
  const ext = path.split(".").slice(-1);
  let imageData = "";
  try {
    imageData = readFileSync(path, "base64");
    return new Response(imageData, {
      headers: {
        "Content-Type": `image/${ext}`,
        "cache-control": "public, max-age=31557600"
      }
    });
  } catch (err) {
    return new Response(imageData);
  }
}
export {
  POST
};
