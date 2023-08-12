//@ts-nocheck
import { verifyAndDecodeJwt } from '$lib/server/jwt';

import cookie from 'cookie'

const getUser = (event) => {
    
    if (!event.request.headers.get('cookie')) {
        
        return null
    }

    const cookies = cookie.parse(event.request.headers.get('cookie'))
    if (cookies.jwt) {
        return verifyAndDecodeJwt(cookies.jwt)
    }
}

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {//server-side
    event.locals.user = getUser(event);
    // console.log('user...', event.locals)
    const response = await resolve(event);
    // console.log('resolve...', event.locals.user)
    // response.headers.set('Permissions-Policy', 'geolocation=*, accelerometer=*');
    return response;
}