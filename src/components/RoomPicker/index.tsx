import React, {useState} from 'react';
import ButtonLanguageLevel from '../ButtonLanguageLevel/Button';
import Modal from '../ModalLanguageLeve';

const RoomPicker = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <ButtonLanguageLevel onClick={handleOpenModal} />
      <Modal isOpen={isModalOpen} handleClose={handleCloseModal} />
    </>
  );
};

export default RoomPicker;
