import type { Metadata } from 'next';

import { ResortData } from '@/entities/resort';
import ResortDetailPage from '@/views/resort-detail/ui/resort-detail-page';

export async function generateMetadata({
  params,
}: {
  params: { resortId: string };
}): Promise<Metadata> {
  const resortId = params?.resortId;
  const resort = ResortData.find((resort) => resort.id === +resortId);

  return {
    title: resort ? `${resort.name} - WeSki` : 'WeSki : 스키장 혼잡도 확인 서비스',
    description: resort
      ? `${resort.name}의 실시간 정보를 확인해보세요.`
      : '위스키는 웹캠, 날씨, 슬로프 등 실시간 스키장 정보를 탐색할 수 있는 스키장 큐레이션 서비스입니다.',
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

export default ResortDetailPage;
