import { redirect } from 'next/navigation';
import React from 'react';
import WebcamMobileMapPage from '@/pages/slop-status/ui/slop-status-page';
import { RESORT_DOMAIN } from '@/entities/slop/model';

const isValidKey = (key: string): key is keyof typeof RESORT_DOMAIN => key in RESORT_DOMAIN;

const Page = ({ params }: { params: { key: string } }) => {
  if (!isValidKey(params.key)) {
    redirect('/not-found');
  }

  return <WebcamMobileMapPage params={params as { key: keyof typeof RESORT_DOMAIN }} />;
};

export default Page;
