'use client';

import React, { useCallback, useState } from 'react';
import { WebcamMap, WebcamSlopList } from '@/widgets/webcam/ui';
import useMapPinch from '@/features/slop/hooks/useMapPinch';
import calculateWebcamPosition from '@/features/slop/lib/calculateWebcamPosition';
import type { Position, ResortInfo } from '@/entities/slop/model/model';
import { cn } from '@/shared/lib';

const WebCamMobileMapPage = ({ data }: { resortId?: number; data: ResortInfo }) => {
  const [cameraPositions, setCameraPositions] = useState<{
    [key: string]: Position;
  }>({});
  const { ref, style, api, containerRef } = useMapPinch();

  const updateCameraPosition = useCallback((id: string, position: Position) => {
    setCameraPositions((prev) => ({ ...prev, [id]: position }));
  }, []);

  const handleFocusSlopCamClick = ({ id, scale }: { id: string; scale: number }) => {
    const { width, height } = containerRef.current!.getBoundingClientRect();
    const { boundedX, boundedY } = calculateWebcamPosition({
      containerPosition: { left: 0, top: 0, width, height },
      position: {
        x: cameraPositions[id].x,
        y: cameraPositions[id].y,
      },
      scale: scale,
    });
    api.start({ scale: scale, x: boundedX, y: boundedY });
  };

  if (!data) return;

  return (
    <main className={cn('w-full')}>
      <WebcamMap
        ref={ref}
        style={style}
        containerRef={containerRef}
        slops={data.slops}
        webcams={data.webcams}
        MapComponent={data.MapComponent}
        onCameraClick={handleFocusSlopCamClick}
        updateCameraPosition={updateCameraPosition}
      />
      <WebcamSlopList
        webcams={data.webcams}
        list={data.slops}
        onItemClick={handleFocusSlopCamClick}
      />
    </main>
  );
};

export default WebCamMobileMapPage;
