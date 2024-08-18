import React from 'react';
import { cn } from '@/shared/lib';

const GoldParadisePath = ({ color }: { color?: string }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 376 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={cn('stroke-current', color ? color : 'stroke-[#447EFF]')}
        d="M117.501 62.5005C120.834 61.8338 127.901 62.3005 129.501 69.5005C131.501 78.5005 135.501 77.0005 131.001 82.5005C126.501 88.0005 129.001 95.5005 119.501 103.5C110.001 111.5 123.001 107.5 127.001 110"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 3"
      />
    </svg>
  );
};

export default GoldParadisePath;
