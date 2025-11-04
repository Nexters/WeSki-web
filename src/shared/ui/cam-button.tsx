import React, { forwardRef } from 'react';

import CameraIcon from '../icons/camera';
import { cn } from '../lib';

type CameraButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const CameraButton = forwardRef<HTMLButtonElement, CameraButtonProps>(
  ({ className, ...args }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'flex h-[24px] w-[24px] items-center justify-center rounded-[7px] bg-gray-90',
          className
        )}
        {...args}
      >
        <CameraIcon />
      </button>
    );
  }
);

CameraButton.displayName = 'CameraButton';

export default CameraButton;
