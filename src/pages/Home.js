import { React } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../css-pages/Home.css';
import Image1 from '../media/Image1.png';
import MainNavbar from '../components/MainNavbar.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPeace } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    return (
        <Container fluid>
            <Row id="blue">
                <MainNavbar />
                <Col md={5}>
                    <img className="Image" src={Image1} alt="1"/>                        
                </Col>
                <Col md={7} className="TextCol">
                    <div className="Title">
                        <h1>Welcome!</h1>
                        <h2>I'm Evan <FontAwesomeIcon icon={faHandPeace} className="PeaceSymbol" /></h2>
                    </div>
                    <div className="Checkout">
                        <p className="Checkout">check out what makes me me!</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}