import React from 'react';
import { cn } from '@/shared/lib';

const Challenge3Path = ({ color }: { color?: string }) => {
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
        d="M171.5 54C168.833 54.3333 163.5 57.8 163.5 69C163.5 83 166.5 87.5 159.5 98C152.5 108.5 151.5 114.5 146.5 118.5C141.5 122.5 143.5 130.5 142.5 134.5C141.5 138.5 139 150 131.5 157C125.5 162.6 113.333 170.667 108 174"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="3 3"
      />
    </svg>
  );
};

export default Challenge3Path;
