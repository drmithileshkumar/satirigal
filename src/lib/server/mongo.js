// @ts-nocheck
import { MongoClient } from 'mongodb'

/** @type {MongoClient} */
let _mongoClient

export const getMongoClient = async () => {
    if (!_mongoClient) {
        _mongoClient = new MongoClient(import.meta.env.VITE_MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true, keepAlive: true})
        await _mongoClient.connect()
    }
    return _mongoClient
}
export const getDb = async () =>
    (await getMongoClient()).db(import.meta.env.VITE_MONGO_DATABASE)
export const userDb = async () =>
    (await getMongoClient()).db(import.meta.env.VITE_MONGO_USERDATABASE)

export const getAdminCollection = async () =>
    (await getDb()).collection('admin')
export const getUsersCollection = async () =>
    (await userDb()).collection('users')
export const getOTPCollection = async () => 
    (await getDb()).collection('otp') 
export const getImagesCollection = async () =>
    (await getDb()).collection('images')
export const getInvoiceCollection = async () =>
    (await getDb()).collection('invoice')
export const getOrderCollection = async () =>
    (await getDb()).collection('order')
export const getPaymentsCollection = async () =>
    (await getDb()).collection('payments')

export const getDBCollection = async (collectionName) => {
    if(collectionName === 'users') return getUsersCollection()
    else return (await getDb()).collection(collectionName)
}
    