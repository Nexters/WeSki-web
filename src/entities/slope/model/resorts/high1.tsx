'use client';

import High1Map from '@public/maps/high1.png';
import Apollo1SlopPath from '../image/high1/apollo1-slop-path';
import Apollo2SlopPath from '../image/high1/apollo2-slop-path';
import Apollo3SlopPath from '../image/high1/apollo3-slop-path';
import Apollo4SlopPath from '../image/high1/apollo4-slop-path';
import Apollo6SlopPath from '../image/high1/apollo6-slop-path';
import Athena2SlopPath from '../image/high1/athena2-slop-path';
import Athena3SlopPath from '../image/high1/athena3-slop-path';
import Hera1SlopPath from '../image/high1/hera1-slop-path';
import Hera2SlopPath from '../image/high1/hera2-slop-path';
import Hera3SlopPath from '../image/high1/hera3-slop-path';
import Victoria1SlopPath from '../image/high1/victoria1-slop-path';
import Victoria2SlopPath from '../image/high1/victoria2-slop-path';
import Zeus1SlopPath from '../image/high1/zeus1-slop-path';
import Zeus2SlopPath from '../image/high1/zeus2-slop-path';
import Zeus3Sub1SlopPath from '../image/high1/zeus3-1-slop-path';
import Zeus3SlopPath from '../image/high1/zeus3-slop-path';
import type { ResortConstant } from '../model';

export const HIGH1: ResortConstant = {
  MapComponent: High1Map,
  slopes: [
    {
      id: 'zeus1-slop',
      pathAsset: Zeus1SlopPath,
    },
    {
      id: 'zeus2-slop',
      pathAsset: Zeus2SlopPath,
      webcam: 1,
    },
    {
      id: 'zeus3-slop',
      pathAsset: Zeus3SlopPath,
      webcam: 13,
    },
    {
      id: 'zeus3-1-slop',
      pathAsset: Zeus3Sub1SlopPath,
    },
    {
      id: 'victoria1-slop',
      pathAsset: Victoria1SlopPath,
      webcam: 12,
    },
    {
      id: 'victoria2-slop',
      pathAsset: Victoria2SlopPath,
    },
    {
      id: 'hera1-slop',
      pathAsset: Hera1SlopPath,
    },
    {
      id: 'hera2-slop',
      pathAsset: Hera2SlopPath,
      webcam: 2,
    },
    {
      id: 'hera3-slop',
      pathAsset: Hera3SlopPath,
    },
    {
      id: 'apollo1-slop',
      pathAsset: Apollo1SlopPath,
    },
    {
      id: 'apollo2-slop',
      pathAsset: Apollo2SlopPath,
    },
    {
      id: 'apollo3-slop',
      pathAsset: Apollo3SlopPath,
    },
    {
      id: 'apollo4-slop',
      pathAsset: Apollo4SlopPath,
      webcam: 15,
    },
    {
      id: 'apollo6-slop',
      pathAsset: Apollo6SlopPath,
    },
    {
      id: 'athena2-slop',
      pathAsset: Athena2SlopPath,
      webcam: 6,
    },
    {
      id: 'athena3-slop',
      pathAsset: Athena3SlopPath,
    },
  ],
  webcams: [
    {
      id: 1,
      position: {
        top: 'top-[6%]',
        left: 'left-[45%]',
      },
      scale: 2,
    },
    {
      id: 2,
      position: {
        top: 'top-[10%]',
        left: 'left-[50%]',
      },
      scale: 2,
    },
    {
      id: 3,
      position: {
        top: 'top-[6%]',
        left: 'left-[54%]',
      },
      scale: 2,
    },
    {
      id: 4,
      position: {
        top: 'top-[30%]',
        left: 'left-[65%]',
      },
      scale: 2,
    },
    {
      id: 5,
      position: {
        top: 'top-[35%]',
        left: 'left-[61%]',
      },
      scale: 2,
    },
    {
      id: 6,
      position: {
        top: 'top-[40%]',
        left: 'left-[66%]',
      },
      scale: 2,
    },
    {
      id: 7,
      position: {
        top: 'top-[68%]',
        left: 'left-[78%]',
      },
      scale: 2,
    },
    {
      id: 8,
      position: {
        top: 'top-[76%]',
        left: 'left-[73%]',
      },
      scale: 2,
    },
    {
      id: 9,
      position: {
        top: 'top-[17%]',
        left: 'left-[17%]',
      },
      scale: 2,
    },
    {
      id: 10,
      position: {
        top: 'top-[34%]',
        left: 'left-[38%]',
      },
      scale: 2,
    },
    {
      id: 11,
      position: {
        top: 'top-[40%]',
        left: 'left-[40%]',
      },
      scale: 2,
    },
    {
      id: 12,
      position: {
        top: 'top-[48%]',
        left: 'left-[43%]',
      },
      scale: 2,
    },
    {
      id: 13,
      position: {
        top: 'top-[50%]',
        left: 'left-[36%]',
      },
      scale: 2,
    },
    {
      id: 14,
      position: {
        top: 'top-[58%]',
        left: 'left-[40%]',
      },
      scale: 2,
    },
    {
      id: 15,
      position: {
        top: 'top-[58%]',
        left: 'left-[52%]',
      },
      scale: 2,
    },
    {
      id: 16,
      position: {
        top: 'top-[71%]',
        left: 'left-[44%]',
      },
      scale: 2,
    },
    {
      id: 17,
      position: {
        top: 'top-[86%]',
        left: 'left-[46%]',
      },
      scale: 2,
    },
    {
      id: 18,
      position: {
        top: 'top-[86%]',
        left: 'left-[39%]',
      },
      scale: 2,
    },
  ],
};
