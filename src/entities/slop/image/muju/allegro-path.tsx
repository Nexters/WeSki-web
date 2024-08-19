import React from 'react';
import { cn } from '@/shared/lib';

const AllegroPath = ({ color }: { color?: string }) => {
  const defaultStrokeColor = 'stroke-[#171D23]';
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
        d="M142.5 40C131.833 39.1667 108.6 39.4 101 47C91.5 56.5 93.5 69.5 87.5 74"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="3 3"
      />
    </svg>
  );
};

export default AllegroPath;
