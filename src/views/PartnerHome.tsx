import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import PartnerHomeHeader from 'components/PartnerHomeHeader';
import PartnerHomeButtons from 'components/PartnerHomeButtons';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
  @media (min-width: ${({theme}) => theme.breakpoints.XL}px) {
    padding: 0 100px;
  }
`;

const PartnerHome = () => {
  return (
    <MainTemplate>
      <Container>
        <PartnerHomeHeader />
        <PartnerHomeButtons />
      </Container>
    </MainTemplate>
  );
};

export default PartnerHome;
