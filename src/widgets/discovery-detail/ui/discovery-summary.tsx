import Link from 'next/link';
import WeatherIcon from '@/features/discovery/ui/weather-icon';
import VoteDialog from '@/features/discovery-detail/ui/vote-dialog';
import type { Discovery } from '@/entities/discovery';
import { BusIcon, LiftIcon, VoteIcon } from '@/shared/icons';
import { cn } from '@/shared/lib';
import Card from '@/shared/ui/card';
import { DiscoverySummaryActionList } from '../model/constants';
import DiscoverySummaryAction from './discovery-summary-action';

const DiscoverySummary = ({ id, name, slope, url, weather }: Discovery) => {
  return (
    <div className={cn('flex w-full gap-[26px] px-5 pb-[34px] pt-[10px] md:px-[30px]')}>
      <Card
        className={cn(
          'flex flex-col justify-center gap-[5px] h-[134px] flex-1 items-center pl-[30px] pr-6 md:h-[123px]'
        )}
      >
        <div className={cn('flex w-full justify-between items-center')}>
          <p className={cn('title1 text-gray-90')}>{name}</p>
          <div className={cn('flex gap-2 items-center')}>
            <WeatherIcon weather={weather.weather} />
            <p className={cn('font-semibold text-[30px] leading-tight')}>{weather.temperature}°</p>
          </div>
        </div>
        <div className={cn('flex w-full justify-between items-center')}>
          <p className={cn('body1-medium text-gray-60')}>
            {slope ? `운행중인 슬로프 ${slope}개` : '개장일이 곧 공개될 예정이에요'}
          </p>
          <p className={cn('body1-semibold text-gray-60')}>{weather.description}</p>
        </div>
      </Card>
      <Card className={cn('hidden h-[123px] items-center justify-center gap-[30px] px-5 md:flex')}>
        {DiscoverySummaryActionList.map((action) => {
          if (action.name === 'vote') {
            return (
              <VoteDialog
                key={action.name}
                id={id}
                trigger={
                  <DiscoverySummaryAction key={action.name} {...action} icon={<VoteIcon />} />
                }
              />
            );
          } else {
            return (
              <Link
                key={action.name}
                href={action.name === 'bus' ? url.bus : url.homepage}
                target="_blank"
              >
                <DiscoverySummaryAction
                  {...action}
                  icon={action.name === 'bus' ? <BusIcon /> : <LiftIcon />}
                />
              </Link>
            );
          }
        })}
      </Card>
    </div>
  );
};

export default DiscoverySummary;
