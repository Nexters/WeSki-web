import React, { useRef } from 'react';
import useMapPinch from '@/features/slop/hooks/useMapPinch';
import SlopCamera from '@/features/slop/ui/slop-camera';
import SlopMap from '@/features/slop/ui/slop-map';
import type { ResortInfo } from '@/entities/slop/model/model';
import { cn } from '@/shared/lib';

interface WebcamMapProps extends ResortInfo {
  selectedSlop: string | null;
  setSelectedSlop: React.Dispatch<React.SetStateAction<string | null>>;
}

const WebcamMap = ({ slops, MapComponent, selectedSlop, setSelectedSlop }: WebcamMapProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const { ref, style, api } = useMapPinch(containerRef);

  return (
    <section className={cn('relative aspect-[25/14] w-full overflow-hidden')} ref={containerRef}>
      <SlopMap
        MapComponent={MapComponent}
        ref={ref}
        slops={slops}
        selectedSlop={selectedSlop}
        style={style}
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
              webcam={webcam}
              isOpen={selectedSlop === id}
              containerRef={containerRef}
              api={api}
              setSelectedSlop={setSelectedSlop}
            />
          ))}
      </SlopMap>
    </section>
  );
};

export default WebcamMap;
