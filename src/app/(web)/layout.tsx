'use client';

import Image from 'next/image';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import left from '@public/downloads/left.png';
import android from '@public/downloads/right-android.png';
import ios from '@public/downloads/right-ios.png';
import text from '@public/downloads/right-text.png';
import { cn } from '@/shared/lib';
import { SnowConfetti } from '@/shared/ui/snow-confetti';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <SnowConfetti />
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
        <div
          className={cn(
            'hidden h-[320px] w-[270px] flex-col items-center justify-center gap-[34px] lg:flex'
          )}
        >
          <Image src={text} alt="text" width={194} />
          <div className={cn('flex w-[200px] justify-between')}>
            <Image src={ios} alt="ios" width={95} />
            <Image src={android} alt="android" width={95} />
          </div>
        </div>
      </div>
    </>
  );
}
