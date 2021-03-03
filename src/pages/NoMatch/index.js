import React from 'react';
import { Container, Row, Col } from "../../components/Grid";

function NoMatch() {
    return(
        <Container classes="mt-5">
            <Row classes="p-5">
                <Col size="12" classes="text-center p-5 contentBox">
                    <h1 className="mb-3">Error: 404 <i class="fas fa-exclamation-triangle"></i></h1>
                    <h1 className="mb-5">Page Not Found</h1>
                    <p>Everything will be okay.  <i class="far fa-grin-beam-sweat"></i></p>
                    <p>Just click <a href="/react-portfolio/">here</a> to go back to the site!</p>
                </Col>
            </Row>
        </Container>
    )
}

export default NoMatch;