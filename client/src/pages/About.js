import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1>About Pawdoption</h1>
          <p>
            Pawdoption was established in 2023 and is a website dedicated to helping dogs find their forever homes through adoption and fostering. We believe that every dog deserves a loving family and a safe place to call home.
          </p>
          <p>
            Our mission is to connect potential adopters and foster families with dogs in need. We work with reputable rescue organizations and shelters to provide a platform where users can easily browse and search for dogs available for adoption or fostering.
          </p>
          <p>
            At Pawdoption, we strive to make the adoption and fostering process as seamless as possible. Our user-friendly interface allows you to search for dogs based on various criteria such as breed, size, age, and location. Once you find a dog you're interested in, you can submit an application directly through our website.
          </p>
          <p>
            We also encourage users to consider fostering a dog. Fostering not only helps save a dog's life but also provides them with a temporary home and a chance to experience love and care before finding their permanent family.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
