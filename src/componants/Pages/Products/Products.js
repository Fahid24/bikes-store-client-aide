import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Loading from '../../../Shared/Loading/Loading';
import Product from '../Product/Product';

const Products = () => {
    const [products] = useProducts()

    if (products.length === 0) {
        return <Loading></Loading>
    }
    return (
        <div className=''>

            <h1 className='text-center mt-4'>Products :  { }</h1>
            <div className='w-100 row gap-3 d-flex justify-content-center'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}></Product>)
                }
            </div>
            <Link className='btn btn-primary mx-auto d-block w-25 my-5' to='products/:id'>Manage All Products</Link>
        </div>
    );
}

export default Products;