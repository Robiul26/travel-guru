import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ setBoking, data, setDestination }) => {
    const navigate = useNavigate();
    const [details, setDetails] = useState({
        origin: '',
        destination: '',
        from: '',
        to: ''
    });
    const handleCancle = () => {
        setBoking(false);
        setDestination('');
    }
    const handlerChange = (e) => {
        const newDetails = { ...details };
        newDetails[e.target.name] = e.target.value;
        setDetails(newDetails);
    }
    const formSubmit = (e) => {
        e.preventDefault();
        navigate(`destination/${data.name}`);
        localStorage.removeItem('arianame');
        localStorage.setItem('arianame', JSON.stringify(data.name));


        // console.log(details);
    }
    return (
        <Card className='p-3'>
            <Form onSubmit={formSubmit}>
                <Row>
                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="origin">
                            <Form.Label>Origin</Form.Label>
                            <Form.Control type="text" onChange={handlerChange} name="origin" placeholder="Ex:Dhaka" required />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="destination">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control type="text" onChange={handlerChange} name="destination" value={data.name} placeholder="Destination" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="from">
                            <Form.Label>From</Form.Label>
                            <Form.Control type="date" onChange={handlerChange} name="from" placeholder="from" required />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="to">
                            <Form.Label>To</Form.Label>
                            <Form.Control type="date" onChange={handlerChange} name="to" placeholder="to" required />
                        </Form.Group>
                    </Col>
                </Row>

                <Button variant='warning' type='submit' > Start Booking</Button>
                <Button className='ms-3' variant="danger" onClick={() => handleCancle()}>
                    Cancle
                </Button>
            </Form>
        </Card>
    );
};

export default BookingForm;