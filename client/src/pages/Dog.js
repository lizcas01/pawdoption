import React, {  } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { useQuery } from '@apollo/client';

import { QUERY_DOGS } from '../utils/queries';

// const styles = {
//   images: {
//     height: "200px",
//     width: "300px",
//     borderRadius: "10px",
//     boxShadow: "0px 50px 70px rgba(0,0,0, 0.1)"

//   }
// }



const DogsList = ({dogs}) => {

  // const { data } = useQuery(QUERY_DOGS);
  // const dogs = data?.dogs;
  console.log(dogs);
  return (
    
    <Container>
      <Row>
        <Col className="text-center">
          <h1>Dogs Available for Adoption</h1>
        </Col> 
        </Row>
        {/* {dogs.map(dog => (
          <Col key={dog._id} className="text-center">
            <div className="card mb-3">
              <img src={dog.image} alt={dog.name} style={styles.images} />
              <div className="card-body">
                <h4 className="card-title">{dog.name}</h4>
                <p className="card-text">Breed: {dog.breed}</p>
                <p className="card-text">Age: {dog.age}</p>
              </div>
            </div>
          </Col>
        ))} */}
    </Container>
  )
}
export default DogsList;
