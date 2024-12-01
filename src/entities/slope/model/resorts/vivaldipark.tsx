'use client';

import VivaldiparkMap from '@public/maps/vivaldipark.png';
import BalladSlopPath from '../image/vivaldipark/ballad-slop-path';
import BluesSlopPath from '../image/vivaldipark/blues-slop-path';
import ClassicSlopPath from '../image/vivaldipark/classic-slop-path';
import FunkySlopPath from '../image/vivaldipark/funky-slop-path';
import HiphopSlopPath from '../image/vivaldipark/hiphop-slop-path';
import JazzSlopPath from '../image/vivaldipark/jazz-slop-path';
import ReggaeSlopPath from '../image/vivaldipark/reggae-slop-path';
import RockSlopPath from '../image/vivaldipark/rock-slop-path';
import TechnoSlopPath from '../image/vivaldipark/techno-slop-path';
import type { ResortConstant } from '../model';

export const VIVALDIPARK: ResortConstant = {
  MapComponent: VivaldiparkMap,
  slopes: [
    {
      id: 19,
      PathAsset: BalladSlopPath,
    },
    {
      id: 27,
      PathAsset: BluesSlopPath,
    },
    {
      id: 25,
      PathAsset: HiphopSlopPath,
    },
    {
      id: 20,
      PathAsset: ReggaeSlopPath,
    },
    {
      id: 21,
      PathAsset: ClassicSlopPath,
    },
    {
      id: 28,
      PathAsset: JazzSlopPath,
    },
    {
      id: 22,
      PathAsset: FunkySlopPath,
    },
    {
      id: 23,
      PathAsset: TechnoSlopPath,
    },
    {
      id: 24,
      PathAsset: RockSlopPath,
    },
  ],
  webcams: [
    {
      id: 1,
      key: '재즈',
      position: [62, 21],
      scale: 1,
    },
    {
      id: 2,
      key: '발라드',
      position: [56, 41],
      scale: 1,
    },
    {
      id: 4,
      key: '블루스',
      position: [62, 77],
      scale: 1,
    },
    {
      id: 5,
      key: '테크노',
      position: [64, 51],
      scale: 1,
    },
    {
      id: 6,
      key: '힙합',
      position: [34, 55],
      scale: 1,
    },
    {
      id: 8,
      key: '슬로프 전경',
      position: [76, 45],
      scale: 1,
    },
    {
      id: 9,
      key: '스키장 정상',
      position: [14, 37],
      scale: 1,
    },
  ],
};
