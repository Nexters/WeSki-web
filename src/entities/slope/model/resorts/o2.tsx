'use client';

import ChallengeSlope1Path from '../image/o2/challenge-slope1-path';
import ChallengeSlope2Path from '../image/o2/challenge-slope2-path';
import ChallengeSlope3Path from '../image/o2/challenge-slope3-path';
import DreamSlope1Path from '../image/o2/dream-slope1-path';
import DreamSlope2Path from '../image/o2/dream-slope2-path';
import FashionSlope1Path from '../image/o2/fashion-slope1-path';
import FashionSlope2Path from '../image/o2/fashion-slope2-path';
import GlorySlope1Path from '../image/o2/glory-slope1-path';
import GlorySlope2Path from '../image/o2/glory-slope2-path';
import GlorySlope3Path from '../image/o2/glory-slope3-path';
import HalfPipePath from '../image/o2/half-pipe-path';
import HappySlopePath from '../image/o2/happy-slope-path';
import HeadSlopePath from '../image/o2/head-slope-path';
import MapImage from '../image/o2/map';
import type { ResortConstant } from '../model';

export const O2: ResortConstant = {
  MapComponent: MapImage,
  slopes: [
    {
      id: 142,
      PathAsset: DreamSlope1Path,
    },
    {
      id: 143,
      PathAsset: DreamSlope2Path,
    },
    {
      id: 144,
      PathAsset: HeadSlopePath,
    },
    {
      id: 145,
      PathAsset: HappySlopePath,
    },
    {
      id: 146,
      PathAsset: GlorySlope1Path,
    },
    {
      id: 147,
      PathAsset: GlorySlope2Path,
    },
    {
      id: 148,
      PathAsset: GlorySlope3Path,
    },
    {
      id: 149,
      PathAsset: FashionSlope1Path,
    },
    {
      id: 150,
      PathAsset: FashionSlope2Path,
    },
    {
      id: 151,
      PathAsset: ChallengeSlope1Path,
    },
    {
      id: 152,
      PathAsset: ChallengeSlope2Path,
    },
    {
      id: 153,
      PathAsset: ChallengeSlope3Path,
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
    {
      id: 3,
      key: '드림1',
      position: [80, 48],
      scale: 1,
    },
    {
      id: 4,
      key: '오투 스키하우스',
      position: [76, 14],
      scale: 1,
    },
  ],
};
