import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 766px;
  margin: 0 auto;
  padding: 72px 0 48px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    padding: 224px 0 72px;
  }
`;

export const UserPicture = styled.img`
  width: 176px;
  height: 176px;
  margin: 0 auto;
  display: block;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
`;

export const FullName = styled.p`
  width: 100%;
  margin-top: 16px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #000;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    font-size: 30px;
  }
`;

export const Username = styled.p`
  width: 100%;
  text-align: center;
  font-size: 18px;
  color: #848484;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    font-size: 24px;
  }
`;

export const Bio = styled.p`
  width: 100%;
  margin-top: 24px;
  font-size: 18px;
  text-align: center;
  color: #000;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    font-size: 24px;
  }
`;
