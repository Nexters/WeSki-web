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
import DeltaSlope2Path from '../image/wellihilli/delta-slope2-path';
import EchoSlopePlusPath from '../image/wellihilli/echo-slope-plus-path';
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
      id: 'alpha-slope1',
      PathAsset: AlphaSlope1Path,
      webcam: 5,
    },
    {
      id: 'alpha-slope2',
      PathAsset: AlphaSlope2Path,
      webcam: 4,
    },
    {
      id: 'alpha-slope3',
      PathAsset: AlphaSlope3Path,
      webcam: 4,
    },
    {
      id: 'bravo-slope1',
      PathAsset: BravoSlope1Path,
    },
    {
      id: 'bravo-slope2',
      PathAsset: BravoSlope2Path,
    },
    {
      id: 'delta-slope1',
      PathAsset: DeltaSlope1Path,
      webcam: 3,
    },
    {
      id: 'delta-slope2',
      PathAsset: DeltaSlope2Path,
      webcam: 1,
    },
    {
      id: 'delta-slope-plus',
      PathAsset: DeltaSlopePlusPath,
    },
    {
      id: 'echo-slope1',
      PathAsset: EchoSlope1Path,
    },
    {
      id: 'echo-slope2',
      PathAsset: EchoSlope2Path,
    },
    {
      id: 'echo-slope3',
      PathAsset: EchoSlope3Path,
    },
    {
      id: 'echo-slope-plus',
      PathAsset: EchoSlopePlusPath,
    },
    {
      id: 'challenge-slope1',
      PathAsset: ChallengeSlope1Path,
    },
    {
      id: 'challenge-slope2',
      PathAsset: ChallengeSlope2Path,
    },
    {
      id: 'challenge-slope3',
      PathAsset: ChallengeSlope3Path,
    },
    {
      id: 'challenge-slope4',
      PathAsset: ChallengeSlope4Path,
    },
    {
      id: 'challenge-slope5',
      PathAsset: ChallengeSlope5Path,
    },
    {
      id: 'star-express1',
      PathAsset: StarExpress1Path,
    },
    {
      id: 'star-express2',
      PathAsset: StarExpress2Path,
      webcam: 1,
    },
    {
      id: 'half-pipe',
      PathAsset: HalfPipePath,
      webcam: 2,
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
