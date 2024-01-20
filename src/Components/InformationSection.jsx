import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const InformationSection = () => {
    return(
        <Container className='information-section'>
            <Row>
                <Col lg="6" className="fs-7 px-3 font-weight-bold">
                    <p>
                        <span>
                            Mendoj se nepermjet fotografise mund te ofroj nje prespektive tjeter
                            dhe te bej te mundur qe njerzit te shohin te bukuren...
                        </span>
                    </p>
                </Col>
                <Col lg="6" className="px-3">
                    <p>
                        Misioni im nepermjet fotografise eshte kapja e momenteve dhe ...
                        Misioni im nepermjet fotografise eshte kapja e momenteve dhe ...
                        Misioni im nepermjet fotografise eshte kapja e momenteve dhe ...
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default InformationSection;