'use client';

import * as Slope from '../image/o2';
import MapImage from '../image/o2/map';
import type { ResortConstant } from '../model';

export const O2: ResortConstant = {
  MapComponent: MapImage,
  slopes: [
    {
      id: 142,
      PathAsset: Slope.Dream1Path,
    },
    {
      id: 143,
      PathAsset: Slope.Dream2Path,
    },
    {
      id: 144,
      PathAsset: Slope.HeadPath,
    },
    {
      id: 145,
      PathAsset: Slope.HappyPath,
    },
    {
      id: 146,
      PathAsset: Slope.Glory1Path,
    },
    {
      id: 147,
      PathAsset: Slope.Glory2Path,
    },
    {
      id: 148,
      PathAsset: Slope.Glory3Path,
    },
    {
      id: 149,
      PathAsset: Slope.Fashion1Path,
    },
    {
      id: 150,
      PathAsset: Slope.Fashion2Path,
    },
    {
      id: 151,
      PathAsset: Slope.Challenge1Path,
    },
    {
      id: 152,
      PathAsset: Slope.Challenge2Path,
    },
    {
      id: 153,
      PathAsset: Slope.Challenge3Path,
    },
    {
      id: 154,
      PathAsset: Slope.HalfPipePath,
    },
  ],
  webcams: [
    {
      id: 1,
      key: '으뜸마루',
      position: [5, 75],
      scale: 1,
    },
    {
      id: 2,
      key: '버금마루',
      position: [23, 46],
      scale: 1,
    },
  ],
};
