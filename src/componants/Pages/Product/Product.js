import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import './Product.css'

const Product = ({ product, p }) => {
    const { name, img, description, price, supplier, _id } = product;
    const navigate = useNavigate()
    const handleUpdate = (id) => {
        navigate(`/products/${id}`)
    }
    return (
        <div className=' col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-4    d-flex justify-content-center '>
            <Card className='text-center border rounded ' style={{ width: '18rem' }}>
                <Card.Img className='pic' variant="top" src={img} style={{ widht: '300px' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        <h3>{price}</h3>
                    </Card.Text>
                    <Card.Text className=''>
                        <h4>Supplier: {supplier}</h4>
                    </Card.Text>
                    <Button style={{ marginBottom: '0' }} className='btn w-100 ' onClick={() => handleUpdate(_id)} variant="info">Update</Button>
                </Card.Body>
            </Card>


        </div >
    );
};

export default Product;