import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import {Link} from 'react-router-dom';
const Product = (props) => {
    const { img, name, seller, price, stock, key } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
                <div className="product-name">
                <h4 className="productName"><Link to={"/product/"+key}>{name}</Link></h4>
                <p><small>Shop Name: {seller}</small></p>
                <p>${price}</p>
                <h5>Quantity: {stock} available.</h5>
                {props.showAddButton && <button 
                className="cartAdd-button"
                onClick={()=>props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
            </div>
        </div>
    );
};

export default Product;