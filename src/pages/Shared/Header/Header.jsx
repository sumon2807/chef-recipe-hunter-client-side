import React from 'react';
import { Badge, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='position-absolute fixed-top' variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="../../../../public/assets/images/logo.png" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto fs-5 fw-bold text-white">
                            <Nav.Link href="#features">HOME</Nav.Link>
                            <Nav.Link href="#pricing">OUR MANU</Nav.Link>
                            <Nav.Link href="#pricing">SHOP</Nav.Link>
                            <Nav.Link href="#pricing">BLOG</Nav.Link>
                            <Nav.Link href="#pricing">CONTACT</Nav.Link>
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