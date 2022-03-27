import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 1;
  height: 10px;
  border-radius: 8px;
  background-color: #e1e1e1;
  display: flex;
  overflow: hidden;
`;

const Progress = styled.div<{currentStep: number; maxSteps: number}>`
  height: 100%;
  width: ${({currentStep, maxSteps}) => (currentStep / maxSteps) * 100}%;
  border-radius: 8px;
  background-color: #ef473a;
`;

interface IProps {
  currentStep: number;
  maxSteps: number;
}
const ProgressBar = ({currentStep, maxSteps}: IProps) => {
  return (
    <Container>
      <Progress currentStep={currentStep + 1} maxSteps={maxSteps} />
    </Container>
  );
};

export default ProgressBar;
