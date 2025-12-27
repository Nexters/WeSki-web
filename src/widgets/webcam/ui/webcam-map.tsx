import type { SpringValue } from '@react-spring/web';
import type { ComponentType } from 'react';
import React, { forwardRef } from 'react';

import type { Position, Slope, Webcam } from '@/entities/slope/model';
import useSlopeStore from '@/features/slope/hooks/useSlopeStore';
import SlopeCamera from '@/features/slope/ui/slope-camera';
import SlopeMap from '@/features/slope/ui/slope-map';
import { cn } from '@/shared/lib';

const DEBUG_WEBCAM_CLICK = false;

interface WebcamMapProps {
  isWebview?: boolean;
  MapComponent: ComponentType;
  slopes: Slope[];
  webcams: Webcam[];
  containerRef: React.RefObject<HTMLElement>;
  onCameraClick: ({ scale, id }: { scale: number; id: number }) => void;
  style: {
    scale: SpringValue<number>;
    x: SpringValue<number>;
    y: SpringValue<number>;
  };
  updateCameraPosition: (id: number, position: Position) => void;
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

    const handleWebcamClick = (e: React.MouseEvent<HTMLElement>) => {
      if (!DEBUG_WEBCAM_CLICK) return;

      const section = e.currentTarget;
      const rect = section.getBoundingClientRect();

      // 웹캠 아이콘 크기 24px을 퍼센트로 변환
      const iconWidthPercent = (24 / rect.width) * 100;
      const iconHeightPercent = (24 / rect.height) * 100;

      // 클릭 위치를 퍼센트로 변환하고, 아이콘 크기의 절반을 빼서 중앙 정렬
      const x = ((e.clientX - rect.left) / rect.width) * 100 - iconWidthPercent / 2;
      const y = ((e.clientY - rect.top) / rect.height) * 100 - iconHeightPercent / 2;

      console.log({ x, y });
    };

    return (
      <section
        id="webcam"
        className={cn('relative aspect-[25/14] w-full overflow-hidden')}
        ref={containerRef}
        onClick={handleWebcamClick}
      >
        <SlopeMap MapComponent={MapComponent} ref={ref} slopes={slopes} style={style}>
          {webcams.map((webcam) => {
            const slop = slopes.filter((slop) => slop.webcamNo === webcam.number);
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
