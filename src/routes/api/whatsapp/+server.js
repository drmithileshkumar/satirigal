// @ts-nocheck
import { signJwt } from '$lib/server/jwt'
import { getDBCollection} from '$lib/server/mongo'
import { initializeNewUser } from '$lib/models/user';
import qrcode from 'qrcode-generator';
import { error } from '@sveltejs/kit';

export async function POST({params, request}) {
    const { waName, waNumber } = await request.json()
    // const res = await fetch("https://mathril.authlink.me", {
    //     method: "POST",
    //     headers: {
    //         "clientId": import.meta.env.VITE_WA_CLIENT,
    //         "clientSecret": import.meta.env.VITE_WA_SECRET,
    //         "content-Type": "application/json"
    //     },
    //     body: JSON.stringify({waId})
    // });
    // if(!res.ok) {
    //     console.log('Failed to get response...')
    //     return
    // }
    // const userinfo = await res.json();
    // console.log(userinfo)
    // console.log(phone, publicID, privateID, otpID);
    const query = {phone: String(waNumber)};
    
    let existingUser;
    
    const usersCollection = await getDBCollection('users')
    
    existingUser = await usersCollection.findOne(query);
    let qrlink = false;
    if(!existingUser) {
        //create user
        let newUser = initializeNewUser(waName, String(waNumber), 0);
        existingUser = newUser;
        usersCollection.insertOne(newUser);
        let qr = qrcode(10, 'H');
        qr.addData(newUser.privateID + " " + newUser.otpID);
        qr.make();

        qrlink = qr.createDataURL();

    }
    const user = {
        publicID: existingUser.publicID,
        name: existingUser.name,
        phone: String(existingUser.phone),
        profile: existingUser.profile,
        likes: existingUser.likes,
        qrlink: qrlink
    };

    // const imagesCollection = await getImagesCollection();
    // const imageData = await imagesCollection.findOne({publicID: existingUser.publicID});
    // const profile = imageData ? imageData.images.profile : '';
    // const notifications = await getNotifications(existingUser.publicID);
    const jwt = signJwt(user)
    const headers = new Headers();
    headers.append('set-cookie', [`jwt=${jwt}; Max-Age=${7 * 24 * 60 * 60}; Path=/;`]);
    return new Response(JSON.stringify(user), { headers })
}