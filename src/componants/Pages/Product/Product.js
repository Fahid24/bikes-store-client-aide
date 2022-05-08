import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Navigate } from 'react-router';
import './Product.css'

const Product = ({ product }) => {
    const { name, img, description, price, supplier, _id } = product;
    const handleUpdate = (id) => {
        Navigate(`/products/${id}`)
    }
    return (
        <div className='container row gap-3 d-flex justify-content-center '>

            <Card className='text-center border rounded col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4  ' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        <h3>{price}</h3>
                    </Card.Text>
                    <Card.Text>
                        <h4>Supplier: {supplier}</h4>
                    </Card.Text>
                    <Button className='btn w-100' onClick={() => handleUpdate(_id)} variant="dark">Update</Button>
                </Card.Body>
            </Card>


        </div>
    );
};

export default Product;