// @ts-nocheck
import { getDBCollection } from '$lib/server/mongo'
import { initializeNewPost } from '$lib/models/post.js';
import { ObjectId } from 'mongodb';
import {error} from '@sveltejs/kit';


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({request, params, url, locals}) {//ToDo: fix it
    let postsCollection = await getDBCollection('posts');
    let posts = await postsCollection.find({}).toArray();
    if(!posts) posts = [];
    return new Response(JSON.stringify(posts), {status: 200});
}
export async function POST({params, request, locals}) {
    let userExists = false;
    if(locals.user) userExists = true;
    if(!locals.user) {
        return error(401, 'Unauthorized');
    }
    const {name, publicID, profileImage, summary, content, title, subtitle,media, comments, shares, likes, images} = await request.json();
    const postsCollection = await getDBCollection('posts')
    // const creationTimeStamp = Date.now();
    // const count = await postCollection.countDocuments({ title });
    let newPost = initializeNewPost(name, publicID, profileImage, summary, content, title, subtitle,media, comments, shares, likes, images);

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

