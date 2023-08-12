//@ts-nocheck

export const initializeNewCoupon = (publicID, coupon, phone, valid) => {
    let newCoupon = {
        publicID, //public
        coupon,
        phone,
        valid,
        creationTimeStamp: Date.now()
    }
    return newCoupon;
}