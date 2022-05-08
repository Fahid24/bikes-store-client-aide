import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../../hooks/useProducts';
import Product from '../../Product/Product';

const DemoProducts = () => {
    const [products] = useProducts();


    const demoProducts = [...products.slice(0, 6)]

    return (
        <div className=''>
            <h1 className='text-center mt-4'>Products :  {demoProducts.length}</h1>
            <div className='w-100 row gap-3 d-flex justify-content-center'>
                {
                    demoProducts.map(product => <Product
                        key={product._id}
                        product={product}></Product>)
                }
            </div>
            <Link className='btn btn-primary mx-auto d-block w-25 my-5' to='/manageItems'>Manage All Products</Link>
        </div>
    );
};

export default DemoProducts;