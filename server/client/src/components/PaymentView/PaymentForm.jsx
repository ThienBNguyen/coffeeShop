import React from 'react';
import Review from './Review';
import { Divider, Typography, Button } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer, } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLICKEY}`)

const PaymentForm = ({ shippingData, backStep, item, getCartSubTotal, nextStep, removeAllFromCartHandler }) => {


    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault();
        //check if the payment API is ready and elements is reader
        if (!stripe || !elements) return;
        const cardElement = elements.getElement(CardElement);
        //create method call strripe api
        const { error } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

        if (error) {
            console.log('[error]', error);
        }
        nextStep();
        removeAllFromCartHandler()

    }
    return (
        <div>
            <Review item={item} getCartSubTotal={getCartSubTotal}></Review>
            <Divider></Divider>
            <Typography variant="h6" style={{ margin: "20px, 0" }}>Payment Method</Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>{({ elements, stripe }) => (
                    <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
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
