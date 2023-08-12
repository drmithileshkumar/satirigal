// @ts-nocheck
import { getDBCollection, getDb } from '$lib/server/mongo'

import { ObjectId } from 'mongodb';
import {error} from '@sveltejs/kit';


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({request, params, url, locals}) {//ToDo: fix it
    let searchKey = url.searchParams.get('searchKey');
    let value = url.searchParams.get('value');
    let users = [], userDetails = [];
    if(!searchKey || !value) return new Response(JSON.stringify(users));
    let usersCollection = await getDBCollection('users');
    let userDetailCollection = await getDBCollection('userDetails');
    if(searchKey === 'name') {
        users = await usersCollection.find({name: value}).toArray();
        // console.log(value, users);
    }
    if(searchKey === 'publicID') {
        users = await usersCollection.find({publicID: value}).toArray();
    }
    if(users.length > 0) {
        for(let i = 0; i < users.length; i++) {
            let newUserDetail = await userDetailCollection.findOne({publicID: users[i].publicID});
            userDetails.push(newUserDetail);
        }
    }
    if(searchKey === 'city') {
        userDetails = await userDetailCollection.find({'common.city': value}).toArray();
        if(!userDetails) userDetails = [];
        for(let i = 0; i < userDetails.length; i++) {
            let newUser = await usersCollection.findOne({publicID: userDetails[i].publicID});
            if(newUser) {
                users.push(newUser);
            }
        } 
    }
    let searchResult = [];
    for(let i = 0; i < users.length; i++) {
        searchResult.push(
            {
                name: users[i].name,
                publicID: users[i].publicID,
                profile: users[i].profile,
                banner: users[i].banner,
                bio: userDetails[i].common.bio,
            }
        )
    }
    return new Response(JSON.stringify(searchResult), {status: 200});
}

