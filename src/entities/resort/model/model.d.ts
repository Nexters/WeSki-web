export type Weather = 'sun' | 'cloud' | 'rain' | 'snow' | 'fog' | 'snow-rain';

export type Url = {
  bus: string;
  homepage: string;
};

export type ResortInfo = {
  id: number;
  name: string;
  map: string;
  url: Url;
};

export type Vote = {
  resortId: number;
  totalVotes: number;
  positiveVotes: number;
  status: string;
};

export type WeatherResponse = {
  resortId: number,
  currentWeather: {
    temperature: number,
    maxTemperature: number,
    minTemperature: number,
    feelsLike: number,
    description: string,
    condition: string
  },
  hourlyWeather: [],
  weeklyWeather: WeeklyWeather[]
}

export type WeeklyWeather = {
  day: string;
  date: string;
  precipitationChance: string;
  maxTemperature: number;
  minTemperature: number;
  condition: string;
};

export type SummarizedWeeklyWeather = {
  day: string;
  maxTemperature: number;
  minTemperature: number;
  description: string;
};

export type Resort = {
  resortId: number,
  name: string,
  status: string,
  openingDate: string,
  closingDate: string,
  openSlopes: number,
  currentWeather: {
    temperature: number,
    description: string
  },
  weeklyWeather: SummarizedWeeklyWeather[]
}