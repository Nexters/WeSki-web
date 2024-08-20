import { apiClient } from '@/shared/api/base';
import type { PostVoteRequest } from '../model';

export const postVote = async (key: string, body: PostVoteRequest) => {
  const res = await apiClient.post<PostVoteRequest>(`/ski/${key}/snowmaking`, body);
  return res;
};
