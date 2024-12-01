'use client';

import GonjiamMap from '@public/maps/gonjiam.png';
import CNP1Path from '../image/gonjiam/cnp1-path';
import CNP2Path from '../image/gonjiam/cnp2-path';
import Gram1Path from '../image/gonjiam/gram1-path';
import Gram2Path from '../image/gonjiam/gram2-path';
import ThinkyouBridgePath from '../image/gonjiam/thinkyou-bridge-path';
import Thinkyou1Path from '../image/gonjiam/thinkyou1-path';
import Thinkyou2Path from '../image/gonjiam/thinkyou2-path';
import Thinkyou3Path from '../image/gonjiam/thinkyou3-path';
import WhisenPath from '../image/gonjiam/whisen-path';
import WhynotPath from '../image/gonjiam/whynot-path';
import type { ResortConstant } from '../model';

export const GONJIAM: ResortConstant = {
  MapComponent: GonjiamMap,
  slopes: [
    {
      id: 9,
      PathAsset: WhisenPath,
    },
    {
      id: 10,
      PathAsset: WhynotPath,
    },
    {
      id: 11,
      PathAsset: Gram1Path,
    },
    {
      id: 12,
      PathAsset: Gram2Path,
    },
    {
      id: 13,
      PathAsset: CNP1Path,
    },
    {
      id: 14,
      PathAsset: CNP2Path,
    },
    {
      id: 15,
      PathAsset: Thinkyou1Path,
    },
    {
      id: 16,
      PathAsset: Thinkyou2Path,
    },
    {
      id: 17,
      PathAsset: Thinkyou3Path,
    },
    {
      id: 18,
      PathAsset: ThinkyouBridgePath,
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
