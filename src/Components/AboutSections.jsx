import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const AboutSections = () => {
  return (
    <Container className='about-sections-wraper'>
        <Row>
            <Col sx={6} className='d-flex flex-column justify-content-center'>
                <h1>About Our Work</h1>
                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <a href="/">Learn more</a>
            </Col>
            <Col sx={6} className='about-image-wraper'>
              <img alt='hand' src='./images/hand.jpg' />
            </Col>
        </Row>
    </Container>
  )
}

export default AboutSections