import React from 'react';
import { cn } from '../../../shared/lib';
import type { Level } from '../model/model';

const LEVEL: Record<Level, { text: string; color: string }> = {
  BEGINNER: {
    text: '초급',
    color: 'bg-sub-2',
  },
  UPPER_BEGINNER: {
    text: '초중급',
    color: 'bg-sub-2',
  },
  INTERMEDIATE: {
    text: '중급',
    color: 'bg-sub-4',
  },
  UPPER_INTERMEDIATE: {
    text: '중상급',
    color: 'bg-sub-4',
  },
  ADVANCED: {
    text: '고급',
    color: 'bg-gray-70',
  },
  EXPERT: {
    text: '최상급',
    color: 'bg-gray-70',
  },
};

interface LevelChipProps {
  level: Level;
}

const LevelChip = ({ level }: LevelChipProps) => {
  return (
    <div
      className={cn(
        'flex h-[25px] w-[56px] items-center justify-center rounded-[6px] border-[1px] border-white border-opacity-10',
        LEVEL[level].color
      )}
    >
      <p className="body1 text-white">{LEVEL[level].text}</p>
    </div>
  );
};

export default LevelChip;
