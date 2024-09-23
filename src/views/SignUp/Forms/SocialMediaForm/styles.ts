import styled from 'styled-components';

export const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 50px 40px;
  flex-wrap: wrap;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    padding: 50px 80px;
  }
`;

export const ButtonsContainer = styled.div`
  padding: 0 40px;
  margin-top: 16px;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    padding: 0 80px;
  }
`;

export const ConnectButton = styled.button`
  margin-bottom: 16px;
  padding: 0 20px;
  width: 100%;
  height: 48px;
  border-radius: 10px;
  border: none;
  font-size: 14px;
  background-color: #f2f2f2;
  text-align: left;
  padding-left: 24px;

  display: flex;
  align-items: center;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Logo = styled.img`
  height: 20px;
  margin-right: 8px;
`;
