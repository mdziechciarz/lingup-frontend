import React from 'react';
import {Flag} from 'components/RoomsList/RoomCard/styles';
import {Container, IndicatorContainer, Text, StyledLevelIndicator} from './styles';

interface IProps {
  onClick: () => void;
}

const Button = ({onClick}: IProps) => {
  return (
    <Container onClick={onClick}>
      <IndicatorContainer>
        <Flag />
        <Text>English</Text>
      </IndicatorContainer>
      <IndicatorContainer>
        <StyledLevelIndicator />
        <Text>Intermediate</Text>
      </IndicatorContainer>
    </Container>
  );
};

export default Button;
