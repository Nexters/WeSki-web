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
      id: 1,
      PathAsset: Zeus1SlopPath,
    },
    {
      id: 2,
      PathAsset: Zeus2SlopPath,
    },
    {
      id: 3,
      PathAsset: Zeus3SlopPath,
    },
    {
      id: 4,
      PathAsset: Zeus3Sub1SlopPath,
    },
    {
      id: 5,
      PathAsset: Victoria1SlopPath,
    },
    {
      id: 6,
      PathAsset: Victoria2SlopPath,
    },
    {
      id: 8,
      PathAsset: Hera1SlopPath,
    },
    {
      id: 9,
      PathAsset: Hera2SlopPath,
    },
    {
      id: 10,
      PathAsset: Hera3SlopPath,
    },
    {
      id: 11,
      PathAsset: Apollo1SlopPath,
    },
    {
      id: 12,
      PathAsset: Apollo2SlopPath,
    },
    {
      id: 13,
      PathAsset: Apollo3SlopPath,
    },
    {
      id: 14,
      PathAsset: Apollo4SlopPath,
    },
    {
      id: 16,
      PathAsset: Apollo6SlopPath,
    },
    {
      id: 18,
      PathAsset: Athena2SlopPath,
    },
    {
      id: 19,
      PathAsset: Athena3SlopPath,
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
