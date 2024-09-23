import React, {useContext} from 'react';
import {SignUpContext} from './SignUpContext';
import SignUpTemplate from 'templates/SignUpTemplate';
import AvatarForm from './Forms/AvatarForm';
import BioForm from './Forms/BioForm';
import CredentialsForm from './Forms/CredentialsForm';
import NameForm from './Forms/NameForm';
import NativeLanguageForm from './Forms/NativeLanguageForm';
import OtherLanguagesForm from './Forms/OtherLanguagesForm';
import SocialMediaForm from './Forms/SocialMediaForm';

// const mapStageToForm = (stage: number) => {
// switch (stage) {
//   case 0:
//     return <NativeLanguageForm />;
//   case 1:
//     return <OtherLanguagesForm />;
//   case 2:
//     return <BioForm />;
//   case 3:
//     return <SocialMediaForm />;
//   case 4:
//     return <NameForm />;
//   case 5:
//     return <AvatarForm />;
//   case 6:
//     return <CredentialsForm />;
// }
// };
const mapStageToForm = (stage: number) => {
  switch (stage) {
    case 0:
      return <NativeLanguageForm />;
    case 1:
      return <OtherLanguagesForm />;
    case 2:
      return <BioForm />;
    case 3:
      return <NameForm />;
    case 4:
      return <AvatarForm />;
    case 5:
      return <CredentialsForm />;
  }
};

const SignUp = () => {
  const {
    state: {step},
  } = useContext(SignUpContext);

  return (
    // <SignUpTemplate currentStep={step} maxSteps={7}>
    <SignUpTemplate currentStep={step} maxSteps={6}>
      {mapStageToForm(step)}
    </SignUpTemplate>
  );
};

export default SignUp;
