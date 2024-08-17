import React from 'react';
import type { Slop } from '@/entities/slop/model/model';
import LevelChip from '@/entities/slop/ui/level-chip';
import { cn } from '@/shared/lib';
import CameraButton from '@/shared/ui/cam-button';
import Divider from '@/shared/ui/divider';

interface WebcamSlopListProps {
  className?: string;
  list: Slop[];
  selectedSlop: string | null;
  setSelectedSlop: React.Dispatch<React.SetStateAction<string | null>>;
  onItemClick: (
    event: React.MouseEvent<HTMLLIElement>,
    {
      scale,
      id,
    }: {
      scale: number;
      id: string;
    }
  ) => void;
}

const WebcamSlopList = ({ className, list, selectedSlop, onItemClick }: WebcamSlopListProps) => {
  return (
    <ul className={cn('w-full', className)}>
      {list.map((item) => (
        <React.Fragment key={item.id}>
          <li
            className={cn(
              'flex h-[66px] items-center justify-between bg-gray-10 pl-[24px] pr-[24px]',
              !item.isOpen && 'opacity-30',
              selectedSlop === item.id && 'bg-main-5'
            )}
            onClick={(e) =>
              item.webcam &&
              onItemClick(e, {
                scale: item.webcam.scale,
                id: item.id,
              })
            }
          >
            <div className={cn('flex items-center gap-2')}>
              <p className={cn('title3-semibold')}>{item.name}</p>
              {item.webcam && <CameraButton />}
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
