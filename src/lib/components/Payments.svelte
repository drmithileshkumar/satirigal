<script lang='ts'>
    //@ts-nocheck
    import { post } from "$lib/utils/post";
    import Button from '$lib/ui/Button.svelte';
    import Label from '$lib/ui/Label.svelte';
    import {createEventDispatcher} from 'svelte';
    import {INVOICE} from '$lib/stores';
    let dispatch = createEventDispatcher();
    export let offer = 100;

    let DEBUG = false;
    let KEY_ID = 'rzp_live_lMsk4ZYh8eG2YH';
    let order_id;
    const makePayment = async () => {
        try {
            //----------create orderid-----------
            const res = await fetch(`/api/payments?amount=${offer}`)
            if(!res.ok) {
                alert('Failed to create order id')
                return
            }
            const order = await res.json();
            DEBUG && console.log(order);
            order_id = order.id;
            let options = {
                "key": KEY_ID, // Enter the Key ID generated from the Dashboard
                "name": "Webdut",
                "description": "Payment",
                "order_id": order_id, //This is a sample Order ID. Pass the `id` obtained in the previous step
                "handler": async function (response) { //save data to server
                    // alert(response.razorpay_payment_id);
                    // alert(response.razorpay_order_id);
                    // alert(response.razorpay_signature);
                    await verifyandsave(response, offer);
                },
                "prefill": {
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                }
            };
            // @ts-ignore
            let rzp1 = new Razorpay(options);
            rzp1.on('payment.failed', function (response){
                    // alert(response.error.code);
                    // alert(response.error.description);
                    // alert(response.error.source);
                    // alert(response.error.step);
                    // alert(response.error.reason);
                    // alert(response.error.metadata.order_id);
                    // alert(response.error.metadata.payment_id);
                    alert("Payment failed...please try again.")
            });
            rzp1.open();

        } catch (error) {
            DEBUG && console.log(error);
        }    
    }
    const verifyandsave = async (res, offer) => {
        try {
            let url = '/api/payments';
            let obj = {
                rzp_payment_id: res.razorpay_payment_id,
                rzp_order_id: res.razorpay_order_id,
                rzp_signature: res.razorpay_signature,
                orderId: order_id,
                amount: offer,
            };
            const {message} = await post(url, obj);
            alert(message)
            $INVOICE = obj;
            dispatch('success')
        } catch (error) {
            DEBUG && console.log(error)
            alert(error)
        }
    }
</script>

<Button on:click={makePayment}>
    <Label>Buy</Label>
</Button>
