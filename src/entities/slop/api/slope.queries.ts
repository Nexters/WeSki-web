import { queryOptions } from '@tanstack/react-query';
import { getSlopes } from './get-slopes';

export const slopQueries = {
  all: () => ['slope'],

  listQueryKey: () => [...slopQueries.all(), 'list'],
  list: (key: string) =>
    queryOptions({
      queryKey: [...slopQueries.listQueryKey()],
      queryFn: () => getSlopes({ key }),
    }),
};
