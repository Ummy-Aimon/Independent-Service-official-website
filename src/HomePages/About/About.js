import React from 'react';
import { Button } from 'react-bootstrap';
import about from '../../images/about3.jpg'
import './About.css'

const About = () => {
    return (
        <div className="about">
            <h1 className="text-center text-info fw-bold">About Us</h1>
         <div className="container" >
             <div className="row">
             <div className="col-md-4">
                     <div className="mt-5">
                     <img src={about} alt="" />
                     </div>
                     </div>
                 <div className="col-md-8">
                <h5 className=" text-info fw-bold mt-5">ABOUT DR. MIKE</h5>
                <p className="fs-4">With over 21 million social media followers, Dr. Mikhail Varshavski, commonly known as "Doctor Mike," is a multifaceted board-certified family medicine physician, media personality, educator, writer, and philanthropist.</p>
                <p>During his residency, Dr. Mike decided to document his journey and share his medical learnings with the internet. Over the next few years, he garnered over 1 Billion views, making his platform one of the largest in health education.</p>
                <p>Today, Dr. Mike is one of the most influential medical educators of the digital era.</p>
                <Button className="btn btn-primary border ">Connect Doctor Mike</Button>
                 </div>
                
                 </div>
                 
         </div>
        </div>
    );
};

export default About;