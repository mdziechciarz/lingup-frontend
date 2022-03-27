import React from 'react';
import {Container, IndicatorContainer, Text, StyledLevelIndicator, FlagContainer} from './styles';
import ReactCountryFlag from 'react-country-flag';

interface IProps {
  onClick: () => void;
  className?: string;
}

const ButtonLanguageLevel = ({onClick, className = ''}: IProps) => {
  return (
    <Container onClick={onClick} className={className}>
      <IndicatorContainer>
        <FlagContainer>
          <ReactCountryFlag countryCode="us" />
        </FlagContainer>
        <Text>English</Text>
      </IndicatorContainer>
      <IndicatorContainer>
        <StyledLevelIndicator />
        <Text>Intermediate</Text>
      </IndicatorContainer>
    </Container>
  );
};

export default ButtonLanguageLevel;
