import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DogModal = ({ isOpen, onClose, dog }) => {
    if (!isOpen) return null;

    const styles = {
        card: {
          display: 'flex',
          alignItems: 'center',
        },
        image: {
          height: "200px",
          width: "300px",
          borderRadius: "10px",
          boxShadow: "0px 50px 70px rgba(0,0,0, 0.1)",
          margin: "10px",
        },
      }
   

    return (
        <Modal show={isOpen} onHide={onClose} centered>
            <Modal.Header>
                <Modal.Title className="w-100 text-center">{dog.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <img src={dog.picture} alt={dog.name} style={styles.image}/>
                <p>{dog.gender} {dog.breed}</p>
                <p>Age: {dog.age}</p>
                <p>Size: {dog.size}</p>
                <p>{dog.description}</p>
                <Button variant="outline-primary" className='w-75' onClick={onClose}>
                    Apply to Adopt {dog.name}!
                </Button>
            </Modal.Body>
            <Modal.Footer>                
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DogModal;

