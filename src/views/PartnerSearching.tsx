import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import styled, {css} from 'styled-components';
import QueueSpinner from 'components/QueueSpinner';
import Button from 'components/Button';
import CallMember from 'components/Call/GroupCall/CallMembersPanel/CallMember';

const Container = styled.div<{partnerFound?: boolean}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    width: ${({partnerFound}) => (partnerFound ? '100%' : 'fit-content')};
    margin: 0 auto;
  }
`;

const Headline = styled.h1<{withUnderline?: boolean}>`
  padding-bottom: 8px;
  /* border-end-end-radius: 8px; */
  /* border-radius: 50%; */
  /* border-bottom: 8px solid #dd3a3c; */

  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    line-height: 1;
    font-size: 32px;
  }

  ${({withUnderline}) =>
    withUnderline &&
    css`
      &::after {
        margin: 8px auto 0;
        content: '';
        display: block;
        width: 80%;
        height: 8px;
        border-radius: 29.5px;
        background: linear-gradient(269.7deg, #ef473a 7.79%, #cb2d3e 98.8%),
          linear-gradient(0deg, #2d3142, #2d3142), #000000;
      }
    `}
`;

const QueueText = styled.p`
  font-size: 16px;
`;

const StyledQueueSpinner = styled(QueueSpinner)`
  margin: 60px 0;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    margin: 72px 0;
  }
`;

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    max-width: 600px;
    flex-direction: row-reverse;
  }
`;

const RejectButton = styled(Button)`
  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    margin-right: 20px;
    background: none;
    background-color: #2d3142;
    color: #fff;

    &:hover {
      background: none;
      background-color: #292c3a;
    }
    &:disabled {
      background: none;
      background-color: #adb0be;
    }
  }
`;

const PartnerContainer = styled.div`
  margin: 60px 0;
  width: 180px;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    margin: 72px 0;
  }
`;

const StyledCallMember = styled(CallMember)`
  padding: 0;
`;

const PartnerSearching = () => {
  const peopleInQueue = 16;
  const isPartnerFound = false;

  return (
    <MainTemplate>
      <Container partnerFound={isPartnerFound}>
        {isPartnerFound ? (
          <>
            <Headline withUnderline>Partner found</Headline>
            <PartnerContainer>
              <StyledCallMember
                userName="Jessica"
                imgSrc="https://randomuser.me/api/portraits/women/47.jpg"
                userCount={1}
              />
            </PartnerContainer>
            <ButtonsContainer>
              <Button>Accept</Button>
              <RejectButton ghost>Reject</RejectButton>
            </ButtonsContainer>
          </>
        ) : (
          <>
            <Headline>Searching for your partner</Headline>
            <QueueText>People in queue: {peopleInQueue}</QueueText>
            <StyledQueueSpinner />
            <Button secondary>Cancel</Button>
          </>
        )}
      </Container>
    </MainTemplate>
  );
};

export default PartnerSearching;
