'use client';

import { useQuery } from '@tanstack/react-query';
import DiscoveryList from '@/widgets/discovery/ui/discovery-list';
import Header from '@/widgets/header/ui/header';
import { discoveryApi } from '@/entities/discovery';
import { cn } from '@/shared/lib';

const Page = () => {
  const { data: discoveryData } = useQuery(discoveryApi.discoveryQueries.list());
  if (!discoveryData) return null;

  return (
    <div className={cn('relative size-full bg-opacity-65 bg-[url("/background.png")]')}>
      <div className={cn('size-full bg-gradient-to-b from-[#8DA3DD/20] to-transparent')}>
        <Header />
        <DiscoveryList discoveryData={discoveryData} />
      </div>
    </div>
  );
};

export default Page;
