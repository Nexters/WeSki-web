import { useRouter } from 'next/navigation';
import WeatherIcon from '@/features/resort/ui/weather-icon';
import type { Resort } from '@/entities/resort';
import { cn } from '@/shared/lib';
import { getWeatherFromDescription } from '@/shared/lib/getWeatherFromDescription';
import Card from '@/shared/ui/card';
import { getResortStatusText } from '../lib/getResortStatusText';
import WeeklyWeather from './weekly-weather';

const ResortCard = ({
  resortId,
  name,
  status,
  openingDate,
  openSlopes,
  currentWeather,
  weeklyWeather,
}: Resort) => {
  const router = useRouter();

  return (
    <Card
      className={cn(
        'box-border flex cursor-pointer flex-col gap-[15px] pb-4 pt-[34px] md:pb-[26px] md:pt-10',
        'transition-all hover:scale-[1.02] hover:border-2 hover:border-main-1/60 hover:pb-[15px] hover:pt-[33px] hover:md:pb-[25px] hover:md:pt-[39px]'
      )}
      onClick={() => router.push(`/${resortId}`)}
    >
      <div className={cn('mx-[30px] flex flex-col items-center gap-[5px] md:mx-[42px]')}>
        <div className={cn('flex w-full items-center justify-between')}>
          <h2 className={cn('title1 md:h2 text-gray-90')}>{name}</h2>
          <div className={cn('flex items-center gap-2')}>
            <WeatherIcon
              className={cn('origin-right scale-[1.17]')}
              weather={getWeatherFromDescription(currentWeather.description)}
            />
            <p className={cn('text-[30px] font-semibold leading-tight')}>
              {currentWeather.temperature}°
            </p>
          </div>
        </div>
        <div className={cn('flex w-full justify-between')}>
          <p className={cn('body1-medium text-gray-60')}>
            {getResortStatusText(status, openingDate, openSlopes)}
          </p>
          <p className={cn('body1-semibold text-gray-60')}>{currentWeather.description}</p>
        </div>
      </div>
      <hr className={cn('mx-[30px] border-gray-80 opacity-[0.04]')} />
      <ul className={cn('flex w-full gap-[2px] overflow-x-scroll px-[30px] scrollbar-hide')}>
        {weeklyWeather.map((weather, index) => (
          <WeeklyWeather key={index} {...weather} isToday={index === 0} />
        ))}
      </ul>
    </Card>
  );
};
export default ResortCard;
