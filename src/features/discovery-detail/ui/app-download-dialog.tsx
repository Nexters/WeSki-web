import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';
import { toast } from 'sonner';
import logo from '@public/assets/logo.svg';
import snow from '@public/assets/snow.png';
import android from '@public/downloads/android.png';
import ios from '@public/downloads/ios.png';
import { CloseIcon } from '@/shared/icons';
import { cn } from '@/shared/lib';

interface AppDownloadDialogProps {
  className?: string;
  onClose: () => void;
}

const AppDownloadDialog = ({ className, onClose }: AppDownloadDialogProps) => {
  const handleAndroid = useCallback(() => {
    toast.error('준비중입니다.');
  }, []);
  
  return (
    <div
      className={cn(
        'relative w-[341px] overflow-hidden rounded-[7px] bg-main-5 px-[30px] pb-[26px] pt-[27px]',
        className
      )}
    >
      <Image
        src={snow}
        alt="snow"
        className={cn('absolute right-[-21px] top-0 h-[196px] w-[191px]')}
      />
      <CloseIcon className={cn('absolute right-6 top-6 size-6 cursor-pointer')} onClick={onClose} />
      <Image src={logo} alt="logo" width={56} draggable={false} />
      <p className={cn('title1 mb-[39px] mt-[35px] whitespace-pre-wrap')}>
        {'지금 앱 다운로드하고\n블라인드된 정보를\n매일 확인해보세요'}
      </p>
      <div className={cn('flex gap-3')}>
        <Link
          href="https://apps.apple.com/kr/app/weski-%EC%8A%A4%ED%82%A4%EC%9E%A5-%ED%81%90%EB%A0%88%EC%9D%B4%EC%85%98-%ED%94%8C%EB%9E%AB%ED%8F%BC/id6642660900"
          target="_blank"
        >
          <Image src={ios} alt="ios" draggable={false} />
        </Link>
        <button onClick={handleAndroid}>
          <Image src={android} alt="android" draggable={false} />
        </button>
      </div>
    </div>
  );
};

export default AppDownloadDialog;
