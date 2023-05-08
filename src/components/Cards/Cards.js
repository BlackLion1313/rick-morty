import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from '../Modal/Modal';
import styles from './Cards.module.scss';

const Cards = ({ results }) => {
  // Creatind three states 
  const [showModal, setShowModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);

  // toggle the modal and set  selected char
  const toggleModal = (character) => {
    setSelectedCharacter(character);
    setShowModal(!showModal);
  };

 
  const renderCards = () => {
    if (!results) {
      // if there are no results
      return <div>No characters found</div>;
    }

    // filter based on select status
    const filteredResults = selectedStatus ? results.filter((character) => character.status === selectedStatus) : results;

    // mapping over the filtered results and return a div with information about each character
    return filteredResults.map((character) => {
      const { id, name, image, location, status } = character;

      return (
        <div key={id} className={`${styles.cards_outer} col-3 mb-5`}>
          <div className={styles.cards}>
            <div className={`${styles.card_front}`}>
              <img src={image} alt="image" className={`${styles.img}`} />
              <div className='fs-4 fw-bold '>{name}</div>
            </div>

            <div className={`${styles.card_back}`}>
              <div className='fs-5 mx-2'>Last location:</div>
              <div className='fs-5 fw-bold'>{location.name}</div>
              <Button className=' my-4' onClick={() => toggleModal(character)}>Wanna more</Button>
            </div>
          </div>
          <div className={`${styles.sticker} badge bg-${status === "Dead" ? "danger" : status === "Alive" ? "success" : "secondary"}`}>
            {status}
          </div>
        </div>
      );
    });
  };

  return (
    <>
      {/* btns to select the status */}
      <div>
        <Button
          variant={selectedStatus === null ? "primary" : "outline-primary"}
          className="mx-3 mb-4"
          onClick={() => setSelectedStatus(null)}
        >
          All
        </Button>
        <Button
          variant={selectedStatus === "Alive" ? "success" : "outline-success"}
          className="mx-3 mb-4"
          onClick={() => setSelectedStatus("Alive")}
        >
          Alive
        </Button>
        <Button
          variant={selectedStatus === "Dead" ? "danger" : "outline-danger"}
          className="mx-3 mb-4"
          onClick={() => setSelectedStatus("Dead")}
        >
          Dead
        </Button>
      </div>
  
      {renderCards()}
      <Modal showModal={showModal} toggleModal={toggleModal} selectedCharacter={selectedCharacter} />
    </>
  );
};

export default Cards;
