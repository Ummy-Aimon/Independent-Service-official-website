import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

const[services,setService]=useState([])

 useEffect(()=>{
     fetch('Data.json')
     .then(res=>res.json())
     .then(data=>setService(data))
 },[])
    return (
        <div id="services">
           <h1 className="text-center text-info fw-bold mb-5">Service</h1>
           <div className="service-container">
           {
               services.map(service=><Service key={service.id} service={service}></Service>)
           }
        </div>
        </div>
    );
};

export default Services;