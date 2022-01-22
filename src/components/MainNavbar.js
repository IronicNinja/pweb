import { React } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../media/Logo.png';
import { Link } from 'react-router-dom';
import '../css-components/MainNavbar.css';

export default function MainNavbar() {
    return (
       <Navbar className="MainNavbar">
            <Container>
                <Navbar.Brand href="#home"><img src={Logo} width="30" height="30" alt="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/" className="NavLink">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/coding" className="NavLink">Coding</Link></Nav.Link>
                        <Nav.Link><Link to="/resume" className="NavLink">Résumé</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};