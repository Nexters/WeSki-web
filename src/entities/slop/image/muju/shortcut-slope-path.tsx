import React from 'react';
import { cn } from '@/shared/lib';

const ShortcutSlopePath = ({ color }: { color?: string }) => {
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
        d="M294 114C292.667 115.5 290 119.4 290 123"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="3 3"
      />
    </svg>
  );
};

export default ShortcutSlopePath;
