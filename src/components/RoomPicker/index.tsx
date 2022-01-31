import React, {useState} from 'react';
import Button from './Button/Button';
import Modal from './Modal';

const RoomPicker = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <Button onClick={handleOpenModal} />
      <Modal isOpen={isModalOpen} handleClose={handleCloseModal} />
    </>
  );
};

export default RoomPicker;
