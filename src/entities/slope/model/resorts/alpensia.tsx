'use client';

import MapImage from '@public/maps/alpensia.png';
import * as Slope from '../image/alpensia';
import type { ResortConstant } from '../model';

export const ALPENSIA: ResortConstant = {
  MapComponent: MapImage,
  slopes: [
    {
      id: 0,
      PathAsset: Slope.AlphaPath,
    },
    {
      id: 0,
      PathAsset: Slope.BravoPath,
    },
    {
      id: 0,
      PathAsset: Slope.CharliePath,
    },
    {
      id: 0,
      PathAsset: Slope.DeltaPath,
    },
    {
      id: 0,
      PathAsset: Slope.EchoPath,
    },
    {
      id: 0,
      PathAsset: Slope.FoxtrotPath,
    },
  ],
  webcams: [
    {
      id: 1,
      key: '',
      position: [0, 0],
      scale: 1,
    },
    {
      id: 2,
      key: '',
      position: [0, 0],
      scale: 1,
    },
    {
      id: 3,
      key: '',
      position: [0, 0],
      scale: 1,
    },
    {
      id: 4,
      key: '',
      position: [0, 0],
      scale: 1,
    },
  ],
};
