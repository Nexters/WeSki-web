import { apiClient } from '@/shared/api/base';
import type { PostVoteRequest } from '../model';

export const postVote = async (resortId: number, body: PostVoteRequest) => {
  const res = await apiClient.post<PostVoteRequest>(`api/snow-maker/${resortId}/vote`, body);
  return res;
};
