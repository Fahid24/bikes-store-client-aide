import React from 'react';
import Footer from '../../../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import DemoProducts from '../DemoProducts/DemoProducts';
import Collection from '../../../../hooks/Collection/Collection';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <DemoProducts></DemoProducts>
            <Collection></Collection>
            <Footer></Footer>
        </div>
    );
};

export default Home;