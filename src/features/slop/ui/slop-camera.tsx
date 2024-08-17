import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/shared/lib';
import CameraButton from '@/shared/ui/cam-button';
import { Tooltip } from '@/shared/ui/tooltip';
import SlopVideo from './slop-video';
import { Webcam } from '@/entities/slop/model/model';

interface SlopWebcamProps {
  webcam: Webcam;
  isOpen: boolean;
  renderTarget: React.RefObject<HTMLElement>;
  onCameraClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const SlopCamera = ({
  webcam: { id, name, position, src },
  isOpen,
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
        src &&
        createPortal(<SlopVideo src={src} closeVideo={toggleVideo} />, renderTarget.current)}
    </>
  );
};

export default SlopCamera;
