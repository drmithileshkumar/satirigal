// @ts-nocheck
import { writeFileSync, existsSync, mkdirSync, readFileSync } from 'fs';
import { error } from '@sveltejs/kit';
export async function GET({request, url}) {
    const path = url.searchparams.get('path');

    const imageData = readFileSync(path, {encoding:'utf8', flag: 'r'});
    return new Response(JSON.stringify({imageData}), {
        headers: {
            "Content-Type": "image/svg"
        }
    })
}
export async function POST({ locals, request }) {
    if(!locals.user) {
        return error(401, 'Unauthorized')
    }
    const publicID = locals.user.publicID;
    
    try{
        const data = await request.json(); // JSON.parse((await request.body.read()).toString());
        const name = data['name'];
        const file = data['image'];
        const folder = data['folder'];
        const encoding = data['encoding'];
        //create path here
        let dir = folder + '/' + publicID;
        if(!existsSync(dir)) {
            mkdirSync(dir);
        }
        writeFileSync(dir + `/${name}`, file, encoding);
        return new Response('Uploaded', {status: 200})
    } catch(err) {
        return error(500, 'Failed')
    }
}