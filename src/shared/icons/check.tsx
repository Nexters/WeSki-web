import React from 'react';
import type { SVGProps } from 'react';

interface CheckIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const CheckIcon = ({ className, ...props }: CheckIconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M6.1704 11.9028L10.4262 16.5L17.8761 8.80286"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckIcon;
