import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const{img,name,description,price}=props.service
    const navlink= useNavigate()
    return (
        <div className="shadow p-3 mb-5 bg-body rounded ">
            {/* <Card style={{ width: '18rem' }}> */}
  <Card.Img className="border rounded" variant="top" src={img} />
  <Card.Body>
    <Card.Title className="title">{name}</Card.Title>
    <Card.Text className="text-jutify">
      {description.slice(0,160)}.......
    </Card.Text>
    <p className="text-secondary fw-bold">${price}</p>
    <Button onClick={()=>navlink("/servicedetail")} type="submit" variant="primary">Read more</Button>
  </Card.Body>
{/* </Card> */}
        </div>
    );
};

export default Service;