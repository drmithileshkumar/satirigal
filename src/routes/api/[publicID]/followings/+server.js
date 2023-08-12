// @ts-nocheck
import { getDBCollection } from '$lib/server/mongo'

import { ObjectId } from 'mongodb';
import {error} from '@sveltejs/kit';


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({request, params, url, locals}) {
    let id = params.publicID;
    const usersCollection = await getDBCollection('users');
    const userDetailsCollection = await getDBCollection('userDetails')
    let userData = await usersCollection.findOne({publicID: id});
    if(!userData) {
        return error(404, 'User not found');
    }
    let followersCollection = await getDBCollection('followers');
    let followingsCollection = await getDBCollection('followings');
    let followerData = await followersCollection.findOne({publicID: id});
    let followingData = await followingsCollection.findOne({publicID: id});
    let followings = [];
    if(!followingData) {
        followings = []
    } else {
        for(let i = 0; i < followingData.following.length; i++) {
            let newfollowing = await usersCollection.findOne({publicID: followingData.following[i]})
            let newfollowingDetail = await userDetailsCollection.findOne({publicID: followingData.following[i]})
            if(newfollowing && newfollowingDetail) {
                followings.push(
                    {
                        name: newfollowing.name,
                        publicID: newfollowing.publicID,
                        profile: newfollowing.profile,
                        banner: newfollowing.banner,
                        bio: newfollowingDetail.common.bio,
                        isFollow: followerData && followerData.followers.indexOf(followingData.following[i]) !== -1
                    }
                )
            }
        }
    }
    return new Response(JSON.stringify(followings), {status: 200});
}
export async function POST({params, request, locals}) {
    let userExists = false;
    if(locals.user) userExists = true;
    if(!locals.user) {
        return error(401, 'Unauthorized');
    }
    let publicID = params.publicID
    console.log('Following...', locals.user.publicID, publicID)
    const followingsCollection = await getDBCollection('followings')
    const followersCollection = await getDBCollection('followers')
    const confirm = await followingsCollection.updateOne({publicID: locals.user.publicID}, {$addToSet: {following: publicID}}, {upsert:true});
    const confirm1 = await followersCollection.updateOne({publicID: publicID}, {$addToSet: {followers: locals.user.publicID}}, {upsert:true});
    if(!confirm.acknowledged || !confirm1.acknowledged) {
        return error(400, 'Failed!') 
    }
    return new Response("Success", {status: 200});
}
export async function PUT({params, request, locals}) {
    let userExists = false;
    if(locals.user) userExists = true;
    if(!locals.user) {
        return error(401, 'Unauthorized');
    }
    let publicID = params.publicID
    const followingsCollection = await getDBCollection('followings')
    const followersCollection = await getDBCollection('followers')
    const confirm = await followingsCollection.updateOne({publicID: locals.user.publicID}, {$pull: {following: publicID}}, {upsert:true});
    const confirm1 = await followersCollection.updateOne({publicID: publicID}, {$pull: {followers: locals.user.publicID}}, {upsert:true});
    if(!confirm.acknowledged || !confirm1.acknowledged) {
        return error(400, 'Failed!') 
    }
    return new Response("Success", {status: 200});
}

