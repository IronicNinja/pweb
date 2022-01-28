import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import '../css-components/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSpotify, faInstagram, faGithub, faKaggle, faLinkedin, faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="Footer">
            <Container fluid style={{width: '95%'}}>
                <Row>
                    <Col md={4} p-1>
                        <h3>My Mission</h3>
                        <p>Some random filler text for now...</p>
                    </Col>
                    <Col md={4}>
                        <h3>Stay Connected</h3>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                Join my newsletter!
                                <Form.Control type="email" placeholder="example@gmail.com" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col md={4}>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/" className="NavLink">Home</Link></li>
                            <li><Link to="/" className="NavLink">Coding</Link></li>
                            <li><Link to="/" className="NavLink">Résumé</Link></li>
                        </ul>
                    </Col>
                    <Row>
                        <Col md={8}>
                            <div class="IconRow">
                                <a href="https://github.com/IronicNinja">
                                    <FontAwesomeIcon icon={faGithub} size="2x" style={{color: 'black'}} />
                                </a>
                                <a href="https://www.kaggle.com/ironicninja">
                                    <FontAwesomeIcon icon={faKaggle} size="2x" style={{color: '#008abc'}} />
                                </a>
                                <a href="https://www.linkedin.com/in/evan-z/">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" style={{color: '#0a66c2'}} />
                                </a>
                                <a href="https://open.spotify.com/user/9xoge5lcq1pr7p1pdn2p9x1ol">
                                    <FontAwesomeIcon icon={faSpotify} size="2x" style={{color: '#1dd05d'}} />
                                </a>
                                <a href="mailto:meevanzhang@gmail.com" target="_blank">
                                    <FontAwesomeIcon icon={faEnvelope} size="2x" style={{color: '#ea4335'}}  />
                                </a>
                                <a href="https://www.instagram.com/ironic_ninja/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{color: '#c93f7b'}}  />
                                </a>
                                <a href="https://www.youtube.com/channel/UCCOx5L_rvkgfQa21RKqFeUg/" target="_blank">
                                    <FontAwesomeIcon icon={faYoutube} size="2x" style={{color: 'red'}} />
                                </a>
                                <a href="https://www.twitch.tv/clc_ironic" target="_blank">
                                    <FontAwesomeIcon icon={faTwitch} size="2x" style={{color: '#9146ff'}} />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </footer>
    );
}