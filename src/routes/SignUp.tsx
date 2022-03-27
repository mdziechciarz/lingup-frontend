import React, {useState} from 'react';
import SignUpView from 'views/SignUp';
import {SignUpProvider} from 'views/SignUp/SignUpContext';

const SignUp = () => {
  return (
    <SignUpProvider>
      <SignUpView />
    </SignUpProvider>
  );
};

export default SignUp;
