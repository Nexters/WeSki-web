import type { Weather } from '@/entities/discovery/model';
import { CloudIcon, RainIcon, SnowIcon, SunIcon } from '@/shared/icons';

interface WeatherIconProps {
  className?: string;
  weather: Weather;
}

const WeatherIcon = ({ className, weather }: WeatherIconProps) => {
  switch (weather) {
    case 'sun':
      return <SunIcon className={className} />;
    case 'cloud':
      return <CloudIcon className={className} />;
    case 'rain':
      return <RainIcon className={className} />;
    case 'snow':
      return <SnowIcon className={className} />;
    default:
      return null;
  }
};

export default WeatherIcon;
