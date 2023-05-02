import React from 'react';
import { Badge, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='position-absolute fixed-top' variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="public/assets/images/logo.png" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto fs-5 fw-bold">
                            <Nav.Link href="#features">
                                <Link to="/" className='text-decoration-none text-white'>HOME</Link>
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                            <Link to="/ourmanu" className='text-decoration-none text-white'>OUR MANU</Link>
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                            <Link to="/shop" className='text-decoration-none text-white'>SHOP</Link>
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                            <Link to="/blog" className='text-decoration-none text-white'>BLOG</Link>
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                            <Link to="/contact" className='text-decoration-none text-white'>CONTACT</Link>
                            </Nav.Link>
                        </Nav>
                        <Nav className=''>
                            <Nav.Link href="#deets" className='fs-3'><FaUserCircle /></Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="outline-dark" className="fs-5 fw-bold">SIGN IN</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;