import React from 'react';

import { cn } from '../../../shared/lib';
import type { Level } from '../model';

const LEVEL: Record<Level, { text: string; color: string }> = {
  초급: {
    text: '초급',
    color: 'bg-sub-2',
  },
  초중급: {
    text: '초중급',
    color: 'bg-sub-2',
  },
  중급: {
    text: '중급',
    color: 'bg-sub-4',
  },
  중상급: {
    text: '중상급',
    color: 'bg-sub-4',
  },
  상급: {
    text: '상급',
    color: 'bg-gray-70',
  },
  최상급: {
    text: '최상급',
    color: 'bg-gray-70',
  },
  파크: {
    text: '파크',
    color: 'bg-sub-2',
  },
  익스트림: {
    text: '익스트림',
    color: 'bg-gray-70',
  },
};

interface LevelChipProps {
  className?: string;
  level: Level;
}

const LevelChip = ({ level, className }: LevelChipProps) => {
  return (
    <div
      className={cn(
        'flex h-[25px] w-[56px] items-center justify-center rounded-[6px] border-[1px] border-white border-opacity-10',
        LEVEL[level].color,
        className
      )}
    >
      <p className="body1-semibold text-white">{LEVEL[level].text}</p>
    </div>
  );
};

export default LevelChip;
