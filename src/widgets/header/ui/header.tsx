import { useRouter } from 'next/navigation';
import ChevronLeftIcon from '@/shared/icons/chevron-left';
import ShareIcon from '@/shared/icons/share';
import { cn } from '@/shared/lib';

interface HeaderProps {
  hasBackButton?: boolean;
  hasShareButton?: boolean;
}

const Header = ({ hasBackButton, hasShareButton }: HeaderProps) => {
  const router = useRouter();

  return (
    <div className={cn('relative h-20')}>
      {hasBackButton && (
        <button
          className={cn('absolute left-7 top-1/2 -translate-y-1/2')}
          onClick={() => router.back()}
        >
          <ChevronLeftIcon />
        </button>
      )}
      <h2 className={cn('h2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2')}>
        WeSki
      </h2>
      {hasShareButton && (
        <button className={cn('absolute right-7 top-1/2 -translate-y-1/2')}>
          <ShareIcon />
        </button>
      )}
    </div>
  );
};

export default Header;
