import React from 'react';
import type { Level } from '@/entities/slop/model/model';
import LevelChip from '@/entities/slop/ui/level-chip';
import { cn } from '@/shared/lib';
import Divider from '@/shared/ui/divider';

interface WebcamSlopListProps {
  list: {
    id: string;
    text: string;
    level: Level;
    isOpen: boolean;
  }[];
}

const WebcamSlopList = ({ list }: WebcamSlopListProps) => {
  return (
    <ul className={cn('w-full')}>
      {list.map((item) => (
        <React.Fragment key={item.id}>
          <li
            className={cn(
              'flex h-[66px] items-center justify-between bg-gray-10 pl-[24px] pr-[24px]',
              !item.isOpen && 'opacity-30'
            )}
          >
            <p className={cn('title3-semibold')}>{item.text}</p>
            <LevelChip level={item.level} />
          </li>
          <Divider />
        </React.Fragment>
      ))}
    </ul>
  );
};

export default WebcamSlopList;
