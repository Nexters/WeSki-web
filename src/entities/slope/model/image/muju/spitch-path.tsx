import React from 'react';
import { cn } from '@/shared/lib';

const SpitchPath = ({ color }: { color?: string }) => {
  const defaultStrokeColor = 'text-[#171D23]';
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
        d="M149 40C150.333 42.8333 151.4 49.5 145 53.5C137 58.5 138 62 138.5 66C139 70 140.5 84.5 132.5 91.5C124.5 98.5 125.5 96.5 125.5 101.5C125.5 105.5 122.333 110.333 122.5 111.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="3 3"
      />
    </svg>
  );
};

export default SpitchPath;
