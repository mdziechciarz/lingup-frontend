import React from 'react';
import styled from 'styled-components';
import {RoomLanguageLevels} from 'types';
import BegginerIcon from 'assets/levelIndicators/Begginer.svg';
import IntermediateIcon from 'assets/levelIndicators/Intermediate.svg';
import AdvancedIcon from 'assets/levelIndicators/Advanced.svg';
import AnyIcon from 'assets/levelIndicators/Any.svg';

const Container = styled.span`
  display: block;
  height: 20px;

  & img {
    height: 100%;
  }
`;

const getIcon = (level: RoomLanguageLevels) => {
  switch (level) {
    case RoomLanguageLevels.begginer:
      return BegginerIcon;
    case RoomLanguageLevels.intermediate:
      return IntermediateIcon;
    case RoomLanguageLevels.advanced:
      return AdvancedIcon;
    default:
      return AnyIcon;
  }
};

const LevelIndicator = ({level}: {level: RoomLanguageLevels}) => {
  return (
    <Container>
      <img src={getIcon(level)} alt="" />
    </Container>
  );
};

export default LevelIndicator;
