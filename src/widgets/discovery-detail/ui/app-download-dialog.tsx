import Image from 'next/image';
import android from '@public/android.png';
import ios from '@public/ios.png';
import logo from '@public/logo.svg';
import snow from '@public/snow.png';
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
        width={191}
        height={196}
        className={cn('absolute right-[-21px] top-0')}
      />
      <CloseIcon className={cn('absolute right-6 top-6 size-6 cursor-pointer')} onClick={onClose} />
      <Image src={logo} alt="logo" />
      <p className={cn('title1 mb-[39px] mt-[35px] whitespace-pre-wrap font-bold')}>
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
