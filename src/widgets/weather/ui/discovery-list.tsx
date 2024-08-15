import { DiscoveryData } from '@/entities/weather/model';
import { cn } from '@/shared/lib';
import DiscoveryCard from './discovery-card';

const DiscoveryList = () => (
  <div className={cn('flex flex-col gap-4 px-8 py-4')}>
    {DiscoveryData.map((discovery) => (
      <DiscoveryCard key={discovery.name} {...discovery} />
    ))}
  </div>
);

export default DiscoveryList;
