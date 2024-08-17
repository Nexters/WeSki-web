import React from 'react';
import type { Slop } from '@/entities/slop/model/model';
import LevelChip from '@/entities/slop/ui/level-chip';
import { cn } from '@/shared/lib';
import CameraButton from '@/shared/ui/cam-button';
import Divider from '@/shared/ui/divider';
import useSlopStore from '@/features/slop/hooks/useSlopStore';

interface WebcamSlopListProps {
  className?: string;
  list: Slop[];
  type?: 'website' | 'app';
  onItemClick: ({ scale, id }: { scale: number; id: string }) => void;
}

const WebcamSlopList = ({ className, list, type = 'app', onItemClick }: WebcamSlopListProps) => {
  const { selectedSlop, setSelectedSlop } = useSlopStore();

  return (
    <ul className={cn('w-full xs:grid xs:grid-cols-2', className)}>
      {list.map((item) => (
        <li
          key={item.id}
          className={cn(
            'flex h-[66px] items-center justify-between bg-gray-10 px-6',
            'border-b border-gray-30 xs:odd:border-r',
            item.isOpen ? 'cursor-pointer' : 'cursor-default',
            selectedSlop === item.id && 'bg-main-5'
          )}
          onClick={() => {
            if (selectedSlop === item.id) {
              setSelectedSlop(null);
            } else {
              setSelectedSlop(item.id);
            }
            if (item.webcam) {
              onItemClick({
                scale: item.webcam.scale,
                id: item.webcam.id,
              });
            }
          }}
        >
          <div className={cn('flex items-center gap-2')}>
            <p className={cn('title3-semibold', !item.isOpen && 'opacity-30')}>{item.name}</p>
            {item.webcam && <CameraButton />}
          </div>
          <LevelChip className={cn(!item.isOpen && 'opacity-30')} level={item.level} />
        </li>
      ))}
    </ul>
  );
};

export default WebcamSlopList;
