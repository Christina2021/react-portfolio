import React from 'react';
import Header from '../../components/Header';
import { Container, Row, Col } from "../../components/Grid";
import ContactLink from '../../components/ContactLink';
import Footer from '../../components/Footer';
import Resume from './Christina-Resume.pdf';

function Contact() {
    return(
        <div className="d-flex flex-column" style={{height: "100vh"}}>
            <Header current="contact"/>
            <Container classes="mt-5 mb-3">
                <Row>
                    <Col size="lg-8 md-9 sm-12" classes="m-3 mb-0 p-4 text-center contentBox">
                        <h1>Contact Me!</h1>
                        <hr />
                        <p className="font-weight-bold">Please reach out to me by phone or e-mail if you have any questions or if you would like to connect!  See below for my information.  I look forward to hearing from you! <i class="far fa-smile"></i></p>
                    </Col>
                </Row>
            </Container>
            <Container classes="mb-3">
                <Row>
                    <Col size="lg-8 md-9 sm-12" classes="m-3 mb-0 p-4 contentBox">
                        <h1>My Information</h1>
                        <hr />
                        <ContactLink type="email" href="mailto:codechristina2021@gmail.com?subject=Hi,%20Christina!">
                            codechristina2021@gmail.com
                        </ContactLink>
                        <p>My phone number: ‪(858) 848-1389‬</p>
                        <ContactLink type="LinkedIn Profile" href="https://www.linkedin.com/in/christina2021/" target="blank">
                            Christina Shiroma
                        </ContactLink>
                        <ContactLink type="GitHub Profile" href="https://github.com/Christina2021" target="blank">
                            Christina2021
                        </ContactLink>
                        <ContactLink type="Resume" href={Resume} target="blank">
                            Download
                        </ContactLink>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Contact;