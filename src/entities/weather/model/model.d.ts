export type Weather = 'sun' | 'cloud';

export type WeatherItem = {
  day: string;
  weather: Weather;
  temperature: {
    lowest: string;
    average: string;
  };
};
