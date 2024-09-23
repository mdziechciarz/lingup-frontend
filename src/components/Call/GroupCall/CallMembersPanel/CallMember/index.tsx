import React from 'react';
import {UserContainer, UserAvatarContainer, UserImage, UserName} from './styles';

interface IProps {
  className?: string;
  userName: string;
  imgSrc: string;
  userCount: number;
}

const CallMember = ({className, userName, imgSrc, userCount}: IProps) => {
  return (
    <UserContainer className={className || ''}>
      <UserAvatarContainer userCount={userCount}>
        <UserImage src={imgSrc} />
      </UserAvatarContainer>
      <UserName>{userName}</UserName>
    </UserContainer>
  );
};

export default CallMember;
