import type { Weather } from '@/entities/resort/model';
import { CloudIcon, FogIcon, RainIcon, SnowIcon, SnowRainIcon, SunIcon } from '@/shared/icons';

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
    case 'fog':
      return <FogIcon className={className} />;
    case 'snow-rain':
      return <SnowRainIcon className={className} />;

    default:
      return null;
  }
};

export default WeatherIcon;
