import type { Discovery, WeeklyWeather } from './model';

export const WeeklyWeatherData: WeeklyWeather[] = [
  {
    day: '월',
    weather: 'sun',
    temperature: {
      lowest: '-2°',
      average: '-5°',
    },
  },
  {
    day: '화',
    weather: 'snow',
    temperature: {
      lowest: '-3°',
      average: '-6°',
    },
  },
  {
    day: '수',
    weather: 'sun',
    temperature: {
      lowest: '-1°',
      average: '-4°',
    },
  },
  {
    day: '목',
    weather: 'cloud',
    temperature: {
      lowest: '-2°',
      average: '-5°',
    },
  },
  {
    day: '금',
    weather: 'cloud',
    temperature: {
      lowest: '-1°',
      average: '-4°',
    },
  },
  {
    day: '토',
    weather: 'rain',
    temperature: {
      lowest: '-3°',
      average: '-6°',
    },
  },
  {
    day: '일',
    weather: 'sun',
    temperature: {
      lowest: '-2°',
      average: '-5°',
    },
  },
  {
    day: '월',
    weather: 'sun',
    temperature: {
      lowest: '-2°',
      average: '-5°',
    },
  },
];

export const DiscoveryData: Discovery[] = [
  {
    id: 1,
    name: '용평스키장 모나',
    map: 'yongpyong',
    slope: null,
    weather: {
      weather: 'sun',
      temperature: -5,
      description: '맑음',
    },
    weeklyWeather: WeeklyWeatherData,
  },
  {
    id: 2,
    name: '지산 리조트',
    map: 'jisan',
    slope: 8,
    weather: {
      weather: 'cloud',
      temperature: -3,
      description: '흐리고 비',
    },
    weeklyWeather: WeeklyWeatherData,
  },
  {
    id: 3,
    name: '에덴밸리 리조트',
    map: 'eden',
    slope: 10,
    weather: {
      weather: 'rain',
      temperature: -4,
      description: '비',
    },
    weeklyWeather: WeeklyWeatherData,
  },
  {
    id: 4,
    name: '웰리힐리파크',
    map: 'wellihilli',
    slope: 10,
    weather: {
      weather: 'rain',
      temperature: -4,
      description: '비',
    },
    weeklyWeather: WeeklyWeatherData,
  },
];
