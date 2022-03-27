import React from 'react';
import {Icon} from '@iconify/react';
import {Button} from './styles';

interface IProps {
  onClick: () => void;
}

const CreateRoomButton = ({onClick}: IProps) => {
  return (
    <Button onClick={onClick}>
      <span>Create room</span>
      <Icon icon="fluent:add-16-filled" />
    </Button>
  );
};

export default CreateRoomButton;
