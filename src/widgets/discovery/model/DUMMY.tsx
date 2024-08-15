import CloudIcon from '@/shared/icons/cloud';
import SunIcon from '@/shared/icons/sun';

const WEATHER_DATA = [
  {
    time: '오전 8시',
    icon: <SunIcon />,
    temperature: '22°',
    humidity: '20%',
  },
  {
    time: '오전 11시',
    icon: <CloudIcon />,
    temperature: '24°',
    humidity: '30%',
  },
  {
    time: '오후 2시',
    icon: <SunIcon />,
    temperature: '26°',
    humidity: '40%',
  },
  {
    time: '오후 5시',
    icon: <CloudIcon />,
    temperature: '25°',
    humidity: '30%',
  },
];

export default WEATHER_DATA;
