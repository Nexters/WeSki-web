import { useCallback, useState } from 'react';
import { CheckIcon } from '@/shared/icons';
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

interface VoteDialogProps {
  trigger: React.ReactNode;
  count: {
    total: number;
    voted: number;
  };
}

const VoteDialog = ({ trigger, count }: VoteDialogProps) => {
  const [isGood, setIsGood] = useState<boolean>(true);

  const handleVote = useCallback(() => {
    console.log(isGood);
  }, [isGood]);

  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <p className={cn('title3-semibold')}>오늘의 설질</p>
          <div className={cn('flex flex-col gap-1')}>
            <DialogTitle>상태가 좋아요</DialogTitle>
            <p className={cn('body1-semibold text-gray-60')}>
              {count.total}명 중 <span className={cn('body1-bold text-main-1')}>{count.voted}</span>
              명이 설질에 대해 투표했어요
            </p>
          </div>
          <DialogDescription>오늘같은 현장은 설질 괜찮을까요?</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className={cn('flex flex-col gap-3')}>
            <button
              className={cn(
                'flex h-10 w-full items-center justify-between rounded-[8px] border border-main-1 pl-4 pr-3',
                !isGood && 'border-gray-30'
              )}
              onClick={() => setIsGood(true)}
            >
              <p className={cn('body1-regular text-gray-60')}>괜찮을 것 같아요</p>
              {isGood && <CheckIcon className={cn('text-main-1')} />}
            </button>
            <button
              className={cn(
                'flex h-10 items-center justify-between rounded-[8px] border border-main-1 pl-4 pr-3',
                isGood && 'border-gray-30'
              )}
              onClick={() => setIsGood(false)}
            >
              <p className={cn('body1-regular text-gray-60')}>별로일 것 같아요</p>
              {!isGood && <CheckIcon className={cn('text-main-1')} />}
            </button>
          </div>
          <DialogClose
            className={cn(
              'title3-semibold flex h-[52px] items-center justify-center rounded-[8px] bg-main-1 text-gray-10'
            )}
            onClick={handleVote}
          >
            투표하기
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default VoteDialog;
