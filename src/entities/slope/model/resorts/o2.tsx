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
      id: 'dream-slope1',
      PathAsset: DreamSlope1Path,
      webcam: 3,
    },
    {
      id: 'dream-slope2',
      PathAsset: DreamSlope2Path,
    },
    {
      id: 'head-slope',
      PathAsset: HeadSlopePath,
    },
    {
      id: 'happy-slope',
      PathAsset: HappySlopePath,
      webcam: 1,
    },
    {
      id: 'glory-slope1',
      PathAsset: GlorySlope1Path,
    },
    {
      id: 'glory-slope2',
      PathAsset: GlorySlope2Path,
    },
    {
      id: 'glory-slope3',
      PathAsset: GlorySlope3Path,
      webcam: 1,
    },
    {
      id: 'fashion-slope1',
      PathAsset: FashionSlope1Path,
      webcam: 1,
    },
    {
      id: 'fashion-slope2',
      PathAsset: FashionSlope2Path,
    },
    {
      id: 'challenge-slope1',
      PathAsset: ChallengeSlope1Path,
      webcam: 2,
    },
    {
      id: 'challenge-slope2',
      PathAsset: ChallengeSlope2Path,
      webcam: 2,
    },
    {
      id: 'challenge-slope3',
      PathAsset: ChallengeSlope3Path,
      webcam: 2,
    },
    {
      id: 'half-pipe',
      PathAsset: HalfPipePath,
      webcam: 4,
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
