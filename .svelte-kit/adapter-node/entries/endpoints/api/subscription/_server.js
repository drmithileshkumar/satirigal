import { g as getDBCollection } from "../../../../chunks/mongo.js";
import Razorpay from "razorpay";
import crypto from "crypto";
import { i as initializeNewPayment } from "../../../../chunks/payment.js";
import "mongodb";
import { e as error } from "../../../../chunks/index.js";
async function validateSubscription(user, userCollection2) {
  if (!user) {
    return {
      status: 404,
      body: { message: "User not found" }
    };
  }
  const publicID = user.publicID;
  if (!user.products) {
    let startdate = /* @__PURE__ */ new Date();
    let newdate = /* @__PURE__ */ new Date();
    let expirydate = new Date(newdate.setDate(newdate.getDate() + 7));
    let products = {
      mathril: {
        subscribed: true,
        valid: true,
        start: {
          date: startdate.getDate(),
          month: startdate.getMonth(),
          year: startdate.getFullYear()
        },
        end: {
          date: expirydate.getDate(),
          month: expirydate.getMonth(),
          year: expirydate.getFullYear()
        },
        type: "Trial"
      }
    };
    const confirmTrial = await userCollection2.updateOne({ publicID }, { $set: { products } }, { upsert: true });
    if (!confirmTrial.acknowledged) {
      return {
        status: 500,
        body: { message: "Failed to create subscription." }
      };
    }
  } else if (!user.products.mathril) {
    let startdate = /* @__PURE__ */ new Date();
    let newdate = /* @__PURE__ */ new Date();
    let expirydate = new Date(newdate.setDate(newdate.getDate() + 7));
    let products = {
      mathril: {
        subscribed: true,
        valid: true,
        start: {
          date: startdate.getDate(),
          month: startdate.getMonth(),
          year: startdate.getFullYear()
        },
        end: {
          date: expirydate.getDate(),
          month: expirydate.getMonth(),
          year: expirydate.getFullYear()
        },
        type: "Trial"
      }
    };
    const confirmTrial = await userCollection2.updateOne({ publicID }, { $set: { "products.mathril": products.mathril } }, { upsert: true });
    if (!confirmTrial.acknowledged) {
      return {
        status: 500,
        body: { message: "Failed to create subscription." }
      };
    }
  } else if (!user.products.mathril.valid) {
    return {
      status: 410,
      body: { message: "Renew subscription." }
    };
  }
  let enddate = user.products.mathril.end;
  if (/* @__PURE__ */ new Date() > new Date(enddate.year, enddate.month, enddate.date)) {
    const confirmValidity = await userCollection2.updateOne({ publicID }, { $set: { "products.mathril.valid": false } }, { upsert: true });
    if (!confirmValidity.acknowledged) {
      return {
        status: 500,
        body: { message: "Failed to update validity." }
      };
    }
    return {
      status: 411,
      body: { message: "Renew subscription." }
    };
  }
  return {
    status: 200,
    body: { message: "Valid", type: user.products.mathril.type, expire: user.products.mathril.end }
  };
}
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
      amount: amount * 100 * 1.18,
      // amount in the smallest currency unit
      currency: "INR",
      receipt: "order_rcptid_11"
    };
    let order = await rzp.orders.create(options);
    return order;
  } catch (error2) {
    return null;
  }
};
async function GET({ url, params, request, locals }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  const publicID = locals.user.publicID;
  const userCollection2 = await getDBCollection("users");
  const user = await userCollection2.findOne({ publicID });
  let res = await validateSubscription(user, userCollection2);
  return new Response(JSON.stringify(res.body), { status: res.status, headers: {
    "cache-control": "private, max-age=0"
  } });
}
async function POST({ url, params, request, locals }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  const publicID = locals.user.publicID;
  let { amount, type, coupon } = await request.json();
  const couponsCollection = await getDBCollection("coupons");
  let hasValidCoupon = false;
  let couponData = await couponsCollection.findOne({ coupon });
  if (couponData && couponData.valid)
    hasValidCoupon = true;
  let discount = 0;
  if (type === "Monthly") {
    amount = 500;
    if (hasValidCoupon) {
      discount = 25;
      amount = 500 - discount;
    }
  }
  if (type === "Yearly") {
    amount = 5e3;
    if (hasValidCoupon) {
      discount = 250;
      amount = 5e3 - discount;
    }
  }
  let order = await createOrder(amount);
  if (!order) {
    return error(500, "Failed to initialize order");
  }
  const paymentCollection = await getDBCollection("payments");
  let payment_id = "";
  let order_id = order.id;
  let newPayment = initializeNewPayment(payment_id, order_id, publicID, amount, discount, type, coupon);
  const confirm = await paymentCollection.insertOne(newPayment);
  if (!confirm.acknowledged) {
    return error(500, "Failed to save order");
  }
  return new Response(JSON.stringify(order));
}
async function PUT({ url, params, request, locals }) {
  if (!locals.user) {
    return error(401, "Unauthorized");
  }
  const { rzp_payment_id, rzp_order_id, rzp_signature, orderId, amount, type } = await request.json();
  let body = orderId + "|" + rzp_payment_id;
  var expectedSignature = crypto.createHmac("sha256", key_secret).update(body.toString()).digest("hex");
  var message = "Failed";
  if (expectedSignature === rzp_signature) {
    message = "Success";
  }
  let publicID = locals.user ? locals.user.publicID : "guest";
  let payment_id = rzp_payment_id, order_id = rzp_order_id, status = message;
  const paymentCollection = await getDBCollection("payments");
  const confirm = await paymentCollection.updateOne({ publicID, order_id }, { $set: { payment_id, status } });
  if (!confirm.acknowledged) {
    message = "Failed to save payment";
  }
  let startdate = /* @__PURE__ */ new Date();
  let newdate = /* @__PURE__ */ new Date();
  let advance = type === "Monthly" ? 30 : 365;
  let expirydate = new Date(newdate.setDate(newdate.getDate() + advance));
  let products = {
    mathril: {
      subscribed: true,
      valid: true,
      start: {
        date: startdate.getDate(),
        month: startdate.getMonth(),
        year: startdate.getFullYear()
      },
      end: {
        date: expirydate.getDate(),
        month: expirydate.getMonth(),
        year: expirydate.getFullYear()
      },
      type
    }
  };
  const confirmTrial = await userCollection.updateOne({ publicID }, { $set: { "products.mathril": products.mathril } }, { upsert: true });
  if (!confirmTrial.acknowledged) {
    message = "Failed to create subscription.";
  }
  return new Response(message);
}
export {
  GET,
  POST,
  PUT
};
