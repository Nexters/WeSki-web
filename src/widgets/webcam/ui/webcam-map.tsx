import { animated } from '@react-spring/web';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { ComponentType } from 'react';
import React from 'react';
import type { Level } from '@/entities/slop/model/model';
import { cn } from '@/shared/lib';
import useMapPinch from '../hooks/useMapPinch';

interface ElementProps {
  className?: string;
}

interface WebcamMapProps {
  slops: {
    id: string;
    level: Level;
    Element: ComponentType<ElementProps>;
    webcam: {
      position: {
        top: number;
        left: number;
      };
    } | null;
  }[];
  mapSrc: StaticImageData;
}

const WebcamMap = ({ slops, mapSrc }: WebcamMapProps) => {
  const { ref, style } = useMapPinch();
  return (
    <section className={cn('relative aspect-[25/14] overflow-hidden')}>
      <animated.div
        ref={ref}
        style={{
          touchAction: 'none',
          display: 'inline-block',
          ...style,
        }}
      >
        <Image src={mapSrc} alt="이미지" width={420} height={750} />
        {slops.map((slop) => {
          return (
            <div className={cn('absolute top-0 w-full')} key={slop.id}>
              <slop.Element />
            </div>
          );
        })}
      </animated.div>
    </section>
  );
};

export default WebcamMap;
