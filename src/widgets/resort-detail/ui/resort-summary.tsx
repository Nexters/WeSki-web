import Link from 'next/link';
// eslint-disable-next-line boundaries/element-types
import { getResortStatusText } from '@/widgets/resort/lib/getResortStatusText';
import WeatherIcon from '@/features/resort/ui/weather-icon';
import VoteDialog from '@/features/resort-detail/ui/vote-dialog';
import type { Resort, Url } from '@/entities/resort';
import { BusIcon, LiftIcon, VoteIcon } from '@/shared/icons';
import { cn } from '@/shared/lib';
import { getWeatherFromDescription } from '@/shared/lib/getWeatherFromDescription';
import Card from '@/shared/ui/card';
import { ResortSummaryActionList } from '../model/constants';
import ResortSummaryAction from './resort-summary-action';

const ResortSummary = ({
  resortId,
  name,
  status,
  openingDate,
  openSlopes,
  currentWeather,
  bus,
  homepage,
}: Resort & Url) => {
  return (
    <div className={cn('flex w-full gap-[26px] px-5 pb-[34px] pt-[10px] md:px-[30px]')}>
      <Card
        className={cn(
          'flex h-[134px] flex-1 flex-col items-center justify-center gap-[5px] pl-[30px] pr-6 md:h-[123px]'
        )}
      >
        <div className={cn('flex w-full items-center justify-between')}>
          <p className={cn('title1 text-gray-90')}>{name}</p>
          <div className={cn('flex items-center gap-2')}>
            <WeatherIcon weather={getWeatherFromDescription(currentWeather.description)} />
            <p className={cn('text-[30px] font-semibold leading-tight')}>
              {currentWeather.temperature}°
            </p>
          </div>
        </div>
        <div className={cn('flex w-full items-center justify-between')}>
          <p className={cn('body1-medium text-gray-60')}>
            {getResortStatusText(status, openingDate, openSlopes)}
          </p>
          <p className={cn('body1-semibold text-gray-60')}>{currentWeather.description}</p>
        </div>
      </Card>
      <Card className={cn('hidden h-[123px] items-center justify-center gap-[30px] px-5 md:flex')}>
        {ResortSummaryActionList.map((action) => {
          if (action.name === 'vote') {
            return (
              <VoteDialog
                key={action.name}
                id={resortId}
                trigger={<ResortSummaryAction key={action.name} {...action} icon={<VoteIcon />} />}
              />
            );
          } else {
            return (
              <Link key={action.name} href={action.name === 'bus' ? bus : homepage} target="_blank">
                <ResortSummaryAction
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

export default ResortSummary;
