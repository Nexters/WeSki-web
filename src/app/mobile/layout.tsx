import { cn } from '@/shared/lib/cn';
import { NavBar, StatusBar } from '@/widgets/header/ui';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn('flex h-screen w-screen items-center justify-center bg-gray-200')}>
      <div className={cn('relative h-[814px] w-[376px] bg-white')}>
        <StatusBar />
        <div className={cn('flex h-12 items-center justify-center text-2xl font-bold')}>WeSki</div>
        {children}
        <NavBar className={cn('absolute bottom-0 z-10')} />
      </div>
    </div>
  );
}
