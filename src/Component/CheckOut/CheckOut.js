import React from 'react';
import checkout from '../../images/Checkout.jpg'
import './CheckOut.css'

const CheckOut = () => {
    return (
        <div className="check">
          <h2 className="title mt-5">Please CheckOut</h2>
          <img className="p-5 img" src={checkout} alt="" />  
        </div>
    );
};

export default CheckOut;