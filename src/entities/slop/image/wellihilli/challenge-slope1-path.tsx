import React from 'react';
import { cn } from '@/shared/lib';

const ChallengeSlope1Path = ({ color }: { color?: string }) => {
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
        d="M216.5 20.5C211 22 207 23.5 193.5 30.5C170.5 40.5 160.5 40.5 146 43.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 3"
      />
    </svg>
  );
};

export default ChallengeSlope1Path;
