import React from 'react';
import WebcamMobileMapPage from '@/views/webcam/ui/webcam-mobile-map-page';

const Page = ({ params }: { params: { resortId: string } }) => {
  <WebcamMobileMapPage resortId={+params.resortId} />;
};

export default Page;
