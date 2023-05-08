import React from 'react';
import Modal from 'react-bootstrap/Modal';

const ModalComponent = ({ showModal, toggleModal, selectedCharacter }) => {
  return (
    <Modal show={showModal} onHide={() => toggleModal(null)}>
      <Modal.Header closeButton>
        <Modal.Title className=''>Character Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selectedCharacter && (
          <>
            <img className='mb-4 mx-4' src={selectedCharacter.image} alt="Character" style={{ padding: '50px' }} />
            <div className='text-center'>Status: {selectedCharacter.status}</div>
            <div className='text-center'>Species: {selectedCharacter.species}</div>
            <div className='text-center mb-4'>Gender: {selectedCharacter.gender}</div>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ModalComponent;



