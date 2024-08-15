import type { WeeklyWeather } from '@/entities/discovery/model/model';
import { cn } from '@/shared/lib';
import WeatherIcon from './weather-icon';

interface WeeklyWeatherProps extends WeeklyWeather {
  isToday: boolean;
}

const WeeklyWeather = ({ day, weather, temperature, isToday }: WeeklyWeatherProps) => {
  return (
    <li
      className={cn(
        'flex h-[142px] w-16 shrink-0 flex-col items-center justify-between py-[17px]',
        isToday && 'rounded-[40px] border border-main-1 bg-main-5'
      )}
    >
      <div className={cn('flex flex-col items-center gap-[7px]')}>
        <div className={cn('body3-regular text-gray-60')}>{day}요일</div>
        <WeatherIcon weather={weather} />
      </div>
      <div className={cn('flex flex-col items-center')}>
        <p className={cn('title3-semibold text-gray-90')}>{temperature.lowest}</p>
        <p className={cn('body3-regular text-gray-60')}>{temperature.average}</p>
      </div>
    </li>
  );
};

export default WeeklyWeather;
