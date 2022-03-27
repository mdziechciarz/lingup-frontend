import React from 'react';
import everywhereTogetherIllustration from 'assets/illustrations/undraw_everywhere_together_bdmn.svg';

import styled from 'styled-components';

const Container = styled.div`
  /* margin-top: 32px; */
  width: 100%;
  padding-top: 32px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    padding-top: 120px;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.L}px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TextContainer = styled.div`
  max-width: 568px;
  @media (min-width: ${({theme}) => theme.breakpoints.L}px) {
    width: 50%;
  }
`;

const IllustrationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: ${({theme}) => theme.breakpoints.L}px) {
    width: 50%;
    justify-content: flex-end;
  }
`;

const EmphasizedText = styled.h1`
  font-size: 40px;
  font-family: 'Noto Sans Display';
  font-weight: 800;
  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    font-weight: 900;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.L}px) {
    font-size: 60px;
  }
`;

const Description = styled.p`
  font-size: 40px;
  font-weight: 700;
`;

const Illustration = styled.img`
  margin-top: 16px;
  padding: 8%;
  width: 100%;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    margin-top: 64px;
    padding: 0;
    max-width: 360px;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.L}px) {
    margin-top: 0;
  }
`;

const PartnerHomeHeader = () => {
  return (
    <Container>
      <TextContainer>
        <EmphasizedText>Start 1on1 call</EmphasizedText>
        <Description>and practice your language with a partner</Description>
      </TextContainer>
      <IllustrationContainer>
        <Illustration src={everywhereTogetherIllustration} />
      </IllustrationContainer>
    </Container>
  );
};

export default PartnerHomeHeader;
