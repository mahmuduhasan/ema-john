import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
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