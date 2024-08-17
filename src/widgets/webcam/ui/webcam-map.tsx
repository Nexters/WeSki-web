import type { StaticImageData } from 'next/image';
import type { ComponentType } from 'react';
import React, { useRef } from 'react';
import SlopCamera from '@/features/slop/ui/slop-camera';
import SlopMap from '@/features/slop/ui/slop-map';
import type { Level, ResortInfo } from '@/entities/slop/model/model';
import { cn, getBoundedPositions } from '@/shared/lib';
import useMapPinch from '@/features/slop/hooks/useMapPinch';
import calculateWebcamPosition from '../lib/calculateWebcamPosition';

interface WebcamMapProps extends ResortInfo {
  selectedSlop: string | null;
}

const WebcamMap = ({ slops, map, selectedSlop }: WebcamMapProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const { ref, style, api } = useMapPinch(containerRef);

  return (
    <section className={cn('relative aspect-[25/14] w-full overflow-hidden')} ref={containerRef}>
      <SlopMap mapSrc={map} ref={ref} slops={slops} selectedSlop={selectedSlop} style={style}>
        {slops
          .filter(
            (
              slop
            ): slop is WebcamMapProps['slops'][number] & {
              webcam: NonNullable<WebcamMapProps['slops'][number]['webcam']>;
            } => slop.webcam !== null
          )
          .map(({ id, webcam }) => (
            <SlopCamera
              key={id}
              webcam={webcam}
              isOpen={selectedSlop === id}
              renderTarget={containerRef}
              onCameraClick={(event: React.MouseEvent<HTMLDivElement>) => {
                const { left, top, width, height } = containerRef.current!.getBoundingClientRect();
                const { boundedX, boundedY } = calculateWebcamPosition({
                  containerPosition: { left, top, width, height },
                  position: { x: event.clientX, y: event.clientY },
                  scale: webcam.scale,
                });

                api.start({ scale: webcam.scale, x: boundedX, y: boundedY });
              }}
            />
          ))}
      </SlopMap>
    </section>
  );
};

export default WebcamMap;
