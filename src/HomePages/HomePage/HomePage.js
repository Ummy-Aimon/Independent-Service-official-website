import React from 'react';
import About from '../About/About';
import Banner from '../BannerPage/Banner';
import Services from '../Services/Services';
import './HomePage.css'

const HomePage = () => {
    return (
        <div className="homepage">
          <Banner></Banner>
          <About></About>
          <Services></Services>
        </div>
    );
};

export default HomePage;