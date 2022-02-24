import React, { useContext, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleImg from '../../../images/google.png';
import fbImg from '../../../images/fbpng.png';
import Header from '../Header';
import { createUserWithPassword, facebookLogin, googleLogin } from './LoginManger';
import { UserContext } from '../../../App';

const Register = () => {
    const [logedInUser, setLogedInUser] = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [user, setUser] = useState({
        isSignedIn: false,
        first_name: '',
        last_name: '',
        name: '',
        email: '',
        password: '',
        photo: '',
        success: false,
        error: ''
    })

    // Function for Sign in with Google
    const loginWithGoogle = () => {
        googleLogin()
            .then(res => {
                handleResponse(res, true);
                localStorage.setItem('user', JSON.stringify(res));
            });
    }

    // Function for Sign in with Facebook
    const loginWithFacebook = () => {
        facebookLogin()
            .then(res => {
                handleResponse(res, true);
                localStorage.setItem('user', JSON.stringify(res));
            });
    }

    // Global function for response
    const handleResponse = (res, redirect) => {
        setUser(res);
        setLogedInUser(res); //user data save in UserContex()
      //  localStorage.setItem('user', JSON.stringify(res)); //user data save in localstorage
        if (redirect) {
            // navigate(from, { replace: true });
            navigate('/login');
        }
    }


    // Function for Email with SignIn
    const handleChange = (e) => {
        const newUserInfo = { ...user };
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
        // console.log(user);
    }

     // RegisterForm submit for Register
    const submitForm = (e) => {
        e.preventDefault();
        createUserWithPassword(user.first_name, user.email, user.password)
            .then(res => {
                handleResponse(res, true);
                console.log(res);
            })

      
    }


    return (
        <>
            <Header />

            <Container>
                <Row className="justify-content-md-center">
                    <Col md={4} className="mt-2">
                        <Card>
                            <Card.Body>
                                <Card.Title className='fw-bold pb-3'>Register</Card.Title>
                                <Form onSubmit={submitForm}>
                                    <Form.Group className="mb-3" controlId="firstName">
                                        {/* <Form.Label>First name</Form.Label> */}
                                        <Form.Control name="first_name" onChange={handleChange} type="text" placeholder="Enter First name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="lastName">
                                        {/* <Form.Label>Last name</Form.Label> */}
                                        <Form.Control name="last_name" onChange={handleChange} type="text" placeholder="Enter Last name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        {/* <Form.Label>Username of Email</Form.Label> */}
                                        <Form.Control name="email" onChange={handleChange} type="email" placeholder="Enter email" />

                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="Password">
                                        {/* <Form.Label>Password</Form.Label> */}
                                        <Form.Control name="password" onChange={handleChange} type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="ConfirmPassword">
                                        {/* <Form.Label>Confirm Password</Form.Label> */}
                                        <Form.Control name="c_password" onChange={handleChange} type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Button variant="warning" className='w-100 fw-bold' type="submit">
                                        Create an account
                                    </Button>
                                    <Card.Text className='pt-2 text-center'>
                                        Already have an account?
                                        <Link to='/login' className='text-warning'> Login</Link>
                                    </Card.Text>
                                </Form>
                            </Card.Body>
                        </Card>
                        <p className='text-center'>-or-</p>
                        <Button onClick={loginWithGoogle} className='text-center border border-1 border-gray rounded-pill p-2 mb-2 w-100 bg-white text-secondary'>
                            <img className='float-start' style={{ width: '25px' }} src={googleImg} alt="Google" />
                            <span className=''>Continue with Google</span>
                        </Button>
                        <Button onClick={loginWithFacebook} className='text-center border border-1 border-gray rounded-pill p-2 w-100 bg-white text-secondary'>
                            <img className='float-start' style={{ width: '25px' }} src={fbImg} alt="Facebook" />
                            <span className=''>Continue with Facebook</span>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Register;