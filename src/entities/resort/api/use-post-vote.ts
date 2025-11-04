import { useMutation, useQueryClient } from '@tanstack/react-query';

import { resortApi } from '..';

export const usePostVote = (resortId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ isPositive }: { isPositive: boolean }) => resortApi.postVote(resortId, {isPositive}),
    async onSettled() {
      await queryClient.invalidateQueries({
        queryKey: resortApi.resortQueries.voteQueryKey(resortId),
      });
    },
  });
};
