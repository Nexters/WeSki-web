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
    url: {
      bus: 'https://skibus.purplebus.co.kr/Yp/',
      homepage: 'https://www.yongpyong.co.kr/kor/skiNboard/introduce.do',
    },
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
    url: {
      bus: 'https://www.jisanresort.co.kr/w/reservation/shuttle/reservation.asp',
      homepage: 'https://www.jisanresort.co.kr/m/ski/',
    },
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
    url: {
      bus: 'http://m.newbusantour.co.kr/goods/goods_detail.asp?g_cd=2183',
      homepage: 'https://www.edenvalley.co.kr/ski/View.asp?location=01',
    },
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
    url: {
      bus: 'https://www.wellihillipark.com/home/guide/map/shuttle',
      homepage: 'https://www.wellihillipark.com/snowpark',
    },
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
    url: {
      bus: 'https://skibus.purplebus.co.kr/Hi/',
      homepage: 'https://www.high1.com/ski/index.do',
    },
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
    url: {
      bus: 'https://m.konjiamresort.co.kr/ski/pickupService.dev',
      homepage: 'https://www.konjiamresort.co.kr/main.dev',
    },
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
    url: {
      bus: 'https://www.busline.co.kr/busline_22K28/reservation_input.html?title=%EB%85%B8%EC%84%A0%EC%84%A0%ED%83%9D%20%EB%B0%8F%20%EC%9D%B4%EC%9A%A9%EC%9E%90%EB%93%B1%EB%A1%9D',
      homepage: 'https://www.sonohotelsresorts.com/complex_vp',
    },
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
    url: {
      bus: 'https://gs.elysian.co.kr/gangchon/enjoyElysian/roadMap_free_230210_pop.asp',
      homepage: 'https://www.elysian.co.kr/',
    },
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
    url: {
      bus: 'https://www.mdysresort.com/guide/shuttle_bus.asp',
      homepage: 'https://www.mdysresort.com/index.asp',
    },
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
    url: {
      bus: 'https://skibus.purplebus.co.kr/Pp/',
      homepage: 'https://phoenixhnr.co.kr/page/main/pyeongchang?q%5BhmpgDivCd%5D=PP&page=1&size=4',
    },
    weather: {
      weather: 'rain',
      temperature: -4,
      description: '비',
    },
    weeklyWeather: WeeklyWeatherData,
  },
];
