import React from 'react';
import Footer from '../../../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import DemoProducts from '../DemoProducts/DemoProducts';
import Search from '../../../Search/Search'

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Search></Search>
            <DemoProducts></DemoProducts>
            <Footer></Footer>
        </div>
    );
};

export default Home;