import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="info" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Dr. Malik</Navbar.Brand>
  <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link as={Link} to='/'>Home</Nav.Link>
      <Nav.Link href="/ #about">About</Nav.Link>
      <Nav.Link href="#service">Service</Nav.Link>
      <Nav.Link href="#Contact">Contact Us</Nav.Link>
      
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
      <Link className="header" to='/sign up'>Sign Up</Link>
      <Link className="header" to='/login'>
        Login
      </Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;