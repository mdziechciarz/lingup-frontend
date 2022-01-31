import styled from 'styled-components';

export const Button = styled.button`
  width: 56px;
  height: 56px;
  position: absolute;
  bottom: 128px;
  right: 24px;
  border-radius: 50%;
  background: linear-gradient(192.86deg, #ef473a 9.27%, #cb2d3e 90.77%), #c4c4c4;

  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  font-size: 36px;
  color: white;
  cursor: pointer;

  & > span {
    display: none;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    position: static;
    margin-left: auto;
    margin-bottom: 16px;
    width: auto;
    height: 60px;
    padding: 0 76px;
    border-radius: 28px;
    font-size: 20px;

    & > span {
      display: initial;
      text-transform: uppercase;
      font-weight: 600;
      margin-right: 4px;
    }
  }
`;
