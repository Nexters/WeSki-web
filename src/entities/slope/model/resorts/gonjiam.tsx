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
      id: 'whynot-slop',
      pathAsset: WhynotSlopPath,
      webcam: 2,
    },
    {
      id: 'gram1-slop',
      pathAsset: Gram1SlopPath,
    },
    {
      id: 'gram2-slop',
      pathAsset: Gram2SlopPath,
    },
    {
      id: 'cnp1-slop',
      pathAsset: CNP1SlopPath,
      webcam: 3,
    },
    {
      id: 'cnp2-slop',
      pathAsset: CNP2SlopPath,
    },
    {
      id: 'thinkyou1-slop',
      pathAsset: Thinkyou1SlopPath,
      webcam: 3,
    },
    {
      id: 'thinkyou2-slop',
      pathAsset: Thinkyou2SlopPath,
      webcam: 2,
    },
    {
      id: 'thinkyou3-slop',
      pathAsset: Thinkyou3SlopPath,
    },
    {
      id: 'thinkyou-bridge-slop',
      pathAsset: ThinkyouBridgeSlopPath,
    },
    {
      id: 'whisen-slop',
      pathAsset: WhisenSlopPath,
      webcam: 1,
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
