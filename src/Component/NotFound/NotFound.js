import React from 'react';
import NotFound from '../../images/404-pages.jpg'
import './NotFound.css'
const NotFoundPage = () => {
    return (
        <div>
            
           <h1 className="text ">Ooop!</h1>
           <img className="image"src={NotFound} alt="" />
        </div>
    );
};

export default NotFoundPage;

