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
      id: 145,
      PathAsset: BasicSlopePath,
    },
    {
      id: 146,
      PathAsset: MainSlopePath,
    },
    {
      id: 147,
      PathAsset: JupiterSlopePath,
    },
    {
      id: 148,
      PathAsset: SaturnSlopePath,
    },
    {
      id: 149,
      PathAsset: UranusSlopePath,
    },
    {
      id: 150,
      PathAsset: MercurySlopePath,
    },
    {
      id: 151,
      PathAsset: VenusSlopePath,
    },
  ],
  webcams: [
    {
      id: 1,
      position: {
        top: 'top-[52%]',
        left: 'left-[35%]',
      },
      scale: 1,
    },
    {
      id: 2,
      position: {
        top: 'top-[16%]',
        left: 'left-[50%]',
      },
      scale: 1,
    },
    {
      id: 3,
      position: {
        top: 'top-[32%]',
        left: 'left-[77%]',
      },
      scale: 1,
    },
  ],
};
