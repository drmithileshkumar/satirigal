import { g as getDBCollection } from "../../../../../chunks/mongo.js";
import { e as error } from "../../../../../chunks/index.js";
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
export {
  GET
};
