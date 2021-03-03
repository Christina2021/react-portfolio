import React from 'react';
import { Link } from "react-router-dom"; 
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
                    <Link to="/about" className="rounded-pill text-center text-decoration-none splash-button">About Me</Link>
                </Col>
                <Col size="sm-4" classes="mt-5 d-flex align-items-center justify-content-center">
                    <Link to="/portfolio" className="rounded-pill text-center text-decoration-none splash-button">See My Work</Link>
                </Col>
                <Col size="sm-4" classes="mt-5 d-flex align-items-center justify-content-center">
                    <Link to="/contact" className="rounded-pill text-center text-decoration-none splash-button">Contact Me</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Splash;