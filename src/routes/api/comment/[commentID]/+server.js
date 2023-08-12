// @ts-nocheck
import { getDBCollection } from '$lib/server/mongo'
import { initializeNewComment } from '$lib/models/comment';
import { ObjectId } from 'mongodb';
import {error} from '@sveltejs/kit';


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({request, params, url, locals}) {//ToDo: fix it
    let commentID = params.commentID;
    const usersCollection = await getDBCollection('users');
    let commentsCollection = await getDBCollection('comments');
    let comment = await commentsCollection.findOne({commentID});
    if(!comment)  return error(404, 'Not found');
    return new Response(JSON.stringify(comment), {status: 200});
}
export async function POST({params, request, locals}) {
    let userExists = false;
    if(locals.user) userExists = true;
    if(!locals.user) {
        return error(401, 'Unauthorized');
    }
    const {parentID, name, publicID, profileImage, content,media, comments, images} = await request.json();
    const commentsCollection = await getDBCollection('comments')
    // const creationTimeStamp = Date.now();
    // const count = await commentsCollection.countDocuments({ title });
    let newComment = initializeNewComment(parentID, name, publicID, profileImage, content,media, comments, images);

    commentsCollection.insertOne(newComment);
    // const confirm = await commentsCollection.insertOne({name, publicID, profileImage, content, title, subtitle,media, comments, shares, likes, creationTimeStamp});
    
    // if(!confirm.acknowledged) {
    //     return error(400, 'Failed!') 
    // }
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
    const confirm = await followingsCollection.updateOne({publicID: publicID}, {$pull: {following: locals.user.publicID}}, {upsert:true});
    const confirm1 = await followersCollection.updateOne({publicID: locals.user.publicID}, {$pull: {followers: publicID}}, {upsert:true});
    if(!confirm.acknowledged || !confirm1.acknowledged) {
        return error(400, 'Failed!') 
    }
    return new Response("Success", {status: 200});
}

