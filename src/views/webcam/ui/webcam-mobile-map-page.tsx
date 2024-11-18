'use client';

import React, { useCallback, useState } from 'react';
import { WebcamMap, WebcamSlopeList } from '@/widgets/webcam/ui';
import useMapPinch from '@/features/slope/hooks/useMapPinch';
import calculateWebcamPosition from '@/features/slope/lib/calculateWebcamPosition';
import { ResortData } from '@/entities/resort';
import { RESORT_DOMAIN, type Position } from '@/entities/slope/model';
import { cn } from '@/shared/lib';

const WebCamMobileMapPage = ({ resortId }: { resortId?: number }) => {
  const data =
    RESORT_DOMAIN[
      ResortData.find((resort) => resort.id === resortId)?.map as keyof typeof RESORT_DOMAIN
    ];
  const [cameraPositions, setCameraPositions] = useState<{
    [key: string]: Position;
  }>({});
  const { ref, style, api, containerRef } = useMapPinch();

  const updateCameraPosition = useCallback((id: string, position: Position) => {
    setCameraPositions((prev) => ({ ...prev, [id]: position }));
  }, []);

  const handleFocusSlopCamClick = ({ id, scale }: { id: string; scale: number }) => {
    gtag('event', 'details_webcam_webcam_click', { detail_type: resortId, webcam_type: id });
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
        isWebview
        containerRef={containerRef}
        slopes={data.slopes}
        webcams={data.webcams}
        MapComponent={data.MapComponent}
        onCameraClick={handleFocusSlopCamClick}
        updateCameraPosition={updateCameraPosition}
      />
      <WebcamSlopeList
        webcams={data.webcams}
        list={data.slopes}
        onItemClick={handleFocusSlopCamClick}
      />
    </main>
  );
};

export default WebCamMobileMapPage;
