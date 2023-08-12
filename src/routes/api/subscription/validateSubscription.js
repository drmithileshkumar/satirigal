//@ts-nocheck
export async function validateSubscription(user, userCollection) {
    //console.log('Validating subscription')
    if(!user) {
        //console.log('No user')
        return {
            status: 404,
            body: {message: 'User not found'}
        }
    } 
    const publicID = user.publicID;
    //check subscription
    if(!user.products) {
        //console.log('No products')
        let startdate = new Date();
        let newdate = new Date();
        let expirydate = new Date(newdate.setDate(newdate.getDate() + 7));
        let products = {
            mathril: {
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
        const confirmTrial = await userCollection.updateOne({publicID}, {$set: {products}}, {upsert: true});
        if(!confirmTrial.acknowledged) {
            return {
                status: 500,
                body: {message: 'Failed to create subscription.'}
            }
        }
    } else if(!user.products.mathril) {
        //console.log('No mathril subscription')
        let startdate = new Date();
        let newdate = new Date();
        let expirydate = new Date(newdate.setDate(newdate.getDate() + 7));
        let products = {
            mathril: {
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
        const confirmTrial = await userCollection.updateOne({publicID}, {$set: {"products.mathril": products.mathril}}, {upsert: true});
        if(!confirmTrial.acknowledged) {
            return {
                status: 500,
                body: {message: 'Failed to create subscription.'}
            }
        }
    } else if(!user.products.mathril.valid) {
        //console.log('Invalid subscription status')
        return {
            status: 410,
            body: {message: 'Renew subscription.'}
        }
    }
    //update validity
    let enddate = user.products.mathril.end;
    if(new Date() > new Date(enddate.year, enddate.month, enddate.date)) {
        //console.log('Expired')
        const confirmValidity = await userCollection.updateOne({publicID}, {$set: {"products.mathril.valid": false}}, {upsert: true});
        if(!confirmValidity.acknowledged) {
            return {
                status: 500,
                body: {message: 'Failed to update validity.'}
            }
        }
        return {
            status: 411,
            body: {message: 'Renew subscription.'}
        }
    }
    //console.log('Valid')
    return {
        status: 200,
        body: {message: 'Valid', type: user.products.mathril.type, expire: user.products.mathril.end}
    }
}