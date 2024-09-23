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
    padding: 40px 80px;
  }
`;

export const ButtonsContainer = styled.div`
  padding: 0 40px;
  margin-top: 16px;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    padding: 0 80px;
    display: grid;
    grid-template-columns: 1fr 1.25fr;
    grid-column-gap: 8px;

    & > button:first-child {
      order: 1;
    }
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 170px;
  border: none;
  border-radius: 10px;
  padding: 18px 12px;
  font-size: 14px;
  background-color: #f2f2f2;
  resize: none;

  &::placeholder {
    color: #a3a3a3;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    padding: 16px 20px;
  }
`;
