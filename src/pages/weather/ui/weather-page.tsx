import WeatherCard from '@/features/discovery/ui/weather-card';
import { cn } from '@/shared/lib';

const WeatherPage = () => {
  return (
    <div className={cn('flex h-[650px] flex-col items-center gap-3 overflow-auto')}>
      {Array.from({ length: 3 }).map((_, index) => (
        <WeatherCard key={index} />
      ))}
    </div>
  );
};

export default WeatherPage;
