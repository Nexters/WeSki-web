import { animated } from '@react-spring/web';
import Image, { type StaticImageData } from 'next/image';
import type { ComponentType } from 'react';
import React, { forwardRef } from 'react';
import type { Level } from '@/entities/slope/model';
import { cn } from '@/shared/lib';
import type useMapPinch from '../hooks/useMapPinch';
import useSlopeStore from '../hooks/useSlopeStore';

interface SlopeMapProps {
  children?: React.ReactNode;
  MapComponent: ComponentType | StaticImageData;

  slopes: {
    id: string;
    level: Level;
    Element: ComponentType<{
      color?: string;
    }>;
  }[];

  style: ReturnType<typeof useMapPinch>['style'];
}

const SlopeMap = forwardRef<HTMLDivElement, SlopeMapProps>(
  ({ children, MapComponent, slopes, style }, ref) => {
    const { selectedSlope } = useSlopeStore();

    return (
      <animated.div
        ref={ref}
        style={{
          position: 'relative',
          touchAction: 'none',
          display: 'inline-block',
          width: '100%',
          height: '100%',
          aspectRatio: '377 / 211',
          ...style,
        }}
      >
        {typeof MapComponent === 'object' ? (
          <Image src={MapComponent} alt="map" fill sizes="100%" />
        ) : (
          <MapComponent />
        )}
        {slopes.map((slope) => (
          <div key={slope.id} className={cn('absolute top-0 w-full')}>
            <slope.Element
              color={
                selectedSlope !== slope.id && selectedSlope !== null ? 'fill-gray-40' : undefined
              }
            />
          </div>
        ))}
        {children}
      </animated.div>
    );
  }
);

SlopeMap.displayName = 'SlopeMap';

export default SlopeMap;
