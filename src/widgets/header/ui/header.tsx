import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logo from '@public/assets/logo.svg';
import ShareDialog from '@/features/resort-detail/ui/share-dialog';
import { ChevronLeftIcon, ShareIcon } from '@/shared/icons';
import { cn } from '@/shared/lib';

interface HeaderProps {
  resortName?: string;
  hasBackButton?: boolean;
  hasShareButton?: boolean;
}

const Header = ({ resortName, hasBackButton, hasShareButton }: HeaderProps) => {
  const router = useRouter();

  return (
    <div className={cn('relative h-16 md:h-20')}>
      {hasBackButton && (
        <button
          className={cn('absolute left-7 top-1/2 -translate-y-1/2')}
          onClick={() => router.push('/')}
        >
          <ChevronLeftIcon />
        </button>
      )}
      <h2 className={cn('absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2')}>
        <Image src={logo} alt="logo" width={67} draggable={false} />
      </h2>
      {hasShareButton && (
        <ShareDialog
          trigger={
            <div className={cn('absolute right-7 top-1/2 -translate-y-1/2')}>
              <ShareIcon />
            </div>
          }
          name={resortName}
        />
      )}
    </div>
  );
};

export default Header;
