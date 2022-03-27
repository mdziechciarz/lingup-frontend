import styled from 'styled-components';
import LoadingSpinner from '../LoadingSpinner';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* height: 388px; */
  display: flex;
  flex-direction: column;
`;
export const ContentContainer = styled.div<{hasExamples?: boolean}>`
  margin: 40px 0 24px;
  width: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ef473a;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 3px;
    background-color: #efefef;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    display: flex;
    flex-direction: row;

    & > div {
      width: ${({hasExamples}) => (hasExamples ? '50%' : '100%')};
    }
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 30px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  color: white;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CancelButton = styled(Button)`
  background-color: #2d3142;

  &:hover {
    background-color: #252836;
  }
`;

export const SpeakerButton = styled.button`
  margin-left: 12px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border: none;
  outline: none;
  background: none;
  color: #868686;
  cursor: pointer;
`;

export const SourceText = styled.p<{singleWord?: boolean}>`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  color: #dd3a3c;
  ${({singleWord}) => singleWord && 'text-transform: uppercase'}
`;

export const Label = styled.p`
  margin-top: 24px;
  font-size: 12px;
  color: #868686;
`;

export const TranslationsContainer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const TranslationText = styled.p<{hasManyTranslations?: boolean}>`
  font-size: ${({hasManyTranslations}) => (hasManyTranslations ? '12px' : '16px')};
  color: #000;
  font-weight: bold;

  &:not(:first-of-type) {
    margin-left: 16px;
  }
`;

export const ExamplesContainer = styled.div`
  margin-top: 8px;
  width: 100%;
`;

export const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 24px;
  }
`;

export const ExampleLocal = styled.p`
  width: 100%;
  font-size: 12px;
  color: #434343;
`;

export const ExampleForeign = styled.p`
  margin-top: 2px;
  width: 100%;
  font-size: 12px;
  font-weight: bold;
  color: #000;
`;

export const Spinner = styled(LoadingSpinner)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Error = styled.p`
  width: 100%;
  text-align: center;
  font-size: 16px;
`;
