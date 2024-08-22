'use client';

import { useQuery } from '@tanstack/react-query';
import SlopStatusHeader from '@/widgets/header/ui/slop-status-header';
import useMapPinch from '@/features/slop/hooks/useMapPinch';
import SlopMap from '@/features/slop/ui/slop-map';
import SlopStatusList from '@/features/slop/ui/slop-status-list';
import { slopQueries } from '@/entities/slop/api';
import { RESORT_DOMAIN } from '@/entities/slop/model';
import { cn } from '@/shared/lib';

const SlopStatusPage = ({ params }: { params: { key: keyof typeof RESORT_DOMAIN } }) => {
  const { ref, style, containerRef } = useMapPinch();

  const { data } = useQuery(slopQueries.list(params.key));

  if (!data) return;

  return (
    <main className={cn('w-full')}>
      <SlopStatusHeader />
      <section className={cn('relative mx-[20px] overflow-hidden')} ref={containerRef}>
        <SlopMap
          style={style}
          ref={ref}
          MapComponent={RESORT_DOMAIN[data.key].MapComponent}
          slops={RESORT_DOMAIN[data.key].slops}
        />
      </section>
      <SlopStatusList list={data.slopes} />
    </main>
  );
};

export default SlopStatusPage;
