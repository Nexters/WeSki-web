'use client';

import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import SlopeStatusHeader from '@/widgets/header/ui/slope-status-header';
import SlopeStatusTime from '@/widgets/header/ui/slope-status-time';
import useMapPinch from '@/features/slope/hooks/useMapPinch';
import SlopeMap from '@/features/slope/ui/slope-map';
import SlopeStatusList from '@/features/slope/ui/slope-status-list';
import { ResortData } from '@/entities/resort';
import { slopeApi } from '@/entities/slope';
import type { Slope } from '@/entities/slope/model';
import { RESORT_DOMAIN } from '@/entities/slope/model';
import { cn } from '@/shared/lib';

const SlopeStatusPage = ({ resortId }: { resortId: number }) => {
  const { ref, style, containerRef } = useMapPinch();

  const { data: slopeRawData } = useQuery(slopeApi.slopeQueries.slope(resortId ?? 0));
  const key = ResortData.find((resort) => resort.id === resortId)
    ?.map as keyof typeof RESORT_DOMAIN;
  const slopes = useMemo(
    () =>
      slopeRawData?.slopes
        .filter((slope) =>
          RESORT_DOMAIN[key].slopes.find((slopeConstant) => slopeConstant.id === slope.slopeId)
        )
        .map((slope) => ({
          ...slope,
          ...RESORT_DOMAIN[key].slopes.find((slopeConstant) => slopeConstant.id === slope.slopeId),
        })) as Slope[],
    [slopeRawData, key]
  );
  const times = useMemo(
    () => ({
      day: {
        label: '주간',
        value: slopeRawData?.dayOperatingHours,
      },
      night: {
        label: '야간',
        value: slopeRawData?.nightOperatingHours,
      },
      lateNight: {
        label: '심야',
        value: slopeRawData?.lateNightOperatingHours,
      },
    }),
    [slopeRawData]
  );

  if (!slopes) return;

  return (
    <main className={cn('mb-3 w-full')}>
      <SlopeStatusHeader />
      <section className={cn('relative mx-[20px] overflow-hidden')} ref={containerRef}>
        <SlopeMap
          style={style}
          ref={ref}
          MapComponent={RESORT_DOMAIN[key].MapComponent}
          slopes={slopes}
        />
      </section>
      {Object.values(times).some((time) => time.value) && <SlopeStatusTime times={times} />}
      <SlopeStatusList resortId={resortId} slopes={slopes} />
    </main>
  );
};

export default SlopeStatusPage;
