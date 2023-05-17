import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const styles = {
  images: {
    height: "200px",
    width: "300px",
    borderRadius: "10px",
    boxShadow: "0px 50px 70px rgba(0,0,0, 0.1)"

  }
}

const About = () => {
  return (
    <Container className="my-3">

      <Row>
        <Col className="text-center">
          <h1>About Us</h1>
        </Col>
      </Row>

      <hr />

      <Row className="align-items-center my-5 justify-content-evenly">
        <Col md={4} >
          <p>Our commitment extends beyond just matching people with dogs; we are passionate about transforming lives and building lasting relationships. Through our user-friendly interface, extensive network of trusted rescue organizations, and comprehensive adoption resources, we aim to make the process of finding and adopting a dog a seamless and rewarding experience.</p>
        </Col>
        <Col md={4} className="text-center">
          <Image src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" fluid style={styles.images} />
        </Col>
      </Row>

      <Row className="align-items-center my-5 justify-content-evenly">
        <Col md={4} className="order-md-2">
          <p>We prioritize the well-being of every dog in our care, ensuring they receive proper medical attention, rehabilitation, and socialization. By promoting adoption, we actively work towards reducing the number of dogs in shelters and the heartbreaking reality of euthanasia. We believe that every dog deserves a loving home, and we strive to empower individuals and families to provide that home.</p>
        </Col>
        <Col md={4} className="text-center order-sm-1">
          <Image src="https://w0.peakpx.com/wallpaper/367/592/HD-wallpaper-rottweiler-big-black-dog-pets-green-grass-dog-on-the-grass-dogs.jpg" fluid style={styles.images} />
        </Col>
      </Row>

      <Row className="align-items-center my-5 justify-content-evenly">
        <Col md={4} >
          <p>Transparency, integrity, and compassion are the cornerstones of our company. We value open communication, honesty, and the highest ethical standards in all our interactions with our users, partner organizations, and the community at large. We continually innovate and refine our platform to provide the best possible user experience while supporting responsible dog ownership and promoting education on dog care and training.</p>
        </Col>
        <Col md={4} className="text-center">
          <Image src="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg" fluid style={styles.images} />
        </Col>
      </Row>

      <Row className="align-items-center my-5 justify-content-evenly">
        <Col md={4} className="order-md-2">
          <p>Through Pawdoption, we aspire to create a world where no dog is left behind, where every wagging tail finds its happy ending, and where the bond between humans and dogs is celebrated and cherished. Join us in our mission to change lives, one adoption at a time.</p>
        </Col>
        <Col md={4} className="text-center order-sm-1">
          <Image src="https://wallpapercave.com/wp/wp2534979.jpg" fluid style={styles.images} />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
