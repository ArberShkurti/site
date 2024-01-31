import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const FooterMenu = () => {
    return(
        <Container className='footer mt-5'>
            <Row>
                <Col>
                    <h3>Company</h3>
                <ul>
                    <li> <a href="-">About</a></li>
                    <li> <a href="-">Collections</a></li>
                    <li> <a href="-">Our Client Stories</a></li>
                </ul>
                </Col>
                <Col>
                <h3>Support</h3>
                <ul>
                    <li> <a href="-">Email</a></li>
                    <li> <a href="-">Contact us</a></li>
                    <li> <a href="-">Faqs</a></li>
                </ul>
                </Col>
            </Row>

        </Container>

    )
}

export default FooterMenu ;