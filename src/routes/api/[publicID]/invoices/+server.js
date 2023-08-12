// @ts-nocheck
import { getDBCollection } from '$lib/server/mongo';
import { error } from '@sveltejs/kit';


export async function GET({ url, params, request, locals }) {
    if (!locals.user) {
        return error(401, 'Unauthorized');
    }
    // console.log('Getting subscription')
    const publicID = locals.user.publicID;
    
    const paymentCollection = await getDBCollection('payments');
    let invoices = await paymentCollection.find({publicID}).toArray()
    // console.log(order)
    if (!invoices) {
        invoices = [];
    }
    return new Response(JSON.stringify(invoices))
}

