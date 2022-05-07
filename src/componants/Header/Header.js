import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" href="/">Navbar</Link>

                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" aria-current="page" to='/home'>Home</Link>
                            <Link class="nav-link" to="#"></Link>
                            <Link class="nav-link" to="#"></Link>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;