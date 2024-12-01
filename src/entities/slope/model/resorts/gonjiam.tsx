'use client';

import GonjiamMap from '@public/maps/gonjiam.png';
import CNP1SlopPath from '../image/gonjiam/cnp1-slop-path';
import CNP2SlopPath from '../image/gonjiam/cnp2-slop-path';
import Gram1SlopPath from '../image/gonjiam/gram1-slop-path';
import Gram2SlopPath from '../image/gonjiam/gram2-slop-path';
import ThinkyouBridgeSlopPath from '../image/gonjiam/thinkyou-bridge-slop';
import Thinkyou1SlopPath from '../image/gonjiam/thinkyou1-slop-path';
import Thinkyou2SlopPath from '../image/gonjiam/thinkyou2-slop-path';
import Thinkyou3SlopPath from '../image/gonjiam/thinkyou3-slop-path';
import WhisenSlopPath from '../image/gonjiam/whisen-slop-path';
import WhynotSlopPath from '../image/gonjiam/whynot-slop-path';
import type { ResortConstant } from '../model';

export const GONJIAM: ResortConstant = {
  MapComponent: GonjiamMap,
  slopes: [
    {
      id: 9,
      PathAsset: WhisenSlopPath,
    },
    {
      id: 10,
      PathAsset: WhynotSlopPath,
    },
    {
      id: 11,
      PathAsset: Gram1SlopPath,
    },
    {
      id: 12,
      PathAsset: Gram2SlopPath,
    },
    {
      id: 13,
      PathAsset: CNP1SlopPath,
    },
    {
      id: 14,
      PathAsset: CNP2SlopPath,
    },
    {
      id: 15,
      PathAsset: Thinkyou1SlopPath,
    },
    {
      id: 16,
      PathAsset: Thinkyou2SlopPath,
    },
    {
      id: 17,
      PathAsset: Thinkyou3SlopPath,
    },
    {
      id: 18,
      PathAsset: ThinkyouBridgeSlopPath,
    },
  ],
  webcams: [
    {
      id: 1,
      key: '정상 휴게소',
      position: {
        top: 'top-[7%]',
        left: 'left-[20%]',
      },
      scale: 1,
    },
    {
      id: 2,
      key: '정상부 슬로프',
      position: {
        top: 'top-[34%]',
        left: 'left-[21%]',
      },
      scale: 1,
    },

    {
      id: 3,
      key: '중간 슬로프',
      position: {
        top: 'top-[60%]',
        left: 'left-[43%]',
      },
      scale: 1,
    },
    {
      id: 4,
      key: '초중급 베이스',
      position: {
        top: 'top-[82%]',
        left: 'left-[51%]',
      },
      scale: 1,
    },
    {
      id: 5,
      key: '중상급 베이스',
      position: {
        top: 'top-[85%]',
        left: 'left-[43%]',
      },
      scale: 1,
    },
  ],
};
