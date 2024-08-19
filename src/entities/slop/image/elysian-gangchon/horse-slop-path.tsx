import React from 'react';
import { cn } from '@/shared/lib';

const HorseSlopPath = ({ color }: { color?: string }) => {
  const defaultStrokeColor = 'stroke-[#447EFF]';
  const strokeColorClass = color ? color.replace('fill-', 'stroke-') : defaultStrokeColor;

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
        d="M130 50C128.667 50.6667 123.8 54.4 127 62C131 71.5 143.5 88 145 93.5C146.5 99 152.5 107 157 108"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeDasharray="3 3"
      />
      <path
        className={cn('stroke-current', strokeColorClass)}
        d="M112.5 30.5L130.5 49.5"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeDasharray="3 3"
      />
    </svg>
  );
};

export default HorseSlopPath;
