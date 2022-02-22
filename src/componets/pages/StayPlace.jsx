import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Aria } from '../../Data';
import Header from './Header';

const StayPlace = () => {
    const areaname = localStorage.getItem('arianame');    
    const getName = JSON.parse(areaname);
    const name = useParams();
    const getAria = Aria.filter(data => data.name === name.name);

    return (
        <>
            <Header/>
            <Container className='py-5'>
               { getName !== null ?
                <Row>
                    <Col md={7}>
                        <Card.Title className=' text-uppercase'>{getAria[0].name}</Card.Title>
                        <Row>
                            {
                                getAria[0].places.map((item, index) => (
                                    <Col md={12} key={index}>
                                        <Card className='place-card d-flex border-0 gap-2 py-2'>
                                            <Card.Img className='' variant="bottom" src={item.img} />
                                            <Card.Body>
                                                <Card.Title>{item.title}</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                    <Col md={5}>
                        <iframe src={getAria[0].map} width="100%" height="450" style={{ border: 0 }} loading="lazy"></iframe>
                    </Col>
                </Row>
                :
                <h2 className='text-danger text-center p-5'>You have not choice any destination for booking. Please Booking !</h2>    
            }
            </Container>
        </>
    );
};

export default StayPlace;