// eslint-disable-next-line boundaries/element-types
import type { Weather } from "@/entities/resort";

const weatherDescription = {
  sun: ['맑음'],
  cloud: ['구름', '구름많음'],
  rain: ['비', '구름많고 비', '흐리고 비', '구름많고 소나기', '흐리고 소나기'],
  snow: ['눈', '구름많고 눈', '흐리고 눈'],
  fog: ['안개', '흐림'],
  'snow-rain': ['흐리고 비/눈', '구름많고 비/눈']
}

export const getWeatherFromDescription = (description: string): Weather => {
  for (const [weather, descriptions] of Object.entries(weatherDescription)) {
    if (descriptions.includes(description)) {
      return weather as Weather;
    }
  }

  return 'sun';
}