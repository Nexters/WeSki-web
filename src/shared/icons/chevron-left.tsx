import type { SVGProps } from 'react';
import React from 'react';

interface ChevronLeftIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const ChevronLeftIcon = ({ className, ...args }: ChevronLeftIconProps) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...args}
    >
      <g id="icn_chevron-left">
        <path
          id="Icon"
          d="M16.25 19.5L9.75 13L16.25 6.5"
          stroke="#171D23"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default ChevronLeftIcon;
