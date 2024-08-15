import { keepPreviousData, queryOptions } from '@tanstack/react-query';
import { getDiscoveries } from './get-discoveries';

export const discoveryQueries = {
  all: () => ['discoveries'],

  lists: () => [...discoveryQueries.all(), 'list'],
  list: () =>
    queryOptions({
      queryKey: [...discoveryQueries.lists()],
      queryFn: () => getDiscoveries(),
      placeholderData: keepPreviousData,
    }),
};
