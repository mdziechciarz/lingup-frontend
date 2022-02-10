import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% - 48px);
  max-width: 676px;
  padding: 28px;
  transform: translate(-50%, -50%);
  background-color: white;

  @media (min-width: ${({theme}) => theme.breakpoints.L}px) {
    padding: 36px;
  }
`;

export const TabsContent = styled.div`
  width: 100%;
  height: 388px;
`;

export const CloseButton = styled.button`
  display: none;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    position: absolute;
    top: 28px;
    right: 28px;
    border: none;
    font-size: 28px;
    background: none;
    color: #000;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
