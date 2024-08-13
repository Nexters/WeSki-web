import { animated } from '@react-spring/web';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { ComponentType } from 'react';
import React, { useRef } from 'react';
import type { Level } from '@/entities/slop/model/model';
import { cn } from '@/shared/lib';
import CameraButton from '@/shared/ui/cam-button';

import { Tooltip } from '@/shared/ui/tooltip';
import useMapPinch from '../hooks/useMapPinch';

interface WebcamMapProps {
  slops: {
    id: string;
    level: Level;
    Element: ComponentType<{
      color?: string;
    }>;
    webcam: {
      id: string;
      name: string;
      position: {
        top: string;
        left: string;
      };
    } | null;
  }[];
  mapSrc: StaticImageData;
  selectedSlop: string | null;
}

const WebcamMap = ({ slops, mapSrc, selectedSlop }: WebcamMapProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const { ref, style } = useMapPinch(containerRef);

  return (
    <section className={cn('relative aspect-[25/14] w-full overflow-hidden')} ref={containerRef}>
      <animated.div
        ref={ref}
        style={{
          touchAction: 'none',
          display: 'inline-block',
          width: '100%',
          height: '100%',
          ...style,
        }}
      >
        <Image src={mapSrc} alt="이미지" width={420} height={750} />
        {slops.map((slop) => {
          return (
            <React.Fragment key={slop.id}>
              <div className={cn('absolute top-0 w-full')}>
                <slop.Element
                  color={
                    selectedSlop !== slop.id && selectedSlop !== null ? 'fill-gray-40' : undefined
                  }
                />
              </div>
              {slop.webcam && (
                <div
                  className={cn(
                    'absolute z-10',
                    slop.webcam.position.top,
                    slop.webcam.position.left
                  )}
                >
                  <Tooltip trigger={<CameraButton />} isOpen={selectedSlop === slop.id}>
                    <p className={cn('body3-medium')}>{slop.webcam.name}</p>
                  </Tooltip>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </animated.div>
    </section>
  );
};

export default WebcamMap;
