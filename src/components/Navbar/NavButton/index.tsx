import React from 'react';
import {useLocation} from 'react-router-dom';
import {Container, Link} from './styles';
import {Icon} from '@iconify/react';

interface IProps {
  to: string;
  defaultIcon: string;
  activeIcon: string;
}

const NavButton = ({to = '/', defaultIcon, activeIcon}: IProps): JSX.Element => {
  const {pathname} = useLocation();
  const isActive = pathname === to;

  return (
    <Container>
      <Link to={to}>
        <Icon icon={isActive ? activeIcon : defaultIcon} />
      </Link>
    </Container>
  );
};

export default NavButton;
