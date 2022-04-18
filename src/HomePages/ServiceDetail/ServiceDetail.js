import { Button } from 'bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = () => {
    return (
        <div className="detail">
            <h1 className="text-center mt-5">Welcome to my service-details</h1>   
         <Link  to="/checkout">
             <button type="submit" className="btn btn-primary">Proced checkout</button>
         </Link>
        </div>
    );
};

export default ServiceDetail;