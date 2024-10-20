import { useMutation, useQueryClient } from '@tanstack/react-query';
import { discoveryApi } from '..';

export const usePostVote = (resortId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ isPositive }: { isPositive: boolean }) => discoveryApi.postVote(resortId, {isPositive}),
    async onSettled() {
      await queryClient.invalidateQueries({
        queryKey: discoveryApi.discoveryQueries.voteQueryKey(resortId),
      });
    },
  });
};
