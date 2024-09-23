import React, {useContext} from 'react';
import {SignUpContext} from 'views/SignUp/SignUpContext';
import Button from 'components/Button';
import FacebookLogo from 'assets/logos/facebook.svg';
import GoogleLogo from 'assets/logos/google.svg';
import FormTemplate from '../FormTemplate';
import {ContentContainer, ConnectButton, Logo, ButtonsContainer} from './styles';

const SocialMediaForm = () => {
  const {state, dispatch} = useContext(SignUpContext);

  const handleSkip = () => {
    dispatch({type: 'SKIP_OAUTH'});
  };

  return (
    <FormTemplate title="Do you want to sign up with your social media account?">
      <ContentContainer>
        <ConnectButton>
          <Logo src={FacebookLogo} />
          Continue with Facebook
        </ConnectButton>
        <ConnectButton>
          <Logo src={GoogleLogo} />
          Continue with Google
        </ConnectButton>
      </ContentContainer>
      <ButtonsContainer>
        <Button secondary onClick={handleSkip}>
          Skip
        </Button>
      </ButtonsContainer>
    </FormTemplate>
  );
};

export default SocialMediaForm;
