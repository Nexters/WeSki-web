import React from 'react';
import CameraIcon from '../icons/camera';
import { cn } from '../lib';

const CameraButton = () => {
  return (
    <button
      className={cn('flex h-[24px] w-[24px] items-center justify-center rounded-[7px] bg-gray-90')}
    >
      <CameraIcon />
    </button>
  );
};

export default CameraButton;
