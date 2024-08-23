import '@/app/globals.css';

import type { Metadata } from 'next';
import { DiscoveryData } from '@/entities/discovery';
import KakaoScript from '@/shared/lib/kakao-script';
import { Toaster } from '@/shared/ui/toaster';
import Providers from './_providers';
 
export async function generateMetadata(
  { params }: {params: { id: string }}
): Promise<Metadata> {
  const id = params?.id 
  const resort = DiscoveryData.find((resort) => resort.id === +id)

  return {
    title: resort ? `${resort.name} - WeSki` : 'WeSki : 스키장 혼잡도 확인 서비스',
    description:
    resort ? `${resort.name}의 실시간 정보를 확인해보세요.` : '위스키는 웹캠, 날씨, 슬로프 등 실시간 스키장 정보를 탐색할 수 있는 스키장 큐레이션 서비스입니다.',
    openGraph: {
      images: [
        {
          url: '/assets/og.png',
          alt: 'WeSki',
        },
      ],
    },
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        <Toaster position="bottom-center" />
        <KakaoScript />
      </body>
    </html>
  );
}
