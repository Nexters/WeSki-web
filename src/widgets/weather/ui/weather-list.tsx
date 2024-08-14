import { cn } from '@/shared/lib';
import WeatherCard from './weather-card';

const WeatherList = () => (
  <div className={cn('flex flex-col gap-4 px-8 py-4')}>
    {Array.from({ length: 3 }).map((_, index) => (
      <WeatherCard key={index} />
    ))}
  </div>
);

export default WeatherList;
