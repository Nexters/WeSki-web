import type { MetadataRoute } from 'next';

import { ResortData } from '@/entities/resort';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.weski.live';

  // 메인 페이지
  const mainPage: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];

  // 리조트 상세 페이지들 - ResortData에서 동적으로 생성
  const resortPages: MetadataRoute.Sitemap = ResortData.map((resort) => ({
    url: `${baseUrl}/${resort.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  return [...mainPage, ...resortPages];
}
