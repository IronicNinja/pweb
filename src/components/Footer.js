import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css-components/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitch, faSpotify, faInstagram, faTiktok, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="Footer">
            <Container fluid style={{width: '95%'}}>
                <Row>
                    <Col md={4}>
                        <h3>My Mission</h3>
                        <p>Some random filler text for now...</p>
                        <div class="IconRow">
                            <a href="https://www.youtube.com/channel/UCCOx5L_rvkgfQa21RKqFeUg/" target="_blank">
                                <FontAwesomeIcon icon={faYoutube} size="2x" style={{color: 'red'}} />
                            </a>
                            <a href="https://www.twitch.tv/clc_ironic" target="_blank">
                                <FontAwesomeIcon icon={faTwitch} size="2x" style={{color: '#9146ff'}}/>
                            </a>
                            <a href="https://open.spotify.com/user/9xoge5lcq1pr7p1pdn2p9x1ol">
                                <FontAwesomeIcon icon={faSpotify} size="2x" style={{color: '#1dd05d'}} />
                            </a>
                            <a href="https://www.instagram.com/ironic_ninja/" target="_blank">
                                <FontAwesomeIcon icon={faInstagram} size="2x" style={{color: '#c93f7b'}}  />
                            </a>
                            <a href="https://www.tiktok.com/@clcironic?" target="_blank">
                                <FontAwesomeIcon icon={faTiktok} size="2x" style={{color: 'black'}} />
                            </a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h3>Stay Connected</h3>
                    </Col>
                    <Col md={4}>
                        <h3>Quick Links</h3>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}