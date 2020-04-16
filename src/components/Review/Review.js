import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif'
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';

const Review = () => {
    const [cart, setCart]= useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const auth = useAuth();
    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    const removeButton = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(()=>{
        const saveCart = getDatabaseCart();
        const productKey = Object.keys(saveCart);

        const cartProducts = productKey.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity =saveCart[key];
            return product;
        });
        setCart(cartProducts);
    },[])

    let thankYou;
    if(orderPlaced){
        thankYou = <img src= {happyImage} alt=""/>
    }
    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem 
                        removeButton ={removeButton}
                        key={pd.key} 
                        product={pd}>
                        </ReviewItem>)
                }
                {thankYou}
                {
                    !cart.length && <h1>Do shopping to process your <a href="/shop">product</a>!</h1>
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/shipment">
                        {
                        auth.user ?
                        <button className="cartAdd-button">Proceed Checkout</button>
                        :
                        <button className="cartAdd-button">Login to Checkout</button>
                        }
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Review;