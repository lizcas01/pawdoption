import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container className="my-3">
            
            <Row className="align-items-center my-5 justify-content-evenly">
                <Col md={12} className="text-center">
                    <Image src="https://www.cdgi.com/wp-content/uploads/2019/05/404-Pages.jpg" fluid />
                </Col>
            </Row>
        </Container>
    );
}

export default NotFound