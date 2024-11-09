import type { Resort } from '@/entities/resort';
import { cn } from '@/shared/lib';
import DiscoveryCard from './discovery-card';

const DiscoveryList = ({ resorts }: { resorts: Resort[] }) => (
  <div className={cn('flex flex-col gap-4 px-5 py-4 md:px-8')}>
    {resorts.map((resort) => (
      <DiscoveryCard key={resort.resortId} {...resort} />
    ))}
  </div>
);

export default DiscoveryList;
