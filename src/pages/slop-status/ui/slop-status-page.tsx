'use client';

import { useRef, useState } from 'react';
import SlopStatusHeader from '@/widgets/header/ui/slop-status-header';
import useMapPinch from '@/features/slop/hooks/useMapPinch';
import SlopMap from '@/features/slop/ui/slop-map';
import SlopStatusList from '@/features/slop/ui/slop-status-list';
import { JISAN } from '@/entities/slop/model';
import { cn } from '@/shared/lib';

const SlopStatusPage = () => {
  const DUMMY = JISAN;
  const { ref, style, containerRef } = useMapPinch();
  const [selectedSlop, setSelectedSlop] = useState<string | null>(null);

  return (
    <main className={cn('w-full')}>
      <SlopStatusHeader />
      <section className={cn('relative mx-[20px] overflow-hidden')} ref={containerRef}>
        <SlopMap style={style} ref={ref} MapComponent={DUMMY.MapComponent} slops={DUMMY.slops} />
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
