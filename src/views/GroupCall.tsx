import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import CallHeader from 'components/CallHeader';
import CallTopicAdviser from 'components/CallTopicAdviser';
import CallMembersPanel from 'components/CallMembersPanel';
import CallMenu from 'components/CallMenu';
import styled from 'styled-components';

const Container = styled.div`
  @media (min-width: ${({theme}) => theme.breakpoints.XL}px) {
    padding: 0 100px;
  }
`;

const GroupCall = () => {
  return (
    <MainTemplate>
      <Container>
        <CallHeader />
        <CallTopicAdviser />
        <CallMembersPanel />
        <CallMenu />
      </Container>
    </MainTemplate>
  );
};

export default GroupCall;
