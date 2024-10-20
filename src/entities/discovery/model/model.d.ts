export type Weather = 'sun' | 'cloud' | 'rain' | 'snow' | 'fog' | 'snow-rain';

export type WeeklyWeather = {
  weather: Weather;
  temperature: {
    lowest: string;
    average: string;
  };
};

export type Discovery = {
  id: number;
  name: string;
  map: string;
  slope: number | null;
  url: {
    bus: string;
    homepage: string;
  };
  weather: {
    weather: Weather;
    temperature: number;
    description: string;
  };
  weeklyWeather: WeeklyWeather[];
};

export type Vote = {
  resortId: number;
  totalVotes: number;
  positiveVotes: number;
  status: string;
};

export type PostVoteRequest = {
  isPositive: boolean;
};
