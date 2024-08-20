import Link from 'next/link';
import WeatherIcon from '@/features/discovery/ui/weather-icon';
import VoteDialog from '@/features/discovery-detail/ui/vote-dialog';
import type { Discovery } from '@/entities/discovery';
import { BusIcon, LiftIcon, VoteIcon } from '@/shared/icons';
import { cn } from '@/shared/lib';
import Card from '@/shared/ui/card';
import { DiscoverySummaryActionList } from '../model/constants';
import DiscoverySummaryAction from './discovery-summary-action';

const DiscoverySummary = ({ name, slope, url, weather }: Discovery) => {
  return (
    <div className={cn('flex w-full gap-[26px] px-[30px] pb-[34px] pt-[10px]')}>
      <Card className={cn('flex h-[123px] flex-1 items-center justify-between pl-[30px] pr-6')}>
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
      <Card className={cn('hidden h-[123px] items-center justify-center gap-[30px] px-5 xs:flex')}>
        {DiscoverySummaryActionList.map((action) => {
          if (action.name === 'vote') {
            return (
              <VoteDialog
                key={action.name}
                trigger={
                  <DiscoverySummaryAction key={action.name} {...action} icon={<VoteIcon />} />
                }
                count={{ total: 100, voted: 50 }}
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
