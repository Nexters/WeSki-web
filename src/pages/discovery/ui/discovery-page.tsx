'use client';

import { useQuery } from '@tanstack/react-query';
import Header from '@/widgets/header/ui/header';
import DiscoveryList from '@/widgets/weather/ui/discovery-list';
import { discoveryApi } from '@/entities/weather';
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
