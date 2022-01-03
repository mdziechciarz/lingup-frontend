import React from 'react';
import {Container, List} from './styles';
import NavButton from './NavButton';
import {Icon} from '@iconify/react';

const NavBar = (): JSX.Element => (
  <Container>
    <List>
      <NavButton to="/" defaultIcon="fluent:home-16-regular" activeIcon="fluent:home-12-filled" />
      <NavButton
        to="/1on1"
        defaultIcon="fluent:call-16-regular"
        activeIcon="fluent:call-16-filled"
      />
      <NavButton
        to="/profile"
        defaultIcon="fluent:person-16-regular"
        activeIcon="fluent:person-16-filled"
      />
    </List>
  </Container>
);

export default NavBar;
