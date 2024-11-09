import { apiClient } from '@/shared/api/base';
import type { WeatherResponse } from '../model';

export const getWeather = async (resortId: number): Promise<WeatherResponse> => {
  const result = await apiClient.get<WeatherResponse>(`/api/weather/${resortId}`);

  return result;
};
