import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { ADD_ADOPTION_FORM } from '../utils/mutations';
import { QUERY_DOGS } from '../utils/queries';
import authService from '../utils/auth';

const Apply = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDog, setSelectedDog] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(authService.loggedIn());

  const { data } = useQuery(QUERY_DOGS);

  const [addAdoptionForm] = useMutation(ADD_ADOPTION_FORM);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the user is logged in
    if (!userLoggedIn) {
      console.log('User is not logged in.');
      return;
    }

    try {
      await addAdoptionForm({
        variables: {
          firstName,
          lastName,
          phoneNumber,
          email,
          dogId: selectedDog,
        },
      });
      console.log('Form Submitted');
      console.log('Submitted form data:', {
        firstName,
        lastName,
        phoneNumber,
        email,
        dogId: selectedDog,
      });
      setSubmitted(true); // Set the submitted state to true
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="p-3">
      <Row>
        <Col className="text-center">
          <h1>Apply to Adopt </h1>
        </Col>
      </Row>
      <hr />
      <form onSubmit={handleSubmit}>
        <Row>
          <Col className="form-group">
            <label className="form-label"><b>First Name</b></label>
            <input className="form-control" placeholder="Enter Legal First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </Col>
          <Col className="form-group">
            <label className="form-label"><b>Last Name</b></label>
            <input className="form-control" placeholder="Enter Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </Col>
        </Row>

        <Row>
          <Col className="form-group">
            <label className="form-label"><b>Phone Number</b></label>
            <input className="form-control" placeholder="Enter Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </Col>
          <Col className="form-group">
            <label className="form-label"><b>Email</b></label>
            <input className="form-control" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Col>
        </Row>

        <Row>
          <Col>
            <label className="form-label"><b>Select Dog</b></label>
            <select
              className="form-control"
              value={selectedDog}
              onChange={(e) => setSelectedDog(e.target.value)}
            >
              <option value="">Select a dog</option>
              {data && data.dogs.map((dog) => (
                <option key={dog._id} value={dog._id}>{dog.name}</option>
              ))}
            </select>
          </Col>
        </Row>

        {submitted ? (
          <Row className="form-group">
            <button type="submit" className="btn btn-success btn-lg btn-block" disabled>Form submitted successfully</button>
          </Row>
        ) : (
          <Row className="form-group">
            {userLoggedIn ? (
              <button type="submit" className="btn btn-secondary btn-lg btn-block">Submit</button>
            ) : (
              <button type="submit" className="btn btn-secondary btn-lg btn-block" disabled>You must be logged in to submit this form</button>
            )}
          </Row>
        )}

      </form>
    </Container>
  );
};

export default Apply;
