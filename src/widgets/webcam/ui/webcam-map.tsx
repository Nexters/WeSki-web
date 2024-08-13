import type { StaticImageData } from 'next/image';
import type { ComponentType } from 'react';
import React, { useRef } from 'react';
import SlopCamera from '@/features/slop/ui/slop-camera';
import SlopMap from '@/features/slop/ui/slop-map';
import type { Level } from '@/entities/slop/model/model';
import { cn } from '@/shared/lib';

interface WebcamMapProps {
  slops: {
    id: string;
    level: Level;
    Element: ComponentType<{
      color?: string;
    }>;
    webcam: {
      id: string;
      name: string;
      position: {
        top: string;
        left: string;
      };
      src?: string;
    } | null;
  }[];
  mapSrc: StaticImageData;
  selectedSlop: string | null;
}

const WebcamMap = ({ slops, mapSrc, selectedSlop }: WebcamMapProps) => {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section className={cn('relative aspect-[25/14] w-full overflow-hidden')} ref={containerRef}>
      <SlopMap
        mapSrc={mapSrc}
        containerRef={containerRef}
        slops={slops}
        selectedSlop={selectedSlop}
      >
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
              id={webcam.id}
              name={webcam.name}
              position={webcam.position}
              isOpen={selectedSlop === id}
              videoSrc={webcam.src}
            />
          ))}
      </SlopMap>
    </section>
  );
};

export default WebcamMap;
