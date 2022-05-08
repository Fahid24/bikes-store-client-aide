import React from 'react';
import Footer from '../../../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import DemoProducts from '../DemoProducts/DemoProducts';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <DemoProducts></DemoProducts>
            <Footer></Footer>
        </div>
    );
};

export default Home;