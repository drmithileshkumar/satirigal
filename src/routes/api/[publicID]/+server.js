// @ts-nocheck
import { getDBCollection } from '$lib/server/mongo'

import { ObjectId } from 'mongodb';
import {error} from '@sveltejs/kit';


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({request, params, url, locals}) {
    let id = params.publicID;
    const usersCollection = await getDBCollection('users');
    let userData = await usersCollection.findOne({publicID: id});
    if(!userData) {
        return error(404, 'User not found');
    }
    let user = {
        name: userData.name,
        phone: userData.phone,
        profile: userData.profile,
        banner: userData.banner,
        publicID: userData.publicID
    }
    const userDetailsCollection = await getDBCollection('userDetails');
    let userDetail = await userDetailsCollection.findOne({publicID: id});
    let followingsCollection = await getDBCollection('followings');
    let isFollowing = false;
    // console.log(locals.user.publicID, id);
    if(locals.user) { 
        let isF = await followingsCollection.find({publicID: locals.user.publicID, following: {$in: [id]}}).toArray();
        // console.log('isF...',isF.length);
        if(isF.length > 0) isFollowing = true
    }
    if(!userDetail) {
        return error(404, 'Not found');
    }
    // console.log('isFollowng', isFollowing)
    userDetail.isFollowing = isFollowing;
    // console.log(quizzes);
    return new Response(JSON.stringify({user, userDetail}), {status: 200});
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

