import React from 'react';
import About from '../About/About';
import Banner from '../BannerPage/Banner';
import Header from '../Header/Header';
// import Header from './Header';

const HomePage = () => {
    return (
        <div>
          <Banner></Banner>
          <About></About>
        </div>
    );
};

export default HomePage;