// @ts-nocheck
import {getDBCollection} from '$lib/server/mongo'
import {error} from '@sveltejs/kit';

export async function GET({locals, params, request}) {
    if(!locals.user || locals.user.publicID !== 'MathrilCom') {
        return error(401, 'Unauthorized');
    }
    const questionsCollection = await getDBCollection('questions');
    let questions = await questionsCollection.find({}).toArray();
    if(!questions) {
        questions = []
    }
    return new Response(JSON.stringify(questions), {status: 200});
}
export async function POST({locals, params, request}) {
    if(!locals.user) {
        return error(401, 'Unauthorized');
    }
    const publicID = locals.user.publicID;
    const { grade, chapter, question } = await request.json()

    const questionsCollection = await getDBCollection('questions');
    let creationTimestamp = Date.now()
    const confirm = await questionsCollection.insertOne({publicID, grade, chapter, question, creationTimestamp});
    if(!confirm.acknowledged) {
        return error(400, 'Failed!') 
    }
    
    return new Response('Success', {status: 200})
}