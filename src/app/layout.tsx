import '@/app/globals.css';

import type { Metadata } from 'next';

import KakaoScript from '@/shared/lib/kakao-script';
import { Toaster } from '@/shared/ui/toaster';

import Providers from './_providers';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.weski.live'),
  title: '전국 스키장 실시간 웹캠 & 날씨 정보 | WeSki',
  description:
    '전국 스키장의 실시간 웹캠, 눈 상태, 설질, 혼잡도, 날씨 정보를 한눈에! X5스키장과 시즌권이 있는 모든 리조트의 스키장 정보를 빠르게 확인하세요.',
  openGraph: {
    images: [
      {
        url: '/assets/og.png',
        alt: 'WeSki',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
        <Toaster position="bottom-center" />
        <KakaoScript />
      </body>
    </html>
  );
}
