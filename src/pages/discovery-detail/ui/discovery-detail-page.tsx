'use client';

import { Header } from '@/widgets/header/ui';
import { cn } from '@/shared/lib';

const DiscoveryDetailPage = ({ params }: { params: { resortId: number } }) => {
  return (
    <div className={cn('size-full')}>
      <Header />
      <p>{params.resortId}</p>
    </div>
  );
};

export default DiscoveryDetailPage;
