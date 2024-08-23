import React from 'react';
import { cn } from '../lib';

interface LoadingProps {
  className?: string;
}
const Loading = ({ className }: LoadingProps) => {
  return (
    <div
      className={cn('absolute h-4 w-4 animate-mulShdSpin rounded-full bg-black', className)}
    ></div>
  );
};

export default Loading;
