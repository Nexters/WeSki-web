import type { StaticImageData } from 'next/image';
import type { ComponentType } from 'react';
import React, { useRef } from 'react';
import SlopMap from '@/features/slop/ui/slop-map';
import SlopTooltip from '@/features/slop/ui/slop-tooltip';
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
        {slops.map((slop) => {
          return (
            <React.Fragment key={slop.id}>
              {slop.webcam && (
                <SlopTooltip
                  id={slop.webcam.id}
                  name={slop.webcam.name}
                  position={slop.webcam.position}
                  isOpen={selectedSlop === slop.id}
                />
              )}
            </React.Fragment>
          );
        })}
      </SlopMap>
    </section>
  );
};

export default WebcamMap;
