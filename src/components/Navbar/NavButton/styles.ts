import styled from 'styled-components';
import {Link as RouterLink} from 'react-router-dom';

export const Container = styled.li`
  width: 60px;
  height: 60px;
  order: 1;

  &:nth-child(2) {
    order: 0;
  }
  &:not(:last-child) {
    margin-right: 60px;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    transition: background-color 0.2s;

    &:hover {
      background-color: #f46b6d;
    }

    &:nth-child(2) {
      order: 1;
    }
    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 36px;
    }
  }
`;

export const Link = styled(RouterLink)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* No blue highlight on click */
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & svg {
    font-size: 40px;
    color: #fff;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    & svg {
      font-size: 56px;
    }
  }
`;
