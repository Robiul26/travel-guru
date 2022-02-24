import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';
const Header = () => {
    const areaname = localStorage.getItem('arianame');
    const getName = JSON.parse(areaname);
    const storeageUser = localStorage.getItem('user');
    const getStorUser = JSON.parse(storeageUser);
    const navigate = useNavigate();

    const signOut = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('arianame');
        navigate('/login');
    }
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
                            <Nav.Link className='text-white ms-4' href={`/destination/${getName}`}>Destination</Nav.Link>
                            <Nav.Link className='text-white ms-4' href="/blog">Blog</Nav.Link>
                            <Nav.Link className='text-white ms-4 me-4' href="/contact">Contact</Nav.Link>

                            {getStorUser &&
                                <Navbar.Brand className='text-light'> {getStorUser.name} <img className='rounded-pill' style={{ width: '40px', height: '40px' }} src={getStorUser.photo} alt='' /></Navbar.Brand>
                            }

                            {
                                !getStorUser ?
                                    <Nav.Link as={Link} className='btn btn-warning text-dark px-4 fw-bold' to="/login">Login</Nav.Link>
                                    : <Nav.Link onClick={signOut} className='btn btn-warning text-dark px-4 fw-bold'>Logout</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;