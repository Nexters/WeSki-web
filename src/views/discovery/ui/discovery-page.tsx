'use client';

import { useQuery } from '@tanstack/react-query';
import DiscoveryList from '@/widgets/discovery/ui/discovery-list';
import Header from '@/widgets/header/ui/header';
import { discoveryApi } from '@/entities/discovery';
import { cn } from '@/shared/lib';

const DiscoveryPage = () => {
  const { data: discoveryData } = useQuery(discoveryApi.discoveryQueries.list());

  if (!discoveryData) return null;

  return (
    <div className={cn('size-full bg-gradient-to-b from-[rgba(141,163,221,0.2)] to-transparent')}>
      <Header />
      <DiscoveryList discoveryData={discoveryData} />
    </div>
  );
};

export default DiscoveryPage;
