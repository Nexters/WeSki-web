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
    title: resort?.metadata?.title ?? '전국 스키장 실시간 웹캠 & 날씨 정보 | WeSki',
    description:
      resort?.metadata?.description ??
      '전국 스키장의 실시간 웹캠, 눈 상태, 설질, 혼잡도, 날씨 정보를 한눈에! X5스키장과 시즌권이 있는 모든 리조트의 스키장 정보를 빠르게 확인하세요.',
    alternates: {
      canonical: `/${resortId}`,
    },
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
