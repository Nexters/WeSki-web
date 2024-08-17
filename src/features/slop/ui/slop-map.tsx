import { animated } from '@react-spring/web';
import type { ComponentType } from 'react';
import React, { forwardRef } from 'react';
import type { Level } from '@/entities/slop/model/model';
import { cn } from '@/shared/lib';
import type useMapPinch from '../hooks/useMapPinch';

interface SlopMapProps {
  children?: React.ReactNode;
  MapComponent: ComponentType;

  slops: {
    id: string;
    level: Level;
    Element: ComponentType<{
      color?: string;
    }>;
  }[];

  selectedSlop: string | null;
  style: ReturnType<typeof useMapPinch>['style'];
}

const SlopMap = forwardRef<HTMLDivElement, SlopMapProps>(
  ({ children, MapComponent, slops, selectedSlop, style }, ref) => {
    return (
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
        <MapComponent />
        {slops.map((slop) => (
          <div key={slop.id} className={cn('absolute top-0 w-full')}>
            <slop.Element
              color={selectedSlop !== slop.id && selectedSlop !== null ? 'fill-gray-40' : undefined}
            />
          </div>
        ))}

        {children}
      </animated.div>
    );
  }
);

SlopMap.displayName = 'SlopMap';

export default SlopMap;
