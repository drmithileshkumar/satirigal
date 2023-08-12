//@ts-nocheck
export const ssr = false;
import {redirect} from '@sveltejs/kit';
export async function load({parent, fetch, params, url}) {
    if(!(url.host === 'satirigal.com' || url.host === 'localhost:5173' || url.host === 'localhost:4173' || url.host === 'localhost:3000')) {
        throw redirect(301, `https://satirigal.com`)
    }
    const {user} = await parent();
    // console.log('from parent', user, userDetail)
    if(!user) {
        throw redirect(301, `/`)
    }
    // let userData = await res.json();
    let res = await fetch(`/api/userDetail`);
    let userDetail = await res.json();
    return {
        userDetail
    }
}