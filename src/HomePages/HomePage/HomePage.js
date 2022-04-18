import React from 'react';
import About from '../About/About';
import Banner from '../BannerPage/Banner';
import Services from '../Services/Services';
// import Footer from '../Footer/Footer';
// import Header from '../Header/Header';

// import Header from './Header';

const HomePage = () => {
    return (
        <div>
          <Banner></Banner>
          <About></About>
          <Services></Services>
        </div>
    );
};

export default HomePage;