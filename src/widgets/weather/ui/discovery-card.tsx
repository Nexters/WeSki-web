import type { Discovery } from '@/entities/weather';
import { cn } from '@/shared/lib';
import WeatherIcon from './weather-icon';
import WeeklyWeather from './weekly-weather';

const DiscoveryCard = ({ name, slope, weather, weeklyWeather }: Discovery) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-[15px] rounded-[15px] border border-white bg-gradient-to-br from-white/90 to-white/60 pb-[26px] pt-10 shadow-[2px_10px_29px_0px_rgba(47,49,65,0.02)] backdrop-blur-[25px]'
      )}
    >
      <div className={cn('mx-[42px] flex items-center justify-between py-1')}>
        <div className={cn('flex flex-col gap-[5px] py-1')}>
          <h2 className={cn('h2 text-gray-90')}>{name}</h2>
          <p className={cn('body1-regular text-gray-60')}>운행중인 슬로프 {slope ?? '-'}개</p>
        </div>
        <div className={cn('flex flex-col items-end gap-2')}>
          <div className={cn('flex gap-2')}>
            <WeatherIcon weather={weather.weather} />
            <p className={cn('h1-semibold text-[30px]')}>{weather.temperature}</p>
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
            isToday={index <= 6 && new Date().getDay() === index + 1}
          />
        ))}
      </ul>
    </div>
  );
};
export default DiscoveryCard;
