import React from 'react';
import { cn } from '@/shared/lib';

const Hera1Path = ({ color }: { color?: string }) => {
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
        d="M172.51 22.9414C168.181 23.506 158.394 26.555 153.877 34.2339C148.231 43.8324 141.455 49.4787 143.149 53.9956"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3.39 3.39"
      />
    </svg>
  );
};

export default Hera1Path;
