import React from 'react';
import ReactModal from 'react-modal';
import {Icon} from '@iconify/react';
import LanguageDropdown from './Dropdowns/LanguageDropdown';
import LevelDropdown from './Dropdowns/LevelDropdown';
import {
  Container,
  Title,
  Label,
  NameInput,
  DropdownsContainer,
  DropdownGroup,
  ButtonsContainer,
  SubmitButton,
  CancelButton,
  CloseButton,
} from './styles';

ReactModal.setAppElement('#root');

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
}

const RoomCreatorModal = ({isOpen, handleClose}: IProps) => {
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
      <Title>New room</Title>
      <Label>Name</Label>
      <NameInput placeholder="Something creative and descriptive" />
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
        <CancelButton onClick={handleClose}>Cancel</CancelButton>
        <SubmitButton>
          Create
          <span>
            <Icon icon="fluent:add-12-regular" />
          </span>
        </SubmitButton>
      </ButtonsContainer>
    </ReactModal>
  );
};

export default RoomCreatorModal;
