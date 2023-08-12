//@ts-nocheck
export const initializeNewPayment = (payment_id, order_id, name, publicID, amount, discount, status, type, coupon) => {
    let newPayment = {
        payment_id,
        order_id,
        creationTimestamp: Date.now(), //private
        name,
        publicID, //public
        amount,
        discount,
        status,
        type, //Trial, Monthly, Yearly
        coupon
    }
    return newPayment;
}