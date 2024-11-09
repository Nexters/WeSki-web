import { queryOptions } from '@tanstack/react-query';
import { getSlope } from '../get-slope';

export const slopeQueries = {
  all: () => ['slope'],

  slopeQueryKey: (resortId: number) => [...slopeQueries.all(), resortId],
  slope: (resortId: number) =>
    queryOptions({
      queryKey: slopeQueries.slopeQueryKey(resortId),
      queryFn: () => getSlope(resortId),
    }),
};
