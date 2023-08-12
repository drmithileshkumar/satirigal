// @ts-nocheck
import { validatePassword } from '$lib/shared/validation'
import { createPublicID } from '$lib/shared/publicID'
import { v4 } from 'uuid';

export const initializeNewUser = (name, phone, count) => {
    let newUser = {
        phone, //private
        name,
        profile: '',//photo
        banner: '',
        creationTimestamp: Date.now(), //private
        privateID: v4(), //private
        publicID: createPublicID(name, count), //public
        otpID: v4(), //private
        products: {},
        likes: []
    }
    return newUser;
}