import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';
import { Container, Row, Col, Card, Button, Carousel, Image } from 'react-bootstrap';
import { FaHandsHelping, FaHome } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";

const Home = () => {
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache"
  });

  // TODO: Remove this mock data and replace it with the data from the database
  const dogs = [
    {
      name: "Buddy",
      breed: "Labrador Retriever",
      age: 3,
      image: "https://static.stacker.com/s3fs-public/2022-05/lab-puppy-smiling.jpg"
    },
    {
      name: "Bella",
      breed: "German Shepherd",
      age: 1,
      image: "https://t4.ftcdn.net/jpg/04/75/62/59/360_F_475625971_HTK8MdH194iKiPdBGVHUxPJWNgDHJZEQ.jpg"
    },
    {
      name: "Max",
      breed: "Golden Retriever",
      age: 5,
      image: "https://cdn.wallpapersafari.com/3/81/POUSu9.jpg"
    },
  ]

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
            <FaHandsHelping style={{fontSize: "40px"}} className="text-primary"/>
            <Card.Body>
              <Card.Title>Get Involved</Card.Title>
              <Card.Text>
                Help us give our canine homes.
              </Card.Text>
              <Button variant="outline-primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={4} >
          <Card style={{ border: "none" }} className="h-100 m-0 text-center align-items-center">
            <FaHome style={{fontSize: "40px"}} className="text-primary"/>
            <Card.Body>
              <Card.Title>Adopt</Card.Title>
              <Card.Text>
                Find your new best friend today!
              </Card.Text>
              <Button variant="outline-primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={4} >
          <Card style={{ border: "none"}} className="h-100 m-0 text-center align-items-center">
            <BiDonateHeart style={{fontSize: "40px"}} className="text-primary" />
            <Card.Body>
              <Card.Title>Donate</Card.Title>
              <Card.Text>
                You can make a difference.
              </Card.Text>
              <Button variant="outline-primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="my-5 justify-content-center">
        <Col lg={6}>
          <h2 className="text-center">Our Pals</h2>
          <Carousel>
            {dogs.map((dog, index) => (
              <Carousel.Item key={index}>
                {/* TODO */}
                <a href="#">
                <Image 
                  className="d-block w-100"
                  src={dog.image}
                  alt={dog.name}
                  href={`/dog/${dog.name}`}
                />
                </a>
                <Carousel.Caption style={{background: "rgb(0 0 0 / 30%)", borderRadius: "5px", padding: 0}}>
                  <h3>{dog.name}</h3>
                  <p>{dog.age} year{dog.age > 1 ? "s" : ""} old {dog.breed}</p>
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
