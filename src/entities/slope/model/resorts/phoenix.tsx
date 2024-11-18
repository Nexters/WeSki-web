'use client';

import MapImage from '@public/maps/phoenix.png';
import ChampionSlopePath from '../image/phoenix/champion-slope-path';
import DiggySlopePath from '../image/phoenix/diggy-slope-path';
import DukeSlopePath from '../image/phoenix/duke-slope-path';
import ExtremeParkPath from '../image/phoenix/extreme-park-path';
import FantasySlopePath from '../image/phoenix/fantasy-slope-path';
import HawkSlope1Path from '../image/phoenix/hawk-slope1-path';
import HawkSlope2Path from '../image/phoenix/hawk-slope2-path';
import KiwiSlopePath from '../image/phoenix/kiwi-slope-path';
import MogulSlopePath from '../image/phoenix/mogul-slope-path';
import PanoramaPath from '../image/phoenix/panorama-path';
import ParadisePath from '../image/phoenix/paradise-path';
import PenguinSlopePath from '../image/phoenix/penguin-slope-path';
import SlopeStylePath from '../image/phoenix/slope-style-path';
import SparrowPath from '../image/phoenix/sparrow-path';
import ValleySlopePath from '../image/phoenix/valley-slope-path';
import type { ResortConstant } from '../model';

export const PHOENIX: ResortConstant = {
  MapComponent: MapImage,
  slopes: [
    {
      id: 'sparrow',
      PathAsset: SparrowPath,
      webcam: 6,
    },
    {
      id: 'penguin-slope',
      PathAsset: PenguinSlopePath,
      webcam: 3,
    },
    {
      id: 'hawk-slope1',
      PathAsset: HawkSlope1Path,
    },
    {
      id: 'kiwi-slope',
      PathAsset: KiwiSlopePath,
      webcam: 1,
    },
    {
      id: 'panorama',
      PathAsset: PanoramaPath,
      webcam: 4,
    },
    {
      id: 'valley-slope',
      PathAsset: ValleySlopePath,
      webcam: 5,
    },
    {
      id: 'hawk-slope2',
      PathAsset: HawkSlope2Path,
    },
    {
      id: 'duke-slope',
      PathAsset: DukeSlopePath,
      webcam: 2,
    },
    {
      id: 'slope-style',
      PathAsset: SlopeStylePath,
      webcam: 3,
    },
    {
      id: 'champion-slope',
      PathAsset: ChampionSlopePath,
      webcam: 7,
    },
    {
      id: 'fantasy-slope',
      PathAsset: FantasySlopePath,
    },
    {
      id: 'diggy-slope',
      PathAsset: DiggySlopePath,
      webcam: 5,
    },
    {
      id: 'mogul-slope',
      PathAsset: MogulSlopePath,
    },
    {
      id: 'paradise',
      PathAsset: ParadisePath,
    },
    {
      id: 'extreme-park',
      PathAsset: ExtremeParkPath,
    },
  ],
  webcams: [
    {
      id: 1,
      position: {
        top: 'top-[83%]',
        left: 'left-[79%]',
      },
      scale: 1,
    },
    {
      id: 2,
      position: {
        top: 'top-[31%]',
        left: 'left-[9%]',
      },
      scale: 1,
    },
    {
      id: 3,
      position: {
        top: 'top-[79%]',
        left: 'left-[43%]',
      },
      scale: 1,
    },
    {
      id: 4,
      position: {
        top: 'top-[15%]',
        left: 'left-[88%]',
      },
      scale: 1,
    },
    {
      id: 5,
      position: {
        top: 'top-[7%]',
        left: 'left-[53%]',
      },
      scale: 1,
    },
    {
      id: 6,
      position: {
        top: 'top-[45%]',
        left: 'left-[87%]',
      },
      scale: 1,
    },
    {
      id: 7,
      position: {
        top: 'top-[26%]',
        left: 'left-[66%]',
      },
      scale: 1,
    },
  ],
};
