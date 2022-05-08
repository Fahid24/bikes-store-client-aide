import React from 'react';
import useProducts from '../../../../hooks/useProducts';
import Product from '../../Product/Product';

const DemoProducts = () => {
    const [products] = useProducts();


    const demoProducts = [...products.slice(0, 6)]
    console.log(demoProducts);
    return (
        <div>
            <h1>ho ho aeida demo product</h1>
            <h1>Products : {demoProducts.length}</h1>
            {
                demoProducts.map(product => <Product
                    product={product}
                ></Product>)
            }

        </div>
    );
};

export default DemoProducts;