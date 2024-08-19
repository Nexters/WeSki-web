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
  {
    id: 5,
    name: '하이원스키장',
    map: 'high1',
    slope: 10,
    weather: {
      weather: 'rain',
      temperature: -4,
      description: '비',
    },
    weeklyWeather: WeeklyWeatherData,
  },
  {
    id: 6,
    name: '곤지암스키장',
    map: 'gonjiam',
    slope: 10,
    weather: {
      weather: 'rain',
      temperature: -4,
      description: '비',
    },
    weeklyWeather: WeeklyWeatherData,
  },
  {
    id: 7,
    name: '비발디파크',
    map: 'vivaldipark',
    slope: 10,
    weather: {
      weather: 'rain',
      temperature: -4,
      description: '비',
    },
    weeklyWeather: WeeklyWeatherData,
  },
  {
    id: 8,
    name: '엘리시안 강촌',
    map: 'elysian-gangchon',
    slope: 10,
    weather: {
      weather: 'rain',
      temperature: -4,
      description: '비',
    },
    weeklyWeather: WeeklyWeatherData,
  },
  {
    id: 9,
    name: '무주리조트 덕유산',
    map: 'muju',
    slope: 10,
    weather: {
      weather: 'rain',
      temperature: -4,
      description: '비',
    },
    weeklyWeather: WeeklyWeatherData,
  },
  {
    id: 10,
    name: '휘닉스파크',
    map: 'phoenix',
    slope: 10,
    weather: {
      weather: 'rain',
      temperature: -4,
      description: '비',
    },
    weeklyWeather: WeeklyWeatherData,
  },
];
