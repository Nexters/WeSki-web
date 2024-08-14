import type { Weather } from '@/entities/weather/model';
import CloudIcon from '@/shared/icons/cloud';
import RainIcon from '@/shared/icons/rain';
import SnowIcon from '@/shared/icons/snow';
import SunIcon from '@/shared/icons/sun';

const WeatherIcon = ({ weather }: { weather: Weather }) => {
  switch (weather) {
    case 'sun':
      return <SunIcon />;
    case 'cloud':
      return <CloudIcon />;
    case 'rain':
      return <RainIcon />;
    case 'snow':
      return <SnowIcon />;
    default:
      return null;
  }
};

export default WeatherIcon;
