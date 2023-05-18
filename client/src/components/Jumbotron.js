import { Col, Row, Container, Image } from "react-bootstrap";

const image = {
    maxHeight: "100px",
    marginRight: "20px",
}

function Jumbotron() {
    return (
        <Container fluid className="bg-primary bg-gradient border-bottom">
            <Row>
                <Col className="text-center d-flex align-center justify-center">
                    <Image src="/images/logo.png" fluid style={image} />
                    <div>
                    <h1>Pawdoption</h1>
                    <h2>Find your new best friend</h2>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Jumbotron;