import React from 'react';

import { cn } from '@/shared/lib';

const Echo3Path = ({ color }: { color?: string }) => {
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
        d="M253 58C258.833 65 271.6 81.9 276 93.5C281.5 108 288 122 291.5 126.5C295 131 294 143.5 283.5 155"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 3"
      />
    </svg>
  );
};

export default Echo3Path;
