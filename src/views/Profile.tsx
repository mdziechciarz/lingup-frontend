import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import UserDetails from 'components/UserDetails';
import UserLanguages from 'components/UserLanguages';

const Profile = () => {
  return (
    <MainTemplate>
      <UserDetails />
      <UserLanguages />
    </MainTemplate>
  );
};

export default Profile;
