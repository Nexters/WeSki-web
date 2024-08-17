import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { Webcam } from '@/entities/slop/model/model';
import { cn } from '@/shared/lib';
import CameraButton from '@/shared/ui/cam-button';
import { Tooltip } from '@/shared/ui/tooltip';
import SlopVideo from './slop-video';

interface SlopWebcamProps {
  webcam: Webcam;
  isOpen: boolean;
  containerRef: React.RefObject<HTMLElement>;
  onCameraClick: (
    event: React.MouseEvent<HTMLDivElement>,
    {
      scale,
      id,
    }: {
      scale: number;
      id: string;
    }
  ) => void;
}

const SlopCamera = ({
  webcam: { scale, name, position, src },
  isOpen,
  containerRef,
  onCameraClick,
}: SlopWebcamProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleVideo = () => {
    setIsVideoOpen((pre) => !pre);
  };

  return (
    <>
      <div
        className={cn('absolute z-10', position.top, position.left)}
        ref={ref}
        onClick={(e) => onCameraClick(e, { scale, id: name })}
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
