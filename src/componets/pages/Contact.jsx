import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from './Header';

const Contact = () => {
    return (
        <>
            <Header />
            <Container>
                <h2 className='text-warning text-center page-link py-5 mt-5 rounded-3'>
                    You can... 📧  
                    <Link as={Link} to="#" onClick={() => window.location = 'mailto:robiulrobi26@gmail.com'}>Send email</Link>
                </h2>
            </Container>
        </>
    );
};

export default Contact;