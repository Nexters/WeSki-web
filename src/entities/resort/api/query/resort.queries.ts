import { queryOptions } from '@tanstack/react-query';
import { getResorts } from '../get-resort';
import { getVote } from '../get-vote';

export const resortQueries = {
  all: () => ['resort'],

  listQueryKey: () => [...resortQueries.all(), 'list'],
  list: () =>
    queryOptions({
      queryKey: [...resortQueries.listQueryKey()],
      queryFn: () => getResorts(),
    }),
  voteQueryKey: (resortId: number) => [...resortQueries.all(), 'vote', resortId],
  vote: (resortId: number) =>
    queryOptions({
      queryKey: resortQueries.voteQueryKey(resortId),
      queryFn: () => getVote(resortId),
    }),
};
