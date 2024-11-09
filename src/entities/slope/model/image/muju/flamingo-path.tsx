import React from 'react';
import { cn } from '@/shared/lib';

const FlamingoPath = ({ color }: { color?: string }) => {
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
        d="M55 85C55.6349 80.954 60.5238 70.5897 67 67.5"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeDasharray="3 3"
      />
      <path
        className={cn('stroke-current', strokeColorClass)}
        d="M73 50L61.5 81.5"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeDasharray="3 3"
      />
    </svg>
  );
};

export default FlamingoPath;
