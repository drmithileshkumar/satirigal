// @ts-nocheck
import { getDBCollection } from '$lib/server/mongo'
import { initializeNewPost } from '$lib/models/post';
import { ObjectId } from 'mongodb';
import {error} from '@sveltejs/kit';


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({request, params, url, locals}) {//ToDo: fix it
    let postID = params.postID;
    const usersCollection = await getDBCollection('users');
    let postsCollection = await getDBCollection('posts');
    let post = await postsCollection.findOne({postID});
    if(!post)  return error(404, 'Not found');
    return new Response(JSON.stringify(post), {status: 200});
}
export async function POST({params, request, locals}) {
    let userExists = false;
    if(locals.user) userExists = true;
    if(!locals.user) {
        return error(401, 'Unauthorized');
    }
    const {name, publicID, profileImage, summary, content, title, subtitle,media, comments, shares, likes, tags, images} = await request.json();
    const postsCollection = await getDBCollection('posts')
    // const creationTimeStamp = Date.now();
    // const count = await postsCollection.countDocuments({ title });
    let newPost = initializeNewPost(name, publicID, profileImage, summary, content, title, subtitle,media, comments, shares, likes, tags, images);

    postsCollection.insertOne(newPost);
    // const confirm = await postsCollection.insertOne({name, publicID, profileImage, content, title, subtitle,media, comments, shares, likes, creationTimeStamp});
    
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

