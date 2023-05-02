import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaPinterestP, FaYoutube, FaBehance } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='text-center my-4 '>
            <img src="public/assets/images/logo.png" alt="" />
            <div className='d-flex justify-content-center mt-4'>
                <FaFacebookF className='me-4 fs-3' />
                <FaTwitter className='me-4 fs-3' />
                <FaYoutube className='me-4 fs-3' />
                <FaBehance className='me-4 fs-3' />
                <FaPinterestP className='me-4 fs-3' />
            </div>
            <div className='d-flex justify-content-center'>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto fs-6 fw-bold">
                            <Nav.Link href="#features">
                                <Link to="/" className='text-decoration-none text-dark'>HOME |</Link>
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                            <Link to="/ourmanu" className='text-decoration-none text-dark'>OUR MANU |</Link>
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                            <Link to="/shop" className='text-decoration-none text-dark'>SHOP |</Link>
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                            <Link to="/blog" className='text-decoration-none text-dark'>BLOG |</Link>
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                            <Link to="/contact" className='text-decoration-none text-dark'>CONTACT |</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
            <h6>2023 @ Copyright, Testo All Rights Reserved</h6>
        </div>
    );
};

export default Footer;