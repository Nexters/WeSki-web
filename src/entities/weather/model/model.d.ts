export type Weather = 'sun' | 'cloud' | 'rain' | 'snow';

export type WeatherItem = {
  day: string;
  weather: Weather;
  temperature: {
    lowest: string;
    average: string;
  };
};
