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
      <WebcamMap
        slops={DUMMY2.slops}
        MapComponent={DUMMY2.MapComponent}
        selectedSlop={selectedSlop}
        setSelectedSlop={setSelectedSlop}
      />
      <WebcamSlopList
        list={DUMMY2.slops.map((item) => ({
          ...item,
          isWebcam: !!item.webcam,
        }))}
        selectedSlop={selectedSlop}
        setSelectedSlop={setSelectedSlop}
      />
    </main>
  );
};

export default WebCamMobileMapPage;
