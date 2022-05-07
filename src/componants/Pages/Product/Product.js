import React from 'react';

const Product = ({ product }) => {
    const { name, img, description, price, supplier } = product;
    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <img src={img} style={{ width: '300px' }} alt="" />
        </div>
    );
};

export default Product;