import {Icon} from '@iconify/react';
import React from 'react';

import styled, {css} from 'styled-components';

export const StyledButton = styled.button<{
  secondary?: boolean;
  ghost?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}>`
  /* width: ${({fullWidth}) => (fullWidth ? '100%' : 'auto')}; */
  width: 100%;
  height: 48px;
  border-radius: 30px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  background: linear-gradient(192.86deg, #ef473a 9.27%, #cb2d3e 90.77%), #c4c4c4;
  color: white;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: linear-gradient(192.86deg, #d42b1f 9.27%, #cf2132 90.77%), #c4c4c4;
  }
  &:disabled {
    background: linear-gradient(192.86deg, #fdc8c4 9.27%, #edc4c9 90.77%), #000000;
    cursor: unset;
  }

  ${({secondary}) =>
    secondary &&
    css`
      background: none;
      background-color: #2d3142;

      &:hover {
        background: none;
        background-color: #292c3a;
      }
      &:disabled {
        background: none;
        background-color: #adb0be;
      }
    `}

  ${({ghost}) =>
    ghost &&
    css`
      border: none;
      outline: none;
      background: none;
      background-color: #fff;
      color: #000;
      font-weight: 400;

      &:hover {
        background: none;
        background-color: #ebebeb;
      }
      &:disabled {
        background: none;
        background-color: #fff;
        color: #505050;
      }
    `}
`;

const IconContainer = styled.span`
  margin-left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

interface IProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => any;
  iconName?: string;
  secondary?: boolean;
  ghost?: boolean;
  disabled?: boolean;
}

const Button = ({
  className = '',
  children,
  iconName,
  secondary,
  ghost,
  disabled,
  onClick,
}: IProps) => {
  return (
    <StyledButton
      className={className}
      secondary={secondary}
      disabled={disabled}
      ghost={ghost}
      onClick={onClick}
    >
      {children}
      {iconName && (
        <IconContainer>
          <Icon icon={iconName} />
        </IconContainer>
      )}
    </StyledButton>
  );
};

export default Button;
