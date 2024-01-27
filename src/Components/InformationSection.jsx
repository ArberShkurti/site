import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {motion } from "framer-motion";

const InformationSection = () => {

    const sectionVariants = {
        visible: {y:0, opacity: 1, transition : { duration:0.4 } },
        hidden: {y: 100, opacity: 0}
    }
    return(
        <Container className='information-section'>
            <Row>
                <Col lg="6" className="fs-7 px-3 font-weight-bold">
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        >
                    <p>
                        <span>
                            Mendoj se nepermjet fotografise mund te ofroj nje prespektive tjeter
                            dhe te bej te mundur qe njerzit te shohin te bukuren...
                        </span>
                    </p>
                    </motion.div>
                </Col>
                <Col lg="6" className="px-3">
                     <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        >
                    <p>
                        Misioni im nepermjet fotografise eshte kapja e momenteve dhe ...
                        Misioni im nepermjet fotografise eshte kapja e momenteve dhe ...
                        Misioni im nepermjet fotografise eshte kapja e momenteve dhe ...
                    </p>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    )
}

export default InformationSection;