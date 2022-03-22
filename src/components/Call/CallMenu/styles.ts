import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 96px;
  /* bottom: 10vh; */
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;

  & button:not(:last-of-type) {
    margin-right: 24px;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    /* margin-left: 136px; */
    padding-left: 136px;
  }
`;

export const Button = styled.button`
  width: 88px;
  height: 56px;
  border-radius: 28px;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #fff;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const MicButton = styled(Button)<{isOn: boolean}>`
  background-color: ${({isOn}) => (isOn ? '#CFD5ED' : '#000')};

  &:hover {
    background-color: ${({isOn}) => (isOn ? '#C0C6DF' : '#1b1b1b')};
  }
`;

export const TranslatorButton = styled(Button)`
  background-color: #35be5b;

  &:hover {
    background-color: #2fb454;
  }
`;

export const LeaveCallButton = styled(Button)`
  background-color: #c10202;

  &:hover {
    background-color: #ac0101;
  }
`;
