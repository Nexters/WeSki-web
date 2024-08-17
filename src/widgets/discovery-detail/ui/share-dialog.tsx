import Image from 'next/image';
import logo from '@public/logo.svg';
import share1 from '@public/share_01.png';
import share2 from '@public/share_02.png';
import share3 from '@public/share_03.png';
import share4 from '@public/share_04.png';
import snow from '@public/snow.png';
import { CloseIcon } from '@/shared/icons';
import { cn } from '@/shared/lib';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/shared/ui/dialog';

interface ShareDialogProps {
  trigger: React.ReactNode;
  name?: string;
}

const ShareDialog = ({ trigger, name }: ShareDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent
        className={cn(
          'w-[321px] gap-0 overflow-hidden rounded-[7px] bg-white px-[30px] pb-[30px] pt-[27px]'
        )}
      >
        <Image
          src={snow}
          alt="snow"
          width={191}
          height={196}
          className={cn('absolute right-[-41px] top-0')}
        />
        <DialogClose>
          <CloseIcon className={cn('absolute right-6 top-6 size-6 cursor-pointer text-gray-50')} />
        </DialogClose>
        <Image src={logo} alt="logo" />
        <div className={cn('h3-semibold mb-[31px] mt-[38px] flex h-16 flex-col justify-evenly')}>
          <p>{name}을</p>
          <p>공유해보세요!</p>
        </div>
        <div className={cn('body3-medium flex justify-between gap-3 text-gray-70')}>
          <div className={cn('flex flex-col items-center gap-[6px]')}>
            <button>
              <Image src={share1} alt="kakao-talk" width={46} height={46} />
            </button>
            <p>카카오톡</p>
          </div>
          <div className={cn('flex flex-col items-center gap-[6px]')}>
            <button>
              <Image src={share2} alt="instagram" width={46} height={46} />
            </button>
            <p>인스타그램</p>
          </div>
          <div className={cn('flex flex-col items-center gap-[6px]')}>
            <button>
              <Image src={share3} alt="thread" width={46} height={46} />
            </button>
            <p>스레드</p>
          </div>
          <div className={cn('flex flex-col items-center gap-[6px]')}>
            <button>
              <Image src={share4} alt="link" width={46} height={46} />
            </button>
            <p>링크 공유</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareDialog;
