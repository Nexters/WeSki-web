import React from 'react';
import { cn } from '@/shared/lib';

const PumaSlopPath = ({ color }: { color?: string }) => {
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
        d="M118 28C126.333 30.3333 136.5 32.5 151 39C157.452 41.8924 167.247 46.0257 179 48.5C188.5 50.5 197.833 52.3333 201 55"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeDasharray="3 3"
      />
    </svg>
  );
};

export default PumaSlopPath;
