import type { SpringValue } from '@react-spring/web';
import React, { forwardRef } from 'react';
import useSlopeStore from '@/features/slope/hooks/useSlopeStore';
import SlopeCamera from '@/features/slope/ui/slope-camera';
import SlopeMap from '@/features/slope/ui/slope-map';
import type { Position, ResortConstant } from '@/entities/slope/model';
import { cn } from '@/shared/lib';

interface WebcamMapProps extends ResortConstant {
  isWebview?: boolean;
  containerRef: React.RefObject<HTMLElement>;
  onCameraClick: ({ scale, id }: { scale: number; id: string }) => void;
  style: {
    scale: SpringValue<number>;
    x: SpringValue<number>;
    y: SpringValue<number>;
  };
  updateCameraPosition: (id: string, position: Position) => void;
}

const WebcamMap = forwardRef<HTMLDivElement, WebcamMapProps>(
  (
    {
      isWebview,
      slopes,
      webcams,
      style,
      MapComponent,
      onCameraClick,
      containerRef,
      updateCameraPosition,
    },
    ref
  ) => {
    const { selectedSlope } = useSlopeStore();

    return (
      <section className={cn('relative aspect-[25/14] w-full overflow-hidden')} ref={containerRef}>
        <SlopeMap MapComponent={MapComponent} ref={ref} slopes={slopes} style={style}>
          {webcams.map((webcam) => {
            const slop = slopes.filter((slop) => slop.webcamId === webcam.id);
            // webcam을 띄워야 하는 slop를 찾음

            return (
              <SlopeCamera
                isWebview={isWebview}
                key={webcam.id}
                webcam={webcam}
                webcamScale={style.scale.animation.to as number}
                isOpen={slop.some((item) => item.id === selectedSlope)}
                containerRef={containerRef}
                onCameraClick={onCameraClick}
                updateCameraPosition={updateCameraPosition}
              />
            );
          })}
        </SlopeMap>
      </section>
    );
  }
);

WebcamMap.displayName = 'WebcamMap';

export default WebcamMap;
