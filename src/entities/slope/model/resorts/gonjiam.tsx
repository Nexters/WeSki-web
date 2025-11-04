'use client';

import GonjiamMap from '@public/maps/gonjiam.png';

import * as Slope from '../image/gonjiam';
import type { ResortConstant } from '../model';

export const GONJIAM: ResortConstant = {
  MapComponent: GonjiamMap,
  slopes: [
    {
      id: 9,
      PathAsset: Slope.WhisenPath,
    },
    {
      id: 10,
      PathAsset: Slope.WhynotPath,
    },
    {
      id: 11,
      PathAsset: Slope.Gram1Path,
    },
    {
      id: 12,
      PathAsset: Slope.Gram2Path,
    },
    {
      id: 13,
      PathAsset: Slope.CNP1Path,
    },
    {
      id: 14,
      PathAsset: Slope.CNP2Path,
    },
    {
      id: 15,
      PathAsset: Slope.Thinkyou1Path,
    },
    {
      id: 16,
      PathAsset: Slope.Thinkyou2Path,
    },
    {
      id: 17,
      PathAsset: Slope.Thinkyou3Path,
    },
    {
      id: 18,
      PathAsset: Slope.ThinkyouBridgePath,
    },
  ],
  webcams: [
    {
      id: 1,
      key: '정상 휴게소',
      position: [7, 20],
      scale: 1,
    },
    {
      id: 2,
      key: '정상부 슬로프',
      position: [34, 21],
      scale: 1,
    },

    {
      id: 3,
      key: '중간 슬로프',
      position: [60, 43],
      scale: 1,
    },
    {
      id: 4,
      key: '초중급 베이스',
      position: [82, 51],
      scale: 1,
    },
    {
      id: 5,
      key: '중상급 베이스',
      position: [85, 43],
      scale: 1,
    },
  ],
};
