import React from 'react';
import styled from 'styled-components';
import ReactCountryFlag from 'react-country-flag';
import LevelIndicator from 'components/LevelIndicator';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  & div {
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &:not(:first-of-type) {
    margin-top: 12px;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    width: 50%;
  }
`;

const FlagContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    font-size: 24px;
  }
`;
const Label = styled.p`
  margin-left: 16px;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    font-size: 20px;
  }
`;

const LanguageInfoBar = ({flagCode, langName, level, levelName}: any) => {
  return (
    <Container>
      <div>
        <FlagContainer>
          <ReactCountryFlag countryCode={flagCode} />
        </FlagContainer>
        <Label>{langName}</Label>
      </div>
      <div>
        <LevelIndicator level={level} />
        <Label>{levelName}</Label>
      </div>
    </Container>
  );
};

export default LanguageInfoBar;
