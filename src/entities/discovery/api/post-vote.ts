import { apiClient } from '@/shared/api/base';

export const postVote = async (resortId: number, {isPositive}: {isPositive: boolean}) => {
  const res = await apiClient.post(`/api/snow-maker/${resortId}/vote`, {isPositive});
  return res;
};
