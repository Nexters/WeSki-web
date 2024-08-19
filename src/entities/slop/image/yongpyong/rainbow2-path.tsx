import React from 'react';
import { cn } from '@/shared/lib';

const Rainbow2Path = ({ color }: { color?: string }) => {
  const defaultStrokeColor = 'stroke-[#303A45]';
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
        d="M262.5 44.5C264 43.3333 267.7 42.5 270.5 48.5C274 56 285.5 77 292 83C297.2 87.8 307.833 97.3333 312.5 101.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 3"
      />
    </svg>
  );
};

export default Rainbow2Path;
