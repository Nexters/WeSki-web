import { apiClient } from '@/shared/api/base';
import type { Resort } from '../model';

export const getResorts = async (): Promise<Resort[]> => {
  const result = await apiClient.get<Resort[]>('/api/ski-resorts');

  return result;
};
