import React from 'react';
import { cn } from '@/shared/lib';

const RGardnerPath = ({ color }: { color?: string }) => {
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
        d="M121.5 72C124.333 75.3333 129.9 83 129.5 87C129 92 119.5 90 124.5 108.5"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeDasharray="3 3"
      />
    </svg>
  );
};

export default RGardnerPath;
