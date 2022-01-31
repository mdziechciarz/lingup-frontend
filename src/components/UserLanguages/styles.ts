import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 766px;
  margin: 0 auto;
  padding: 0 0 24px;
`;
export const Title = styled.h5`
  width: 100%;
  font-weight: bold;
  font-size: 18px;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    font-size: 24px;
  }
`;
export const LanguagesContainer = styled.div`
  width: 100%;
  margin-top: 16px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
