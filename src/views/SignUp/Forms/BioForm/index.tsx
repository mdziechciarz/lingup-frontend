import React, {useState, useContext} from 'react';
import {SignUpContext} from 'views/SignUp/SignUpContext';
import Button from 'components/Button';
import FormTemplate from '../FormTemplate';
import {ContentContainer, TextArea, ButtonsContainer} from './styles';

const BioForm = () => {
  const {state, dispatch} = useContext(SignUpContext);
  const [input, setInput] = useState(state.userInput.bio || '');

  const handleContinue = () => {
    if (input) dispatch({type: 'SET_BIO', payload: input});
  };
  const handleSkip = () => {
    dispatch({type: 'SKIP_BIO'});
  };

  return (
    <FormTemplate title="Tell us something about you!">
      <ContentContainer>
        <TextArea
          value={input}
          placeholder="It can be anything - why are you learning, what are your plans and goals"
          onChange={e => setInput(e.target.value)}
        />
      </ContentContainer>
      <ButtonsContainer>
        <Button disabled={!input} onClick={handleContinue}>
          Continue
        </Button>
        <Button ghost onClick={handleSkip}>
          Skip
        </Button>
      </ButtonsContainer>
    </FormTemplate>
  );
};

export default BioForm;
