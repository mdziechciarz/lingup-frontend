import React from 'react';
import Button from 'components/Button';
import Img1 from 'assets/photos/signin/1.jpg';

import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(255, 184, 142, 0.2) 0%, rgba(241, 60, 119, 0.2) 100%),
    #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  background-color: #fff;

  margin: 0 24px;
`;

const ImageSlider = styled.div`
  width: 50%;
  display: none;
  background-color: #444;
  background-image: url(${Img1});
  background-position: center;
  background-size: cover;
  /* opacity: 0.8; */

  @media (min-width: ${({theme}) => theme.breakpoints.M + 100}px) {
    display: block;
  }
`;

// const Image = styled.img`
/* width: ; */
// `

const FormContainer = styled.div`
  width: 100%;
  padding: 76px 36px;
  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    /* padding: 140px  */
    padding: 140px 48px;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.M + 100}px) {
    width: 50%;
  }
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 22px;
  text-align: center;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    font-size: 28px;
    text-align: left;
  }
`;

export const Description = styled.p`
  margin-top: 4px;
  font-size: 14px;
  text-align: center;

  margin-bottom: 40px;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    font-size: 16px;
    text-align: left;
  }
`;

export const Input = styled.input`
  margin-bottom: 8px;
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 10px;
  padding: 0 20px;
  font-size: 14px;
  background-color: #f2f2f2;
  resize: none;

  &::placeholder {
    color: #a3a3a3;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
export const Label = styled.p`
  width: 100%;
  font-size: 12px;
`;

const SignInButton = styled(Button)`
  margin-top: 24px;
`;

const SignIn = () => {
  return (
    <Container>
      <Card>
        <ImageSlider />
        <FormContainer>
          <Title>Great to see you again!</Title>
          <Description>Log In to your account.</Description>
          <Label>Username or email</Label>
          <Input placeholder="Enter your username or email" />
          <Label>Password</Label>
          <Input placeholder="Enter your password" type="password" />
          <SignInButton>Sign In</SignInButton>
        </FormContainer>
      </Card>
    </Container>
  );
};

export default SignIn;
