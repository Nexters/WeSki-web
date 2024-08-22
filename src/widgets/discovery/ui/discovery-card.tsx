import { useRouter } from 'next/navigation';
import WeatherIcon from '@/features/discovery/ui/weather-icon';
import type { Discovery } from '@/entities/discovery';
import { cn } from '@/shared/lib';
import Card from '@/shared/ui/card';
import { getTargetDateWeekday } from '../lib/getTargetDateWeekday';
import WeeklyWeather from './weekly-weather';

const DiscoveryCard = ({ id, name, slope, weather, weeklyWeather }: Discovery) => {
  const router = useRouter();

  return (
    <Card
      className={cn(
        'box-border flex cursor-pointer flex-col gap-[15px] pb-4 pt-[34px] md:pb-[26px] md:pt-10',
        'transition-all hover:scale-[1.02] hover:border-2 hover:border-main-1 hover:pb-[15px] hover:pt-[33px] hover:md:pb-[25px] hover:md:pt-[39px]'
      )}
      onClick={() => router.push(`/${id}`)}
    >
      <div className={cn('mx-[30px] flex items-center justify-between py-1 md:mx-[42px]')}>
        <div className={cn('flex flex-col gap-[5px] py-1')}>
          <h2 className={cn('title1 md:h2 text-gray-90')}>{name}</h2>
          <p className={cn('body1-medium text-gray-60')}>운행중인 슬로프 {slope ?? 0}개</p>
        </div>
        <div className={cn('flex flex-col items-end gap-2')}>
          <div className={cn('flex gap-2')}>
            <WeatherIcon className={cn('origin-right scale-[1.17]')} weather={weather.weather} />
            <p className={cn('h1-semibold text-[30px]')}>{weather.temperature}°</p>
          </div>
          <p className={cn('body1-semibold text-gray-60')}>{weather.description}</p>
        </div>
      </div>
      <hr className={cn('mx-[30px] max-w-[287px] border-gray-80 opacity-[0.04]')} />
      <ul
        className={cn(
          'flex w-full justify-between gap-[2px] overflow-x-scroll px-[30px] scrollbar-hide'
        )}
      >
        {weeklyWeather.map((weather, index) => (
          <WeeklyWeather
            key={index}
            {...weather}
            day={getTargetDateWeekday(index)}
            isToday={index === 0}
          />
        ))}
      </ul>
    </Card>
  );
};
export default DiscoveryCard;
