import '@/app/globals.css';

import type { Metadata } from 'next';

import { ResortData } from '@/entities/resort';
import KakaoScript from '@/shared/lib/kakao-script';
import { Toaster } from '@/shared/ui/toaster';

import Providers from './_providers';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params?.id;
  const resort = ResortData.find((resort) => resort.id === +id);

  return {
    title: resort ? `${resort.name} - WeSki` : 'WeSki : 스키장 혼잡도 확인 서비스',
    description: resort
      ? `${resort.name}의 실시간 정보를 확인해보세요.`
      : '위스키는 웹캠, 날씨, 슬로프 등 실시간 스키장 정보를 탐색할 수 있는 스키장 큐레이션 서비스입니다.',
    keywords: [
      '스키장 웹캠',
      '스키장 날씨',
      '스키장 설질',
      '스키장 웹캠',
      '강원도 날씨',
      '원주 스키장',
      '강원도 스키장',
      '서울근교 스키장',
      '스키장 데이트',
      '웰리힐리',
      '하이원',
      '휘닉스파크',
      '휘팍',
      '용평 스키장',
      '모나',
      '알펜시아',
      '비발디파크',
      '비발디',
      '무주 스키장',
      '무주 덕유산',
      '오투리조트',
      '지산리조트',
      '곤지암',
      '곤지암리조트',
      '곤지암스키장',
      '오크벨리',
      '에덴벨리',
      '강원도 설질',
      '강원도 날씨',
      '엘리시안',
      '엘리사안 강촌',
      '스키장 폐장일',
      '스노우보드',
      '스키',
      '숏스키',
      '스키장',
      '썰매',
      '겨울데이트',
    ],
    openGraph: {
      images: [
        {
          url: '/assets/og.png',
          alt: 'WeSki',
        },
      ],
    },
  };
}

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
