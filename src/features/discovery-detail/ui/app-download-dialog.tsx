import Image from 'next/image';
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
      <Image src={logo} alt="logo" width={56} />
      <p className={cn('title1 mb-[39px] mt-[35px] whitespace-pre-wrap')}>
        {'지금 앱 다운로드하고\n블라인드된 정보를\n매일 확인해보세요'}
      </p>
      <div className={cn('flex gap-3')}>
        <button>
          <Image src={ios} alt="ios" />
        </button>
        <button>
          <Image src={android} alt="android" />
        </button>
      </div>
    </div>
  );
};

export default AppDownloadDialog;
