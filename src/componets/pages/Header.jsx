import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
const Header = () => {
    const areaname = localStorage.getItem('arianame');    
    const getName = JSON.parse(areaname);
    console.log('get', getName);
    return (
        <>
            <Navbar className='text-white bg-dark opacity-75' expand="lg">
                <Container>
                    <Navbar.Brand href="/" style={{ width: '170px' }}>
                        <img className='w-100' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-white border-white' />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="ms-auto">
                            <Form className="">
                                <FormControl
                                    type="Search your Destination.."
                                    placeholder="Search"
                                    aria-label="Search"
                                />

                            </Form>
                            <Nav.Link className='text-white ms-4' href="/news">News</Nav.Link>
                            <Nav.Link className='text-white ms-4' href={`/booking/${getName}`}>Destination</Nav.Link>
                            <Nav.Link className='text-white ms-4' href="/blog">Blog</Nav.Link>
                            <Nav.Link className='text-white ms-4 me-4' href="/contact">Contact</Nav.Link>
                            <Button variant='warning' className='px-4 fw-bold'>Login</Button>
                            <Link to="/links"></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;