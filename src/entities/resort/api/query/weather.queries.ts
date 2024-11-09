import { queryOptions } from '@tanstack/react-query';
import { getWeather } from '../get-weather';

export const weatherQueries = {
  all: () => ['weather'],

  weatherQueryKey: (resortId: number) => [...weatherQueries.all(), resortId],
  weather: (resortId: number) =>
    queryOptions({
      queryKey: weatherQueries.weatherQueryKey(resortId),
      queryFn: () => getWeather(resortId),
    }),
};
