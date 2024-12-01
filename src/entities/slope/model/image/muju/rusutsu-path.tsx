import React from 'react';
import { cn } from '@/shared/lib';

const RusutsuPath = ({ color }: { color?: string }) => {
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
        d="M227.5 81C239.667 84.1667 264.4 92.9 266 102.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="3 3"
      />
    </svg>
  );
};

export default RusutsuPath;
