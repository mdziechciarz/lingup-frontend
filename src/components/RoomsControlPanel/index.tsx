import React from 'react';
import styled from 'styled-components';
import RoomPicker from 'components/RoomPicker';
import RoomCreator from 'components/RoomCreator';

const Container = styled.div`
  width: 100%;
  padding: 36px 0 48px;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    padding: 88px 0 48px;
  }
`;

const RoomsControlPanel = (): JSX.Element => {
  return (
    <Container>
      <RoomCreator />
      <RoomPicker />
    </Container>
  );
};

export default RoomsControlPanel;
