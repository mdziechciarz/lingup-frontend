import React, {useState, useContext} from 'react';
import {SignUpContext} from 'views/SignUp/SignUpContext';
import Button from 'components/Button';
// import LanguageDropdown from 'components/ModalLanguageLeve/Dropdowns/LanguageDropdown';
import LanguageDropdown from '../Dropdowns/LanugageDropdown';
import {ContentContainer, DropdownWrapper, ButtonsContainer} from './styles';
import FormTemplate from '../FormTemplate';
import {Languages} from 'types';

const NativeLanguageForm = () => {
  const {
    state: {
      userInput: {nativeLanguage},
    },
    dispatch,
  } = useContext(SignUpContext);

  const defaultValue = nativeLanguage && {
    value: Languages[nativeLanguage].name,
    label: Languages[nativeLanguage].name,
    flagCode: Languages[nativeLanguage].flagCode,
  };

  const [language, setLanguage] = useState(nativeLanguage);

  const options = Object.values(Languages).map(lang => ({
    value: lang.name,
    label: lang.name,
    flagCode: lang.flagCode,
  }));

  const handleChange = (selectedOption: any) => {
    setLanguage(selectedOption.value);
  };

  const handleContinue = () => {
    if (language) {
      dispatch({type: 'SET_NATIVE_LANGUAGE', payload: language});
    }
  };

  return (
    <FormTemplate title="What’s your native language?">
      <ContentContainer>
        <DropdownWrapper>
          <LanguageDropdown options={options} onChange={handleChange} defaultValue={defaultValue} />
        </DropdownWrapper>
      </ContentContainer>
      <ButtonsContainer>
        <Button disabled={!language} onClick={handleContinue}>
          Continue
        </Button>
      </ButtonsContainer>
    </FormTemplate>
  );
};

export default NativeLanguageForm;
