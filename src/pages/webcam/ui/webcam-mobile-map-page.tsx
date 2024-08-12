'use client';

import React, { useState } from 'react';
import { WebcamMap, WebcamSlopList } from '@/widgets/webcam/ui';
import { JISAN } from '@/entities/slop/model';
import { cn } from '@/shared/lib';

const WebCamMobileMapPage = () => {
  const DUMMY2 = JISAN;
  const [selectedSlop, setSelectedSlop] = useState<string | null>(null);
  return (
    <main className={cn('w-full')}>
      <WebcamMap slops={DUMMY2.slops} mapSrc={DUMMY2.map} selectedSlop={selectedSlop} />
      <WebcamSlopList
        list={DUMMY2.slops.map((item) => ({
          ...item,
          isWebcam: !!item.webcam,
        }))}
        setSelectedSlop={setSelectedSlop}
      />
    </main>
  );
};

export default WebCamMobileMapPage;
