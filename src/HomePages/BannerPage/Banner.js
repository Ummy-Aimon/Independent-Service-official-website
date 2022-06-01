import React from 'react';
import banner from '../../images/banner.jpg'
import './Banner.css'
import { FaYoutube } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
const Banner = () => {
    return (
        <div className="banner">
           <div className="container" >
               <div className="row">
                   {/* <div className="bg-info"> */}
                   <div className="col-md-6">
                  <h1 className="mt-5 fw-bold">Doctor Mike is Varshavski - Official Website</h1>
                  <p className="fs-5">Doctor Mike is an actively practicing Board Certified Family Medicine doctor. #1 health & lifestyle expert with 21,000,000+ followers.</p>
                  <div className="icons">
                      <div className="icon">
                      <FaYoutube></FaYoutube>
                      </div>
                      <div className="icon">
                      <BsFacebook></BsFacebook>
                      </div>
                      <div className="icon">
                      <AiFillInstagram></AiFillInstagram>
                      </div>
                      <div className="icon">
                      < BsTwitter></BsTwitter> 
                      </div>   
                  </div>
                   </div>
                   <div className="col-md-6">
                       <div className="mt-5">
           <img className="banner-img" src={banner} alt="" />
           </div>
                       </div>
                       {/* </div> */}
               </div>
           </div>
        </div>
    );
};

export default Banner;