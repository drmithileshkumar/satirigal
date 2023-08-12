// @ts-nocheck
import { signJwt } from '$lib/server/jwt'
import { getUsersCollection, getDBCollection } from '$lib/server/mongo'
import { initializeNewUser } from '$lib/models/user';
import { initializeNewUserDetail } from '$lib/models/userDetail.js'
import { error } from '@sveltejs/kit';

import { validateName, validatePhone } from '$lib/server/validation'


/** @type {import('@sveltejs/kit').RequestHandler} */

export async function POST({ params, request }) {

    const { name, phone } = await request.json();

    if (!validateName(name)) return error(410, 'Invalid name')
    if (!validatePhone(String(phone))) return error(410, 'Invalid phone')

    // validate input
    const usersCollection = await getUsersCollection()
    const existingUser = await usersCollection.findOne({ name, phone: String(phone) })

    if (existingUser) {
        return error(403, 'User already exists!')
    }
    const count = await usersCollection.countDocuments({ name });

    let newUser = initializeNewUser(name, String(phone), count);

    usersCollection.insertOne(newUser);
    const userDetailsCollection = await getDBCollection('userDetails');
    let type = '';
    let details = {
        gender: '',
        dob: '',
        rank: '',
        experience: 0,
        established: ''
    }
    let common = {
        bio: '',
        email: '',
        zip: '',
        city: '',
        country: '',
        website: '',
        followers: 0,
        following: 0,
        replies: 0,
        shares: 0
    }
    let newUserDetail = initializeNewUserDetail(newUser.publicID, type, details, common)
    let detailConfirm = await userDetailsCollection.insertOne(newUserDetail);
    const user = {
        publicID: newUser.publicID,
        name: newUser.name,
        phone: String(newUser.phone),
        profile: newUser.profile,
        banner: newUser.banner
    };
    const jwt = signJwt(user)
    const headers = new Headers();
    headers.append('set-cookie', [`jwt=${jwt}; Max-Age=${7 * 24 * 60 * 60}; Path=/;`]);
    return new Response(JSON.stringify({ privateID: newUser.privateID, publicID: newUser.publicID, otpID: newUser.otpID }
    ), { headers })
}