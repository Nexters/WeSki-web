'use client';

import Image from 'next/image';
import Link from 'next/link';
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
          <Image src={left} alt="left" width={270} height={320} draggable={false} />
        </div>
        <div
          className={cn(
            'h-screen w-full max-w-[670px] overflow-scroll bg-opacity-65 bg-[url("/assets/background.png")] scrollbar-hide'
          )}
        >
          {children}
        </div>
        <div
          className={cn(
            'hidden h-[320px] w-[calc((100vw-670px)/2)] max-w-[270px] flex-col items-center justify-center gap-[34px] px-2.5 lg:flex'
          )}
        >
          <Image className={cn('px-2.5')} src={text} alt="text" width={214} draggable={false} />
          <div
            className={cn(
              'flex w-[calc((100vw-670px)/2)] max-w-[240px] justify-between gap-2.5 px-5'
            )}
          >
            <Link
              className={cn('flex-1')}
              href="https://apps.apple.com/kr/app/weski-%EC%8A%A4%ED%82%A4%EC%9E%A5-%ED%81%90%EB%A0%88%EC%9D%B4%EC%85%98-%ED%94%8C%EB%9E%AB%ED%8F%BC/id6642660900"
              target="_blank"
            >
              <Image src={ios} alt="ios" draggable={false} />
            </Link>
            <Link
              className={cn('flex-1')}
              href="https://play.google.com/store/apps/details?id=com.dieski.weski"
              target="_blank"
            >
              <Image src={android} alt="android" draggable={false} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
