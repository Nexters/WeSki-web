'use client';

import MapImage from '@public/maps/oakvalley.png';

import * as Slope from '../image/oakvalley';
import type { ResortConstant } from '../model';

export const OAKVALLEY: ResortConstant = {
  MapComponent: MapImage,
  slopes: [
    {
      id: 161,
      PathAsset: Slope.ISlopePath,
    },
    {
      id: 162,
      PathAsset: Slope.FSlopePath,
    },
    {
      id: 163,
      PathAsset: Slope.GSlopePath,
    },
  ],
  webcams: [
    {
      id: 1,
      key: '스노우파크 옥탑',
      position: [74, 70],
      scale: 1,
    },
    {
      id: 2,
      key: 'F 슬로프 전경',
      position: [42, 45],
      scale: 1,
    },
    {
      id: 3,
      key: 'G 슬로프 전경',
      position: [44, 75],
      scale: 1,
    },
    {
      id: 4,
      key: 'I 슬로프 전경',
      position: [64, 40],
      scale: 1,
    },
  ],
};
