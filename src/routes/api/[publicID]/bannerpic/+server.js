// @ts-nocheck
import { getUsersCollection } from '$lib/server/mongo';
import { writeFileSync, existsSync, mkdirSync, readFileSync } from 'fs';
import { error } from '@sveltejs/kit';
export async function GET({ locals, request, params }) {
    
    const publicID = params.publicID;
    const usersCollection = await getUsersCollection();
    const user = await usersCollection.findOne({publicID});
    let path = user.banner;
    let imageData = '';
    // console.log('path', path)
    if(!path || path.length === 0) {
        // console.log('inside', path)
        return new Response(imageData, {
            headers: {
                "Content-Type": `image/png`,
                // "cache-control": "public, max-age=31557600"
            }
        })
    } 
    const ext = path.split('.').slice(-1);
    
    try {
        imageData = readFileSync('./banner' + path);
        // console.log('imagedata', imageData);
        return new Response(imageData, {
            headers: {
                "Content-Type": `image/${ext}`,
                "cache-control": "public, max-age=3000"
            }
        })
    } catch (err) {
        // console.log(err)
        return new Response(imageData, {
            headers: {
                "Content-Type": `image/${ext}`,
                "cache-control": "public, max-age=3000"
            }
        })
    }
    
    
}
export async function POST({ locals, request }) {
    const publicID = locals.user.publicID;
    const {data} = await request.json(); //JSON.parse((await request.body.read()).toString());
    // let [part1, ext] = data['name'].split('.');
    let name = data['name'];
    const file = data['image'];
    // console.log('data...', data)
    //create path here
    const usersCollection = await getUsersCollection();
    let dir = 'banner/' + publicID;
    
    try{
        if(!existsSync(dir)) mkdirSync(dir);
        writeFileSync(dir + `/${name}`, file, 'base64');
        let banner = '/' + publicID + `/${name}`
        const confirm = await usersCollection.updateOne({publicID}, {$set: {banner}}, {upsert: true})
        // console.log(updateArticles.acknowledged);
        let status, message;
        if(!confirm.acknowledged) {
            status = 500;
            message = 'Failed to update banner'
        }
        status = 200;
        message = 'Uploaded'
        return new Response(message, {status})
    } catch(err) {
        console.log(err)
        return error(500, 'Failed')
    }
}