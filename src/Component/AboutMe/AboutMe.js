import React from 'react';
import About from '../../images/JUTHY.JPG'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                     <img className="w-50 mt-5" src={About}alt="" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="p-3">About me</h4>
                        <p className="p-3">I am positive,enthusiastic and competent web developer. There are lots of web developer jobs out there,but I want one where i am going to be challenge and where the skills and qualities that i have built up are going to be put to good use. I will perform highly in this role</p>
                        </div>
                    </div>

            </div>
        </div>
    );
};

export default AboutMe;