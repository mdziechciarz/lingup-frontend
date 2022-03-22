import React from 'react';
import styled from 'styled-components';
import CallMember from 'components/Call/GroupCall/CallMembersPanel/CallMember';

const Container = styled.div`
  display: grid;
  grid-template-columns: 220px;
  margin-top: 40px;
  justify-content: center;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    margin-top: 40px;
    grid-template-columns: 260px;
  }
`;

const StyledCallMember = styled(CallMember)`
  padding: 0;
`;

const PartnerPanel = () => {
  return (
    <Container>
      <StyledCallMember
        userCount={1}
        imgSrc="https://randomuser.me/api/portraits/women/12.jpg"
        userName="Britney"
      />
    </Container>
  );
};

export default PartnerPanel;
