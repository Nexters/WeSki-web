'use client';

import VivaldiparkMap from '@public/maps/vivaldipark.png';
import BalladPath from '../image/vivaldipark/ballad-path';
import BluesPath from '../image/vivaldipark/blues-path';
import ClassicPath from '../image/vivaldipark/classic-path';
import FunkyPath from '../image/vivaldipark/funky-path';
import HiphopPath from '../image/vivaldipark/hiphop-path';
import JazzPath from '../image/vivaldipark/jazz-path';
import ReggaePath from '../image/vivaldipark/reggae-path';
import TechnoPath from '../image/vivaldipark/techno-path';
import type { ResortConstant } from '../model';

export const VIVALDIPARK: ResortConstant = {
  MapComponent: VivaldiparkMap,
  slopes: [
    {
      id: 19,
      PathAsset: BalladPath,
    },
    {
      id: 20,
      PathAsset: ReggaePath,
    },
    {
      id: 21,
      PathAsset: ClassicPath,
    },
    {
      id: 22,
      PathAsset: FunkyPath,
    },
    {
      id: 23,
      PathAsset: TechnoPath,
    },
    // {
    //   id: 24,
    //   PathAsset: TechnoPath,
    // },
    {
      id: 25,
      PathAsset: HiphopPath,
    },
    // {
    //   id: 26,
    //   PathAsset: HiphopPath,
    // },
    {
      id: 27,
      PathAsset: BluesPath,
    },
    {
      id: 28,
      PathAsset: JazzPath,
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
