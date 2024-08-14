import Header from '@/widgets/header/ui/header';
import WeatherList from '@/widgets/weather/ui/weather-list';
import { cn } from '@/shared/lib';

const Page = () => {
  return (
    <div className={cn('relative size-full bg-opacity-65 bg-[url("/background.png")]')}>
      <div className={cn('size-full bg-gradient-to-b from-[#8DA3DD/20] to-transparent')}>
        <Header />
        <WeatherList />
      </div>
    </div>
  );
};

export default Page;
