import React from 'react';
import WebcamMobileMapPage from '@/views/slop-status/ui/slop-status-page';

const Page = ({ params }: { params: { resortId: string } }) => {
  return <WebcamMobileMapPage resortId={+params.resortId} />;
};

export default Page;
