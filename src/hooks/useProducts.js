import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = 'https://pure-bayou-44606.herokuapp.com/products';

        fetch(url)
            .then(res => res.json())
            .then(data => {

                setProducts(data)
            })
    }, [products])
    return [products]
}

export default useProducts;
