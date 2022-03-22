import React, {useContext, useState} from 'react';
import {SignUpContext} from 'views/SignUp/SignUpContext';
import {Languages} from 'types';
import {Icon} from '@iconify/react';
import Button from 'components/Button';
import LanguageDropdown from '../Dropdowns/LanugageDropdown';
import LevelDropdown from '../Dropdowns/LevelDropdown';
import FormTemplate from '../FormTemplate';
import {
  ContentContainer,
  Language,
  DeleteLanguageButton,
  LanguageDropdownsContainer,
  AddLanguageButton,
  ButtonsContainer,
} from './styles';

type LanguageObject = {id: number; language: string | null; level: number | null};

const OtherLanguagesForm = () => {
  const {
    state: {
      userInput: {nativeLanguage},
    },
    dispatch,
  } = useContext(SignUpContext);

  const [languages, setLanguages] = useState<LanguageObject[]>([]);

  const languageOptions = Object.values(Languages)
    .filter(lang => lang.name !== nativeLanguage)
    .filter(lang => {
      let isAlreadySelected = languages.some(
        (selectedLang: any) => lang.name === selectedLang.name
      );
      return !isAlreadySelected;
    })
    .map(lang => ({
      value: lang.name,
      label: lang.name,
      flagCode: lang.flagCode,
    }));

  const getDefaultLanguageValue = (languageName: any) =>
    languageName
      ? {
          value: Languages[languageName].name,
          label: Languages[languageName].name,
          flagCode: Languages[languageName].flagCode,
        }
      : null;

  // const getDefaultLevelValue = (languageName: any) =>
  //   languageName
  //     ? {
  //         value: Languages[languageName].name,
  //         label: Languages[languageName].name,
  //         flagCode: Languages[languageName].flagCode,
  //       }
  //     : null;

  // const handleChange = () => {};
  const [newLangId, setNewLangId] = useState<number>(0);

  const handleAddLanguage = () => {
    const newLanguageObject = {id: newLangId, language: null, level: null};
    setLanguages(prev => [...prev, newLanguageObject]);
    setNewLangId(prev => prev + 1);
  };

  const handleDeleteLanguage = (id: number) => {
    setLanguages(prev => prev.filter(lang => lang.id !== id));
  };

  const handleSelectLanguage = (id: number, language: string) => {
    setLanguages(prev =>
      prev.map(langObj => (langObj.id === id ? {...langObj, language} : langObj))
    );
    console.log('select lang');
  };
  const handleSelectLevel = (id: number, level: number) => {
    setLanguages(prev => prev.map(langObj => (langObj.id === id ? {...langObj, level} : langObj)));
    console.log('select level', level);
  };

  const isEveryEntryFilledOut = languages.every(
    ({language, level}) => language !== null && level !== null
  );
  console.log(isEveryEntryFilledOut);

  return (
    <FormTemplate
      title="What other languages do you speak?"
      description="Including those you want to learn and practice!"
    >
      <ContentContainer>
        {languages.map((lang, key) => (
          <Language key={lang.id}>
            <DeleteLanguageButton onClick={() => handleDeleteLanguage(lang.id)}>
              <Icon icon="fluent:dismiss-12-regular" />
            </DeleteLanguageButton>
            <LanguageDropdownsContainer>
              <LanguageDropdown
                options={languageOptions}
                defaultValue={getDefaultLanguageValue(lang.language)}
                onChange={(selectedOption: any) =>
                  handleSelectLanguage(lang.id, selectedOption.value)
                }
              />
              <LevelDropdown
                defaultSelectedLevel={lang.level}
                // onChange={(selectedOption: any) => handleSelectLevel(lang.id, selectedOption.value)}
                onChange={(selectedOption: any) => handleSelectLevel(lang.id, selectedOption.value)}
              />
            </LanguageDropdownsContainer>
          </Language>
        ))}
        <AddLanguageButton onClick={handleAddLanguage}>
          Add language
          <span>
            <Icon icon="fluent:add-16-filled" />
          </span>
        </AddLanguageButton>
      </ContentContainer>
      <ButtonsContainer>
        <Button disabled={!isEveryEntryFilledOut}>Continue</Button>
      </ButtonsContainer>
    </FormTemplate>
  );
};

export default OtherLanguagesForm;
