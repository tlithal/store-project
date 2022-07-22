import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

function Navigation(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className="font-link">
                <Container>
                    <Navbar.Brand>
                    <Link to="/" className="nav-link">
                        <img
                            src="/images/melt.jpg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Store Icon"
                        />{" "}
                        Toby's Store
                    </Link>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/store" className="nav-link">Store</Link>
                        <Link to="/inventory" className="nav-link">Inventory</Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    );
}

export default Navigation;