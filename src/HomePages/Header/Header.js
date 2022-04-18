import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../FireBase-init';
import './Header.css'
const Header = () => {
  const[user]=useAuthState(auth)
    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg"sticky="top" bg="info" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Dr.Mike</Navbar.Brand>
  <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link as={Link} to='/'>Home</Nav.Link>
      <Nav.Link href="home#about">About</Nav.Link>
      <Nav.Link href="home#services">Services</Nav.Link>
      <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
      
    {/* <Link className="header" to='/'>Service</Link>
      <Link className="header" to=''>
        About
      </Link> */}
      {/* <Link className="header" to=''>Service</Link>
      <Link className="header" to=''>
        Contact Us
      </Link> */}
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
      <Link className="header" to='/signup'>Sign Up</Link>
      { user?
      // <Button>logout</Button>
      <Link onClick={handleSignOut} className="header" to=''>Logout</Link>
      :
      <Link className="header" to='/login'>
        Login
      </Link>
}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;