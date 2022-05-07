import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebse.init';
import { signOut } from 'firebase/auth';
import logo from '../img/12-123722_clip-art-logos-motobike-hobbiesxstyle-black-motor-bike-removebg-preview.png'


const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar sticky="top" className='text-white' collapseOnSelect expand="lg" bg="primary bg-opacity-20" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.CustomLink className='fs-4 text-dark' href="/#services">Services</Nav.CustomLink>
                    </Nav>
                    <Nav>
                        <Nav.CustomLink className='fs-4 text-dark' as={Link} to="/blogs">Blogs</Nav.CustomLink>
                        <Nav.CustomLink className='fs-4 text-dark' as={Link} to="/about">About</Nav.CustomLink>
                        {!user ? <Nav.CustomLink className='fs-4 text-dark' as={Link} to="/login">Login</Nav.CustomLink> : <Nav.CustomLink onClick={handleSignOut} className='my-auto text-dark fs-4 d-inline text-white text-opacity-50'>Log Out</Nav.CustomLink>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;