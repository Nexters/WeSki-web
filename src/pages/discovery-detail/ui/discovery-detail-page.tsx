'use client';

import { useState } from 'react';
import DiscoveryDetailSummary from '@/widgets/discovery/ui/discovery-summary';
import { Header } from '@/widgets/header/ui';
import { WebcamMap, WebcamSlopList } from '@/widgets/webcam/ui';
import { DiscoveryData } from '@/entities/discovery';
import { JISAN } from '@/entities/slop/model';
import { cn } from '@/shared/lib';

const DiscoveryDetailPage = ({ params }: { params: { resortId: number } }) => {
  const DUMMY2 = JISAN;
  const [selectedSlop, setSelectedSlop] = useState<string | null>(null);

  const discovery = DiscoveryData.find((discovery) => discovery.id === +params.resortId);
  if (!discovery) return null;

  return (
    <div className={cn('size-full')}>
      <Header hasBackButton hasShareButton />
      <DiscoveryDetailSummary {...discovery} />
      <WebcamMap slops={DUMMY2.slops} mapSrc={DUMMY2.map} selectedSlop={selectedSlop} />
      <WebcamSlopList
        className={cn('bg-white')}
        list={DUMMY2.slops.map((item) => ({
          ...item,
          isWebcam: !!item.webcam,
        }))}
        selectedSlop={selectedSlop}
        setSelectedSlop={setSelectedSlop}
      />
    </div>
  );
};

export default DiscoveryDetailPage;
