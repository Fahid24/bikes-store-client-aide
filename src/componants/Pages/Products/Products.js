import React, { useState, useEffect } from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const [products] = useProducts()
    return (
        <div>
            <h1>this is products</h1>
            this is products
            {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>)
            }
        </div>
    );
};

export default Products;