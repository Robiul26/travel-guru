import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';

const Blog = () => {
    return (
        <>
            <Header />
            <Container>
                <h2 className='text-warning text-center page-link py-5 mt-5 rounded-3'>
                    Bloger is sleeping... 😴 
                </h2>
            </Container>
        </>
    );
};

export default Blog;