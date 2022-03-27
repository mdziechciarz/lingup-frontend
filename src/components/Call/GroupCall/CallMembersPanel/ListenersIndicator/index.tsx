import React from 'react';
import styled from 'styled-components';
import {Icon} from '@iconify/react';

const Container = styled.div`
  margin-top: 32px;
  width: 100%;
`;

const SeparatorLine = styled.span`
  display: block;
  width: 100%;
  height: 2px;
  background-color: #c4c4c4;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    width: 50%;
  }
`;

const IconContainer = styled.span`
  font-size: 20px;
  margin-right: 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    font-size: 24px;
  }
`;

const Text = styled.p`
  margin-top: 8px;
  font-size: 14px;
  display: flex;
  align-items: center;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ListenersIndicator = ({listenersCount}: {listenersCount: number}) => {
  return (
    <Container>
      <SeparatorLine />
      <Text>
        <IconContainer>
          <Icon icon="fluent:people-queue-20-filled" />
        </IconContainer>
        {listenersCount}
        {listenersCount > 1 ? ' people' : ' person'} listening
      </Text>
    </Container>
  );
};

export default ListenersIndicator;
