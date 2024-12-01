'use client';

import High1Map from '@public/maps/high1.png';
import Apollo1Path from '../image/high1/apollo1-path';
import Apollo2Path from '../image/high1/apollo2-path';
import Apollo3Path from '../image/high1/apollo3-path';
import Apollo4Path from '../image/high1/apollo4-path';
import Apollo6Path from '../image/high1/apollo6-path';
import Athena2Path from '../image/high1/athena2-path';
import Athena3Path from '../image/high1/athena3-path';
import Hera1Path from '../image/high1/hera1-path';
import Hera2Path from '../image/high1/hera2-path';
import Hera3Path from '../image/high1/hera3-path';
import Victoria1Path from '../image/high1/victoria1-path';
import Victoria2Path from '../image/high1/victoria2-path';
import Zeus1Path from '../image/high1/zeus1-path';
import Zeus2Path from '../image/high1/zeus2-path';
import Zeus3Sub1Path from '../image/high1/zeus3-1-path';
import Zeus3Path from '../image/high1/zeus3-path';
import type { ResortConstant } from '../model';

export const HIGH1: ResortConstant = {
  MapComponent: High1Map,
  slopes: [
    {
      id: 75,
      PathAsset: Zeus1Path,
    },
    {
      id: 76,
      PathAsset: Zeus2Path,
    },
    {
      id: 77,
      PathAsset: Zeus3Path,
    },
    {
      id: 78,
      PathAsset: Zeus3Sub1Path,
    },
    {
      id: 79,
      PathAsset: Victoria1Path,
    },
    {
      id: 80,
      PathAsset: Victoria2Path,
    },
    // {
    //   id: 81,
    //   PathAsset: Victoria3Path,
    // },
    {
      id: 82,
      PathAsset: Hera1Path,
    },
    {
      id: 83,
      PathAsset: Hera2Path,
    },
    {
      id: 84,
      PathAsset: Hera3Path,
    },
    {
      id: 85,
      PathAsset: Apollo1Path,
    },
    {
      id: 86,
      PathAsset: Apollo2Path,
    },
    {
      id: 87,
      PathAsset: Apollo3Path,
    },
    {
      id: 88,
      PathAsset: Apollo4Path,
    },
    {
      id: 90,
      PathAsset: Apollo6Path,
    },
    // {
    //   id: 91,
    //   PathAsset: Athena1Path,
    // },
    {
      id: 92,
      PathAsset: Athena2Path,
    },
    {
      id: 93,
      PathAsset: Athena3Path,
    },
    // {
    //   id: 94,
    //   PathAsset: Athena3Sub1Path,
    // },
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
