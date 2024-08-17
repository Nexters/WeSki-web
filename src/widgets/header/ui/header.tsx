import { useRouter } from 'next/navigation';
import ShareDialog from '@/features/discovery-detail/ui/share-dialog';
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
        <ShareDialog
          trigger={
            <button className={cn('absolute right-7 top-1/2 -translate-y-1/2')}>
              <ShareIcon />
            </button>
          }
          name={resortName}
        />
      )}
    </div>
  );
};

export default Header;
