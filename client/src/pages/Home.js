import { Container, Row, Col, Card, Button, Carousel, Image } from 'react-bootstrap';
import { FaHandsHelping, FaHome } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";

import { useQuery } from '@apollo/client';

import { QUERY_DOGS } from '../utils/queries';

const Home = () => {

  const { data } = useQuery(QUERY_DOGS);

  const dogs = data?.dogs;

  const styles = {
    image: {
      maxWidth: "100%",
      height: "350px",
      borderRadius: "10px",
      objectFit: "cover",
    },
  }


  return (
    <Container className="my-3">
      <Row>
        <Col className="text-center">
          <h1>Our Mission</h1>
          <p>At Pawdoption, our mission is to connect people with their perfect canine companion, creating a lifetime of love and joy. As an online platform, we strive to bridge the gap between potential dog owners and rescue dogs in need of a forever home. We are dedicated to facilitating meaningful connections, promoting responsible pet adoption, and advocating for the welfare of all dogs.</p>
        </Col>
      </Row>

      <hr />

      <Row>
        <Col sm={4} >
          <Card style={{ border: "none" }} className="h-100 m-0 text-center align-items-center">
            <FaHandsHelping style={{ fontSize: "40px" }} className="text-primary" />
            <Card.Body>
              <Card.Title>Get Involved</Card.Title>
              <Card.Text>
                Help us give our canine homes.
              </Card.Text>
              <Button variant="outline-primary" href="/about" style={{ textDecoration: 'none' }}>See More</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={4} >
          <Card style={{ border: "none" }} className="h-100 m-0 text-center align-items-center">
            <FaHome style={{ fontSize: "40px" }} className="text-primary" />
            <Card.Body>
              <Card.Title>Adopt</Card.Title>
              <Card.Text>
                Find your new best friend today!
              </Card.Text>
              <Button variant="outline-primary" href="/dogs" style={{ textDecoration: 'none' }}>Adopt Now</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={4} >
          <Card style={{ border: "none" }} className="h-100 m-0 text-center align-items-center">
            <BiDonateHeart style={{ fontSize: "40px" }} className="text-primary" />
            <Card.Body>
              <Card.Title>Donate</Card.Title>
              <Card.Text>
                You can make a difference.
              </Card.Text>
              <form action="/create-checkout-session" method="POST">
                <Button variant="outline-primary" type="submit">Donate</Button>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="my-5 justify-content-center">
        <Col lg={6}>
          <h2 className="text-center">Our Pals</h2>
          <Carousel>
            {dogs && dogs.map((dog, index) => (
              <Carousel.Item key={index}>
                <a href="/dogs">
                  <Image
                    style={styles.image}
                    className="d-block w-100"
                    src={dog.picture}
                    alt={dog.name}
                  />
                </a>
                <Carousel.Caption style={{ background: "rgb(0 0 0 / 30%)", borderRadius: "5px", padding: 0 }}>
                  <h3>{dog.name}</h3>
                  <p>{dog.age} Old {dog.gender} {dog.breed}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
