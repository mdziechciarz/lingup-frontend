import React from 'react';
import ReactModal from 'react-modal';
import {Icon} from '@iconify/react';
import LanguageDropdown from './Dropdowns/LanguageDropdown';
import LevelDropdown from './Dropdowns/LevelDropdown';
import {
  Container,
  Title,
  Label,
  DropdownsContainer,
  DropdownGroup,
  ButtonsContainer,
  SubmitButton,
  CloseButton,
} from './styles';

ReactModal.setAppElement('#root');

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
}

const ModalLanguageLevel = ({isOpen, handleClose}: IProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        },
      }}
      onRequestClose={handleClose}
      className="_"
      contentElement={(props, children) => <Container {...props}>{children}</Container>}
    >
      <CloseButton onClick={handleClose}>
        <Icon icon="fluent:dismiss-12-regular" />
      </CloseButton>
      <Title>Pick your room</Title>
      <DropdownsContainer>
        <DropdownGroup>
          <Label>Language</Label>
          <LanguageDropdown />
        </DropdownGroup>
        <DropdownGroup>
          <Label>Level</Label>
          <LevelDropdown />
        </DropdownGroup>
      </DropdownsContainer>
      <ButtonsContainer>
        <SubmitButton>
          Select
          <span>
            <Icon icon="fluent:search-20-filled" />
          </span>
        </SubmitButton>
      </ButtonsContainer>
    </ReactModal>
  );
};

export default ModalLanguageLevel;
