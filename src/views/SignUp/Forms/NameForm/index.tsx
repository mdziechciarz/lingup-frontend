import React, {useState, useContext} from 'react';
import {SignUpContext} from 'views/SignUp/SignUpContext';
import Button from 'components/Button';
import FormTemplate from '../FormTemplate';
import {ContentContainer, Input, ButtonsContainer} from './styles';

const NameForm = () => {
  const {state, dispatch} = useContext(SignUpContext);
  const [input, setInput] = useState(state.userInput.name || '');

  const handleContinue = () => {
    if (input) dispatch({type: 'SET_NAME', payload: input});
  };

  return (
    <FormTemplate title="What's your name?">
      <ContentContainer>
        <Input placeholder="John Doe" value={input} onChange={e => setInput(e.target.value)} />
      </ContentContainer>
      <ButtonsContainer>
        <Button disabled={!input} onClick={handleContinue}>
          Continue
        </Button>
      </ButtonsContainer>
    </FormTemplate>
  );
};

export default NameForm;
