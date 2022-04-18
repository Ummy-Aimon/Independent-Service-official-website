import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = () => {
    return (
        <div className="detail">
            <h1 className="text-center mt-5">Welcome to my service-details</h1>
            <p className="p-3">"There's a lot of misinformation about COVIDー19 right now. Doctor Mike reviews the latest research and findings to ensure you're getting fact-based information."As the COVID-19 pandemic unfolded, the common saying “if it bleeds it leads” rang ever-true in the news, and the publics anxiety was fueled. Dr. Mike made it his mission for his platform to be a news source where only the most reliable and up-to-date information was reported. His audience has trusted him in this troublesome time to be an honest and fact-forward source of information. Because of the trust he has built, Doctor Mike has made appearances and consulted on many mainstream news channels such as CNN, ABC and Fox News, alongside interviewing some of the United States most notable health professionals, Dr. Anthony Fauci and the head of Google Health, Dr. David Feinberg. In June, Mike was named an ambassador for the United Nations “Verified” initiative. Additionally, Dr. Mike donated $50,000 in masks to his local hospital and raised over $65,000 for the CDC Foundation.  </p>   
         <Link className='p-3' to="/checkout"> 
             <button type="submit" className="btn btn-primary">Proced checkout</button>
         </Link>
        </div>
    );
};

export default ServiceDetail;