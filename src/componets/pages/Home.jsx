import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import background from '../../images/home.jpg';
import Header from './Header';
import BookingForm from './Booking';
import { Aria } from '../../Data';




const Home = () => {
   
    const [destination, setDestination] = useState({});
    const [booking, setBoking] = useState(false);
    
    const handleInput = (e) => {
        setDestination(
            {
                id: e.id,
                name: e.name,
                description: e.description,
                img: e.img,
                places:e.places
            }
        );

        // return 'btn '+((destination===e.name) ?'active':'default');
    }
    return (
        <div className='home-bg' style={{
            backgroundImage: `url(${background})`,

        }}>
            <Header />
            <Container>
                <Row className='mt-5'>
                    <Col md={6} sm={12}>
                        <div className='mt-5'>
                            <h1 className='text-white text-uppercase fw-bold'>{destination.name ? destination.name : `Cox's bazar`}</h1>
                            <p className='text-white'>{destination.description ? destination.description : `Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...`}</p>
                            {!booking && <Button onClick={() => setBoking(true)} className='btn btn-warning px-4 fw-bold'>Booking </Button>}
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        {!booking ?
                            <Row>
                                {
                                    Aria.map((data, index) => (
                                        <Col md={4} key={index}>
                                            <Card role={'button'} onClick={(e) => handleInput(data)} className={`${destination.name === data.name ? 'active' : ''} bg-dark text-white mt-5 border-2`} >
                                                <Card.Img src={data.img} alt="Card image" />
                                                <Card.ImgOverlay style={{ top: 'unset' }}>
                                                    <h6 className=' text-uppercase'>{data.name}</h6>
                                                </Card.ImgOverlay>
                                            </Card>
                                        </Col>
                                    ))
                                }

                            </Row>
                            :
                            <BookingForm setBoking={setBoking} data={destination} setDestination={setDestination} />
                        }
                    </Col>
                    {!booking && <Col md={12}>
                        <div className='text-center mt-5'>
                            <Button variant='light' className='me-4 rounded-circle fw-bold'>{`<`}</Button>
                            <Button variant='light' className='rounded-circle fw-bold'>{`>`}</Button>
                        </div>
                    </Col>}
                </Row>
            </Container>
        </div>
    );
};

export default Home;