import { cn } from '@/shared/lib';

import WEATHER_DATA from '../model/DUMMY';

const WeatherCard = () => {
  return (
    <div className={cn('h-[461px] w-[335px] rounded-lg bg-gray-100 p-6')}>
      <div className={cn('mb-[130px] flex items-center justify-between')}>
        <h4 className={cn('font-bold')}>하이원 스키장</h4>
        <div className={cn('rounded-lg bg-white px-3 py-1 text-sm font-bold')}>설질 GOOD 56%</div>
      </div>

      <p className={cn('text-4xl font-semibold')}>25°</p>
      <p className={cn('mb-4 text-sm text-gray-600')}>흐리고 비</p>

      <p className={cn('text-lg font-semibold')}>흐리고 비오는 날씨가 계속 돼요</p>
      <p className={cn('mb-4 text-sm')}>최고:28° 최저 24° 미세먼지 좋음</p>

      <hr className={cn('mb-4')} />

      <ul className={cn('flex gap-5')}>
        {WEATHER_DATA.map((data) => (
          <li key={data.time} className={cn('flex flex-col items-center')}>
            <div className={cn('mb-1 text-sm font-medium')}>{data.time}</div>
            {data.icon}
            <p className={cn('mt-1')}>{data.temperature}</p>
            <p className={cn('text-xs')}>{data.humidity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherCard;
