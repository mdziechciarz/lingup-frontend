import {listenerCount} from 'process';
import React from 'react';
import styled, {css} from 'styled-components';
import CallMember from './CallMember';
import ListenersIndicator from './ListenersIndicator';

const Container = styled.div`
  padding-bottom: 40px;
  width: 100%;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    padding-bottom: 60px;
  }
`;

const UsersGrid = styled.div<{userCount: number}>`
  display: grid;
  grid-template-columns: ${({userCount}) => (userCount > 4 ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)')};
  grid-row-gap: 24px;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${({theme}) => theme.breakpoints.L}px) {
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 0;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.XL}px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const CallMembersPanel = () => {
  const userCount = 12;
  const listenersCount = 7;

  return (
    <Container>
      <UsersGrid userCount={userCount}>
        <CallMember
          userCount={userCount}
          userName="Diana"
          imgSrc="https://randomuser.me/api/portraits/women/18.jpg"
        />
        <CallMember
          userCount={userCount}
          userName="Britney"
          imgSrc="https://randomuser.me/api/portraits/women/12.jpg"
        />
        <CallMember
          userCount={userCount}
          userName="Shawn"
          imgSrc="https://randomuser.me/api/portraits/men/18.jpg"
        />
        <CallMember
          userCount={userCount}
          userName="Shawn"
          imgSrc="https://randomuser.me/api/portraits/men/18.jpg"
        />
        <CallMember
          userCount={userCount}
          userName="Chandler"
          imgSrc="https://randomuser.me/api/portraits/men/23.jpg"
        />
        <CallMember
          userCount={userCount}
          userName="Robert"
          imgSrc="https://randomuser.me/api/portraits/men/14.jpg"
        />
        <CallMember
          userCount={userCount}
          userName="Diana"
          imgSrc="https://randomuser.me/api/portraits/women/18.jpg"
        />
        <CallMember
          userCount={userCount}
          userName="Britney"
          imgSrc="https://randomuser.me/api/portraits/women/12.jpg"
        />
        <CallMember
          userCount={userCount}
          userName="Shawn"
          imgSrc="https://randomuser.me/api/portraits/men/18.jpg"
        />
        <CallMember
          userCount={userCount}
          userName="Shawn"
          imgSrc="https://randomuser.me/api/portraits/men/18.jpg"
        />
        <CallMember
          userCount={userCount}
          userName="Chandler"
          imgSrc="https://randomuser.me/api/portraits/men/23.jpg"
        />
        <CallMember
          userCount={userCount}
          userName="Robert"
          imgSrc="https://randomuser.me/api/portraits/men/14.jpg"
        />
      </UsersGrid>
      <ListenersIndicator listenersCount={listenersCount} />
    </Container>
  );
};

export default CallMembersPanel;
