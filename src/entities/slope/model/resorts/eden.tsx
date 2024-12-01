'use client';

import MapImage from '@public/maps/eden.png';
import BasicPath from '../image/eden/basic-path';
import JupiterPath from '../image/eden/jupiter-path';
import MainPath from '../image/eden/main-path';
import MercuryPath from '../image/eden/mercury-path';
import SaturnPath from '../image/eden/saturn-path';
import UranusPath from '../image/eden/uranus-path';
import VenusPath from '../image/eden/venus-path';
import type { ResortConstant } from '../model';

export const EDEN: ResortConstant = {
  MapComponent: MapImage,
  slopes: [
    {
      id: 135,
      PathAsset: BasicPath,
    },
    {
      id: 136,
      PathAsset: MainPath,
    },
    {
      id: 137,
      PathAsset: JupiterPath,
    },
    {
      id: 138,
      PathAsset: SaturnPath,
    },
    {
      id: 139,
      PathAsset: UranusPath,
    },
    {
      id: 140,
      PathAsset: MercuryPath,
    },
    {
      id: 141,
      PathAsset: VenusPath,
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
