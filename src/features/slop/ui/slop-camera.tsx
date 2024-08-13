import React from 'react';
import { cn } from '@/shared/lib';
import CameraButton from '@/shared/ui/cam-button';
import { Tooltip } from '@/shared/ui/tooltip';

interface SlopWebcamProps {
  id: string;
  name: string;
  position: {
    top: string;
    left: string;
  };
  isOpen: boolean;
}

const SlopCamera = ({ name, position, isOpen }: SlopWebcamProps) => {
  return (
    <div className={cn('absolute z-10', position.top, position.left)}>
      <Tooltip trigger={<CameraButton />} isOpen={isOpen}>
        <p className={cn('body3-medium')}>{name}</p>
      </Tooltip>
    </div>
  );
};

export default SlopCamera;
