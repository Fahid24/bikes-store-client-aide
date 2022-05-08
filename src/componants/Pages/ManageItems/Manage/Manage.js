import React from 'react';
import useProducts from '../../../../hooks/useProducts'
const Manage = ({ product }) => {
    const [products, setProducts] = useProducts();
    const { name, quantity, price, supplier, _id, img } = product;
    const handleDelete = (id) => {
        const confirmation = window.confirm('Are you sure to delete?');
        if (confirmation) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }
                    else {
                        alert('No matched document !')
                    }
                })
        }


    }
    return (
        <tr className='text-center'>
            <td title={name} className="text-start">{name.slice(0, 50)}...</td>
            <td>{(quantity === 0) ? 'Not available' : quantity}</td>
            <td>{price}</td>
            <td>{supplier}</td>
            <td>

                <h3 onClick={() => handleDelete(_id)} className=' btn  mx-auto text-danger' style={{ width: '60px' }}>x</h3>
            </td>
        </tr>
    );
};
export default Manage;