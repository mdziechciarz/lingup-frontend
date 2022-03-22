import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import UserDetails from 'components/Profile/UserDetails';
import UserLanguages from 'components/Profile/UserLanguages';

const Profile = () => {
  return (
    <MainTemplate>
      <UserDetails />
      <UserLanguages />
    </MainTemplate>
  );
};

export default Profile;
