import react from 'react';
import {UserContainer, UserAvatarContainer, UserImage, UserName} from './styles';

interface IProps {
  userName: string;
  imgSrc: string;
  userCount: number;
}

const CallMember = ({userName, imgSrc, userCount}: IProps) => {
  return (
    <UserContainer>
      <UserAvatarContainer userCount={userCount}>
        <UserImage src={imgSrc} />
      </UserAvatarContainer>
      <UserName>{userName}</UserName>
    </UserContainer>
  );
};

export default CallMember;
