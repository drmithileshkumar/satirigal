import { g as getDBCollection } from "../../../../../../chunks/mongo.js";
import { e as error } from "../../../../../../chunks/index.js";
async function GET({ url, params, request, locals }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  const publicID = locals.user.publicID;
  const invoiceID = params.invoiceID;
  const paymentCollection = await getDBCollection("payments");
  let invoice = await paymentCollection.findOne({ publicID, payment_id: invoiceID });
  if (!invoice) {
    return error(404, "Invoice not found");
  }
  return new Response(JSON.stringify(invoice));
}
export {
  GET
};
