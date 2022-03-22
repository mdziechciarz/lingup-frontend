import styled from 'styled-components';

export const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 24px 40px;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    padding: 24px 80px;
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
  margin: 40px 0;
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
`;
