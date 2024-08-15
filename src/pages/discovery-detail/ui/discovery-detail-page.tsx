'use client';

import DiscoveryDetailSummary from '@/widgets/discovery/ui/discovery-summary';
import { Header } from '@/widgets/header/ui';
import { DiscoveryData } from '@/entities/discovery';
import { cn } from '@/shared/lib';

const DiscoveryDetailPage = ({ params }: { params: { resortId: number } }) => {
  const discovery = DiscoveryData.find((discovery) => discovery.id === +params.resortId);
  if (!discovery) return null;

  return (
    <div className={cn('size-full')}>
      <Header />
      <DiscoveryDetailSummary {...discovery} />
    </div>
  );
};

export default DiscoveryDetailPage;
