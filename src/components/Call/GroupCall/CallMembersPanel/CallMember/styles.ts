import styled from 'styled-components';

export const UserContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({theme}) => theme.breakpoints.L}px) {
    padding: 32px;
  }
`;
export const UserAvatarContainer = styled.div<{userCount: number}>`
  position: relative;
  padding-bottom: ${({userCount}) => (userCount > 4 ? '100%' : '80%')};
  width: ${({userCount}) => (userCount > 4 ? '100%' : '80%')};

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    width: 80%;
    padding-bottom: 80%;
  }
`;

export const UserImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #444;
  transition: outline 0.3s;
`;

export const UserName = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: #000;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;
