import {Icon} from '@iconify/react';
import React, {useEffect, useState} from 'react';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
import {
  Container,
  Content,
  TextsContainer,
  Instruction,
  VoiceInputButton,
  VoiceInputButtonIconContainer,
  ButtonsContainer,
  CancelButton,
  Transcript,
  VoiceInputButtonCaption,
  InstructionFinal,
  TranscriptFinal,
  SpeakerButton,
  RepeatVoiceInputButton,
  ConfirmButton,
} from './styles';

enum Stages {
  Initial,
  ReceivingInput,
  Confirmation,
}

interface IProps {
  instruction: string;
  handleClose: () => void;
  proceedToTranslation: (input: string) => void;
}

const InputView = ({instruction, handleClose, proceedToTranslation}: IProps) => {
  const roomLanguage = 'en';
  const userNativeLanguage = 'pl';

  const [stage, setStage] = useState<Stages>(Stages.Initial);
  const {transcript, finalTranscript, listening, isMicrophoneAvailable, resetTranscript} =
    useSpeechRecognition();

  const handleStartListening = async () => {
    await SpeechRecognition.startListening({continuous: true, language: roomLanguage});
    setStage(Stages.ReceivingInput);
  };
  const handleStopListening = () => {
    SpeechRecognition.stopListening();
    setStage(Stages.Confirmation);
    console.log(finalTranscript);
  };
  const handleRepeatListening = async () => {
    resetTranscript();
    await SpeechRecognition.startListening({continuous: true, language: roomLanguage});
    setStage(Stages.ReceivingInput);
  };

  useEffect(() => {
    return () => {
      SpeechRecognition.abortListening();
      resetTranscript();
    };
  }, []);

  if (stage === Stages.Initial) {
    return (
      <Container>
        <Content>
          <TextsContainer>
            <Instruction>{instruction}</Instruction>
          </TextsContainer>
          <VoiceInputButton listening={listening} onClick={handleStartListening}>
            <VoiceInputButtonIconContainer>
              <Icon icon="fluent:mic-24-filled" />
            </VoiceInputButtonIconContainer>
          </VoiceInputButton>
        </Content>
        <ButtonsContainer>
          <CancelButton onClick={handleClose}>Cancel</CancelButton>
        </ButtonsContainer>
      </Container>
    );
  } else if (stage === Stages.ReceivingInput) {
    return (
      <Container>
        <Content>
          <TextsContainer>
            <Transcript>{transcript}</Transcript>
          </TextsContainer>
          <VoiceInputButton listening onClick={handleStopListening}>
            <VoiceInputButtonIconContainer>
              <Icon icon="fluent:mic-24-filled" />
            </VoiceInputButtonIconContainer>
            <VoiceInputButtonCaption>Stop</VoiceInputButtonCaption>
          </VoiceInputButton>
        </Content>
        <ButtonsContainer>
          <CancelButton onClick={handleClose}>Cancel</CancelButton>
        </ButtonsContainer>
      </Container>
    );
  } else {
    return (
      <Container>
        <Content>
          <TextsContainer>
            {finalTranscript !== '' ? (
              <>
                <InstructionFinal>Is that what you meant?</InstructionFinal>
                <TranscriptFinal>
                  {finalTranscript}
                  <SpeakerButton>
                    <Icon icon="fluent:speaker-2-32-filled" />
                  </SpeakerButton>
                </TranscriptFinal>
              </>
            ) : (
              <InstructionFinal>We couldn't understand what you've just said :(</InstructionFinal>
            )}
          </TextsContainer>
          <RepeatVoiceInputButton listening={listening} onClick={handleRepeatListening}>
            <VoiceInputButtonIconContainer>
              <Icon icon="fluent:mic-sync-20-filled" />
            </VoiceInputButtonIconContainer>
          </RepeatVoiceInputButton>
        </Content>
        <ButtonsContainer>
          <ConfirmButton
            disabled={finalTranscript === ''}
            onClick={() => proceedToTranslation(finalTranscript)}
          >
            Confirm
            <span>
              <Icon icon="fluent:checkmark-12-regular" />
            </span>
          </ConfirmButton>
          <CancelButton ghost onClick={handleClose}>
            Cancel
          </CancelButton>
        </ButtonsContainer>
      </Container>
    );
  }
};

export default InputView;
