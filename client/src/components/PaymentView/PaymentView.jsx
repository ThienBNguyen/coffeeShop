import React from 'react';
import AddressForm from './AddressForm';

import Review from './Review';
import { useSelector } from 'react-redux';

const PaymentView = () => {
    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => price + item.price * item.qty, 0).toFixed(2);
    }
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart
    return (
        <div>
            <AddressForm />

            <Review item={cartItems} getCartSubTotal={getCartSubTotal} />


        </div>
    );
}

export default PaymentView;
