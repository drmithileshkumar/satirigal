//@ts-nocheck
export async function validateSubscription(user, userCollection) {
    //console.log('Validating subscription')
    if (!user) {
        //console.log('No user')
        return {
            status: 404,
            body: { message: 'User not found' }
        }
    }
    const publicID = user.publicID;
    //check subscription
    if (!user.products) {
        //console.log('No products')
        let startdate = new Date();
        let newdate = new Date();
        let expirydate = new Date(newdate.setDate(newdate.getDate() + 7));
        let products = {
            vectorial: {
                subscribed: true,
                valid: true,
                start: {
                    date: startdate.getDate(),
                    month: startdate.getMonth(),
                    year: startdate.getFullYear()
                },
                end: {
                    date: expirydate.getDate(),
                    month: expirydate.getMonth(),
                    year: expirydate.getFullYear()
                },
                type: 'Trial'
            }
        }
        const confirmTrial = await userCollection.updateOne({ publicID }, { $set: { products } }, { upsert: true });
        if (!confirmTrial.acknowledged) {
            return {
                status: 500,
                body: { message: 'Failed to create subscription.' }
            }
        }
    } else if (!user.products.vectorial) {
        //console.log('No vectorial subscription')
        let startdate = new Date();
        let newdate = new Date();
        let expirydate = new Date(newdate.setDate(newdate.getDate() + 7));
        let products = {
            vectorial: {
                subscribed: true,
                valid: true,
                start: {
                    date: startdate.getDate(),
                    month: startdate.getMonth(),
                    year: startdate.getFullYear()
                },
                end: {
                    date: expirydate.getDate(),
                    month: expirydate.getMonth(),
                    year: expirydate.getFullYear()
                },
                type: 'Trial'
            }
        }
        const confirmTrial = await userCollection.updateOne({ publicID }, { $set: { "products.vectorial": products.vectorial } }, { upsert: true });
        if (!confirmTrial.acknowledged) {
            return {
                status: 500,
                body: { message: 'Failed to create subscription.' }
            }
        }
    } else if (!user.products.vectorial.valid) {
        //console.log('Invalid subscription status')
        return {
            status: 410,
            body: { message: 'Renew subscription.' }
        }
    }
    //update validity
    let updatedUser = await userCollection.findOne({publicID})
    let enddate = updatedUser.products.vectorial.end;
    if (new Date() > new Date(enddate.year, enddate.month, enddate.date)) {
        //console.log('Expired')
        const confirmValidity = await userCollection.updateOne({ publicID }, { $set: { "products.vectorial.valid": false } }, { upsert: true });
        if (!confirmValidity.acknowledged) {
            return {
                status: 500,
                body: { message: 'Failed to update validity.' }
            }
        }
        return {
            status: 411,
            body: { message: 'Renew subscription.' }
        }
    }
    //console.log('Valid')
    return {
        status: 200,
        body: { message: 'Valid', type: updatedUser.products.vectorial.type, expire: updatedUser.products.vectorial.end }
    }
}