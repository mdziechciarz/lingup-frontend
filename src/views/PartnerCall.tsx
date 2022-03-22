import React from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate';
import CallHeader from 'components/Call/CallHeader';
import CallTopicAdviser from 'components/Call/CallTopicAdviser';
import CallMenu from 'components/Call/CallMenu';
import PartnerPanel from 'components/Call/PartnerCall/PartnerPanel';

const Container = styled.div`
  @media (min-width: ${({theme}) => theme.breakpoints.XL}px) {
    padding: 0 100px;
  }
`;

const PartnerCall = () => {
  return (
    <MainTemplate>
      <Container>
        <CallHeader />
        <CallTopicAdviser />
        <PartnerPanel />
        <CallMenu />
      </Container>
    </MainTemplate>
  );
};

export default PartnerCall;
