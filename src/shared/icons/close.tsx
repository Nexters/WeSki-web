import type { SVGProps } from 'react';
import React from 'react';

interface CloseIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const CloseIcon = ({ className, ...args }: CloseIconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...args}
    >
      <path d="M17 7L7 17M17 17L7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default CloseIcon;
