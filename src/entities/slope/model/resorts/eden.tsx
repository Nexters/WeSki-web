'use client';

import MapImage from '@public/maps/eden.png';
import BasicSlopePath from '../image/eden/basic-slope-path';
import JupiterSlopePath from '../image/eden/jupiter-slope-path';
import MainSlopePath from '../image/eden/main-slope-path';
import MercurySlopePath from '../image/eden/mercury-slope-path';
import SaturnSlopePath from '../image/eden/saturn-slope-path';
import UranusSlopePath from '../image/eden/uranus-slope-path';
import VenusSlopePath from '../image/eden/venus-slope-path';
import type { ResortConstant } from '../model';

export const EDEN: ResortConstant = {
  MapComponent: MapImage,
  slopes: [
    {
      id: 135,
      PathAsset: BasicSlopePath,
    },
    {
      id: 136,
      PathAsset: MainSlopePath,
    },
    {
      id: 137,
      PathAsset: JupiterSlopePath,
    },
    {
      id: 138,
      PathAsset: SaturnSlopePath,
    },
    {
      id: 139,
      PathAsset: UranusSlopePath,
    },
    {
      id: 140,
      PathAsset: MercurySlopePath,
    },
    {
      id: 141,
      PathAsset: VenusSlopePath,
    },
  ],
  webcams: [
    {
      id: 1,
      key: '베이직 슬로프',
      position: [52, 35],
      scale: 1,
    },
    {
      id: 2,
      key: '쥬피터 슬로프',
      position: [16, 50],
      scale: 1,
    },
    {
      id: 3,
      key: '우라누스 슬로프',
      position: [32, 77],
      scale: 1,
    },
    {
      id: 4,
      key: '슬로프 광장',
      position: [83, 55],
      scale: 1,
    },
  ],
};
