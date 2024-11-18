'use client';

import MapImage from '@public/maps/jisan.png';
import BlueLiftPath from '../image/jisan/blue-lift-path';
import Lemon1Sub1LiftPath from '../image/jisan/lemon1-1-lift-path';
import Lemon1LiftPath from '../image/jisan/lemon1-lift-path';
import NewOrangeLiftPath from '../image/jisan/new-orange-lift-path';
import Orange2LiftPath from '../image/jisan/orange2-lift-path';
import Orange3LiftPath from '../image/jisan/orange3-lift-path';
import Silver6LiftPath from '../image/jisan/silver6-lift-path';
import Silver7LiftPath from '../image/jisan/silver7-lift-path';
import type { ResortConstant } from '../model';

export const JISAN: ResortConstant = {
  MapComponent: MapImage,
  slopes: [
    {
      id: 'lemon1-lift',
      PathAsset: Lemon1LiftPath,
      webcam: 1,
    },
    {
      id: 'lemon1-1-lift',
      PathAsset: Lemon1Sub1LiftPath,
    },
    {
      id: 'orange2-lift',
      PathAsset: Orange2LiftPath,
      webcam: 2,
    },
    {
      id: 'orange3-lift',
      PathAsset: Orange3LiftPath,
      webcam: 3,
    },
    {
      id: 'new-orange-lift',
      PathAsset: NewOrangeLiftPath,
    },
    {
      id: 'blue-lift',
      PathAsset: BlueLiftPath,
      webcam: 4,
    },
    {
      id: 'silver6-lift',
      PathAsset: Silver6LiftPath,
      webcam: 5,
    },
    {
      id: 'silver7-lift',
      PathAsset: Silver7LiftPath,
      webcam: 6,
    },
  ],
  webcams: [
    {
      id: 1,
      position: {
        top: 'top-[84%]',
        left: 'left-[20%]',
      },
      scale: 1,
    },
    {
      id: 2,
      position: {
        top: 'top-[74%]',
        left: 'left-[31%]',
      },
      scale: 1,
    },
    {
      id: 3,
      position: {
        top: 'top-[64%]',
        left: 'left-[38%]',
      },
      scale: 1,
    },
    {
      id: 4,
      position: {
        top: 'top-[69%]',
        left: 'left-[56%]',
      },
      scale: 1,
    },
    {
      id: 5,
      position: {
        top: 'top-[47%]',
        left: 'left-[37%]',
      },
      scale: 1,
    },
    {
      id: 6,
      position: {
        top: 'top-[72%]',
        left: 'left-[68%]',
      },
      scale: 1,
    },
    {
      id: 7,
      position: {
        top: 'top-[38%]',
        left: 'left-[52%]',
      },
      scale: 1,
    },
  ],
};
