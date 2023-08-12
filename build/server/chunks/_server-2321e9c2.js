import { g as getDBCollection } from './mongo-46929b2f.js';
import { e as error } from './index-9b9a1ed0.js';
import 'mongodb';

async function GET({ url, params, request, locals }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  const publicID = locals.user.publicID;
  const paymentCollection = await getDBCollection("payments");
  let invoices = await paymentCollection.find({ publicID }).toArray();
  if (!invoices) {
    invoices = [];
  }
  return new Response(JSON.stringify(invoices));
}

export { GET };
//# sourceMappingURL=_server-2321e9c2.js.map
