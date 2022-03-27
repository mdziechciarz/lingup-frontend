import React from 'react';
import GroupCall from 'views/GroupCall';
import PartnerCall from 'views/PartnerCall';

const Call = () => {
  const isPartnerCall = false;

  if (isPartnerCall) return <PartnerCall />;
  return <GroupCall />;
};

export default Call;
