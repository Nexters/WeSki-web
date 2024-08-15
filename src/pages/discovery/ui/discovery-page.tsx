import Header from '@/widgets/header/ui/header';
import DiscoveryList from '@/widgets/weather/ui/discovery-list';
import { cn } from '@/shared/lib';

const Page = () => {
  return (
    <div className={cn('relative size-full bg-opacity-65 bg-[url("/background.png")]')}>
      <div className={cn('size-full bg-gradient-to-b from-[#8DA3DD/20] to-transparent')}>
        <Header />
        <DiscoveryList />
      </div>
    </div>
  );
};

export default Page;
