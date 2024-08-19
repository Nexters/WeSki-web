import { queryOptions } from '@tanstack/react-query';
import type { RESORT_DOMAIN } from '../model';
import { getSlopes } from './get-slopes';

export const slopQueries = {
  all: () => ['slope'],

  listQueryKey: () => [...slopQueries.all(), 'list'],
  list: (key: keyof typeof RESORT_DOMAIN) =>
    queryOptions({
      queryKey: [...slopQueries.listQueryKey()],
      queryFn: () => getSlopes({ key }),
    }),
};
