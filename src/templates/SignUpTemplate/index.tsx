import React, {useContext, ReactNode} from 'react';
import {SignUpContext} from 'views/SignUp/SignUpContext';
import {Icon} from '@iconify/react';
import ProgressBar from './ProgressBar';

import styled from 'styled-components';

const Background = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(255, 184, 142, 0.2) 0%, rgba(241, 60, 119, 0.2) 100%),
    #ffffff;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${({theme}) => theme.breakpoints.XL}px;
  padding: 60px 24px 0;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    margin: 0 auto;
    padding: 160px 48px 0;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.L}px) {
    padding: 160px 72px 0;
  }
`;

const ProgressContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 832px;
  display: flex;
  align-items: center;
`;

const GoBackButton = styled.button`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 26px;
  background: none;
  border: none;
  color: #7c7c7c;
  cursor: pointer;
`;

interface IProps {
  children: ReactNode;
  onGoBack?: () => void;
  currentStep: number;
  maxSteps: number;
}

const SignUpTemplate = ({children, currentStep, maxSteps, onGoBack = () => {}}: IProps) => {
  const {dispatch} = useContext(SignUpContext);

  const handleGoBack = () => {
    dispatch({type: 'PREVIOUS_STEP'});
  };

  return (
    <Background>
      <Container>
        <ProgressContainer>
          <GoBackButton
            onClick={handleGoBack}
            disabled={currentStep === 0 || currentStep === maxSteps}
          >
            <Icon icon="fluent:arrow-left-12-regular" />
          </GoBackButton>
          <ProgressBar currentStep={currentStep} maxSteps={maxSteps} />
        </ProgressContainer>
        {children}
      </Container>
    </Background>
  );
};

export default SignUpTemplate;
