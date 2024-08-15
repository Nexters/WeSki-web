import { queryOptions } from '@tanstack/react-query';
import { getDiscoveries } from './get-discoveries';

export const discoveryQueries = {
  all: () => ['discovery'],

  listQueryKey: () => [...discoveryQueries.all(), 'list'],
  list: () =>
    queryOptions({
      queryKey: [...discoveryQueries.listQueryKey()],
      queryFn: () => getDiscoveries(),
    }),
};
