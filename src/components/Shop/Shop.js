import React, { useState } from 'react';
import fakeData from '../../fakeData'
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Shop = () => {
    
    const firstTen = fakeData.slice(0,10);
    const [products , setProducts]= useState(firstTen);
    const [cart,setCart] = useState([]);

    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);

        const previousCart = productKeys.map(pdKey =>{
            const product = fakeData.find(pd => pd.key === pdKey);
            product.quantity = saveCart[pdKey];
            return product;
        })
        setCart(previousCart);
    },[])

    const handleAddProduct =(product)=>{
        const toBeAdded = product.key;
        const sameProduct = cart.find(pd => pd.key === product.key);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAdded);
            newCart = [...others, sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart,product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key,count);
    }
    return (
        <div className="twin-container">
            <div className="product-container">  
                {
                    products.map(pd => <Product
                        key ={pd.key}
                        showAddButton ={true}
                        handleAddProduct ={handleAddProduct}
                        product={pd}>
                        </Product>)
                }   
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/review">
                        <button className="cartAdd-button">Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;