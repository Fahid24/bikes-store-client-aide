import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import DemoProducts from '../DemoProducts/DemoProducts';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <DemoProducts></DemoProducts>
        </div>
    );
};

export default Home;