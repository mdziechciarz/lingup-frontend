import React, {useState, useEffect} from 'react';
import {Icon} from '@iconify/react';
import {
  Container,
  ContentContainer,
  SourceText,
  SpeakerButton,
  Label,
  TranslationsContainer,
  TranslationText,
  ExamplesContainer,
  ExampleContainer,
  ExampleLocal,
  ExampleForeign,
  ButtonsContainer,
  CancelButton,
  Spinner,
  Error,
} from './styles';

interface IProps {
  handleClose: () => any;
  sourceText: string;
}

const TranslationView = ({handleClose, sourceText: dsad}: IProps) => {
  const userNativeLanguage = 'Polish';
  const sourceTextLanguage = 'English';

  const sourceText = "Carl's condition deteriorates rapidly";

  const isSingleWord = sourceText.split(' ').length === 1;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [translationResults, setTranslationResults] = useState<string[]>([]);
  const [examples, setExamples] = useState<Array<{id: number; from: string; to: string}>>([]);
  const [pronunciationUrl, setPronunciationUrl] = useState<string | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTranslationResults(['Stan Carla szybko się pogarsza']);
      setPronunciationUrl(
        'https://voice.reverso.net/RestPronunciation.svc/v1/output=json/GetVoiceStream/voiceName=Ania22k?inputText=U3RhbiBDYXJsYSBzenlia28gc2nEmSBwb2dhcnN6YQ=='
      );
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Container>
      <ContentContainer hasExamples={isSingleWord && !!examples.length}>
        {isLoading ? (
          <Spinner />
        ) : isError ? (
          <Error>Unfortunately, we've found no translation for you :(</Error>
        ) : (
          <>
            <Translation
              hasManyTranslations={isSingleWord && translationResults.length > 1}
              sourceText={sourceText}
              translationResults={translationResults}
              pronunciationUrl={pronunciationUrl}
            />
            {isSingleWord && !!examples.length && <Examples examples={examples} />}
          </>
        )}
      </ContentContainer>
      <ButtonsContainer>
        <CancelButton onClick={handleClose}>Close</CancelButton>
      </ButtonsContainer>
    </Container>
  );
};

export default TranslationView;

const Translation = ({
  hasManyTranslations,
  sourceText,
  translationResults,
  pronunciationUrl,
}: any) => {
  return (
    <div>
      <Label>Source:</Label>
      <SourceText>{sourceText}</SourceText>
      <Label>Translation:</Label>
      <TranslationsContainer>
        {translationResults.map((text: string) => (
          <TranslationText hasManyTranslations={hasManyTranslations} key={text}>
            {text}
          </TranslationText>
        ))}
        {pronunciationUrl && <PronunciationButton pronunciationUrl={pronunciationUrl} />}
      </TranslationsContainer>
    </div>
  );
};

const Examples = ({examples}: any) => {
  return (
    <div>
      <Label>Examples</Label>
      <ExamplesContainer>
        {examples.map(({id, from, to}: any) => (
          <ExampleContainer key={id}>
            <ExampleLocal>{from}</ExampleLocal>
            <ExampleForeign>{to}</ExampleForeign>
          </ExampleContainer>
        ))}
      </ExamplesContainer>
    </div>
  );
};

const PronunciationButton = ({pronunciationUrl}: {pronunciationUrl: string}) => {
  const audio = new Audio(pronunciationUrl);
  audio.volume = 0.5;

  const handleClick = () => {
    audio.play();
  };

  return (
    <SpeakerButton onClick={handleClick}>
      <Icon icon="fluent:speaker-2-32-filled" />
    </SpeakerButton>
  );
};
