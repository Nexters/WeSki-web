'use client';

import React from 'react';
import useSlopStore from '@/features/slop/hooks/useSlopStore';
import type { Slop, Webcam } from '@/entities/slop/model/model';
import LevelChip from '@/entities/slop/ui/level-chip';
import { cn } from '@/shared/lib';
import CameraButton from '@/shared/ui/cam-button';

interface WebcamSlopListProps {
  className?: string;
  list: Slop[];
  webcams: Webcam[];
  onItemClick: ({ scale, id }: { scale: number; id: string }) => void;
}

const WebcamSlopList = ({ className, list, webcams, onItemClick }: WebcamSlopListProps) => {
  const { selectedSlop, setSelectedSlop } = useSlopStore();

  return (
    <ul className={cn('w-full xs:grid xs:grid-cols-2', className)}>
      {list.map((item) => {
        return (
          <li
            key={item.id}
            className={cn(
              'flex h-[66px] items-center justify-between bg-gray-10 px-6',
              'border-b border-gray-30 xs:odd:border-r',
              item.isOpen ? 'cursor-pointer hover:bg-main-5' : 'cursor-not-allowed',
              selectedSlop === item.id ? 'bg-main-5' : 'bg-inherit hover:bg-inherit'
            )}
            onClick={() => {
              if (selectedSlop === item.id) {
                setSelectedSlop(null);
              } else {
                setSelectedSlop(item.id);
              }
              if (item.webcamId) {
                const webcam = webcams.find((webcam) => webcam.id === item.webcamId);
                if (!webcam) return;
                onItemClick({
                  scale: webcam.scale,
                  id: webcam.id,
                });
              }
            }}
          >
            <div className={cn('flex items-center gap-2')}>
              <p className={cn('title3-semibold', !item.isOpen && 'opacity-30')}>{item.name}</p>
              {item.webcamId && <CameraButton />}
            </div>
            <LevelChip className={cn(!item.isOpen && 'opacity-30')} level={item.level} />
          </li>
        );
      })}
    </ul>
  );
};

export default WebcamSlopList;
