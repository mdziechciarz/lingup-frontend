import styled from 'styled-components';

export const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 24px 40px;
  flex-wrap: wrap;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    padding: 40px 80px;
  }
`;

export const ButtonsContainer = styled.div`
  padding: 0 40px;
  margin-top: 16px;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    padding: 0 80px;
  }
`;

export const Input = styled.input`
  margin-bottom: 8px;
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 10px;
  padding: 0 20px;
  font-size: 14px;
  background-color: #f2f2f2;
  resize: none;

  &::placeholder {
    color: #a3a3a3;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
export const Label = styled.p`
  width: 100%;
  font-size: 12px;
`;

export const PasswordInputContainer = styled.div`
  width: 100%;
  position: relative;

  & input {
    margin: 0;
  }
`;

export const ShowPasswordButton = styled.button`
  position: absolute;
  top: 50%;
  right: 13px;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  background: none;
  color: #000;
  cursor: pointer;

  &:hover {
    color: #343434;
  }
`;
