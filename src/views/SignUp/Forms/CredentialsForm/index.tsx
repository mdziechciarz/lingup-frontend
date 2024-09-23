import React, {useState, useContext} from 'react';
import {SignUpContext} from 'views/SignUp/SignUpContext';
import Button from 'components/Button';
import FormTemplate from '../FormTemplate';
import {
  ContentContainer,
  Label,
  Input,
  ButtonsContainer,
  PasswordInputContainer,
  ShowPasswordButton,
} from './styles';
import {Icon} from '@iconify/react';

const CredentialsForm = () => {
  const {state, dispatch} = useContext(SignUpContext);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => setIsPasswordVisible(prev => !prev);

  const handleSubmit = () => {
    // Validate
    if (username && email && password) {
      // validate whole state
      const {nativeLanguage, otherLanguages, name} = state.userInput;
      if (nativeLanguage && otherLanguages && name) {
        // axios register
        console.log('REGISTER API CALL');
      } else {
        console.log('ERROR');
      }
    }
  };

  return (
    <FormTemplate title="We are almost ready!">
      <ContentContainer>
        <Label>Username</Label>
        <Input
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Your unique identifier e.g. @john_doe"
        />
        <Label>Email</Label>
        <Input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="example@mail.com"
        />
        <Label>Password</Label>
        <PasswordInputContainer>
          <Input
            type={isPasswordVisible ? 'test' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="At least 6 characters long"
          />
          {password && (
            <ShowPasswordButton onClick={togglePasswordVisibility}>
              <Icon
                icon={isPasswordVisible ? 'fluent:eye-16-filled' : 'fluent:eye-off-16-filled'}
              />
            </ShowPasswordButton>
          )}
        </PasswordInputContainer>
      </ContentContainer>
      <ButtonsContainer>
        <Button disabled={!username || !email || !password} onClick={handleSubmit}>
          Join now!
        </Button>
      </ButtonsContainer>
    </FormTemplate>
  );
};

export default CredentialsForm;
