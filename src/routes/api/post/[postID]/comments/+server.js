import { getDBCollection } from '$lib/server/mongo'
import { ObjectId } from 'mongodb';
import {error} from '@sveltejs/kit';


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({request, params, url, locals}) {//ToDo: fix it
    let postID = params.postID;
    let commentsCollection = await getDBCollection('comments');
    let comments = await commentsCollection.find({parentID: postID}).toArray();
    if(!comments) comments = [];
    return new Response(JSON.stringify(comments), {status: 200});
}