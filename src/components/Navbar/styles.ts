import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  background-color: #000;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    position: unset;
    width: 136px;
    height: 100%;
    background: linear-gradient(192.86deg, #ef473a 9.27%, #cb2d3e 90.77%), #c4c4c4;
  }
`;

export const List = styled.ul`
  width: auto;
  height: 60px;
  display: flex;
  flex-direction: row;
  list-style: none;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    width: 100%;
    height: auto;
    margin-top: 20vh;
    flex-direction: column;
    align-items: center;
  }
`;
