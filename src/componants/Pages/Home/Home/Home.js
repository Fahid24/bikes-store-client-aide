import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import DemoProducts from '../DemoProducts/DemoProducts';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <DemoProducts></DemoProducts>
            <Link className='btn btn-primary mx-auto d-block w-25 my-5' to='/manageItems'>Manage All Products</Link>
            <Footer></Footer>
        </div>
    );
};

export default Home;