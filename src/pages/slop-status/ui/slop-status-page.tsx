'use client';

import { use, useRef, useState } from 'react';
import SlopStatusHeader from '@/widgets/header/ui/slop-status-header';
import SlopMap from '@/features/slop/ui/slop-map';
import SlopStatusList from '@/features/slop/ui/slop-status-list';
import { JISAN } from '@/entities/slop/model';
import { cn } from '@/shared/lib';
import useMapPinch from '@/features/slop/hooks/useMapPinch';

const SlopStatusPage = () => {
  const DUMMY = JISAN;
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, style } = useMapPinch(containerRef);

  const [selectedSlop, setSelectedSlop] = useState<string | null>(null);
  return (
    <main className={cn('w-full')}>
      <SlopStatusHeader />
      <section className={cn('relative mx-[20px] overflow-hidden')} ref={ref}>
        <SlopMap
          style={style}
          ref={ref}
          selectedSlop={selectedSlop}
          mapSrc={DUMMY.map}
          slops={DUMMY.slops}
        />
      </section>
      <SlopStatusList
        list={DUMMY.slops}
        selectedSlop={selectedSlop}
        setSelectedSlop={setSelectedSlop}
      />
    </main>
  );
};

export default SlopStatusPage;
