import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DogModal = ({ isOpen, onClose, dog }) => {
    if (!isOpen) return null;

   

    return (
        <Modal show={isOpen} onHide={onClose} centered>
            <Modal.Header>
                <Modal.Title className="w-100 text-center">{dog.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
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

