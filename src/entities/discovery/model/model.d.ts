export type Weather = 'sun' | 'cloud' | 'rain' | 'snow';

export type WeeklyWeather = {
  day: string;
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
  weather: {
    weather: Weather;
    temperature: number;
    description: string;
  };
  weeklyWeather: WeeklyWeather[];
};
