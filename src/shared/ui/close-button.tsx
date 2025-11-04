import React, { forwardRef } from 'react';

import CloseIcon from '../icons/close';
import { cn } from '../lib';

type CloseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  ({ className, ...args }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[#07070780]',
          className
        )}
        {...args}
      >
        <CloseIcon className={cn('text-white')} />
      </button>
    );
  }
);

CloseButton.displayName = 'CloseButton';

export default CloseButton;
