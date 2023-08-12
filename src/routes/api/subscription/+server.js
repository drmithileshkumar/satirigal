// @ts-nocheck

import { validateSubscription } from './validateSubscription';
import { getDBCollection } from '$lib/server/mongo';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import {getPaymentsCollection} from '$lib/server/mongo';
import {initializeNewPayment} from '$lib/models/payment';
import { coupons } from './coupons';
import { ObjectId } from 'mongodb';
import { error } from '@sveltejs/kit';
//------------------------Razorpay--------------------------
let key_id, key_secret;

if(import.meta.env.VITE_NODE_ENV == 'development') {
    key_id = import.meta.env.VITE_TEST_KEY_ID;
    key_secret = import.meta.env.VITE_TEST_KEY_SECRET;
} else if(import.meta.env.VITE_NODE_ENV == 'production') {
    key_id = import.meta.env.VITE_LIVE_KEY_ID;
    key_secret = import.meta.env.VITE_LIVE_KEY_SECRET;
} 
let rzp = new Razorpay({
    key_id, // your `KEY_ID`
    key_secret // your `KEY_SECRET`
})



const createOrder = async (amount) => { 
    
    try {
        
        let options = {
            amount: amount * 100 * 1.18,  // amount in the smallest currency unit
            currency: "INR",
            receipt: "order_rcptid_11"
        };
        let order = await rzp.orders.create(options);
        return order;
        // rzp.orders.create(options, function(err, order) {
            
        //     return order;
        // });
    } catch (error) {
        return null;
    }
}
export async function GET({url, params, request, locals}) {
    if(!locals.user) {
        return error(401, 'Unauthorized');
    }
    // console.log('Getting subscription')
    const publicID = locals.user.publicID;
    const userCollection = await getDBCollection('users');
    const user = await userCollection.findOne({publicID});
    let res = await validateSubscription(user, userCollection);
    // console.log(res)
    return new Response(JSON.stringify(res.body), {status: res.status, headers: {
        'cache-control': 'private, max-age=0'
    }})
}

export async function POST({url, params, request, locals}) {
    if(!locals.user) {
        return error(401, 'Unauthorized');
    }
    const publicID = locals.user.publicID;
    let {amount, type, coupon} = await request.json();
    //verify coupon
    const couponsCollection = await getDBCollection('coupons');
    let hasValidCoupon = false;
    let couponData = await couponsCollection.findOne({coupon});
    if(couponData && couponData.valid) hasValidCoupon = true;
    
    let discount = 0;
    
    if(type === 'Monthly') {
        amount = 500;
        if(hasValidCoupon) {
            discount = 25;
            amount = 500 - discount;
        }
    }
    if(type === 'Yearly') {
        amount = 5000;
        if(hasValidCoupon) {
            discount = 250;
            amount = 5000 - discount;
        }
    }
    let order = await createOrder(amount);
    // console.log(order)
    if(!order) {
        return error(500, 'Failed to initialize order');
    }
    const paymentCollection = await getDBCollection('payments');
    let payment_id = '';
    let order_id = order.id;
    let newPayment = initializeNewPayment(payment_id, order_id, publicID, amount, discount, type, coupon);
    const confirm = await paymentCollection.insertOne(newPayment);
    if(!confirm.acknowledged) {
        return error(500, 'Failed to save order');
    }
    return new Response(JSON.stringify(order))
}
export async function PUT({url, params, request, locals}) {
    if(!locals.user) {
        return error(401, 'Unauthorized');
    }
    
    const { rzp_payment_id, rzp_order_id, rzp_signature, orderId, amount, type } = await request.json();
    let body = orderId + "|" + rzp_payment_id;
    var expectedSignature = crypto.createHmac('sha256', key_secret)
                                      .update(body.toString())
                                      .digest('hex');
    var message = 'Failed';
    if(expectedSignature === rzp_signature) {
        //save data to mongo
        message = "Success";
    }
    let publicID = locals.user ? locals.user.publicID : 'guest';
    let payment_id = rzp_payment_id, order_id = rzp_order_id, status = message;
    const paymentCollection = await getDBCollection('payments');
    const confirm = await paymentCollection.updateOne({publicID, order_id}, {$set: {payment_id, status}});
    if(!confirm.acknowledged) {
        message = 'Failed to save payment';
    }

    let startdate = new Date();
    let newdate = new Date();
    let advance = type === 'Monthly' ? 30 : 365;
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
    }
    const confirmTrial = await userCollection.updateOne({publicID}, {$set: {"products.mathril": products.mathril}}, {upsert: true});
    if(!confirmTrial.acknowledged) {
        message= 'Failed to create subscription.'
    }

    return new Response(message)
}