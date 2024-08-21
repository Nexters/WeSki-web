import { useMutation, useQueryClient } from '@tanstack/react-query';
import { discoveryApi } from '..';

export const usePostVote = (key: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ isLike }: { isLike: boolean }) => discoveryApi.postVote(key, { isLike }),
    async onSettled() {
      await queryClient.invalidateQueries({
        queryKey: discoveryApi.discoveryQueries.voteQueryKey(key),
      });
    },
  });
};
