'use client';

import { animated } from '@react-spring/web';
import Image from 'next/image';
import React from 'react';

import Summary from '@/widgets/weather/ui/summary';
import useMapPinch from '@/widgets/webcam/hooks/useMapPinch';
import type { Spot } from '@/entities/resort/model';
import { ResortList } from '@/entities/resort/model';
import LevelChip from '@/entities/slop/ui/level-chip';
import { cn } from '@/shared/lib';

const WebCamMapPage = () => {
  const [selectedTab, setSelectedTab] = React.useState(ResortList[0]);
  const [selectedSpot, setSelectedSpot] = React.useState<Spot | null>(null);
  const { ref, style } = useMapPinch();

  return (
    <div className={cn('size-full')}>
      <LevelChip level="UPPER_BEGINNER" />
      <div className={cn('mb-1 flex w-full overflow-scroll scrollbar-hide')}>
        {ResortList.map((tab) => (
          <div
            key={tab.name}
            className={cn(
              'flex shrink-0 cursor-pointer items-center justify-center border-b-4 p-3 pb-2 font-bold',
              selectedTab.name === tab.name ? 'border-black' : 'border-white opacity-20'
            )}
            onClick={() => {
              setSelectedTab(tab);
              setSelectedSpot(null);
            }}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <Summary {...ResortList.find((tab) => tab.name === selectedTab.name)!} />
      <div className={cn('relative h-[200px] w-full overflow-hidden')}>
        <animated.div
          ref={ref}
          style={{
            touchAction: 'none',
            display: 'inline-block',
            ...style,
          }}
        >
          <Image
            className={cn('object-cover')}
            width={376}
            height={357}
            src={`/map/${selectedTab.map}`}
            alt={`${selectedTab.name}`}
          />
          <div
            className={cn('absolute left-0 top-3 h-2 w-3 bg-black opacity-20')}
            onClick={() =>
              selectedTab?.spots[0].isAvailable && setSelectedSpot(selectedTab.spots[0])
            }
          />
        </animated.div>
        {selectedSpot && (
          <div className={cn('absolute left-0 top-0 size-full')}>
            <video src={`/video/${selectedTab.tag}/${selectedSpot.tag}.mov`} muted autoPlay loop />
          </div>
        )}
      </div>
      <div className={cn('flex h-[296px] flex-col gap-0.5 overflow-scroll scrollbar-hide')}>
        {selectedTab.spots?.map((spot) => (
          <div
            key={spot.name}
            className={cn(
              'flex h-20 w-full items-center justify-between bg-gray-100 p-6 font-bold',
              spot.isAvailable ? 'cursor-pointer' : 'cursor-not-allowed opacity-20'
            )}
            onClick={() => {
              spot.isAvailable && setSelectedSpot(spot);
            }}
          >
            <p className={cn('text-lg')}>{spot.name}</p>
            <div className={cn('flex items-center gap-3')}>
              <p className={cn('text-sm')}>{spot.level}</p>
              <p className={cn('text-lg')}>헤라1,2</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebCamMapPage;
