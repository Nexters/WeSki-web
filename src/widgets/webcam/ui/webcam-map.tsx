import type { SpringValue } from '@react-spring/web';
import React, { forwardRef } from 'react';
import SlopCamera from '@/features/slop/ui/slop-camera';
import SlopMap from '@/features/slop/ui/slop-map';
import type { ResortInfo } from '@/entities/slop/model/model';
import { cn } from '@/shared/lib';

interface WebcamMapProps extends ResortInfo {
  selectedSlop: string | null;
  containerRef: React.RefObject<HTMLElement>;
  onCameraClick: (
    event: React.MouseEvent<HTMLElement>,
    {
      scale,
      id,
    }: {
      scale: number;
      id: string;
    }
  ) => void;
  style: {
    scale: SpringValue<number>;
    x: SpringValue<number>;
    y: SpringValue<number>;
  };
}

const WebcamMap = forwardRef<HTMLDivElement, WebcamMapProps>(
  ({ slops, style, MapComponent, selectedSlop, onCameraClick, containerRef }, ref) => {
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
                onCameraClick={onCameraClick}
              />
            ))}
        </SlopMap>
      </section>
    );
  }
);

WebcamMap.displayName = 'WebcamMap';

export default WebcamMap;
