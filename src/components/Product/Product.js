import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css';
const Product = (props) => {
    console.log(props.product.name);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-name">
                <a href="/product">{name}</a>
                <p><small>Shop Name: {seller}</small></p>
                <p>${price}</p>
                <h5>Quantity: {stock} available.</h5>
                <button 
                className="cartAdd-button"
                onClick={()=>props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;