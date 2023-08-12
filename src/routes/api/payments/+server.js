//@ts-nocheck
import Razorpay from 'razorpay';
import crypto from 'crypto';
import {getPaymentsCollection} from '$lib/server/mongo';
import {initializeNewPayment} from '$lib/models/payment';
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
            amount: amount * 100,  // amount in the smallest currency unit
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

//create order id
export async function GET({params, request, url, locals}) {
    const amount = parseFloat(url.searchParams.get('amount'));
    let order = await createOrder(amount);
    // console.log(order)
    return new Response(JSON.stringify(order), {
        headers: {
            'content-type': 'application/json; charset=utf-8'
        }
    })
}
//save payment
export async function POST({params, request, locals}) {
    const { rzp_payment_id, rzp_order_id, rzp_signature, orderId, amount } = await request.json();
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
    const paymentCollection = await getPaymentsCollection();
    let newPayment = initializeNewPayment(payment_id, order_id, publicID, amount, status);
    const confirm = await paymentCollection.insertOne(newPayment);
    if(!confirm.acknowledged) {
        message = 'Failed to save payment';
    }
    return new Response(message)
}