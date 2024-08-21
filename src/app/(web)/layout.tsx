'use client';

import Image from 'next/image';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import left from '@public/downloads/left.png';
import right from '@public/downloads/right.png';
import { cn } from '@/shared/lib';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <div
        className={cn(
          'flex size-full min-w-[360px] items-center justify-evenly bg-main-5 antialiased'
        )}
      >
        <div className={cn('hidden lg:block')}>
          <Image src={left} alt="left" width={270} height={320} />
        </div>
        <div
          className={cn(
            'h-screen w-full max-w-[670px] overflow-scroll bg-opacity-65 bg-[url("/assets/background.png")]'
          )}
        >
          {children}
        </div>
        <div className={cn('hidden lg:block')}>
          <Image src={right} alt="right" width={270} height={320} />
        </div>
      </div>
    </>
  );
}
