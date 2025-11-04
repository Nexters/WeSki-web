import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { toast } from 'sonner';

import { resortApi } from '@/entities/resort';
import { usePostVote } from '@/entities/resort/api/use-post-vote';
import { CheckIcon, CloseIcon } from '@/shared/icons';
import { cn } from '@/shared/lib';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog';

import { formatDate } from '../lib/formatDate';
import { canVote, getVoteData, saveVoteData } from '../lib/vote';

interface VoteDialogProps {
  id: number;
  trigger: React.ReactNode;
}

const VoteDialog = ({ id, trigger }: VoteDialogProps) => {
  const [isPositive, setIsPositive] = useState<boolean>(true);
  const { data: voteData } = useQuery(resortApi.resortQueries.vote(id));

  const { mutateAsync } = usePostVote(id);

  const handleVote = useCallback(async () => {
    if (!canVote(id.toString())) {
      toast.error('하루에 한 번만 투표할 수 있어요');
      return;
    }
    try {
      await mutateAsync({ isPositive });
    } catch (error) {
      console.log(error);
    } finally {
      const voteData = getVoteData();
      voteData[id.toString()] = formatDate(new Date());
      saveVoteData(voteData);
      toast.success('고마워요! 투표의 결과가 반영되었어요');
      gtag('event', 'details_webcam_vote', { detail_type: id });
    }
  }, [id, isPositive, mutateAsync]);

  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogClose className={cn('absolute right-6 top-6 size-6 cursor-pointer')}>
          <CloseIcon />
        </DialogClose>
        <DialogHeader>
          <p className={cn('title3-semibold')}>오늘의 설질</p>
          <div className={cn('flex flex-col gap-1')}>
            <DialogTitle>{voteData?.status}</DialogTitle>
            <p className={cn('body1-semibold text-gray-60')}>
              {voteData?.totalVotes}명 중{' '}
              <span className={cn('body1-bold text-main-1')}>{voteData?.positiveVotes}</span>
              명이 긍정적으로 투표했어요.
            </p>
          </div>
          <DialogDescription>오늘의 현장은 설질 괜찮을까요?</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className={cn('flex flex-col gap-3')}>
            <button
              className={cn(
                'flex h-10 w-full items-center justify-between rounded-[8px] border border-main-1 pl-4 pr-3',
                !isPositive && 'border-gray-30'
              )}
              onClick={() => setIsPositive(true)}
            >
              <p className={cn('body1-regular text-gray-60')}>괜찮을 것 같아요</p>
              {isPositive && <CheckIcon className={cn('text-main-1')} />}
            </button>
            <button
              className={cn(
                'flex h-10 items-center justify-between rounded-[8px] border border-main-1 pl-4 pr-3',
                isPositive && 'border-gray-30'
              )}
              onClick={() => setIsPositive(false)}
            >
              <p className={cn('body1-regular text-gray-60')}>별로일 것 같아요</p>
              {!isPositive && <CheckIcon className={cn('text-main-1')} />}
            </button>
          </div>
          <button
            className={cn(
              'title3-semibold flex h-[52px] items-center justify-center rounded-[8px] bg-main-1 text-gray-10'
            )}
            onClick={handleVote}
          >
            투표하기
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default VoteDialog;
