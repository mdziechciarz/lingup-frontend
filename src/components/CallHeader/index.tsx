import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Icon} from '@iconify/react';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding-top: 32px;
  display: flex;
  align-items: flex-start;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    padding-top: 48px;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.L}px) {
    padding-top: 80px;
  }
`;

const ButtonContainer = styled.div``;

const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  font-size: 40px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.2s;
  /* background-color: rgba(0, 0, 0, 0); */

  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    font-size: 48px;
  }
`;

const TitleContainer = styled.div`
  margin-left: 24px;
  flex-grow: 1;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    max-width: 568px;
    margin-left: 32px;
  }
`;
const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    font-size: 28px;
  }
`;

const CallHeader = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);

  return (
    <Container>
      <ButtonContainer>
        <Button onClick={handleClick}>
          <Icon icon="fluent:chevron-left-12-regular" />
        </Button>
      </ButtonContainer>
      <TitleContainer>
        <Title>Just join and get to know us, we are all only begginers 🙈🙉🙊</Title>
      </TitleContainer>
    </Container>
  );
};

export default CallHeader;
