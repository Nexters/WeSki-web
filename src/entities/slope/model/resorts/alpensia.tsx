'use client';

import MapImage from '@public/maps/alpensia.png';

import * as Slope from '../image/alpensia';
import type { ResortConstant } from '../model';

export const ALPENSIA: ResortConstant = {
  MapComponent: MapImage,
  slopes: [
    {
      id: 155,
      PathAsset: Slope.AlphaPath,
    },
    {
      id: 156,
      PathAsset: Slope.BravoPath,
    },
    {
      id: 157,
      PathAsset: Slope.CharliePath,
    },
    {
      id: 158,
      PathAsset: Slope.DeltaPath,
    },
    {
      id: 159,
      PathAsset: Slope.EchoPath,
    },
    {
      id: 160,
      PathAsset: Slope.FoxtrotPath,
    },
  ],
  webcams: [
    {
      id: 1,
      key: '알펜시아 1',
      position: [50, 42],
      scale: 1,
    },
    {
      id: 2,
      key: '알펜시아 1',
      position: [78, 14],
      scale: 1,
    },
    {
      id: 3,
      key: '알펜시아 1',
      position: [75, 29],
      scale: 1,
    },
    {
      id: 4,
      key: '알펜시아 1',
      position: [88, 58],
      scale: 1,
    },
  ],
};
