// @ts-nocheck
import { getDBCollection } from '$lib/server/mongo'
import { initializeNewComment } from '$lib/models/comment.js';
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
    let commentsCollection = await getDBCollection('comments');
    let comments = await commentsCollection.find({publicID: id}).toArray();
    if(!comments) comments = [];
    return new Response(JSON.stringify(comments), {status: 200});
}
export async function POST({params, request, locals}) {
    let userExists = false;
    if(locals.user) userExists = true;
    if(!locals.user) {
        return error(401, 'Unauthorized');
    }
    const {parentID, name, publicID, profileImage, content, comments, images} = await request.json();
    const commentsCollection = await getDBCollection('comments')
    // const creationTimeStamp = Date.now();
    // const count = await commentCollection.countDocuments({ title });
    let newComment = initializeNewComment(parentID, name, publicID, profileImage, content, comments, images);

    commentsCollection.insertOne(newComment);
    if(parentID.includes('Comment')) {
        let updateComment = await commentsCollection.updateOne({commentID: parentID}, {$push: {comments: newComment.commentID}});
        if(!updateComment.acknowledged) {
            return(403, 'Failed to add to comments');
        }
    } else {
        let postsCollection = await getDBCollection('posts');
        let updatePost = await postsCollection.updateOne({postID: parentID}, {$push: {comments: newComment.commentID}})
        if(!updatePost.acknowledged) {
            return(403, 'Failed to add to comments');
        }
    }
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
    const {commentID, parentID, name, publicID, profileImage, content, comments, images} = await request.json();
    const commentsCollection = await getDBCollection('comments')
    const confirm = await commentsCollection.updateOne({commentID}, {$set: {content}})
    if(!confirm.acknowledged) {
        return error(400, 'Failed!') 
    }
    return new Response("Success", {status: 200});
}

