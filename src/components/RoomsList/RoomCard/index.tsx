import React from 'react';
import {Icon} from '@iconify/react';
import {
  Container,
  Name,
  DetailsContainer,
  LanguageAndLevelContainer,
  Flag,
  DetailsText,
  LevelIndicator,
  PeopleCountContainer,
  PeopleCountNumber,
} from './styles';

enum Level {
  Any,
  Begginer,
  Intermediate,
  Advanced,
}

interface IProps {
  name: string;
  lang: string;
  level: Level;
  peopleCount: number;
}

const RoomCard = ({name, lang, level, peopleCount}: IProps): JSX.Element => {
  return (
    <Container>
      <Name>{name}</Name>
      <DetailsContainer>
        <LanguageAndLevelContainer>
          <Flag />
          <DetailsText>{lang}</DetailsText>
          <LevelIndicator />
          <DetailsText>{Level[level]}</DetailsText>
        </LanguageAndLevelContainer>
        <PeopleCountContainer>
          <Icon icon="fluent:people-16-filled" />
          <PeopleCountNumber>{peopleCount}</PeopleCountNumber>
        </PeopleCountContainer>
      </DetailsContainer>
    </Container>
  );
};

export default RoomCard;
