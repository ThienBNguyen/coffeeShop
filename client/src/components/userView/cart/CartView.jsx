import React, { useEffect } from 'react';
import "./CartView.css"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "../../../action/cartActions/cartActions"
import CartItem from "./CartItem"
import { Button } from '@material-ui/core';
const CartView = () => {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart
    useEffect(() => { }, [])
    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    }
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }
    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    }
    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => price + item.price * item.qty, 0).toFixed(2);
    }
    const headingStyle = {
        Color: "lightGrey"
    }
    return (
        <div className="cartMain " >
            <div className="cartscreen ">
                <div className="  cartscreen__left ">
                    <h2 style={headingStyle}>Shopping Cart</h2>

                    {cartItems.length === 0 ? (
                        <div>
                            Your Cart Is Empty <Link to="/">Go Back</Link>
                        </div>
                    ) : (
                            cartItems.map((item) => (
                                <CartItem
                                    key={item.product}
                                    item={item}
                                    qtyChangeHandler={qtyChangeHandler}
                                    removeHandler={removeFromCartHandler}

                                />
                            ))
                        )}
                </div>

                <div className="cartscreen__right ">
                    <div className="cartscreen__info">
                        <p>Subtotal ({getCartCount()}) items</p>
                        <p>${getCartSubTotal()}</p>
                    </div>
                    <div>
                        <Button type="submit" ><Link style={{color: "white"}} to="/payment">Proceed To Checkout</Link></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default CartView;
