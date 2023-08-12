import Razorpay from "razorpay";
import crypto from "crypto";
import { b as getPaymentsCollection } from "../../../../chunks/mongo.js";
import { i as initializeNewPayment } from "../../../../chunks/payment.js";
let key_id, key_secret;
{
  key_id = "rzp_live_lMsk4ZYh8eG2YH";
  key_secret = "PTOtGDcvuohBGvONJxR0h9o7";
}
let rzp = new Razorpay({
  key_id,
  // your `KEY_ID`
  key_secret
  // your `KEY_SECRET`
});
const createOrder = async (amount) => {
  try {
    let options = {
      amount: amount * 100,
      // amount in the smallest currency unit
      currency: "INR",
      receipt: "order_rcptid_11"
    };
    let order = await rzp.orders.create(options);
    return order;
  } catch (error) {
    return null;
  }
};
async function GET({ params, request, url, locals }) {
  const amount = parseFloat(url.searchParams.get("amount"));
  let order = await createOrder(amount);
  return new Response(JSON.stringify(order), {
    headers: {
      "content-type": "application/json; charset=utf-8"
    }
  });
}
async function POST({ params, request, locals }) {
  const { rzp_payment_id, rzp_order_id, rzp_signature, orderId, amount } = await request.json();
  let body = orderId + "|" + rzp_payment_id;
  var expectedSignature = crypto.createHmac("sha256", key_secret).update(body.toString()).digest("hex");
  var message = "Failed";
  if (expectedSignature === rzp_signature) {
    message = "Success";
  }
  let publicID = locals.user ? locals.user.publicID : "guest";
  let payment_id = rzp_payment_id, order_id = rzp_order_id, status = message;
  const paymentCollection = await getPaymentsCollection();
  let newPayment = initializeNewPayment(payment_id, order_id, publicID, amount, status);
  const confirm = await paymentCollection.insertOne(newPayment);
  if (!confirm.acknowledged) {
    message = "Failed to save payment";
  }
  return new Response(message);
}
export {
  GET,
  POST
};
