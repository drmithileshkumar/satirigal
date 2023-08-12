// @ts-nocheck
import { getDBCollection } from '$lib/server/mongo';
import { error } from '@sveltejs/kit';


export async function GET({ url, params, request, locals }) {
    if (!locals.user) {
        return error(401, 'Unauthorized');
    }
    // console.log('Getting subscription')
    const publicID = locals.user.publicID;
    const invoiceID = params.invoiceID;
    const paymentCollection = await getDBCollection('payments');
    let invoice = await paymentCollection.findOne({publicID, payment_id: invoiceID})
    // console.log(order)
    if (!invoice) {
        return error(404, "Invoice not found")
    }
    return new Response(JSON.stringify(invoice))
}

