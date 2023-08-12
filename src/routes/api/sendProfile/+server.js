// @ts-nocheck
import { writeFileSync, existsSync, mkdirSync, readFileSync } from 'fs';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ locals, request }) {
    const {path} = await request.json();
    // console.log('path', path);
    const ext = path.split('.').slice(-1);
    let imageData = '';
    try {
        imageData = readFileSync(path, 'base64');
        // console.log(typeof imageData);
        return new Response(imageData, {
            headers: {
                "Content-Type": `image/${ext}`,
                "cache-control": "public, max-age=31557600"
            }
        })
    } catch (err) {
        return new Response(imageData)
    }
}