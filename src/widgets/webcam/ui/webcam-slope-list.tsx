'use client';

import React from 'react';
import useSlopeStore from '@/features/slope/hooks/useSlopeStore';
import type { Slope, Webcam } from '@/entities/slope/model';
import LevelChip from '@/entities/slope/ui/level-chip';
import { cn } from '@/shared/lib';
import CameraButton from '@/shared/ui/cam-button';

interface WebcamSlopeListProps {
  className?: string;
  slopes: Slope[];
  webcams: Webcam[];
  onItemClick: ({ scale, id }: { scale: number; id: number }) => void;
}

const WebcamSlopeList = ({ className, slopes, webcams, onItemClick }: WebcamSlopeListProps) => {
  const { selectedSlope, setSelectedSlope, setSelectedCamera, setCloseCamera } = useSlopeStore();

  return (
    <ul className={cn('w-full md:grid md:grid-cols-2', className)}>
      {slopes.map((item) => {
        // const isOpen = [item.isDayOperating, item.isNightOperating, item.isLateNightOperating].some(
        //   (time) => time
        // );
        const isOpen = true;
        return (
          <li
            key={item.id}
            className={cn(
              'flex h-[66px] items-center justify-between bg-gray-10 px-6',
              'border-b border-gray-30 md:odd:border-r',
              isOpen ? 'cursor-pointer hover:bg-main-5' : 'cursor-not-allowed',
              selectedSlope === item.id ? 'bg-main-5' : 'bg-inherit hover:bg-inherit'
            )}
            onClick={() => {
              if (!isOpen) return;
              if (selectedSlope === item.id) {
                setSelectedSlope(null);
                setSelectedCamera(null);
              } else {
                setSelectedSlope(item.id);
                setSelectedCamera(item.webcamNo);
              }
              setCloseCamera();
              if (item.webcamNo) {
                const webcam = webcams.find((webcam) => webcam.id === item.webcamNo);
                if (!webcam) return;
                onItemClick({
                  scale: webcam.scale,
                  id: webcam.id,
                });
              }
            }}
          >
            <div className={cn('flex items-center gap-2')}>
              <p className={cn('title3-semibold', !isOpen && 'opacity-30')}>{item.name}</p>
              {item.webcamNo && <CameraButton />}
            </div>
            <LevelChip className={cn(!isOpen && 'opacity-30')} level={item.difficulty} />
          </li>
        );
      })}
    </ul>
  );
};

export default WebcamSlopeList;
