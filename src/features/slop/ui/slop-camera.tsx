import type { SpringRef } from '@react-spring/web';
import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import calculateWebcamPosition from '@/features/slop/lib/calculateWebcamPosition';
import type { Webcam } from '@/entities/slop/model/model';
import { cn } from '@/shared/lib';
import CameraButton from '@/shared/ui/cam-button';
import { Tooltip } from '@/shared/ui/tooltip';
import SlopVideo from './slop-video';

interface SlopWebcamProps {
  webcam: Webcam;
  isOpen: boolean;
  containerRef: React.RefObject<HTMLElement>;
  setSelectedSlop: React.Dispatch<React.SetStateAction<string | null>>;
  api: SpringRef<{
    scale: number;
    x: number;
    y: number;
  }>;
}

const SlopCamera = ({
  webcam: { scale, name, position, src },
  isOpen,
  containerRef,
  setSelectedSlop,
  api,
}: SlopWebcamProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleVideo = () => {
    setIsVideoOpen((pre) => !pre);
  };

  const handleCameraClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = containerRef.current!.getBoundingClientRect();
    const { boundedX, boundedY } = calculateWebcamPosition({
      containerPosition: { left, top, width, height },
      position: { x: event.clientX, y: event.clientY },
      scale: scale,
    });
    setSelectedSlop(null);
    api.start({ scale: scale, x: boundedX, y: boundedY });
  };

  return (
    <>
      <div
        className={cn('absolute z-10', position.top, position.left)}
        ref={ref}
        onClick={handleCameraClick}
      >
        <div className={cn('relative')}>
          <Tooltip trigger={<CameraButton />} isOpen={isOpen}>
            <p className={cn('body3-medium')} onClick={toggleVideo}>
              {name}
            </p>
          </Tooltip>
        </div>
      </div>
      {containerRef?.current &&
        isVideoOpen &&
        src &&
        createPortal(<SlopVideo src={src} closeVideo={toggleVideo} />, containerRef.current)}
    </>
  );
};

export default SlopCamera;
