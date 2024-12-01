'use client';

import High1Map from '@public/maps/high1.png';
import * as Slope from '../image/high1';
import type { ResortConstant } from '../model';

export const HIGH1: ResortConstant = {
  MapComponent: High1Map,
  slopes: [
    {
      id: 75,
      PathAsset: Slope.Zeus1Path,
    },
    {
      id: 76,
      PathAsset: Slope.Zeus2Path,
    },
    {
      id: 77,
      PathAsset: Slope.Zeus3Path,
    },
    {
      id: 78,
      PathAsset: Slope.Zeus3Sub1Path,
    },
    {
      id: 79,
      PathAsset: Slope.Victoria1Path,
    },
    {
      id: 80,
      PathAsset: Slope.Victoria2Path,
    },
    {
      id: 82,
      PathAsset: Slope.Hera1Path,
    },
    {
      id: 83,
      PathAsset: Slope.Hera2Path,
    },
    {
      id: 84,
      PathAsset: Slope.Hera3Path,
    },
    {
      id: 85,
      PathAsset: Slope.Apollo1Path,
    },
    {
      id: 86,
      PathAsset: Slope.Apollo2Path,
    },
    {
      id: 87,
      PathAsset: Slope.Apollo3Path,
    },
    {
      id: 88,
      PathAsset: Slope.Apollo4Path,
    },
    {
      id: 89,
      PathAsset: Slope.Apollo5Path,
    },
    {
      id: 90,
      PathAsset: Slope.Apollo6Path,
    },
    {
      id: 92,
      PathAsset: Slope.Athena2Path,
    },
    {
      id: 93,
      PathAsset: Slope.Athena3Path,
    },
  ],
  webcams: [
    {
      id: 1,
      key: '제우스2번 슬로프 입구',
      position: [6, 45],
      scale: 2,
    },
    {
      id: 2,
      key: '헤라2번 슬로프 입구',
      position: [10, 50],
      scale: 2,
    },
    {
      id: 3,
      key: '하이원 탑',
      position: [6, 54],
      scale: 2,
    },
    {
      id: 4,
      key: '아테나1번 슬로프',
      position: [30, 65],
      scale: 2,
    },
    {
      id: 5,
      key: '마운틴 허브 베이스',
      position: [35, 61],
      scale: 2,
    },
    {
      id: 6,
      key: '아테나2번 슬로프',
      position: [40, 66],
      scale: 2,
    },
    {
      id: 7,
      key: '마운틴 베이스',
      position: [68, 78],
      scale: 2,
    },
    {
      id: 8,
      key: '아테나2번 슬로프 하단',
      position: [76, 73],
      scale: 2,
    },
    {
      id: 9,
      key: '빅토리아 상단',
      position: [17, 17],
      scale: 2,
    },
    {
      id: 10,
      key: '제우스 2번',
      position: [34, 38],
      scale: 2,
    },
    {
      id: 11,
      key: '밸리 허브 베이스',
      position: [40, 40],
      scale: 2,
    },
    {
      id: 12,
      key: '빅토리아1번 슬로프',
      position: [48, 43],
      scale: 2,
    },
    {
      id: 13,
      key: '제우스3번 슬로프',
      position: [50, 36],
      scale: 2,
    },
    {
      id: 14,
      key: '제우스3번 중단부',
      position: [58, 40],
      scale: 2,
    },
    {
      id: 15,
      key: '아폴로4번 중단부',
      position: [58, 52],
      scale: 2,
    },
    {
      id: 16,
      key: '아폴로 베이스',
      position: [71, 44],
      scale: 2,
    },
    {
      id: 17,
      key: '제우스3번 하단',
      position: [86, 46],
      scale: 2,
    },
    {
      id: 18,
      key: '밸리 베이스',
      position: [86, 39],
      scale: 2,
    },
  ],
};
