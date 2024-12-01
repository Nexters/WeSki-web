'use client';

import Challenge1Path from '../image/o2/challenge1-path';
import Challenge2Path from '../image/o2/challenge2-path';
import Challenge3Path from '../image/o2/challenge3-path';
import Dream1Path from '../image/o2/dream1-path';
import Dream2Path from '../image/o2/dream2-path';
import Fashion1Path from '../image/o2/fashion1-path';
import Fashion2Path from '../image/o2/fashion2-path';
import Glory1Path from '../image/o2/glory1-path';
import Glory2Path from '../image/o2/glory2-path';
import Glory3Path from '../image/o2/glory3-path';
import HalfPipePath from '../image/o2/half-pipe-path';
import HappyPath from '../image/o2/happy-path';
import HeadPath from '../image/o2/head-path';
import MapImage from '../image/o2/map';
import type { ResortConstant } from '../model';

export const O2: ResortConstant = {
  MapComponent: MapImage,
  slopes: [
    {
      id: 142,
      PathAsset: Dream1Path,
    },
    {
      id: 143,
      PathAsset: Dream2Path,
    },
    {
      id: 144,
      PathAsset: HeadPath,
    },
    {
      id: 145,
      PathAsset: HappyPath,
    },
    {
      id: 146,
      PathAsset: Glory1Path,
    },
    {
      id: 147,
      PathAsset: Glory2Path,
    },
    {
      id: 148,
      PathAsset: Glory3Path,
    },
    {
      id: 149,
      PathAsset: Fashion1Path,
    },
    {
      id: 150,
      PathAsset: Fashion2Path,
    },
    {
      id: 151,
      PathAsset: Challenge1Path,
    },
    {
      id: 152,
      PathAsset: Challenge2Path,
    },
    {
      id: 153,
      PathAsset: Challenge3Path,
    },
    {
      id: 154,
      PathAsset: HalfPipePath,
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
