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
      pathAsset: AlphaSlope1Path,
      webcam: 5,
    },
    {
      id: 'alpha-slope2',
      pathAsset: AlphaSlope2Path,
      webcam: 4,
    },
    {
      id: 'alpha-slope3',
      pathAsset: AlphaSlope3Path,
      webcam: 4,
    },
    {
      id: 'bravo-slope1',
      pathAsset: BravoSlope1Path,
    },
    {
      id: 'bravo-slope2',
      pathAsset: BravoSlope2Path,
    },
    {
      id: 'delta-slope1',
      pathAsset: DeltaSlope1Path,
      webcam: 3,
    },
    {
      id: 'delta-slope2',
      pathAsset: DeltaSlope2Path,
      webcam: 1,
    },
    {
      id: 'delta-slope-plus',
      pathAsset: DeltaSlopePlusPath,
    },
    {
      id: 'echo-slope1',
      pathAsset: EchoSlope1Path,
    },
    {
      id: 'echo-slope2',
      pathAsset: EchoSlope2Path,
    },
    {
      id: 'echo-slope3',
      pathAsset: EchoSlope3Path,
    },
    {
      id: 'echo-slope-plus',
      pathAsset: EchoSlopePlusPath,
    },
    {
      id: 'challenge-slope1',
      pathAsset: ChallengeSlope1Path,
    },
    {
      id: 'challenge-slope2',
      pathAsset: ChallengeSlope2Path,
    },
    {
      id: 'challenge-slope3',
      pathAsset: ChallengeSlope3Path,
    },
    {
      id: 'challenge-slope4',
      pathAsset: ChallengeSlope4Path,
    },
    {
      id: 'challenge-slope5',
      pathAsset: ChallengeSlope5Path,
    },
    {
      id: 'star-express1',
      pathAsset: StarExpress1Path,
    },
    {
      id: 'star-express2',
      pathAsset: StarExpress2Path,
      webcam: 1,
    },
    {
      id: 'half-pipe',
      pathAsset: HalfPipePath,
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
