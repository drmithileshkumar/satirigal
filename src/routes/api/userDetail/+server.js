// @ts-nocheck
import { getDBCollection } from '$lib/server/mongo'

import { ObjectId } from 'mongodb';
import {error} from '@sveltejs/kit';


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({request, url, locals}) {
    if(!locals.user) {
        return error(401, 'Unauthorized');
    }
    let id = locals.user.publicID;
    const userDetailsCollection = await getDBCollection('userDetails');
    let userDetail = await userDetailsCollection.findOne({publicID: id});
    
    if(!userDetail) {
        return error(404, 'Not found');
    }
    // console.log(quizzes);
    return new Response(JSON.stringify(userDetail), {status: 200});
}
export async function POST({params, request, locals}) {
    let userExists = false;
    if(locals.user) userExists = true;
    if(!locals.user) {
        return error(401, 'Unauthorized');
    }
    const { type, details, common } = await request.json();
    const userDetailsCollection = await getDBCollection('userDetails')
    const confirm = await userDetailsCollection.updateOne({publicID: locals.user.publicID}, {$set: {type, details, common}}, {upsert:true});
    if(!confirm.acknowledged) {
        return error(400, 'Failed!') 
    }
    return new Response("Success", {status: 200});
}

