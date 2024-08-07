'use client';

import { animated, useSpring } from '@react-spring/web';
import { createUseGesture, dragAction, pinchAction } from '@use-gesture/react';
import Image from 'next/image';
import React from 'react';

import Summary from '@/widgets/weather/ui/summary';
import type { Spot } from '@/entities/resort/model';
import { ResortList } from '@/entities/resort/model';
import { cn, getBoundedPositions } from '@/shared/lib';

const useGesture = createUseGesture([pinchAction, dragAction]);

const WebCamMapPage = () => {
  const [selectedTab, setSelectedTab] = React.useState(ResortList[0]);
  const [selectedSpot, setSelectedSpot] = React.useState<Spot | null>(null);
  const [style, api] = useSpring(() => ({ scale: 1, x: 0, y: 0 }));
  const ref = React.useRef<HTMLDivElement>(null);

  useGesture(
    {
      onPinch: ({ origin: [ox, oy], first, movement: [ms], offset: [s], memo }) => {
        if (first) {
          const { width, height, x, y } = ref.current!.getBoundingClientRect();
          const tx = ox - (x + width / 2);
          const ty = oy - (y + height / 2);
          memo = [style.x.get(), style.y.get(), tx, ty];
        }

        const x = memo[0] - (ms - 1) * memo[2];
        const y = memo[1] - (ms - 1) * memo[3];
        api.start({ scale: s, x, y });
        return memo;
      },
      onPinchEnd: () => {
        if (style.scale.get() < 1) {
          api.start({ scale: 1, x: 0, y: 0 });
        }
      },
      onDrag: ({ pinching, cancel, offset: [x, y] }) => {
        if (pinching) return cancel();
        api.start({ x, y });
      },
      onDragEnd: () => {
        const [boundedX, boundedY] = getBoundedPositions(
          style.x.get(),
          style.y.get(),
          style.scale.get()
        );
        api.start({ x: boundedX, y: boundedY });
      },
    },
    {
      target: ref,
      drag: { from: () => [style.x.get(), style.y.get()] },
      pinch: { scaleBounds: { min: 1, max: 6 }, rubberband: true },
    }
  );

  return (
    <div className={cn('size-full')}>
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
