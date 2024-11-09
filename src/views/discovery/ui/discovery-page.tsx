'use client';

import { useQuery } from '@tanstack/react-query';
import DiscoveryList from '@/widgets/discovery/ui/discovery-list';
import Header from '@/widgets/header/ui/header';
import { resortApi } from '@/entities/resort';
import { cn } from '@/shared/lib';

const DiscoveryPage = () => {
  const { data: resorts } = useQuery(resortApi.resortQueries.list());

  if (!resorts) return null;

  return (
    <div className={cn('size-full bg-gradient-to-b from-[rgba(141,163,221,0.2)] to-transparent')}>
      <Header />
      <DiscoveryList resorts={resorts} />
    </div>
  );
};

export default DiscoveryPage;
