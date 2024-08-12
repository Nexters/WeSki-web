'use client';

import React from 'react';
import { WebcamMap, WebcamSlopList } from '@/widgets/webcam/ui';
import { JISAN } from '@/entities/slop/model';
import { cn } from '@/shared/lib';

const WebCamMobileMapPage = () => {
  const DUMMY2 = JISAN;
  return (
    <main className={cn('w-full')}>
      <WebcamMap slops={DUMMY2.slops} mapSrc={DUMMY2.map} />
      <WebcamSlopList
        list={DUMMY2.slops.map((item) => ({
          ...item,
          isWebcam: !!item.webcam,
        }))}
      />
    </main>
  );
};

export default WebCamMobileMapPage;
