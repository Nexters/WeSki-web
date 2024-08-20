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
  voteQueryKey: (key: string) => [...discoveryQueries.all(), 'vote', key],
  vote: (key: string) =>
    queryOptions({
      queryKey: discoveryQueries.voteQueryKey(key),
      queryFn: () => getVote(key),
    }),
};
