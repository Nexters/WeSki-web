import React from 'react';
import { cn } from '@/shared/lib';

const Rainbow4Path = ({ color }: { color?: string }) => {
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
        d="M294.5 59.5C304.5 61.3333 323.1 72.2 317.5 101"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 3"
      />
    </svg>
  );
};

export default Rainbow4Path;
