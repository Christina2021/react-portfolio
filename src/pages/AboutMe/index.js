import React from 'react';
import NavBar from '../../components/NavBar';
import { Container, Row, Col } from "../../components/Grid";

function AboutMe() {
    return (
        <div>
            <NavBar />
            <Container classes="contentBox">
                <Col size="lg-9 md-10 sm-12" classes="mt-5">
                    <Row>
                        <Col size="" classes="m-3">
                            <h1>About Me</h1>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col size="">
                        <p className="m-3">My name is Christina, and I'm a web developer passionate in building and maintaining web applications using multiple web technologies.  With a background as a technology specialist for a large finance company, I have developed skills in customer service as well as: working well with a team, solving complex problems in a timely manner, and tackling challenges with an open-mind while being accountable for my responsibilities.  I was also recognized for identifying a workflow issue, and played a major role in developing a solution that significantly decreased our processing time, creating a more positive experience for my team, the company, and our clients. </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="">
                            <p className="m-3">I have received a certificate in the Coding Bootcamp through the University of California, San Diego, and am knowledgeable and experienced with front-end and back-end application development technologies, which include:</p>
                            <p className="mx-3 text-center fst-italic fw-bold">HTML, CSS, Bootstrap, Foundation, JavaScript, jQuery, API-management, Node.js, Express, Express-Handlebars, EJS, MySQL, Sequelize, MongoDB, and React.</p>
                            <p className="m-3">I look forward to continuing learning and growing as a developer.</p>
                        </Col>
                    </Row>
                    <Row classes="mb-3">
                        <Col size="">
                            <p className="m-3">Please use the navigation bar at the top to enjoy looking through some of my projects that I have already completed by navigating over to my Portfolio page!  Please also use my Contact Page to reach out to me!</p>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </div>
    )
}

export default AboutMe;