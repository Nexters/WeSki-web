import React from 'react';

import { cn } from '@/shared/lib';

const Challenge2Path = ({ color }: { color?: string }) => {
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
        d="M164.5 61.5C158.833 65.1667 147.3 74.4 146.5 82C145.7 89.6 134.833 104.5 129.5 111C127.167 115.167 122.7 125.5 123.5 133.5C124.5 143.5 118.5 162.5 106.5 170"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="3 3"
      />
    </svg>
  );
};

export default Challenge2Path;
