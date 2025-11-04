import React from 'react';

import { cn } from '@/shared/lib';

const Glory3Path = ({ color }: { color?: string }) => {
  const defaultStrokeColor = 'text-[#303A45]';
  const strokeColorClass = color ? color.replace('fill-', 'text-') : defaultStrokeColor;
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 376 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={cn('stroke-current', strokeColorClass)}
        d="M301.5 15.5C300.833 18 302.8 23.9 316 27.5C332.5 32 359 35.5 353 45C348.2 52.6 329.667 54.1667 321 54C315 53.6667 304.5 54.7 310.5 61.5C318 70 328 76 318 81.5C308 87 313 93 308.5 97C304.9 100.2 298.333 113.333 295.5 119.5C292.833 123 286.1 130.2 280.5 131"
        stroke="#303A45"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="3 3"
      />
    </svg>
  );
};

export default Glory3Path;
