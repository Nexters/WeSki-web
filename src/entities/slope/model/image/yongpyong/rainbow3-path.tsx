import React from 'react';

import { cn } from '@/shared/lib';

const Rainbow3Path = ({ color }: { color?: string }) => {
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
        d="M271.5 45.5C275.167 46.8333 283.9 51.1 289.5 57.5C296.5 65.5 315 75 315 100.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 3"
      />
    </svg>
  );
};

export default Rainbow3Path;
