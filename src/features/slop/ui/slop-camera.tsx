import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/shared/lib';
import CameraButton from '@/shared/ui/cam-button';
import { Tooltip } from '@/shared/ui/tooltip';
import SlopVideo from './slop-video';

interface SlopWebcamProps {
  id: string;
  name: string;
  position: {
    top: string;
    left: string;
  };
  videoSrc?: string;
  isOpen: boolean;
  renderTarget: React.RefObject<HTMLElement>;
  onCameraClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const SlopCamera = ({
  name,
  position,
  isOpen,
  videoSrc,
  renderTarget,
  onCameraClick,
}: SlopWebcamProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleVideo = () => {
    setIsVideoOpen((pre) => !pre);
  };

  return (
    <>
      <div className={cn('absolute z-10', position.top, position.left)} onClick={onCameraClick}>
        <div className={cn('relative')}>
          <Tooltip trigger={<CameraButton />} isOpen={isOpen}>
            <p className={cn('body3-medium')} onClick={toggleVideo}>
              {name}
            </p>
          </Tooltip>
        </div>
      </div>
      {renderTarget?.current &&
        isVideoOpen &&
        videoSrc &&
        createPortal(<SlopVideo src={videoSrc} closeVideo={toggleVideo} />, renderTarget.current)}
    </>
  );
};

export default SlopCamera;
