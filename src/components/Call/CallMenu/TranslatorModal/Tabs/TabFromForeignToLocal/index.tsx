import React, {useState} from 'react';
import {Icon} from '@iconify/react';
import InputView from '../shared/InputView';
import TranslationView from '../shared/TranslationView';

const TabToLocal = ({handleClose}: any) => {
  const [stage, setStage] = useState(0);
  const [sourceText, setSourceText] = useState<string>('');

  const proceedToTranslation = (input: string) => {
    if (input.length) {
      setSourceText(input);
      setStage(1);
    }
  };

  if (stage === 0)
    return (
      <InputView
        instruction="Repeat the foreign word you don’t know"
        handleClose={handleClose}
        proceedToTranslation={proceedToTranslation}
      />
    );
  return <TranslationView handleClose={handleClose} sourceText={sourceText} />;
};

export default TabToLocal;
