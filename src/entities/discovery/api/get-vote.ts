import { apiClient } from '@/shared/api/base';
import type { Vote } from '../model';

export const getVote = async (key: string): Promise<Vote> => {
  const result = await apiClient.get<Vote>(`/ski/${key}/snowmaking`);

  return result;
};
