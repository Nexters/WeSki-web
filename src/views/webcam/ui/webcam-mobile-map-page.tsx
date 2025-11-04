'use client';

import { useQuery } from '@tanstack/react-query';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { ResortData } from '@/entities/resort';
import { slopeApi } from '@/entities/slope';
import { RESORT_DOMAIN, type Position } from '@/entities/slope/model';
import type { Slope, Webcam } from '@/entities/slope/model';
import useMapPinch from '@/features/slope/hooks/useMapPinch';
import calculateWebcamPosition from '@/features/slope/lib/calculateWebcamPosition';
import { cn } from '@/shared/lib';
import postAppMessage from '@/shared/lib/postAppMessage';
import { WebcamMap, WebcamSlopeList } from '@/widgets/webcam/ui';


const WebCamMobileMapPage = ({ resortId }: { resortId?: number }) => {
  const { data: slopeRawData } = useQuery(slopeApi.slopeQueries.slope(resortId ?? 0));
  const key = ResortData.find((resort) => resort.id === resortId)
    ?.map as keyof typeof RESORT_DOMAIN;
  const slopes = slopeRawData?.slopes
    .filter((slope) =>
      RESORT_DOMAIN[key].slopes.find((slopeConstant) => slopeConstant.id === slope.slopeId)
    )
    .map((slope) => ({
      ...slope,
      ...RESORT_DOMAIN[key].slopes.find((slopeConstant) => slopeConstant.id === slope.slopeId),
    })) as Slope[];
  const webcams = slopeRawData?.webcams
    .filter((webcam) =>
      RESORT_DOMAIN[key].webcams.find((webcamConstant) => webcamConstant.id === webcam.number)
    )
    .map((webcam) => ({
      ...webcam,
      ...RESORT_DOMAIN[key].webcams.find((webcamConstant) => webcamConstant.id === webcam.number),
    })) as Webcam[];

  const mainRef = useRef<HTMLDivElement>(null);
  const [cameraPositions, setCameraPositions] = useState<{
    [key: number]: Position;
  }>({});
  const { ref, style, api, containerRef } = useMapPinch();

  const updateCameraPosition = useCallback((id: number, position: Position) => {
    setCameraPositions((prev) => ({ ...prev, [id]: position }));
  }, []);

  const handleFocusSlopCamClick = ({ id, scale }: { id: number; scale: number }) => {
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

  useEffect(() => {
    if (!mainRef.current) return;
    postAppMessage('setHeight', mainRef.current?.offsetHeight.toString(), true, () => {});
  }, [slopeRawData]);

  if (!slopes || !webcams) return;

  return (
    <main className={cn('w-full')} ref={mainRef}>
      <WebcamMap
        ref={ref}
        style={style}
        isWebview
        containerRef={containerRef}
        slopes={slopes}
        webcams={webcams}
        MapComponent={RESORT_DOMAIN[key].MapComponent}
        onCameraClick={handleFocusSlopCamClick}
        updateCameraPosition={updateCameraPosition}
      />
      <WebcamSlopeList webcams={webcams} slopes={slopes} onItemClick={handleFocusSlopCamClick} />
    </main>
  );
};

export default WebCamMobileMapPage;
