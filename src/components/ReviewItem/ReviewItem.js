import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    return (
        <div>
            <h3>{name}</h3>
            <p>{quantity}</p>
            <p>${price}</p>
            <br/>
            <button 
            className="cartAdd-button"
            onClick = {() => props.removeButton(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;