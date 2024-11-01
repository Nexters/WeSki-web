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
        'transition-all hover:scale-[1.02] hover:border-2 hover:border-main-1/30 hover:pb-[15px] hover:pt-[33px] hover:md:pb-[25px] hover:md:pt-[39px]'
      )}
      onClick={() => router.push(`/${id}`)}
    >
      <div className={cn('mx-[30px] flex flex-col items-center gap-[5px] md:mx-[42px]')}>
        <div className={cn('flex w-full items-center justify-between')}>
          <h2 className={cn('title1 md:h2 text-gray-90')}>{name}</h2>
          <div className={cn('flex items-center gap-2')}>
            <WeatherIcon className={cn('origin-right scale-[1.17]')} weather={weather.weather} />
            <p className={cn('text-[30px] font-semibold leading-tight')}>{weather.temperature}°</p>
          </div>
        </div>
        <div className={cn('flex w-full justify-between')}>
          <p className={cn('body1-medium text-gray-60')}>
            {slope ? `운행중인 슬로프 ${slope}개` : '개장일이 곧 공개될 예정이에요'}
          </p>
          <p className={cn('body1-semibold text-gray-60')}>{weather.description}</p>
        </div>
      </div>
      <hr className={cn('mx-[30px] border-gray-80 opacity-[0.04]')} />
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
