import React, { useState } from 'react';
import AddressForm from './AddressForm';
import "./style.scss"
import { useSelector, useDispatch } from 'react-redux';
import { removeAllFromCart } from "../../action/cartActions/cartActions"
import { Paper, Typography, Stepper, Step, StepLabel, CssBaseline } from '@material-ui/core';
import useStyles from './styles'
import PaymentForm from './PaymentForm'
import { Link } from 'react-router-dom';
const steps = ['Shipping address', 'payment details']
const CheckOutView = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [shippingData, setShippingData] = useState({})
    const dispatch = useDispatch()
    const classes = useStyles();
    const removeAllFromCartHandler = () => {
        dispatch(removeAllFromCart())
    }
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)
    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => price + item.price * item.qty, 0).toFixed(2);
    }
    //get shipping form user
    const addressForm = (data) => {
        setShippingData(data)
        nextStep()
    }

    //get data from user cart
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart
    //render page function base on step
    const Form = () => (activeStep === 0 ? <AddressForm addressForm={addressForm} /> : <PaymentForm shippingData={shippingData} backStep={backStep} item={cartItems} nextStep={nextStep} getCartSubTotal={getCartSubTotal} removeAllFromCartHandler={removeAllFromCartHandler} />)
    let Confirmation = () => (
        <div>
            <p>Thank you for your purchase, customer {shippingData.firstName} {shippingData.lastName}</p>
            <button type="button" ><Link to="/">Back to home </Link></button>
        </div>
    )
    const styleForm = {
        // backgroundColor: `lightGrey`,
        // margin: `solid lightGrey`
    }
    return (
        <>
            <CssBaseline style={styleForm} />
            <div style={styleForm} className={classes.toolbar} />
            <div style={styleForm} className={classes.layout}>
                <Paper style={styleForm} className={classes.paper}>
                    <Typography gutterBottom variant="h4" align="center" >Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (

                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {/* ternary operator for should be confirmation or checkouttoken */}
                    {activeStep === 2 ? <Confirmation /> : <Form />}
                </Paper>


            </div>
        </>
    );
}

export default CheckOutView;
