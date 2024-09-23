import React from 'react';
import PartnerHome from 'views/PartnerHome';
import PartnerSearching from 'views/PartnerSearching';

const Partner = () => {
  const isSearching = false;

  if (isSearching) return <PartnerSearching />;
  return <PartnerHome />;
};

export default Partner;
