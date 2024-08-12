'use client';

import React from 'react';
import { WebcamMap, WebcamSlopList } from '@/widgets/webcam/ui';
import { cn } from '@/shared/lib';

const WebCamMobileMapPage = () => {
  const DUMMY = [
    {
      id: '1',
      text: 'Slope 1',
      level: 'BEGINNER' as const,
      isOpen: true,
    },
    {
      id: '2',
      text: 'Slope 2',
      level: 'UPPER_BEGINNER' as const,
      isOpen: false,
    },
  ];
  return (
    <main className={cn('w-full')}>
      <WebcamMap />
      <WebcamSlopList list={DUMMY} />
    </main>
  );
};

export default WebCamMobileMapPage;
