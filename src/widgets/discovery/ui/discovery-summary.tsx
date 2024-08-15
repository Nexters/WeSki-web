import type { Discovery } from '@/entities/discovery';
import SnowIcon from '@/shared/icons/snow';
import { cn } from '@/shared/lib';
import Card from '@/shared/ui/card';
import WeatherIcon from './weather-icon';

const DiscoverySummary = ({ name, slope, weather }: Discovery) => {
  return (
    <div
      className={cn('xs:flex-row flex w-full flex-col gap-[26px] px-[30px] pb-[34px] pt-[10px]')}
    >
      <Card className={cn('xs:flex-1 flex h-[123px] items-center justify-between pl-[30px] pr-6')}>
        <div className={cn('flex flex-col gap-[5px]')}>
          <p className={cn('title1 text-gray-90')}>{name}</p>
          <p className={cn('body1-medium text-gray-60')}>운행중인 슬로프 {slope ?? '-'}개</p>
        </div>
        <div className={cn('flex flex-col items-end gap-2')}>
          <div className={cn('flex gap-2')}>
            <WeatherIcon weather={weather.weather} />
            <p className={cn('h1-semibold text-[30px]')}>{weather.temperature}</p>
          </div>
          <p className={cn('body1-semibold text-gray-60')}>{weather.description}</p>
        </div>
      </Card>
      <Card className={cn('flex h-[123px] items-center justify-center gap-[30px] px-5')}>
        {['셔틀버스', '홈페이지', '설질 투표'].map((key) => (
          <div key={key} className={cn('flex flex-col items-center gap-[7px]')}>
            <SnowIcon />
            <p className={cn('body1-semibold text-gray-60')}>{key}</p>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default DiscoverySummary;
