import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../FireBase-init';
import './Login.css'

const Login = () => {
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate= useNavigate()
      let location = useLocation();
 

  let from = location.state?.from?.pathname || "/";


    const handleEmailBlur = (e) =>{
        setEmail(e.target.value)
        console.log(e.target.value)
     }
     
     const handlePasswordBlur = e =>{
         setPassword(e.target.value)
     }

if(user){
navigate(from, { replace: true })
}

     const handleSignIN =(e) =>{
        e.preventDefault()
        if (error) {
            return   
          }
          if (loading) {
            return 
          }
        signInWithEmailAndPassword(email,password)
     }
    return (
        <div className="login">
           <h1 className="text">Please Login</h1>
           <Form onSubmit={handleSignIN} className="w-50 m-auto">     
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label className="fw-bold">Email address</Form.Label>
    <Form.Control onBlur={ handleEmailBlur} type="email" placeholder="Enter email" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label className="fw-bold">Password</Form.Label>
    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required/>
  </Form.Group>
  
 <p className="text-danger">{error?.message}</p>
 {
     loading && <p className="text-info">Loading...</p>
 }
    
  <p className="text1"> 
  Sign Up For Doctor Mike's Newsletter? <Link className="text-secondary text-decoration-none" to="/signup">Create an account</Link>
</p>
  <Button type="submit" className="w-100 fw-bold fs-4" variant="info">Submit</Button>
  <br></br> <br></br>
  <div className="button">
  <button type= "submit" className="button"> 
  <FcGoogle> </FcGoogle> Continue With Google </button>
  </div>
</Form>

        </div>
    );
};

export default Login;


