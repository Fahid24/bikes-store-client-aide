import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Product = ({ product }) => {
    const { name, img, description, price, supplier } = product;
    return (
        <div className='container row gap-3 d-flex justify-content-center'>
            <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 '>
                <Card className='text-center ' style={{ width: '18rem' }}>
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
                            <h4>{supplier}</h4>
                        </Card.Text>
                        <Button variant="primary">Update</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Product;