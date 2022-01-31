import React from 'react';
import LanguageInfoBar from './LanguageInfoBar';
import {Container, Title, LanguagesContainer} from './styles';

const UserLanguages = () => {
  return (
    <Container>
      <Title>Languages</Title>
      <LanguagesContainer>
        <LanguageInfoBar flagCode="es" langName="Spanish" level={3} levelName={'Advanced'} />
        <LanguageInfoBar flagCode="pl" langName="Polish" level={2} levelName={'Intermediate'} />
        <LanguageInfoBar flagCode="gb" langName="English" level={1} levelName={'Begginer'} />
      </LanguagesContainer>
    </Container>
  );
};

export default UserLanguages;
