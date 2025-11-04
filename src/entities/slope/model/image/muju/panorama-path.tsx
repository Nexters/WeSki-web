import React from 'react';

import { cn } from '@/shared/lib';

const PanoramaPath = ({ color }: { color?: string }) => {
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
        d="M279.5 112C282.167 116.5 285.7 126.8 278.5 132C269.5 138.5 245.5 142 243 145"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="3 3"
      />
      <path
        className={cn('stroke-current', strokeColorClass)}
        d="M254 141.5C254.833 143.167 255.4 147.3 251 150.5C246.6 153.7 241.167 156.5 239 157.5"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeDasharray="3 3"
      />
    </svg>
  );
};

export default PanoramaPath;
