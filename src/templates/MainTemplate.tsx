import React, {ReactNode} from 'react';
import styled from 'styled-components';

import NavBar from 'components/Navbar';

interface IProps {
  children: ReactNode;
}

const MainTemplate = ({children}: IProps): JSX.Element => {
  return (
    <Container>
      <Content>{children}</Content>
      <NavBar />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    flex-direction: row-reverse;
  }
`;

const Content = styled.div`
  max-width: ${({theme}) => theme.breakpoints.XL}px;
  flex-grow: 1;

  @media (min-width: ${({theme}) => theme.breakpoints.M}px) {
    margin: 0 auto;
    padding: 0 48px;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.L}px) {
    padding: 0 72px;
  }
`;

export default MainTemplate;
