import React, { useState } from 'react';
import Header from '../../components/Header';
import { Container, Row, Col } from "../../components/Grid";
import Project from '../../components/Project';
import Footer from '../../components/Footer';
import myProjects from '../../projects.json';

function Portfolio() {
    const [ projects ] = useState({
        displayed: myProjects
    })

    return(
        <div className="d-flex flex-column" style={{height: "100vh"}}>
            <Header current="portfolio" />
            <Container classes="mt-5 mb-5">
                <Col size="lg-10" classes="mt-3 contentBox">
                    <Row>
                        <Col size="12" classes="m-3">
                            <h1>My Portfolio</h1>
                            <hr />
                        </Col>
                    </Row>
                    <Row classes="pb-5">
                    {projects.displayed.map(project => (
                        <Project 
                            key={project.id}
                            id={project.id}
                            name={project.name}
                            image={project.imageSrc}
                            link={project.link}
                            github={project.github}
                            technologies={project.technologies}
                        />
                    ))}
                    </Row>
                </Col>
            </Container>
            <Footer />
        </div>
    )
}

export default Portfolio;