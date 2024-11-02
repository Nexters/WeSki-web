export type Weather = 'sun' | 'cloud' | 'rain' | 'snow' | 'fog' | 'snow-rain';

export type DuplicatedWeeklyWeather = {
  weather: Weather;
  temperature: {
    lowest: string;
    average: string;
  };
};

export type Url = {
  bus: string;
  homepage: string;
};

export type Discovery = {
  id: number;
  name: string;
  map: string;
  slope: number | null;
  url: Url;
  weather: {
    weather: Weather;
    temperature: number;
    description: string;
  };
  weeklyWeather: DuplicatedWeeklyWeather[];
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
  openSlopes: number,
  currentWeather: {
    temperature: number,
    description: string
  },
  weeklyWeather: SummarizedWeeklyWeather[]
}