import React, {useState} from 'react';
import {useSpeechRecognition} from 'react-speech-recognition';
import {Icon} from '@iconify/react';
import TranslatorModal from './TranslatorModal';
import {Container, TranslatorButton, MicButton, LeaveCallButton} from './styles';

const CallMenu = () => {
  const {browserSupportsSpeechRecognition} = useSpeechRecognition();
  const isTranslatorAvaiable = browserSupportsSpeechRecognition;

  // const isMicOn = false;
  const [isMicOn, setIsMicOn] = useState(false);
  const [isTranslatorOpen, setIsTranslatorOpen] = useState<boolean>(
    browserSupportsSpeechRecognition && false
  );

  const handleOpenTranslator = () => setIsTranslatorOpen(true);
  const handleCloseTranslator = () => setIsTranslatorOpen(false);

  const handleToggleMic = () => setIsMicOn(prev => !prev);

  return (
    <>
      <Container>
        {isTranslatorAvaiable && (
          <TranslatorButton onClick={handleOpenTranslator}>
            <Icon icon="fluent:translate-16-regular" />
          </TranslatorButton>
        )}
        <MicButton isOn={isMicOn} onClick={handleToggleMic}>
          <Icon icon={isMicOn ? 'fluent:mic-on-16-filled' : 'fluent:mic-off-12-filled'} />
        </MicButton>
        <LeaveCallButton>
          <Icon icon="fluent:panel-right-contract-24-regular" />
        </LeaveCallButton>
      </Container>
      <TranslatorModal isOpen={isTranslatorOpen} handleClose={handleCloseTranslator} />
    </>
  );
};

export default CallMenu;
