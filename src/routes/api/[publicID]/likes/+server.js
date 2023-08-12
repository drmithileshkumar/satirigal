//@ts-nocheck
import { getDBCollection } from '$lib/server/mongo'

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
    let likesCollection = await getDBCollection('likes');
    let postsCollection = await getDBCollection('posts');
    let likesData = await likesCollection.find({publicID: id}).toArray();
    console.log(id, likesData)
    let likes = []
    if(!likesData) likes = [];
    for(let i = 0; i < likesData.length; i++) {
        let newLikedPost = await postsCollection.findOne({postID: likesData[i].postID});
        if(newLikedPost) {
            likes.push(newLikedPost);
        }
    }
    console.log(likes)
    return new Response(JSON.stringify(likes), {status: 200});
}
