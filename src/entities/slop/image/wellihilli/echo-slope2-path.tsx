import React from 'react';
import { cn } from '@/shared/lib';

const EchoSlope2Path = ({ color }: { color?: string }) => {
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
        d="M223.5 21C232.667 30.3333 255.3 57.3 254.5 70.5C253.5 87 257 109.5 268.5 119C280 128.5 287 139 283.5 155.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 3"
      />
    </svg>
  );
};

export default EchoSlope2Path;
