import React, {useState} from 'react';
import InputView from '../shared/InputView';
import TranslationView from '../shared/TranslationView';

const TabToForeign = ({handleClose}: any) => {
  const [stage, setStage] = useState(0);
  const [sourceText, setSourceText] = useState<string>('');

  const proceedToTranslation = (input: string) => {
    setSourceText(input);
    setStage(1);
  };

  if (stage === 0)
    return (
      <InputView
        instruction="Check how to say a word or phrase in your foreign language "
        handleClose={handleClose}
        proceedToTranslation={proceedToTranslation}
      />
    );
  return <TranslationView handleClose={handleClose} sourceText={sourceText} />;
};

export default TabToForeign;
