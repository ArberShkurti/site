import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";



const HeroSections =() => {
    return (
        <Container className="hero-sections-container">
            <Row className="h-100">

                <Col xs="12" md="8" className="d-flex flex-column justifiy-content-center text-start px-4">
                    <div className="mx-4">
                        <h1> Photography Portofolio </h1>
                        <p>
                            Teks mbi foto, histori, pasion etj etj {""}
                        </p>
                    </div>
                    <div className="btns-wrapper px-4 d-flex align-items-center">
                        <a href="/">Read my blog</a>
                        <Button variant="secondary" onClick={console.log("ben")}>Learn more</Button>
                    </div>
                </Col>

                <Col xs="12" md="4">
                    <div className="img-wrapper"> 
                    </div> 
                </Col>
                
            </Row>
        </Container>
    );
};

export default HeroSections;