import React, {useState} from 'react';
import Button from 'components/Button';
import ButtonLanguageLevel from 'components/ButtonLanguageLevel/Button';
import ModalLanguageLevel from 'components/ModalLanguageLeve';

import styled from 'styled-components';

const Wrapper = styled.div`
  /* margin-top: 100px; */
  /* flex-grow: 1; */
  /* height: 100%; */
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 425px;
  display: flex;
  flex-direction: column;

  & button:last-child {
    margin-top: 16px;
  }
`;

const StyledButtonLanguageLevel = styled(ButtonLanguageLevel)`
  width: 100%;
  height: 48px;
`;

const PartnerHomeButtons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Wrapper>
      <Container>
        <StyledButtonLanguageLevel onClick={handleOpenModal} />
        <Button iconName="fluent:call-16-regular">Find partner</Button>
        <ModalLanguageLevel isOpen={isModalOpen} handleClose={handleCloseModal} />
      </Container>
    </Wrapper>
  );
};

export default PartnerHomeButtons;
