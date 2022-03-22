import styled from 'styled-components';

export const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    padding: 0 80px;
  }
`;

export const DropdownWrapper = styled.div`
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  padding: 0 40px;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    padding: 0 80px;
  }
`;
