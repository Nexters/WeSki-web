import React from 'react';
import { cn } from '@/shared/lib';

const MozartPath = ({ color }: { color?: string }) => {
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
        d="M142.771 47.2774C141.679 48.3589 137.644 51.257 130.237 54.1981C120.978 57.8746 99.9296 64.9088 95.7294 69.2225"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="3 3"
      />
    </svg>
  );
};

export default MozartPath;
