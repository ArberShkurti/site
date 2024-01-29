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
                <Col lg="6" className="fs-10 px-3 font-weight-bold">
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        >
                    <p>
                        <span>
                            Objektivi jone eshte dokumentimi me detaje te realitetit dhe natyralitetit te cdo momenti,
                            duke e bere ate TUAJIN, <em>pergjithmone</em>. Fale perkushtimit prej mese pese viteve jemi nje pike referimi
                            per zonen e Tiranes por edhe me tej.
                        </span>
                    </p>
                    </motion.div>
                </Col>
                <Col lg="6" className="px-2">
                     <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        >
                    <p>
                        Hyrja ne <strong>empati</strong> dhe perfshirja ne momentet e caktuara eshte e rendesishme per arritjen e objektivave,
                        por arritja e rezultateve bazohet ne <b>kurimin</b> e detajeve dhe ne pasionin qe na karakterizon.
                        Ajo qe bejme nuk eshte thjesht fotografi, sepse nga menyra dhe deri te materialet
                        cdo gje kurohet ne detaje.  
                    </p>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    )
}

export default InformationSection;