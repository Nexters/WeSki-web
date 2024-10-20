import { queryOptions } from '@tanstack/react-query';
import { getDiscoveries } from './get-discoveries';
import { getVote } from './get-vote';

export const discoveryQueries = {
  all: () => ['discovery'],

  listQueryKey: () => [...discoveryQueries.all(), 'list'],
  list: () =>
    queryOptions({
      queryKey: [...discoveryQueries.listQueryKey()],
      queryFn: () => getDiscoveries(),
    }),
  voteQueryKey: (resortId: number) => [...discoveryQueries.all(), 'vote', resortId],
  vote: (resortId: number) =>
    queryOptions({
      queryKey: discoveryQueries.voteQueryKey(resortId),
      queryFn: () => getVote(resortId),
    }),
};
