import { animated } from '@react-spring/web';
import type { ComponentType } from 'react';
import React, { forwardRef } from 'react';
import type { Level } from '@/entities/slop/model/model';
import { cn } from '@/shared/lib';
import type useMapPinch from '../hooks/useMapPinch';
import useSlopStore from '../hooks/useSlopStore';

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

  style: ReturnType<typeof useMapPinch>['style'];
}

const SlopMap = forwardRef<HTMLDivElement, SlopMapProps>(
  ({ children, MapComponent, slops, style }, ref) => {
    const { selectedSlop } = useSlopStore();

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
