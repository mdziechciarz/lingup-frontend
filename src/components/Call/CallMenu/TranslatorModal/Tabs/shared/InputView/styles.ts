import styled, {css} from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  /* height: 388px; */
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  flex-grow: 1;
  flex-shrink: 1;
`;

export const TextsContainer = styled.div`
  margin-top: 48px;
  width: 100%;
  height: 92px;
  text-overflow: hidden;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Instruction = styled.p`
  width: 100%;
  text-align: center;
  font-size: 16px;
`;

export const InstructionFinal = styled(Instruction)`
  text-align: left;
`;

export const Transcript = styled.p`
  font-size: 16px;
  color: #dd3a3c;
`;

export const TranscriptFinal = styled(Transcript)<{word?: boolean}>`
  margin-top: 4px;
  font-weight: bold;
  display: flex;
  align-items: center;
  ${({word}) => word && 'text-transform: uppercase'}
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

export const VoiceInputButton = styled.button<{listening: boolean}>`
  margin: 0 auto;
  width: 102px;
  height: 102px;
  border-radius: 50%;
  background: linear-gradient(192.86deg, #ef473a 9.27%, #cb2d3e 90.77%), #dd3a3c;
  box-shadow: 0 0 0 0 #dd3a3c;
  color: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({listening}) =>
    listening &&
    css`
      animation: pulse 1.5s infinite cubic-bezier(0.5, 0, 0, 1);
    `} /* animation: pulse 2s infinite cubic-bezier(0.66, 0, 0, 1); */

  @keyframes pulse {
    to {
      box-shadow: 0 0 0 20px rgba(90, 0, 141, 0);
    }
  }
`;

export const VoiceInputButtonIconContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 38px;
`;

export const RepeatVoiceInputButton = styled(VoiceInputButton)`
  border: 1px solid #ef473a;
  background: #fff;
  color: #ef473a;
`;
// TODO: Desktop cancel and confirmation buttons
export const ConfirmButton = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 30px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  background: linear-gradient(192.86deg, #ef473a 9.27%, #cb2d3e 90.77%), #c4c4c4;
  color: white;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    background: linear-gradient(192.86deg, #fdc8c4 9.27%, #edc4c9 90.77%),
      linear-gradient(192.86deg, #ef473a 9.27%, #cb2d3e 90.77%), #000000;
    cursor: unset;
  }

  & span {
    margin-left: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
`;

export const CancelButton = styled(ConfirmButton)<{ghost?: boolean}>`
  background: none;
  background-color: #2d3142;
  ${({ghost}) =>
    ghost &&
    css`
      background-color: transparent;
      color: #000;
      font-weight: 400;
    `};
`;

export const VoiceInputButtonCaption = styled.span`
  display: block;
  margin-top: 4px;
  color: white;
  font-size: 10px;
  text-transform: uppercase;
`;
