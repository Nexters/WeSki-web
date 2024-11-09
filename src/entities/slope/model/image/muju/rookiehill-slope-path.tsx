import React from 'react';
import { cn } from '@/shared/lib';

const RookiehillSlopePath = ({ color }: { color?: string }) => {
  const defaultStrokeColor = 'text-[#447EFF]';
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
        d="M225 119C220.607 130.838 212.919 157.211 217.312 168"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
    </svg>
  );
};

export default RookiehillSlopePath;
