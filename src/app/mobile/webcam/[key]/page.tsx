import { redirect } from 'next/navigation';
import React from 'react';
import WebcamMobileMapPage from '@/pages/webcam/ui/webcam-mobile-map-page';
import { JISAN } from '@/entities/slop/model';
import ELYSIAN_GANGCHON from '@/entities/slop/model/elysian-gangchon';
import GONJIAM from '@/entities/slop/model/gonjiam';
import HIGH1 from '@/entities/slop/model/high1';
import VIVALDIPARK from '@/entities/slop/model/vivaldipark';

const domainMap = {
  jisan: JISAN,
  high1: HIGH1,
  gonjiam: GONJIAM,
  vivaldipark: VIVALDIPARK,
  'elysian-gangchon': ELYSIAN_GANGCHON,
};

const Page = ({ params }: { params: { key: string } }) => {
  if (!(params.key in domainMap)) {
    redirect('/not-found');
  }

  const domain = domainMap[params.key as keyof typeof domainMap];

  return <WebcamMobileMapPage data={domain} />;
};

export default Page;
