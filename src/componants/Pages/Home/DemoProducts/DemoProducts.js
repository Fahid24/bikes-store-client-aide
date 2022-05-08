import React from 'react';
import useProducts from '../../../../hooks/useProducts';
import Product from '../../Product/Product';

const DemoProducts = () => {
    const [products] = useProducts();


    const demoProducts = [...products.slice(0, 6)]

    return (
        <div className=' mx-5 row gap-3 mt-5 '>

            <h1 className='borde text-center  bg-info'>Products : {demoProducts.length}</h1>
            {
                demoProducts.map(product => <Product
                    product={product}
                    key={product._id}
                ></Product>)
            }

        </div>
    );
};

export default DemoProducts;