// @ts-nocheck
import { getDBCollection } from '$lib/server/mongo'
import { initializeNewPost } from '$lib/models/post';
import { ObjectId } from 'mongodb';
import {error} from '@sveltejs/kit';


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({request, params, url, locals}) {//ToDo: fix it
    let id = params.publicID;
    const usersCollection = await getDBCollection('users');
    let userData = await usersCollection.findOne({publicID: id});
    if(!userData) {
        return error(404, 'User not found');
    }
    let postsCollection = await getDBCollection('posts');
    let posts = await postsCollection.find({publicID}).toArray();
    if(!posts) posts = [];
    return new Response(JSON.stringify(posts), {status: 200});
}
export async function POST({params, request, locals}) {
    let userExists = false;
    if(locals.user) userExists = true;
    if(!locals.user) {
        return error(401, 'Unauthorized');
    }
    const {name, publicID, profileImage, summary, content, title, subtitle,media, replies, shares, likes, tags, images} = await request.json();
    const postsCollection = await getDBCollection('posts')
    // const creationTimeStamp = Date.now();
    // const count = await postsCollection.countDocuments({ title });
    let newPost = initializeNewPost(name, publicID, profileImage, summary, content, title, subtitle,media, replies, shares, likes, tags, images);

    postsCollection.insertOne(newPost);
    // const confirm = await postsCollection.insertOne({name, publicID, profileImage, content, title, subtitle,media, replies, shares, likes, creationTimeStamp});
    
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
    const {postID, name, publicID, profileImage, summary, content, title, subtitle,media, comments, shares, likes, tags, images} = await request.json();
    const postsCollection = await getDBCollection('posts')
    const confirm = await postsCollection.updateOne({postID}, {$set: {summary, content, title, subtitle,media, tags, images}})
    if(!confirm.acknowledged) {
        return error(400, 'Failed!') 
    }
    return new Response("Success", {status: 200});
}

