import type { Weather } from '@/entities/weather/model';
import CloudIcon from '@/shared/icons/cloud';
import SunIcon from '@/shared/icons/sun';

const WeatherIcon = ({ weather }: { weather: Weather }) => {
  switch (weather) {
    case 'sun':
      return <SunIcon />;
    case 'cloud':
      return <CloudIcon />;
    default:
      return null;
  }
};

export default WeatherIcon;
