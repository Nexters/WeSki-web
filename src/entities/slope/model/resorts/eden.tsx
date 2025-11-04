'use client';

import MapImage from '@public/maps/eden.png';

import * as Slope from '../image/eden';
import type { ResortConstant } from '../model';

export const EDEN: ResortConstant = {
  MapComponent: MapImage,
  slopes: [
    {
      id: 135,
      PathAsset: Slope.BasicPath,
    },
    {
      id: 136,
      PathAsset: Slope.MainPath,
    },
    {
      id: 137,
      PathAsset: Slope.JupiterPath,
    },
    {
      id: 138,
      PathAsset: Slope.SaturnPath,
    },
    {
      id: 139,
      PathAsset: Slope.UranusPath,
    },
    {
      id: 140,
      PathAsset: Slope.MercuryPath,
    },
    {
      id: 141,
      PathAsset: Slope.VenusPath,
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
