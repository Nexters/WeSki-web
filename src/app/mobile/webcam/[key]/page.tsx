import { redirect } from 'next/navigation';
import React from 'react';
import WebcamMobileMapPage from '@/pages/webcam/ui/webcam-mobile-map-page';
import { RESORT_DOMAIN } from '@/entities/slop/model';

const Page = ({ params }: { params: { key: string } }) => {
  if (!(params?.key in RESORT_DOMAIN)) {
    redirect('/not-found');
  }

  const domain = RESORT_DOMAIN[params?.key as keyof typeof RESORT_DOMAIN];

  return <WebcamMobileMapPage data={domain} />;
};

export default Page;
