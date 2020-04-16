import React from 'react';
import './Cart.css'
import { useAuth } from '../Login/useAuth';

const Cart = (props) => {

    const cart = props.cart;
    const auth = useAuth();
    const totalPrice = cart.reduce((total,prd)=> total + prd.price * prd.quantity, 0);
    return (
        <div className="cart">
            <h4>Order Summery.</h4>
            <p>Item: {cart.length}</p>
            <p>Total Price: {totalPrice}</p>
            {
                props.children
            }
        </div>
    );
};

export default Cart;