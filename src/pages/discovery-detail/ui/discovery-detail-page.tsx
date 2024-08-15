'use client';

import DiscoveryContent from '@/widgets/discovery/ui/discovery-content';
import DiscoverySummary from '@/widgets/discovery/ui/discovery-summary';
import { Header } from '@/widgets/header/ui';
import { DiscoveryData } from '@/entities/discovery';
import { cn } from '@/shared/lib';

const DiscoveryDetailPage = ({ params }: { params: { resortId: number } }) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const discovery = DiscoveryData.find((discovery) => discovery.id === +params.resortId);
  if (!discovery) return null;

  return (
    <div className={cn('size-full')}>
      <Header hasBackButton hasShareButton />
      <DiscoverySummary {...discovery} />
      <DiscoveryContent />
    </div>
  );
};

export default DiscoveryDetailPage;
