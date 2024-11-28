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
      id: 132,
      PathAsset: DreamSlope1Path,
    },
    {
      id: 133,
      PathAsset: DreamSlope2Path,
    },
    {
      id: 134,
      PathAsset: HeadSlopePath,
    },
    {
      id: 135,
      PathAsset: HappySlopePath,
    },
    {
      id: 136,
      PathAsset: GlorySlope1Path,
    },
    {
      id: 137,
      PathAsset: GlorySlope2Path,
    },
    {
      id: 138,
      PathAsset: GlorySlope3Path,
    },
    {
      id: 139,
      PathAsset: FashionSlope1Path,
    },
    {
      id: 140,
      PathAsset: FashionSlope2Path,
    },
    {
      id: 141,
      PathAsset: ChallengeSlope1Path,
    },
    {
      id: 142,
      PathAsset: ChallengeSlope2Path,
    },
    {
      id: 143,
      PathAsset: ChallengeSlope3Path,
    },
    {
      id: 144,
      PathAsset: HalfPipePath,
    },
  ],
  webcams: [
    {
      id: 1,
      position: {
        top: 'top-[5%]',
        left: 'left-[75%]',
      },
      scale: 1,
    },
    {
      id: 2,
      position: {
        top: 'top-[23%]',
        left: 'left-[46%]',
      },
      scale: 1,
    },
    {
      id: 3,
      position: {
        top: 'top-[80%]',
        left: 'left-[48%]',
      },
      scale: 1,
    },
    {
      id: 4,
      position: {
        top: 'top-[76%]',
        left: 'left-[14%]',
      },
      scale: 1,
    },
  ],
};
