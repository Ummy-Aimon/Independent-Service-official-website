import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
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
    </Nav>
    <Nav>
      <Link className="header" to='/signup'>Sign Up</Link>
      { user?
      <Link onClick={handleSignOut} className="header" to=''>Logout</Link>
      :
      <Link className="header" to='/login'>
        Login
      </Link>
}
<Link className="header" to='/about'>
        About me
      </Link>

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;