import type { Discovery } from '@/entities/weather';
import { cn } from '@/shared/lib';
import DiscoveryCard from './discovery-card';

const DiscoveryList = ({ discoveryData }: { discoveryData: Discovery[] }) => (
  <div className={cn('flex flex-col gap-4 px-8 py-4')}>
    {discoveryData.map((discovery) => (
      <DiscoveryCard key={discovery.name} {...discovery} />
    ))}
  </div>
);

export default DiscoveryList;
