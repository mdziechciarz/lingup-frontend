import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import CallHeader from 'components/Call/CallHeader';
import CallTopicAdviser from 'components/Call/CallTopicAdviser';
import CallMembersPanel from 'components/Call/GroupCall/CallMembersPanel';
import CallMenu from 'components/Call/CallMenu';
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
        <CallHeader title="Just join and get to know us, we are all only begginers 🙈🙉🙊" />
        <CallTopicAdviser />
        <CallMembersPanel />
        <CallMenu />
      </Container>
    </MainTemplate>
  );
};

export default GroupCall;
