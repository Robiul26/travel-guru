import React, { useContext, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleImg from '../../../images/google.png';
import fbImg from '../../../images/fbpng.png';
import Header from '../Header';
import { facebookLogin, googleLogin, signInWithEmaiAndPassword } from './LoginManger';
import { UserContext } from '../../../App';

const Login = () => {
    const [logedInUser, setLogedInUser] = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [user, setUser] = useState({
        isSignedIn: false,
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
            });
    }

    // Function for Sign in with Facebook
    const loginWithFacebook = () => {
        facebookLogin()
            .then(res => {
                handleResponse(res, true);
            });
    }

    // Global function for response
    const handleResponse = (res, redirect) => {
        setUser(res);
        setLogedInUser(res); //user data save in UserContex()
        localStorage.setItem('user', JSON.stringify(res)); //user data save in localstorage
        if (redirect) {
            navigate(from, { replace: true });
        }
    }


    // Function for Email with SignIn
    const handleChange = (e) => {
        const newUserInfo = { ...user };
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
        // console.log(user);
    }

    // LoginForm submit for Login
    const submitForm = (e) => {
        e.preventDefault();
        signInWithEmaiAndPassword(user.email, user.password)
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
                                <Card.Title className='fw-bold pb-3'>Login</Card.Title>
                                <Form onSubmit={submitForm}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        {/* <Form.Label>Email address</Form.Label> */}
                                        <Form.Control onChange={handleChange} name='email' type="email" placeholder="Enter email" />

                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        {/* <Form.Label>Password</Form.Label> */}
                                        <Form.Control onChange={handleChange} name='password' type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Row>
                                        <Col md>
                                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Remember me" />
                                            </Form.Group>
                                        </Col>
                                        <Col md>
                                            <Link to='/' className='text-warning float-end'>Forgot Password</Link>
                                        </Col>
                                    </Row>
                                    <Button variant="warning" className='w-100 fw-bold' type="submit">
                                        Login
                                    </Button>
                                    <Card.Text className='pt-2 text-center'>
                                        Dont have an account?
                                        <Link to='/register' className='text-warning'> Create account</Link>
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

export default Login;