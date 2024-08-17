import { act, useCallback } from 'react';
import type { Discovery } from '@/entities/discovery';
import { cn } from '@/shared/lib';
import Card from '@/shared/ui/card';
import { DiscoverySummaryActionList } from '../model/constants';
import DiscoverySummaryAction from './discovery-summary-action';
import VoteDialog from './vote-dialog';
import VoteIcon from '@/shared/icons/vote';
import BusIcon from '@/shared/icons/bus';
import LiftIcon from '@/shared/icons/lift';
import WeatherIcon from '@/features/discovery/ui/weather-icon';

const DiscoverySummary = ({ name, slope, weather }: Discovery) => {
  const handleAction = useCallback(
    (action: (typeof DiscoverySummaryActionList)[number]['name']) => {
      switch (action) {
        case 'bus':
          console.log('셔틀버스');
          break;
        case 'homepage':
          console.log('홈페이지');
          break;
        case 'vote':
          break;
        default:
          break;
      }
    },
    []
  );

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
              <DiscoverySummaryAction
                key={action.name}
                {...action}
                icon={action.name === 'bus' ? <BusIcon /> : <LiftIcon />}
                onClick={() => handleAction(action.name)}
              />
            );
          }
        })}
      </Card>
    </div>
  );
};

export default DiscoverySummary;
