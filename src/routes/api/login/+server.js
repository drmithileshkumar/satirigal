// @ts-nocheck
import { signJwt } from '$lib/server/jwt'
import { getImagesCollection, getUsersCollection, getDBCollection} from '$lib/server/mongo'
import { initializeNewUserDetail } from '$lib/models/userDetail.js'
import {error} from '@sveltejs/kit';

export async function POST({locals, params, request}) {
    const { phone, publicID, privateID, otpID } = await request.json()

    // console.log(phone, publicID, privateID, otpID);
    const query = {publicID, privateID, otpID, phone: String(phone)};
    
    let existingUser;
    
    const usersCollection = await getUsersCollection()
    
    existingUser = await usersCollection.findOne(query);
    if(!existingUser) {
        return error(400, 'User does not exist!') 
    }
    const user = {
        publicID: existingUser.publicID,
        name: existingUser.name,
        phone: String(existingUser.phone),
        profile: existingUser.profile,
        banner: existingUser.banner
    };
    const userDetailsCollection = await getDBCollection('userDetails');
    let userDetail = await userDetailsCollection.findOne({publicID});
    if(!userDetail) {
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
        let newUserDetail = initializeNewUserDetail(publicID, type, details, common)
        let detailConfirm = await userDetailsCollection.insertOne(newUserDetail);
        userDetail = newUserDetail;
    }
    // console.log('server...', userDetail)
    // const imagesCollection = await getImagesCollection();
    // const imageData = await imagesCollection.findOne({publicID: existingUser.publicID});
    // const profile = imageData ? imageData.images.profile : '';
    // const notifications = await getNotifications(existingUser.publicID);
    const jwt = signJwt(user)
    const headers = new Headers();
    headers.append('set-cookie', [`jwt=${jwt}; Max-Age=${7 * 24 * 60 * 60}; Path=/;`]);
    return new Response("Success", { headers })
}