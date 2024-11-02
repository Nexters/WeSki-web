import WeatherIcon from '@/features/discovery/ui/weather-icon';
import type { SummarizedWeeklyWeather as WeeklyWeatherType } from '@/entities/discovery/model/model';
import { cn } from '@/shared/lib';
import { getWeatherFromDescription } from '@/shared/lib/getWeatherFromDescription';

interface WeeklyWeatherProps extends WeeklyWeatherType {
  isToday: boolean;
}

const WeeklyWeather = ({
  day,
  maxTemperature,
  minTemperature,
  description,
  isToday,
}: WeeklyWeatherProps) => {
  return (
    <li
      className={cn(
        'flex h-[142px] w-16 shrink-0 flex-col items-center justify-between py-[17px]',
        isToday && 'rounded-[40px] border border-main-1 bg-main-5'
      )}
    >
      <div className={cn('flex flex-col items-center gap-[7px]')}>
        <div className={cn('body3-regular text-gray-60')}>{day}</div>
        <WeatherIcon weather={getWeatherFromDescription(description)} />
      </div>
      <div className={cn('flex flex-col items-center')}>
        <p className={cn('title3-semibold text-gray-90')}>{minTemperature}</p>
        <p className={cn('body3-regular text-gray-60')}>{maxTemperature}</p>
      </div>
    </li>
  );
};

export default WeeklyWeather;
