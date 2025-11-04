import { apiClient } from '@/shared/api/base';

import type { Vote } from '../model';

export const getVote = async (resortId: number): Promise<Vote> => {
  const result = await apiClient.get<Vote>(`/api/snow-maker/${resortId}`);

  return result;
};
