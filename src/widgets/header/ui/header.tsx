import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import logo from '@public/assets/logo.svg';
import ShareDialog from '@/features/resort-detail/ui/share-dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/features/resort-detail/ui/share-dropdown';
import { ChevronLeftIcon, MailIcon, MenuIcon, MessageIcon, ShareIcon } from '@/shared/icons';
import { cn } from '@/shared/lib';

interface HeaderProps {
  resortId?: number;
  resortName?: string;
  hasBackButton?: boolean;
  hasShareButton?: boolean;
  hasMenuButton?: boolean;
}

const Header = ({
  resortId,
  resortName,
  hasBackButton,
  hasShareButton,
  hasMenuButton,
}: HeaderProps) => {
  const router = useRouter();

  return (
    <div className={cn('relative h-16 md:h-20')}>
      {hasBackButton && (
        <button
          className={cn('absolute left-7 top-1/2 -translate-y-1/2')}
          onClick={() => {
            gtag('event', 'details_webcam_exit', { detail_type: resortId });
            router.push('/');
          }}
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
      {hasMenuButton && (
        <div className={cn('absolute right-7 top-1/2 -translate-y-1/2')}>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MenuIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link
                  href="https://lizzie00.notion.site/weski?pvs=4"
                  target="_blank"
                  className={cn('flex items-center gap-1')}
                >
                  <MessageIcon />
                  <p className={cn('py-1')}>서비스 소개보기</p>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="https://joey.team/block?block_id=oPWTFUezsWA61tdpDRoD&id=SoD0lftsYVQBUT65Hcpgp9mIBzj2"
                  target="_blank"
                  className={cn('flex items-center gap-1')}
                >
                  <MailIcon />
                  <p className={cn('py-1')}>버그 제보하기</p>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
};

export default Header;
