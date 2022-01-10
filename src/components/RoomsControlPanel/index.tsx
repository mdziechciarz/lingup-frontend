import React from 'react';
import styled from 'styled-components';
import {Icon} from '@iconify/react';

const Container = styled.div`
  width: 100%;
  padding: 36px 0 48px;
`;

const CreateRoomButton = styled.button`
  width: 56px;
  height: 56px;
  position: absolute;
  bottom: 128px;
  right: 24px;
  border-radius: 50%;
  background: linear-gradient(192.86deg, #ef473a 9.27%, #cb2d3e 90.77%), #c4c4c4;

  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  font-size: 36px;
  color: white;
`;

const SelectRoomsButton = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 28px;
  border: none;
  outline: none;
  background-color: #2d3142;

  color: white;
  text-transform: uppercase;
`;

const RoomsControlPanel = (): JSX.Element => {
  return (
    <Container>
      <CreateRoomButton>
        <Icon icon="fluent:add-16-filled" />
      </CreateRoomButton>
      <SelectRoomsButton>Pick</SelectRoomsButton>
    </Container>
  );
};

export default RoomsControlPanel;
