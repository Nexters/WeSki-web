import type { SpringValue } from '@react-spring/web';
import React, { forwardRef } from 'react';
import useSlopStore from '@/features/slop/hooks/useSlopStore';
import SlopCamera from '@/features/slop/ui/slop-camera';
import SlopMap from '@/features/slop/ui/slop-map';
import type { Position, ResortInfo } from '@/entities/slop/model/model';
import { cn } from '@/shared/lib';

interface WebcamMapProps extends ResortInfo {
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
      slops,
      webcams,
      style,
      MapComponent,
      onCameraClick,
      containerRef,
      updateCameraPosition,
    },
    ref
  ) => {
    const { selectedSlop } = useSlopStore();

    return (
      <section className={cn('relative aspect-[25/14] w-full overflow-hidden')} ref={containerRef}>
        <SlopMap MapComponent={MapComponent} ref={ref} slops={slops} style={style}>
          {webcams.map((webcam) => {
            const slop = slops.filter((slop) => slop.webcamId === webcam.id);
            // webcam을 띄워야 하는 slop를 찾음

            return (
              <SlopCamera
                isWebview={isWebview}
                key={webcam.id}
                webcam={webcam}
                webcamScale={style.scale.animation.to as number}
                isOpen={slop.some((item) => item.id === selectedSlop)}
                containerRef={containerRef}
                onCameraClick={onCameraClick}
                updateCameraPosition={updateCameraPosition}
              />
            );
          })}
        </SlopMap>
      </section>
    );
  }
);

WebcamMap.displayName = 'WebcamMap';

export default WebcamMap;
