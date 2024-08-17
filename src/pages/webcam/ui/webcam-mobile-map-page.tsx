'use client';

import React, { useState } from 'react';
import { WebcamMap, WebcamSlopList } from '@/widgets/webcam/ui';
import useMapPinch from '@/features/slop/hooks/useMapPinch';
import calculateWebcamPosition from '@/features/slop/lib/calculateWebcamPosition';
import { JISAN } from '@/entities/slop/model';
import { cn } from '@/shared/lib';

const WebCamMobileMapPage = () => {
  const DUMMY2 = JISAN;
  const [selectedSlop, setSelectedSlop] = useState<string | null>(null);
  const { ref, style, api, containerRef } = useMapPinch();

  const handleFocusSlopCamClick = (
    event: React.MouseEvent<HTMLElement>,
    {
      id,
      scale,
    }: {
      id: string;
      scale: number;
    }
  ) => {
    const { left, top, width, height } = containerRef.current!.getBoundingClientRect();
    const { boundedX, boundedY } = calculateWebcamPosition({
      containerPosition: { left, top, width, height },
      position: { x: event.clientX, y: event.clientY },
      scale: scale,
    });

    if (selectedSlop === id) {
      setSelectedSlop(null);
    } else {
      setSelectedSlop(id);
    }
    api.start({ scale: scale, x: boundedX, y: boundedY });
  };

  return (
    <main className={cn('w-full')}>
      <WebcamMap
        ref={ref}
        style={style}
        containerRef={containerRef}
        slops={DUMMY2.slops}
        MapComponent={DUMMY2.MapComponent}
        selectedSlop={selectedSlop}
        onCameraClick={handleFocusSlopCamClick}
      />
      <WebcamSlopList
        list={DUMMY2.slops.map((item) => ({
          ...item,
          isWebcam: !!item.webcam,
        }))}
        selectedSlop={selectedSlop}
        setSelectedSlop={setSelectedSlop}
        onItemClick={handleFocusSlopCamClick}
      />
    </main>
  );
};

export default WebCamMobileMapPage;
