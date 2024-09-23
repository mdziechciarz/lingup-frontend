import styled from 'styled-components';

export const Card = styled.div`
  margin: 24px auto 0;
  padding: 48px 0;
  width: 100%;
  max-width: 580px;
  min-height: 400px;
  max-height: 520px;
  background-color: #fff;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    padding: 80px 0;
    /* width: 580px; */
    max-height: 580px;
  }
`;

export const Title = styled.h1`
  font-size: 22px;
  text-align: center;
  padding: 0 40px;
  line-height: 1.2;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    padding: 0 80px;
    font-size: 28px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  text-align: center;
  padding: 6px 40px 0;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    padding: 0 80px;
    font-size: 16px;
  }
`;
