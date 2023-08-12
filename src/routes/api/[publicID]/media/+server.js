// @ts-nocheck
import { getUsersCollection } from '$lib/server/mongo';
import { writeFileSync, existsSync, mkdirSync, readFileSync } from 'fs';
import { error } from '@sveltejs/kit';
export async function GET({ locals, request, params, url }) {//ToDo: fix this
    
    const media = url.searchParams.get('media');
    // console.log('media...', media)
    // const publicID = params.publicID;
    // const usersCollection = await getUsersCollection();
    // const user = await usersCollection.findOne({publicID});
    let path = media;
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
        imageData = readFileSync('./media' + path);
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
    let name = data['name'];
    const file = data['image'];
    // console.log(file)
    //create path here
    const usersCollection = await getUsersCollection();
    let dir = 'media/' + publicID;
    
    try{
        if(!existsSync(dir)) mkdirSync(dir);
        writeFileSync(dir + `/${name}`, file, 'base64');
        let mediaPath = '/' + publicID + `/${name}`
        let status, message;
        status = 200;
        message = 'Uploaded'
        return new Response(mediaPath, {status})
    } catch(err) {
        return error(500, 'Failed')
    }
}