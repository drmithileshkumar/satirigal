import { g as getDBCollection } from './mongo-46929b2f.js';
import 'mongodb';
import { e as error } from './index-9b9a1ed0.js';

async function GET({ request, url, locals }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  let id = locals.user.publicID;
  const userDetailsCollection = await getDBCollection("userDetails");
  let userDetail = await userDetailsCollection.findOne({ publicID: id });
  if (!userDetail) {
    return error(404, "Not found");
  }
  return new Response(JSON.stringify(userDetail), { status: 200 });
}
async function POST({ params, request, locals }) {
  if (locals.user)
    ;
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  const { type, details, common } = await request.json();
  const userDetailsCollection = await getDBCollection("userDetails");
  const confirm = await userDetailsCollection.updateOne({ publicID: locals.user.publicID }, { $set: { type, details, common } }, { upsert: true });
  if (!confirm.acknowledged) {
    return error(400, "Failed!");
  }
  return new Response("Success", { status: 200 });
}

export { GET, POST };
//# sourceMappingURL=_server-910cf606.js.map
