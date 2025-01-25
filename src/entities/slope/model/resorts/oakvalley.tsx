'use client';

import MapImage from '@public/maps/oakvalley.png';
import * as Slope from '../image/oakvalley';
import type { ResortConstant } from '../model';

export const OAKVALLEY: ResortConstant = {
  MapComponent: MapImage,
  slopes: [
    {
      id: 0,
      PathAsset: Slope.GSlopePath,
    },
    {
      id: 0,
      PathAsset: Slope.ISlopePath,
    },
    {
      id: 0,
      PathAsset: Slope.FSlopePath,
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
