import { readFileSync } from "fs";
async function POST({ locals, request }) {
  const { path } = await request.json();
  let imageData = "";
  try {
    imageData = readFileSync(path);
    return new Response(imageData, {
      headers: {
        // "Content-Type": "image/svg+xml",
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
