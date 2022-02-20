import React from 'react';
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import background from '../../images/home.jpg';
import Header from './Header';
import item1 from '../../images/Sajek.png';
import item2 from '../../images/Sreemongol.png';
import item3 from '../../images/sundorbon.png';

const Home = () => {
    return (
        <div className='home-bg' style={{ backgroundImage:`url(${background})`,  
       
          }}>
           <Header/>
           <Container>
                <Row className='mt-5'>
                    <Col md={6} sm={12}>
                   <div className='mt-5'>
                        <h1 className='text-white text-uppercase fw-bold'>Cox's bazar</h1>
                        <p className='text-white'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>                   
                        <button className='btn btn-warning px-4 fw-bold'>Booking </button>
                   </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <Row>
                            <Col md={4}>
                                <Card role={'button'} className="bg-dark text-white mt-5 border-2 border-warning" >
                                    <Card.Img src={item1} alt="Card image"
                                    
                                    />
                                     <Card.ImgOverlay style={{ top:'unset' }}>
                                        <Card.Title>Card title</Card.Title>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card role={'button'} className="bg-dark text-white mt-5">
                                    <Card.Img src={item2} alt="Card image" />
                                    <Card.ImgOverlay style={{ top:'unset' }} >
                                        <Card.Title >Card title</Card.Title>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card role={'button'} className="bg-dark text-white mt-5">
                                    <Card.Img src={item3} alt="Card image" />
                                    <Card.ImgOverlay style={{ top:'unset' }} >
                                        <Card.Title >Card title</Card.Title>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12}>
                       <div className='text-center mt-5'>
                            <Button variant='light' className='me-4 rounded-circle fw-bold'>{`<`}</Button>
                            <Button variant='light' className='rounded-circle fw-bold'>{`>`}</Button>
                       </div>
                    </Col>
                </Row>
           </Container>
        </div>
    );
};

export default Home;