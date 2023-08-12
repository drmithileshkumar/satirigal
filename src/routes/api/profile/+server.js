// @ts-nocheck
import { getUsersCollection } from '$lib/server/mongo';
import { writeFileSync, existsSync, mkdirSync, readFileSync } from 'fs';
import { error } from '@sveltejs/kit';
export async function GET({ locals, request }) {
    
    const publicID = locals.user.publicID;
    const usersCollection = await getUsersCollection();
    const user = await usersCollection.findOne({publicID});
    let path = user.profile;
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
        imageData = readFileSync('./profile' + path);
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
    const data = await request.json(); //JSON.parse((await request.body.read()).toString());
    let [part1, ext] = data['name'].split('.');
    let name = 'avatar.' + ext;
    const file = data['image'];
    // console.log(file)
    //create path here
    const usersCollection = await getUsersCollection();
    let dir = 'profile/' + publicID;
    
    try{
        if(!existsSync(dir)) mkdirSync(dir);
        writeFileSync(dir + `/${name}`, file, 'base64');
        let profile = '/' + publicID + `/${name}`
        const confirm = await usersCollection.updateOne({publicID}, {$set: {profile}})
        // console.log(updateArticles.acknowledged);
        let status, message;
        if(!confirm.acknowledged) {
            status = 500;
            message = 'Failed to update profile'
        }
        status = 200;
        message = 'Uploaded'
        return new Response(message, {status})
    } catch(err) {
        return error(500, 'Failed')
    }
}