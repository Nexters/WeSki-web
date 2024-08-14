import type { SVGProps } from 'react';
import React from 'react';

interface CloseIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const CloseIcon = ({ className, ...args }: CloseIconProps) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...args}
    >
      <path
        d="M12.75 5.25L5.25 12.75M12.75 12.75L5.25 5.25"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default CloseIcon;
