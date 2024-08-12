import React from 'react';
import type { Level } from '@/entities/slop/model/model';
import LevelChip from '@/entities/slop/ui/level-chip';
import { cn } from '@/shared/lib';
import CameraButton from '@/shared/ui/cam-button';
import Divider from '@/shared/ui/divider';

interface WebcamSlopListProps {
  list: {
    id: string;
    name: string;
    level: Level;
    isOpen: boolean;
    isWebcam: boolean;
  }[];
  setSelectedSlop: React.Dispatch<React.SetStateAction<string | null>>;
}

const WebcamSlopList = ({ list, setSelectedSlop }: WebcamSlopListProps) => {
  const handleSlopClick = ({ id }: { id: string }) => {
    setSelectedSlop(id);
  };
  return (
    <ul className={cn('w-full')}>
      {list.map((item) => (
        <React.Fragment key={item.id}>
          <li
            className={cn(
              'flex h-[66px] items-center justify-between bg-gray-10 pl-[24px] pr-[24px]',
              !item.isOpen && 'opacity-30'
            )}
            onClick={() => handleSlopClick({ id: item.id })}
          >
            <div className={cn('flex items-center gap-2')}>
              <p className={cn('title3-semibold')}>{item.name}</p>
              {item.isWebcam && <CameraButton />}
            </div>
            <LevelChip level={item.level} />
          </li>
          <Divider />
        </React.Fragment>
      ))}
    </ul>
  );
};

export default WebcamSlopList;
