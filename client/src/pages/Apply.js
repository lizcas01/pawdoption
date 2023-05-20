import React from 'react';
import { Container, Row, Col, Section, P } from 'react-bootstrap';

const styles = {
  Container: {
    height: "500",
    width: "300px",
  },
}

const Apply = () => {
    return (
      <Container className="p-3">
  
        <Row>
          <Col className="text-center">
            <h1>Apply Today!</h1>
          </Col>
        </Row>
        
        <Row>
          <Col class="form-group">
            <label class="form-label"><b>Full Name</b></label>
            <input class="form-control" placeholder="Enter Legal First Name"></input>
          </Col>
          <Col class="form-group">
            <label class="form-label"><b>Date of Birth</b></label>
            <input class="form-control" placeholder="Ex: 12/03/1983"></input>
          </Col>
        </Row>
        
        <Row>
          <Col class="form-group">
            <label class="form-label"><b>Phone Number</b></label>
            <input class="form-control" placeholder="Ex: (111) 111-1111"></input>
          </Col>
          <Col class="form-group">
            <label class="form-label"><b>Email</b></label>
            <input class="form-control"></input>
          </Col>
        </Row>

        <Row>
          <Col class="form-group">
            <label class="form-label"><b>Address</b></label>
            <input class="form-control" placeholder="Street Address"></input>
          </Col>
        </Row>
        
        <Row>
          <Col class="form-group">
            <label class="form-label"></label>
            <input class="form-control" placeholder="City"></input>
          </Col>
          <Col class="form-group">
            <label class="form-label"></label>
            <input class="form-control" placeholder="State"></input>
          </Col>
          <Col class="form-group">
            <label class="form-label"></label>
            <input class="form-control" placeholder="Postal/Zip Code"></input>
          </Col>
          <Col>
            <label class="form-label"></label>
            <input class="form-control" placeholder="Country"></input>
          </Col>
        </Row>

        <Row>
          <Col class="form-group">
            <label class="form-label"><b>Name and ages of all residents in your home</b></label>
            <input class="form-control"></input>
          </Col>
        </Row>
       
        <Row> 
          <Col class="form-group">
            <label class="form-label"><b>List any other pets currently living in your home</b></label>
            <input class="form-control"></input>
          </Col>
        </Row>
        
        <Row>
          <Col class="form-group">
            <label class="form-label"><b>Have you ever owned or fosterd a dog before?</b></label>
            <input type="checkbox"></input>
            <label></label>
          </Col>
        </Row>

        <Row>
          <Col class="form-group">
            <label class="form-label"><b>By checking the box below, you understand the terms of this form and adoptee. You hereby agree that you will not use this animal in any sort of fighting, breeding, or cruelty. You will love and care for this animal for the rest of its life, and you are ready to commit to that. You also agree, that if for any circumstances you can no longer provide love and care for this animal, you will contact an admin of the group and explain your situation before taking the animal to a shelter.</b></label>
            <input type="checkbox"></input>
            <label></label>
          </Col>
        </Row>

        <Row>
          <Col class="form-group">
            <label class="form-label"><b>Print Name</b></label>
            <input class="form-control"></input>
          </Col>
          <Col class="form-group">
            <label class="form-label"><b>Date</b></label>
            <input class="form-control" placeholder="Ex: 05/17/2023"></input>
          </Col>
        </Row>

        <Row class="form-group">
              <button type="button" class="btn btn-secondary btn-lg btn-block">Submit</button>
              <label class="form-label"></label>
        </Row>
        

      </Container>
    );
};

export default Apply;
