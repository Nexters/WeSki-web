'use client';

import React, { useCallback, useState } from 'react';
import { WebcamMap, WebcamSlopList } from '@/widgets/webcam/ui';
import useMapPinch from '@/features/slop/hooks/useMapPinch';
import calculateWebcamPosition from '@/features/slop/lib/calculateWebcamPosition';
import { JISAN } from '@/entities/slop/model';
import type { Position } from '@/entities/slop/model/model';
import { cn } from '@/shared/lib';

const WebCamMobileMapPage = () => {
  const DUMMY2 = JISAN;

  const [cameraPositions, setCameraPositions] = useState<{
    [key: string]: Position;
  }>({});
  const { ref, style, api, containerRef } = useMapPinch();

  const updateCameraPosition = useCallback((id: string, position: Position) => {
    setCameraPositions((prev) => ({ ...prev, [id]: position }));
  }, []);

  const handleFocusSlopCamClick = ({ id, scale }: { id: string; scale: number }) => {
    const { left, top, width, height } = containerRef.current!.getBoundingClientRect();
    const { boundedX, boundedY } = calculateWebcamPosition({
      containerPosition: { left, top, width, height },
      position: {
        x: cameraPositions[id].x,
        y: cameraPositions[id].y,
      },
      scale: scale,
    });
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
        onCameraClick={handleFocusSlopCamClick}
        updateCameraPosition={updateCameraPosition}
      />
      <WebcamSlopList list={DUMMY2.slops} onItemClick={handleFocusSlopCamClick} />
    </main>
  );
};

export default WebCamMobileMapPage;
