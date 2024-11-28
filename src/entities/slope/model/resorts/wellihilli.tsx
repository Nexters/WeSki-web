'use client';

import WellihilliMap from '@public/maps/wellihilli.png';
import AlphaSlope1Path from '../image/wellihilli/alpha-slope1-path';
import AlphaSlope2Path from '../image/wellihilli/alpha-slope2-path';
import AlphaSlope3Path from '../image/wellihilli/alpha-slope3-path';
import BravoSlope1Path from '../image/wellihilli/bravo-slope1-path';
import BravoSlope2Path from '../image/wellihilli/bravo-slope2-path';
import ChallengeSlope1Path from '../image/wellihilli/challenge-slope1-path';
import ChallengeSlope2Path from '../image/wellihilli/challenge-slope2-path';
import ChallengeSlope3Path from '../image/wellihilli/challenge-slope3-path';
import ChallengeSlope4Path from '../image/wellihilli/challenge-slope4-path';
import ChallengeSlope5Path from '../image/wellihilli/challenge-slope5-path';
import DeltaSlopePlusPath from '../image/wellihilli/delta-slope-plus-path';
import DeltaSlope1Path from '../image/wellihilli/delta-slope1-path';
// import DeltaSlope2Path from '../image/wellihilli/delta-slope2-path';
// import EchoSlopePlusPath from '../image/wellihilli/echo-slope-plus-path';
import EchoSlope1Path from '../image/wellihilli/echo-slope1-path';
import EchoSlope2Path from '../image/wellihilli/echo-slope2-path';
import EchoSlope3Path from '../image/wellihilli/echo-slope3-path';
import HalfPipePath from '../image/wellihilli/half-pipe-path';
import StarExpress1Path from '../image/wellihilli/star-express1-path';
import StarExpress2Path from '../image/wellihilli/star-express2-path';
import type { ResortConstant } from '../model';

export const WELLIHILLI: ResortConstant = {
  MapComponent: WellihilliMap,
  slopes: [
    {
      id: 94,
      PathAsset: AlphaSlope1Path,
    },
    {
      id: 95,
      PathAsset: AlphaSlope2Path,
    },
    {
      id: 96,
      PathAsset: AlphaSlope3Path,
    },
    {
      id: 97,
      PathAsset: BravoSlope1Path,
    },
    {
      id: 98,
      PathAsset: BravoSlope2Path,
    },
    {
      id: 99,
      PathAsset: DeltaSlope1Path,
    },
    // {
    //   id: 'delta-slope2',
    //   PathAsset: DeltaSlope2Path,
    // },
    {
      id: 100,
      PathAsset: DeltaSlopePlusPath,
    },
    {
      id: 101,
      PathAsset: EchoSlope1Path,
    },
    {
      id: 102,
      PathAsset: EchoSlope2Path,
    },
    {
      id: 103,
      PathAsset: EchoSlope3Path,
    },
    // {
    //   id: 'echo-slope-plus',
    //   PathAsset: EchoSlopePlusPath,
    // },
    {
      id: 104,
      PathAsset: ChallengeSlope1Path,
    },
    {
      id: 105,
      PathAsset: ChallengeSlope2Path,
    },
    {
      id: 106,
      PathAsset: ChallengeSlope3Path,
    },
    {
      id: 107,
      PathAsset: ChallengeSlope4Path,
    },
    {
      id: 108,
      PathAsset: ChallengeSlope5Path,
    },
    {
      id: 109,
      PathAsset: StarExpress1Path,
    },
    {
      id: 110,
      PathAsset: StarExpress2Path,
    },
    {
      id: 111,
      PathAsset: HalfPipePath,
    },
  ],
  webcams: [
    {
      id: 1,
      position: {
        top: 'top-[4%]',
        left: 'left-[56%]',
      },
      scale: 1,
    },
    {
      id: 2,
      position: {
        top: 'top-[81%]',
        left: 'left-[31%]',
      },
      scale: 1,
    },
    {
      id: 3,
      position: {
        top: 'top-[85%]',
        left: 'left-[39%]',
      },
      scale: 1,
    },
    {
      id: 4,
      position: {
        top: 'top-[73%]',
        left: 'left-[19%]',
      },
      scale: 1,
    },
    {
      id: 5,
      position: {
        top: 'top-[62%]',
        left: 'left-[8%]',
      },
      scale: 1,
    },
  ],
};

export default WELLIHILLI;
