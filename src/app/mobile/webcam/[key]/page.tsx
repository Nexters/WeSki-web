import { redirect } from 'next/navigation';
import React from 'react';
import WebcamMobileMapPage from '@/pages/webcam/ui/webcam-mobile-map-page';
import { JISAN } from '@/entities/slop/model';

const domainMap = {
  jisan: JISAN,
};

const Page = ({ params }: { params: { key: string } }) => {
  if (!(params.key in domainMap)) {
    redirect('/not-found');
  }

  const domain = domainMap[params.key as keyof typeof domainMap];

  return <WebcamMobileMapPage data={domain} />;
};

export default Page;
