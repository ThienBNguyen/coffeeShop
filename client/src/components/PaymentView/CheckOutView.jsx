import React, { useState } from 'react';
import AddressForm from './AddressForm';
import "./style.scss"
import Review from './Review';
import { useSelector } from 'react-redux';
import { Paper, Typography, Stepper, Step, StepLabel, CssBaseline } from '@material-ui/core';
import useStyles from './styles'
import PaymentForm from './PaymentForm'
const steps = ['Shipping address', 'payment details']
const CheckOutView = () => {
    const [activeStep, setActiveStep] = useState(0)
    const classes = useStyles();
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)
    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => price + item.price * item.qty, 0).toFixed(2);
    }
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart
    const Form = () => (activeStep === 0 ? <AddressForm nextStep={nextStep} /> : <PaymentForm backStep={backStep} item={cartItems} getCartSubTotal={getCartSubTotal} />)
    let Confirmation = (
        <div>
            <p>Thank you for your purchase, customer name</p>
            <p> order ref: number</p>
            <button type="button">Back to home</button>
        </div>
    )
    return (
        <>
            <CssBaseline />
            <div className={classes.toolbar} />
            <div className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {/* ternary operator for should be confirmation or checkouttoken */}
                    {activeStep === steps.length ? <Confirmation /> : <Form />}
                </Paper>


            </div>
        </>
    );
}

export default CheckOutView;
