import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebse.init';
import { signOut } from 'firebase/auth';
import logo from '../../../img/New folder/download-removebg-preview.png'


const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <img style={{ width: '50px' }} src={logo} alt="" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Navbar.Brand as={Link} to="/home">Home</Navbar.Brand>
                        <Nav.Link as={Link} to="/manageItems">Manage-Items</Nav.Link>
                        <Nav.Link as={Link} to="/myItems">My-Items</Nav.Link>
                        <Nav.Link as={Link} to="/stockProducts">Stocks</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/"></Nav.Link>
                    </Nav>
                    <Nav>
                        {!user ? <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            : <span onClick={() => signOut(auth)} className='text-white'>Logout</span>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;