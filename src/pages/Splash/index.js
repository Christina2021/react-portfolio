import React from 'react';
import { Container, Row, Col } from "../../components/Grid";
import './styles.css'

function Splash() {
    return(
        <Container classes="my-auto splash-header">
            <Row>
                <Col size="sm-2" />
                <Col size="sm-9">
                    <h1 className="font-weight-bold">Hi, I'm Christina!</h1>
                    <h5>A full-stack web developer</h5>
                </Col>
            </Row>
            <Row>
                <Col size="sm-4" classes="mt-5 d-flex align-items-center justify-content-center">
                    <a class="rounded-pill text-center text-decoration-none splash-button" href="/react-portfolio/about">About Me</a>
                </Col>
                <Col size="sm-4" classes="mt-5 d-flex align-items-center justify-content-center">
                    <a class="rounded-pill text-center text-decoration-none splash-button" href="/react-portfolio/portfolio">See My Work</a>
                </Col>
                <Col size="sm-4" classes="mt-5 d-flex align-items-center justify-content-center">
                    <a class="rounded-pill text-center text-decoration-none splash-button" href="/react-portfolio/contact">Contact Me</a>
                </Col>
            </Row>
        </Container>
    )
}

export default Splash;