import React from 'react';
import WebcamMobileMapPage from '@/views/webcam/ui/webcam-mobile-map-page';
import { ResortData } from '@/entities/resort';
import { RESORT_DOMAIN } from '@/entities/slope/model';

const Page = ({ params }: { params: { key: string } }) => {
  if (!(params.key in RESORT_DOMAIN)) {
    const key = ResortData.find((resort) => resort.id === +params.key)?.map;
    return (
      <WebcamMobileMapPage
        resortId={+params.key}
        data={RESORT_DOMAIN[key as keyof typeof RESORT_DOMAIN]}
      />
    );
  }

  const domain = RESORT_DOMAIN[params?.key as keyof typeof RESORT_DOMAIN];

  return <WebcamMobileMapPage data={domain} />;
};

export default Page;
