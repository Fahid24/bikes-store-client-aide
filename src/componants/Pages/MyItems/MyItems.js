import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebse.init';
import MyItem from './MyItem/MyItem';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [myProducts, setMyProducts] = useState([]);
    useEffect(() => {
        fetch(`https://pure-bayou-44606.herokuapp.com/myProducts?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyProducts(data)
            })
    }, [user])
    const handleDelete = (id) => {
        const confirmation = window.confirm('Are you sure to delete?');
        if (confirmation) {
            const url = `https://pure-bayou-44606.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        const remaining = myProducts.filter(product => product._id !== id);
                        setMyProducts(remaining);
                    }
                    else {
                        alert('No matched document !')
                    }
                })
        }

    }
    return (
        <div>

            <div>
                <h2 className='text-center mt-3'>Manage My Products</h2>
                <div className='text-center'>
                    <h5>{user?.displayName}</h5>
                    <h6>Email: <span className='text-warning'>{user.email}</span></h6>
                </div>
                <div className='container mx-auto my-4'>

                    {
                        myProducts.map(product => <MyItem
                            key={product._id}
                            handleDelete={handleDelete}
                            product={product}></MyItem>)
                    }

                </div>
            </div>
        </div>
    );
}

export default MyItems;