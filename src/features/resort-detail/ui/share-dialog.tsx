import Image from 'next/image';
import { useCallback } from 'react';
import { toast } from 'sonner';
import logo from '@public/assets/logo.svg';
import snow from '@public/assets/snow.png';
import share1 from '@public/shares/share_01.png';
import share4 from '@public/shares/share_04.png';
import { CloseIcon } from '@/shared/icons';
import { cn, getPostposition } from '@/shared/lib';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog';

interface ShareDialogProps {
  trigger: React.ReactNode;
  name?: string;
}

const ShareDialog = ({ trigger, name }: ShareDialogProps) => {
  const handleShareToKakao = useCallback(() => {
    const { Kakao, location } = window;
    Kakao.Share.sendScrap({
      requestUrl: location.href,
      templateId: 111416,
    });
  }, []);

  const handleCopyUrl = useCallback(() => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        toast('클립보드에 복사되었습니다');
      })
      .catch((error) => {
        console.error('클립보드 복사 실패!', error);
      });
  }, []);

  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent
        className={cn(
          'w-[321px] gap-0 overflow-hidden rounded-[7px] bg-white px-[30px] pb-[30px] pt-[27px]'
        )}
      >
        <DialogTitle className={cn('hidden')} />
        <DialogDescription className={cn('hidden')} />
        <Image
          src={snow}
          alt="snow"
          className={cn('absolute right-[-41px] top-0 h-[196px] w-[191px]')}
        />
        <DialogClose>
          <CloseIcon className={cn('absolute right-6 top-6 size-6 cursor-pointer text-gray-50')} />
        </DialogClose>
        <Image src={logo} alt="logo" width={56} draggable={false} />
        <div className={cn('h3-semibold mb-[31px] mt-[38px] flex h-16 flex-col justify-evenly')}>
          <p>{getPostposition(name || '')}</p>
          <p>공유해보세요!</p>
        </div>
        <div className={cn('body2-medium z-10 flex gap-[14px] text-gray-70')}>
          <button
            className={cn('flex w-[120px] items-center gap-[10px]')}
            onClick={handleShareToKakao}
          >
            <Image src={share1} alt="kakao-talk" width={46} height={46} />
            <p>카카오톡</p>
          </button>
          <button className={cn('flex w-[120px] items-center gap-[10px]')} onClick={handleCopyUrl}>
            <Image src={share4} alt="link" width={46} height={46} />
            <p>링크 복사</p>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareDialog;
