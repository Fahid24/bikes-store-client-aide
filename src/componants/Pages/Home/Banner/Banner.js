import React from 'react';
import { Carousel } from 'react-bootstrap';
import img from '../../../img/1(1).jpg';

const Banner = () => {
    return (
        <div className='mb-5 pb-5'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="img-fluid d-block w-100"
                        src="https://wowslider.com/sliders/demo-38/data1/images/motorbike932690.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>BEST BICKS</h3>
                        <p>bast bike collections on our site</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-fluid d-block w-100"
                        src={img}
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-dark'>
                        <h3>BEST DEALS</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-fluid d-block w-100"
                        src='https://wowslider.com/sliders/demo-38/data1/images/motorcycle500910.jpg'
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-dark'>
                        <h3>BEST PRICE</h3>
                        <p>We are the best bike stokers.</p>
                    </Carousel.Caption>
                </Carousel.Item>


            </Carousel>

        </div>
    );
};

export default Banner;