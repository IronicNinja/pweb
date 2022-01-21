import { React } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../css-pages/Home.css';
import Image1 from '../media/Image1.png';

export default function Home() {
    return (
        <Container fluid>
            <Card className="CardDropShadow" id="1">
                <Row>
                    <Col md={6}>
                        <img className="Image" src={Image1} alt="1"/>                        
                    </Col>
                    <Col md={6}>
                        <div>
                            <p>Welcome!</p>
                            <p>I'm Evan</p>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}