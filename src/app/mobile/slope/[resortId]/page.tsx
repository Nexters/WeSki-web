import React from 'react';
import SlopeStatusPage from '@/views/slope-status/ui/slope-status-page';

const Page = ({ params }: { params: { resortId: string } }) => {
  return <SlopeStatusPage resortId={+params.resortId} />;
};

export default Page;
