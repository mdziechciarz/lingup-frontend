import React from 'react';
import {Container, UserPicture, FullName, Username, Bio} from './styles';

const UserDetails = () => {
  return (
    <Container>
      <UserPicture src="https://randomuser.me/api/portraits/women/54.jpg" />
      <FullName>Caroline Anderson</FullName>
      <Username>@caranders</Username>
      <Bio>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s 😎
      </Bio>
    </Container>
  );
};

export default UserDetails;
