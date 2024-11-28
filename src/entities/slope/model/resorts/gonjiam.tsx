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
      id: 1,
      PathAsset: WhynotSlopPath,
    },
    {
      id: 2,
      PathAsset: Gram1SlopPath,
    },
    {
      id: 3,
      PathAsset: Gram2SlopPath,
    },
    {
      id: 4,
      PathAsset: CNP1SlopPath,
    },
    {
      id: 5,
      PathAsset: CNP2SlopPath,
    },
    {
      id: 6,
      PathAsset: Thinkyou1SlopPath,
    },
    {
      id: 7,
      PathAsset: Thinkyou2SlopPath,
    },
    {
      id: 8,
      PathAsset: Thinkyou3SlopPath,
    },
    {
      id: 9,
      PathAsset: ThinkyouBridgeSlopPath,
    },
    {
      id: 10,
      PathAsset: WhisenSlopPath,
    },
  ],
  webcams: [
    {
      id: 1,
      position: {
        top: 'top-[82%]',
        left: 'left-[51%]',
      },
      scale: 1,
    },
    {
      id: 2,
      position: {
        top: 'top-[85%]',
        left: 'left-[43%]',
      },
      scale: 1,
    },
    {
      id: 3,
      position: {
        top: 'top-[34%]',
        left: 'left-[21%]',
      },
      scale: 1,
    },
    {
      id: 4,
      position: {
        top: 'top-[7%]',
        left: 'left-[20%]',
      },
      scale: 1,
    },
    {
      id: 5,
      position: {
        top: 'top-[60%]',
        left: 'left-[43%]',
      },
      scale: 1,
    },
  ],
};
