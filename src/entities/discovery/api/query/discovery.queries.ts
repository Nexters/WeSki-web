import { queryOptions } from '@tanstack/react-query';
import { getVote } from '../get-vote';

export const discoveryQueries = {
  all: () => ['discovery'],

  voteQueryKey: (resortId: number) => [...discoveryQueries.all(), 'vote', resortId],
  vote: (resortId: number) =>
    queryOptions({
      queryKey: discoveryQueries.voteQueryKey(resortId),
      queryFn: () => getVote(resortId),
    }),
};
