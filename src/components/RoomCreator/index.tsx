import React, {useState} from 'react';
import CreateRoomButton from './Button/Button';
import RoomCreatorModal from './Modal';

const RoomCreator = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <CreateRoomButton onClick={handleOpenModal} />
      <RoomCreatorModal isOpen={isModalOpen} handleClose={handleCloseModal} />
    </>
  );
};

export default RoomCreator;
