import React from 'react';
import Review from './Review';
import { Divider, Typography, Button } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer, PaymentElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(`${process.env.STRIPE_PUBLICKEY}`)
const PaymentForm = ({ backStep, item, getCartSubTotal }) => {
    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault();
        //check if the payment API is ready and elements is reader
        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);
        //create method call strripe api
        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

        // if (error) {
        //     console.log('[error]', error);
        // } else {
        //     // geting user data 
        //     const orderData = {
        //         line_items: checkoutToken.live.line_items,
        //         customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
        //         shipping: { name: 'International', street: shippingData.address1, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
        //         fulfillment: { shipping_method: shippingData.shippingOption },
        //         payment: {
        //             gateway: 'stripe',
        //             stripe: {
        //                 payment_method_id: paymentMethod.id,
        //             },
        //         },
        //     };
        //     //call the handleCaptureCheckout method. it runs commerce checkout and refreshcart
        //     onCaptureCheckout(checkoutToken.id, orderData);

        //     nextStep();
    }
    return (
        <div>
            <Review item={item} getCartSubTotal={getCartSubTotal}></Review>
            <Divider></Divider>
            <Typography variant="h6" style={{ margin: "20px, 0" }}>Payment Method</Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>{({ elements, stripe }) => (
                    <form >
                        <CardElement />
                        <br /> <br />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button variant="outlined" onClick={backStep}>Back</Button>
                            <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                                Pay {getCartSubTotal}
                            </Button>
                        </div>
                    </form>
                )}
                </ElementsConsumer>
            </Elements>
        </div>
    );
}

export default PaymentForm;
