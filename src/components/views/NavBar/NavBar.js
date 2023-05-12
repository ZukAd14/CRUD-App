import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';


const NavBar = () => {

    return (
        <div>
            <Navbar collapseOnSelect bg='primary' expand='lg' variant='dark' className="mt-4 mb-4 rounded" >
                <Container >
                    <Navbar.Brand href='/'>Blog.app</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                        <Nav.Link as={NavLink}  to='/'>Home</Nav.Link>
                        <Nav.Link as={NavLink}  to='/about'>About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;