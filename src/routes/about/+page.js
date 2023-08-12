//@ts-nocheck
import {redirect} from '@sveltejs/kit';
export async function load({fetch, params, url}) {
    if(!(url.host === 'satirigal.com' || url.host === 'localhost:5173' || url.host === 'localhost:4173' || url.host === 'localhost:3000')) {
        throw redirect(301, `https://satirigal.com/about`)
    }
}