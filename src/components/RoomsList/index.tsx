import React from 'react';
import styled from 'styled-components';
import RoomCard from './RoomCard';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px 16px;

  @media (min-width: ${({theme}) => theme.breakpoints.M + 136}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.L + 136}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const RoomsList = (): JSX.Element => {
  return (
    <Container>
      <RoomCard
        name="Only genuine bookworms allowed sadsajhfksja ahsjkfhsakj f djsklfds fff jfdskfjl  dsadjkl😎📕"
        lang="English"
        level={2}
        peopleCount={999}
      />
      <RoomCard
        name="Our funniest travelling stories and best friendships"
        lang="English"
        level={0}
        peopleCount={7}
      />
      <RoomCard
        name="Just join and get to know us, we are all only begginers 🙈🙉🙊"
        lang="English"
        level={1}
        peopleCount={3}
      />
    </Container>
  );
};

export default RoomsList;
