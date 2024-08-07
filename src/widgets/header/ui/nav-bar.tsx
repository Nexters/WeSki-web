'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/shared/lib';

const TabList = [
  {
    name: '날씨',
    url: '/mobile/weather',
  },
  {
    name: '웹캠',
    url: '/mobile',
  },
  {
    name: '혼잡도',
    url: '/mobile/congestion',
  },
];

const NavBar = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  return (
    <nav className={cn('h-[62px] w-full bg-white', className)}>
      <ul className={cn('flex size-full justify-evenly')}>
        {TabList.map((tab) => (
          <li
            key={tab.name}
            className={cn(
              'flex flex-1 items-center justify-center text-sm font-bold',
              pathname !== tab.url && 'opacity-20'
            )}
          >
            <Link href={tab.url}>{tab.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
