//@ts-nocheck
import {redirect} from '@sveltejs/kit';
export async function load({parent, fetch, params, url}) {
    if(!(url.host === 'satirigal.com' || url.host === 'localhost:5173' || url.host === 'localhost:4173' || url.host === 'localhost:3000')) {
        throw redirect(301, `https://satirigal.com`)
    }
	console.log('Loading user details...')
    
    let publicID = params.publicID;
	let resuser = await fetch(`/api/${publicID}`)
    
	let {user, userDetail} = await resuser.json()
	let res1 = await fetch(`/api/${publicID}/profilepic`);
	let res2 = await fetch(`/api/${publicID}/bannerpic`);
	let profilepicData = await res1.blob();
	let bannerpicData = await res2.blob();
	let active = undefined
	// console.log(userDetail)
    return {
        currentUser: user, currentUserDetail: userDetail, profilepicData, bannerpicData, active
    }
}
