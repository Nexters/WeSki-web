import React from 'react';
import CameraIcon from '../icons/camera';
import { cn } from '../lib';

type CameraButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const CameraButton: React.FC<CameraButtonProps> = ({ className, ...args }) => {
  return (
    <button
      className={cn(
        'flex h-[24px] w-[24px] items-center justify-center rounded-[7px] bg-gray-90',
        className
      )}
      {...args}
    >
      <CameraIcon />
    </button>
  );
};

export default CameraButton;
