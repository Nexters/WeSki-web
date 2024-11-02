import { queryOptions } from '@tanstack/react-query';
import { getResorts } from '../get-resort';

export const resortQueries = {
  all: () => ['resort'],

  listQueryKey: () => [...resortQueries.all(), 'list'],
  list: () =>
    queryOptions({
      queryKey: [...resortQueries.listQueryKey()],
      queryFn: () => getResorts(),
    }),
};
